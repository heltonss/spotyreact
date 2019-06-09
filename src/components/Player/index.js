import React from 'react';
import Slider from 'rc-slider';
import VolumeIcon from 'assets/images/volume.svg';
import ShuffleIcon from 'assets/images/shuffle.svg';
import BackwardIcon from 'assets/images/backward.svg';
import PlayIcon from 'assets/images/play.svg';
import PauseIcon from 'assets/images/pause.svg';
import ForwardIcon from 'assets/images/forward.svg';
import RepeatIcon from 'assets/images/repeat.svg';
import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './style';

const Player = () => (
  <Container>
    <Current>
      <img src="https://via.placeholder.com/100" alt="cover" />
      <div>
        <span>title</span>
        <small>foo fighters</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="play" />
        </button>
        <button>
          <img src={ForwardIcon} alt="foward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="repeat" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
          railStyle={{ background: '#404040', borderRadius: 10}}
          trackStyle={{background: '#1ed768'}}
          handleStyle={{border: 0}}


          />
        </ProgressSlider>
        <span>2:39</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);
export default Player;
