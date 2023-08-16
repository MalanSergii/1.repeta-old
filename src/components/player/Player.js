import { Component } from 'react';

import Playlist from './playlist/Playlist';

import videoList from 'data/videoList.json';
import ReactPlayer from 'react-player';
class Player extends Component {
  state = {
    url: '',
    list: videoList,
    isLoaded: false,
  };

  onButtonCkick = data => {
    this.setState({
      url: data,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      this.setState({
        isLoaded: false,
      });
    }
  }

  render() {
    const playerSize = this.state.isLoaded ? '100%' : 0;
    return (
      <div>
        <Playlist onButtonCkick={this.onButtonCkick} list={videoList}></Playlist>

        {this.state.url && !this.state.isLoaded && <p style={{ position: 'fixed' }}>Loading...</p>}
        <div style={{ width: 700, height: 450 }}>
          <ReactPlayer
            onReady={() => {
              this.setState({
                isLoaded: true,
              });
            }}
            url={this.state.url}
            controls
            width={playerSize}
            height={playerSize}
          ></ReactPlayer>
        </div>
      </div>
    );
  }
}

export default Player;
