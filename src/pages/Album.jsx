import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  state = {
    currentAlbum: {},
    musicList: [],
  }

  async componentDidMount() {
    const { id, artistName } = this.props;
    const musicList = await getMusics(id);
    musicList.shift();
    const searchAPIresult = await searchAlbumsAPI(artistName);
    const currentAlbum = searchAPIresult.find((album) => album.collectionId === +id);
    this.setState({ currentAlbum, musicList });
  }

  form = () => {
    const { currentAlbum, musicList } = this.state;
    return (
      <div>
        <img src={ currentAlbum.artworkUrl100 } alt={ currentAlbum.collectionId } />
        <h1 data-testid="album-name">{ currentAlbum.collectionName }</h1>
        <h3 data-testid="artist-name">{ currentAlbum.artistName }</h3>
        <MusicCard musicList={ musicList } />
      </div>
    );
  }

  render() {
    return (
      <div data-testid="page-album">
        <Header />
        { this.form() }
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};
export default Album;
