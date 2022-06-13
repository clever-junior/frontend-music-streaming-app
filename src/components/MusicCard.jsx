import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicList extends Component {
  render() {
    const { musicList } = this.props;
    return (
      <div>
        {
          musicList.map((music, index) => (
            <div key={ music.trackNumber }>
              <p>{`Música ${index + 1}`}</p>
              <p>{music.trackName}</p>
              <audio
                data-testid="audio-component"
                src={ music.previewUrl }
                controls
              >
                <track kind="captions" />
                O seu navegador não suporta o elemento
                <code>audio</code>
              </audio>
            </div>
          ))
        }
      </div>

    );
  }
}

MusicList.propTypes = {
  musicList: PropTypes.shape(
    PropTypes.array.isRequired,
  ).isRequired,
};

export default MusicList;
