import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicList extends Component {
  render() {
    const { musicList } = this.props;
    return (
      <div>
        {
          musicList.map((music) => (
            <div key={ music.trackNumber }>
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

MusicList.propTypes = { musicList: PropTypes.arrayOf(
  PropTypes.string,
  PropTypes.number,
).isRequired };

export default MusicList;
