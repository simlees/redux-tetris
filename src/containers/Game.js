import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import GameController from './GameController';
import Grid from '../components/Grid';

const mapStateToProps = state => ({
  grid: state.grid
});

class Game extends Component {

  
  render() {
    const { grid } = this.props;
    return (
      <GameController>
        <Grid grid={grid}/>
      </GameController>
    );
  }
}

export default connect(mapStateToProps, null)(Game);
