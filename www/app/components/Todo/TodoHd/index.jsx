import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../../actions/todoActions';

import './index.scss';

class TodoHd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState(() => ({value}))
  }

  render() {
    return (
      <div className="todo-hd">
        <input
          type="text"
          placeholder="输入待办项..."
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={() => {
          if (!this.state.value.trim()) return;
          this.props.todoActions.add(this.state.value);
          this.setState(() => ({value: ''}));
        }}>添加</button>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => {
    return {
      todoActions: bindActionCreators(todoActions, dispatch)
    }
  }
)(TodoHd);