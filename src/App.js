import React, { Component } from 'react';
import TitleScreen from './ReactComponents/TitleScreen';

import './App.css';
const width = 400;
const height = window.innerHeight/2;
const ratio = window.devicePixelRatio || 1;

this.state = {
screen: {
    width: width,
    height: height,
    ratio: ratio
}};

class App extends Component {
  constructor() {
  super();

  this.state = {
  screen: {
      width: width,
      height: height,
      ratio: ratio
  }};
};


  render() {
    return (
      <div>
        <TitleScreen />
        <canvas ref="canvas"
          width={ this.state.screen.width * this.state.screen.ratio }
          height={ this.state.screen.height * this.state.screen.ratio } />
      </div>
    );
  }
}

export default App;
