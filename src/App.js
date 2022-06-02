import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import { createUser } from './services/userAPI';

class App extends React.Component {
    state = {
      userName: '',
      isButtonDisabled: true,
      loading: false,
      redirect: false,
    };

  onLoginButtonClick = async () => {
    this.setState({ loading: true });
    const { userName } = this.state;
    await createUser({ name: userName });
    this.setState({ redirect: true });
  }

  onInputChange = ({ target: { name, value, id } }) => {
    const { length } = value;
    const textLimit = +id;
    this.setState({ [name]: value });
    this.verifyTextLength(length, textLimit);
  }

  verifyTextLength = (length, textLimit) => (length >= textLimit
    ? this.setState({ isButtonDisabled: false })
    : this.setState({ isButtonDisabled: true }));

  render() {
    const { userName, isButtonDisabled, redirect, loading } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Login
                onInputChange={ this.onInputChange }
                onLoginButtonClick={ this.onLoginButtonClick }
                userName={ userName }
                isButtonDisabled={ isButtonDisabled }
                loading={ loading }
                redirect={ redirect }
              />) }
          />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
