import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Game from './Game';

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <Game />
        </div>
      </Provider>
    );
  }
}

