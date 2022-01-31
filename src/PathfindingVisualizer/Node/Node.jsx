import React, {Component} from 'react';
import './Node.css';

// Exported class that represents the nodes and all of the properties that specific node has. Adds class name in the case that node needs it.
export default class Node extends Component {
    render() {
        const {
            col,
            isFinish,
            isStart,
            isWall,
            onMouseDown,
            onMouseEnter,
            onMouseUp,
            row,
        } = this.props;
        const extraClassName = isFinish ? 'node-finish' : isStart ? 'node-start': isWall ? 'node-wall' : '';
        return (
            <div
            id={`node-${row}-${col}`}
            className={`node ${extraClassName}`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp()}></div>);
    }
}

export const DEFAULT_NODE = {
    row: 0,
    col: 0,
};