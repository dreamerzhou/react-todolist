import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../../actions/todoActions';

import './index.scss';

class TodoFt extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todo = this.props.todo;
    const done = todo.filter(item => item.done);
    const undone = todo.filter(item => !item.done);

    return (
      <div className="todo-ft">
        <button
          style={{background: this.props.display === 'ALL' ? 'khaki' : ''}}
          onClick={() => this.props.todoActions.handleBtn('ALL')}>
          全部({todo.length})
        </button>
        <button
          style={{background: this.props.display === 'DONE' ? 'khaki' : ''}}
          onClick={() => this.props.todoActions.handleBtn('DONE')}>
          已完成({done.length})
        </button>
        <button
          style={{background: this.props.display === 'UNDONE' ? 'khaki' : ''}}
          onClick={() => this.props.todoActions.handleBtn('UNDONE')}>
          未完成({undone.length})
        </button>
      </div>
    )
  }
}

export default connect(
  (state) => ({todo: state.todo, display: state.display}),
  (dispatch) => {
    return {
      todoActions: bindActionCreators(todoActions, dispatch)
    }
  }
)(TodoFt);