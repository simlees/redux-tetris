import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import GameController from './GameController';
import Grid from '../components/Grid';
import {
  initialiseGame,
  tick
} from '../actions/appActions';
import { getGridWithActiveTetromino } from '../selectors/grid';

const mapStateToProps = state => ({
  grid: getGridWithActiveTetromino(state)
});

const mapDispatchToProps = {
  initialiseGame,
  tick
};

class Game extends Component {

  onInitialiseGame() {
    const { initialiseGame, tick } = this.props;
    const ticker = setInterval(tick, 1000);
    this.props.initialiseGame();

  }

  componentDidMount() {
    this.onInitialiseGame();
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
