import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends Component {
  render() {
    const { searchAPIresult } = this.props;
    return (
      <div>
        { searchAPIresult.map((album) => (
          <div key={ album.collectionId }>
            <img src={ album.artworkUrl100 } alt={ album.collectionId } />
            <h2>{album.collectionName}</h2>
            <Link
              to={ `/album/${album.collectionId}` }
              data-testid={ `link-to-album-${album.collectionId}` }
            >
              {album.artistName}
            </Link>
          </div>
        )) }
      </div>
    );
  }
}

AlbumCard.propTypes = {
  searchAPIresult: PropTypes.shape([{
    artistId: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionPrice: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
  }]).isRequired,
};

export default AlbumCard;
