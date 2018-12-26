import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../../actions/todoActions';

import './index.scss';

class TodoBd extends React.Component {
  constructor(props) {
    super(props);
  }

  edit(id) {
    const arr = this.props.todo.filter(item => item.id === id);
    this.props.edit()
  }

  handleRead() {
    const display = this.props.display;
    console.log(display)
    return this.props.todo.filter(item => {
      switch(display) {
        case 'DONE':
          return item.done;
        case 'UNDONE':
          return !item.done;
        case 'ALL':
          return item;
        default:
          return;
      }
    })
  }

  render() {
    return (
      <div className="todo-bd">
        <ul>
          {
            this.handleRead().map(item => {
              return (
                <li key={item.id}>
                  <span>
                   {
                      item.status
                      ? <label>
                          <input
                            type="checkbox" 
                            checked={item.done}
                            onChange={(e) => this.props.todoActions.handleChecked(item.id)}
                          />
                          {item.title}
                        </label>
                      : <input
                          type='text'
                          value={item.title}
                          onChange={(e) => this.props.todoActions.handleChange(item.id, e.target.value)}
                          onKeyUp={(e) => this.props.todoActions.handleKeyup(item.id, e.keyCode)}
                        />
                   }
                  </span>
                  <span>
                    <button onClick={() => this.props.todoActions.edit(item.id)}>编辑</button>
                    <button onClick={() => this.props.todoActions.del(item.id)}>删除</button>
                  </span>
                </li>
              )
            })
          } 
        </ul>
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
)(TodoBd);