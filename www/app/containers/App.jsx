import React from 'react';

import Todo from '../components/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Todo />
      </div>
    )
  }
}

export default App;