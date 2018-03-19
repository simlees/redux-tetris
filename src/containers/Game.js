import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import GameController from './GameController';
import Grid from '../components/Grid';
import {
  initialiseGame
} from '../actions/appActions';

const mapStateToProps = state => ({
  grid: state.grid
});

const mapDispatchToProps = {
  initialiseGame
};

class Game extends Component {

  componentDidMount() {
    this.props.initialiseGame();
  }
  
  render() {
    const { grid } = this.props;
    return (
      <GameController>
        <Grid grid={grid}/>
      </GameController>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
