import React from 'react';

import AddTask from './button';
// import TaskList from './tasklist.js';

class Main extends React.Component {
  render() {
    return (
      <div id="MainDiv">
        <AddTask />
        <div id='ContainerDiv'>
            <div id='TaskDiv'>
                <div id='TaskDivLeft'>
                <p id='PTag'>Learn React</p>
                <time dateTime='12-16-2021'>12-16-2021</time>
                </div>
                <div id='TaskCheckBoxDiv'>
                <input id='TaskInput' type='checkbox'></input>
                </div>
            </div>
        </div>
        {/* <TaskList /> */}
      </div>
    )
  }
}

export default Main;