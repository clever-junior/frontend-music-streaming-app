import React, { Component } from 'react';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
      </div>
    );
  }
}

// Favorites.propTypes = {};

export default Favorites;
