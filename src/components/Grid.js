import React, { Component } from 'react';
import gameConfig from '../config/game';

export default class Grid extends Component {

  visibleGridHeight = gameConfig.gridHeight - 2;

  renderRow(index) {
    const squares = this.props.grid.get(index).map((square, sqIndex) => (
      <td key={sqIndex.toString()}>
        {square.get('value') && (
          <div className={square.get('value')}/>
        )}
      </td>
    ));
    return <tr key={index.toString()}>{squares}</tr>;
  }

  render() {
    const rows = [];
    for (let i = this.visibleGridHeight - 1; i >= 0; i--) {
      rows.push(this.renderRow(i));
    }
    return (
      <div className="grid">
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
