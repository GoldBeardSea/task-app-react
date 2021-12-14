import React, { Component } from 'react';

class AddTask extends Component{

    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <div id='AddTaskDiv'>
                <button id="TaskButton" onClick={() => this.setState({ showing: !showing })}>New Task</button>
                { showing 
                    ? <div id='TaskInput'>
                        <label>Task</label>
                        <input type="text"></input>

                        <label>Date</label>
                        <input type="date" ></input>
                        <button>Submit</button>
                    </div>
                    : null
                }
            </div>  
        )
    }
}

export default AddTask;
