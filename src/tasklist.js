import React, {useState, useEffect} from 'react';

class TaskList extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         checked: false   
//     }
// }

// TODO:  refactor function Task() to pass props to checkbox to help fix the issue
// add in a delete button that shows up when a task is completed and send a delete request, and call delete 
// Get it to re-render react elements by changing state.

  render() {
    return (
        <>
        <Task />
        </>
    )
  }
}

const API = 'http://localhost:8080'
// Replace with public ip of load balancer if it spins up. 


function Task() {
  const [tasks, setTasks] = useState([]);

  const _getTasks = () => {
    fetch( API + "/tasks", {
      mode:'cors',
    })
    .then( data => data.json() )
    .then( tasks => setTasks(tasks) )
    .catch( console.error );

  };

  function _onChange(event) {
    if (event.target.checked === false) {
      update(event);
    } else {
      update(event)
    }
  }

  useEffect(_getTasks, []);

  return (  
    <div id='ContainerDiv'> 
        {tasks.map( (task) =>       
        <div id='TaskDiv' key={task.id}>
                <div id='TaskDivLeft'>
                <p id='PTag'>{task.taskInfo}</p>
                <time dateTime='{task.date}'>{task.date}</time>
                </div>
                <div id='TaskCheckBoxDiv'>
                <input id='TaskInput' type='checkbox' value={task.id} onChange={_onChange}></input>
                </div>
        </div>
      )}
    </div>
  )

  function update(event) {
    let idTag = event.target.value;
    let details = {
      'completed': event.target.checked
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(API + "/tasks/" + idTag, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    }).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(function (response) {
      console.log("ok");
    }).catch(function (error) {
      console.log(error);
    });
  }
}

export default TaskList;