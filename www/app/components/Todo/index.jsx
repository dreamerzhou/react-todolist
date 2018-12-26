import React from 'react';

import TodoHd from './TodoHd';
import TodoBd from './TodoBd';
import TodoFt from './TodoFt';

import './index.scss';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo">
        <TodoHd />
        <TodoBd />
        <TodoFt />
      </div>
    )
  }
}

export default Todo;