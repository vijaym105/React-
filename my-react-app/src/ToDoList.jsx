import { element } from "prop-types";
import { useState } from "react";



function ToDoList(){
    const[tasks, setTasks] = useState(["Fitmate", "React-Pract", "Clg Study"]);
    const[newtask, setNewTask] = useState("");

    function Add(){
       if(newtask.trim !== "") { setTasks(t => [...t, newtask])
        setNewTask("")}
    }
    function Remove(index){
        const deltask = tasks.filter((element,ind) => ind !== index);
        setTask(deltask)
    }
    function handleinpChange(e){
        setNewTask(e.target.value)
    }
    function movetaskUp(index){
        if(index > 0){
            const updtasks = [...tasks];
            [updtasks[index], updtasks[index-1]] =
            [updtasks[index-1], updtasks[index]]
            setTasks(updtasks)
        }
    }
    function movetaskDown(index){
         if(index < tasks.length -1){
            const updtasks = [...tasks];
            [updtasks[index], updtasks[index+1]] =
            [updtasks[index+1], updtasks[index]]
            setTasks(updtasks)
        }
    }

return(
    <div className="head">
    <h1>To-Do-List</h1>

    <div className="inps">
        <input type="text" value={newtask} onChange={handleinpChange}
         placeholder="Enter a task ..." />
         <button className="add-btn" 
         onClick={Add}>Add</button>
    </div>
    <ol>
    {tasks.map((task,index) =>
    <li key={index}> <span className="textdes">{task}</span>

    <button className="Remove-btn" 
    onClick={() => Remove(index)}
    >delete</button>

     <button className="move-btn" 
     onClick={() => movetaskUp(index)}>🔼</button>

    <button className="down-btn" onClick={()=> movetaskDown((index))}>
        🔽
    </button>
    </li>
    )}
    </ol>
    </div>

);
};

export default ToDoList