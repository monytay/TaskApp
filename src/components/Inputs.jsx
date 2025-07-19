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
        }
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
            <button onClick={handleNewTask}
            >Add Task</button>
            <div id='tasksBox'>
                {tasks.map((task, index) => (
                <div class="card">
                    <div class="card__content">{task}</div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                    <div class="blob"></div>
                </div>
                ))}
            </div>
        </div>
    )
}