import React, { Component } from 'react';

const API = 'http://localhost:8080'
// Replace with public ip of load balancer if it spins up. 

class AddTask extends Component{
    state = {
        taskInfo: "",
        date: ""
      };
    
    handleSubmit = (event) => {
        event.preventDefault()
        var details = {
            'taskInfo': event.target.taskInfo.value,
            'date': event.target.date.value,
        }; 
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch( API + "/tasks/newtask", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
          }).then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then(function(response) {
            console.log("ok");
        }).catch(function(error) {
            console.log(error);
        });
    }

    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <div id='AddTaskDiv'>
                <button id="TaskButton" onClick={() => this.setState({ showing: !showing })}>New Task</button>
                { showing 
                    ?<div id='TaskInput'> 
                    <form onSubmit={this.handleSubmit}>
                        
                            <label >Task</label>
                            <input type="text" name="taskInfo"></input>

                            <label>Date</label>
                            <input type="date" name="date"></input>
                            <button>Submit</button>
                        
                    </form>
                    </div>
                    : null
                }
            </div>  
        )
    }
}

export default AddTask;
