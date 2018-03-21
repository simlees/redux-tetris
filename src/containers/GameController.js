import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as IngameActions from '../actions/IngameActions';
import { getKeyByValue } from '../selectors/immutable';

const mapStateToProps = state => ({
  keyMapping: state.keyMapping
});

const mapDispatchToProps = {
  ...IngameActions
};

class GameController extends Component {

  state = {
    pressedKeys: {}
  };

  componentDidMount() {
    this.gameControllerDomNode.focus();
  }

  onKeyDown = e => {
    const { keyMapping } = this.props;
    if (!this.props.keyMapping.includes(e.keyCode)) {
      return;
    }
    const keyCanBeHeldDown = ['moveLeft', 'moveRight', 'softDrop'].some(action => {
      return keyMapping.get(action) === e.keyCode;
    });
    const key = e.keyCode.toString();
    if (!this.state.pressedKeys[key] || keyCanBeHeldDown) {
      const action = getKeyByValue(this.props.keyMapping, e.keyCode);
      this.props[action]();
    }
    this.state.pressedKeys[key] = true;
    e.preventDefault();
  };
  
  onKeyUp = e => {
    const key = e.keyCode.toString();
    delete this.state.pressedKeys[key];
  };

  render() {
    const { grid, children } = this.props;
    return (
      <div
        id="game-controller"
        ref={(input) => { this.gameControllerDomNode = input; }}
        tabIndex="0"
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
      >
        {children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameController);
