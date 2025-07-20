import "../CSS-elements/Main-components.css"
import { useState } from "react";

export default function NewTaskContainer () {
    const [tasks,setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleNewTask = () =>{
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('')
        }
    };

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        } else if (event.key === 'Escape'){
            setNewTask('');
        }
    }


    const handleDelete = (element) => {
        setTasks(tasks.filter(task => task !== element))
    }

    return(
        <div id='mainTaskContainer'>

            <input
                id="inputBox"
                type='text'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Add new task'
                >
            </input>
            <br></br>
            <button onClick={handleNewTask}>Add Task</button>
            <br></br>
            <div id='tasksBox'>
                {tasks.map((task, index) => (
                <div className="card">
                    <div className="card_content" key={index}>{task}
                    </div>
                    <div className="delete">
                        <button type='button' className='delete_content' onClick={() => handleDelete(task)}>Delete</button>
                    </div>
                </div>
                ))};
            </div>

        </div>
    )
}