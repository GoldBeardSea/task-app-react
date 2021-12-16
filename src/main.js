import React from 'react';

import AddTask from './button';
import TaskList from './tasklist.js';

class Main extends React.Component {
  render() {
    return (
      <div id="MainDiv">
        <AddTask />
        <TaskList />
      </div>
    )
  }
}

export default Main;