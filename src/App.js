import React, { useState } from 'react'
import "./App.css"
import Header  from './component/Header';
import TaskList from './component/TaskList';
import AddForm from './component/AddForm';

function App() {
    

    const [tasks, setTasks]=useState([
      {id:"task_1",title:"Learn JS", status:0},
      {id:"task_2",title:"Create Todo List", status:1}
    ]);
 

    const [showIncomplete,setShowIncomplete]=useState(false);
    
    const [newTask, setNewTask]= useState("123");

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(newTask){
        const task={
          id:Date.now(),
          title:newTask,
          status: 0,
        };
        setTasks([...tasks,task]);
        setNewTask("");
      }
      
    };

    const handleInputChange=(e)=>{
      setNewTask(e.target.value);
    };

    const setTaskStatus= (taskId, status)=>{
      setTasks(tasks.map(task=>{
        if (task.id=== taskId){
          return {...task,status: status? 1 :0};
        }
        return task;
      }));
    };

    const removeTask =(taskId)=>{
      setTasks(tasks.filter(task=>task.id!==taskId));
    };

  return (
<div className="container">
  <Header/>
  <TaskList tasks={tasks} showIncomplete={showIncomplete} setTaskStatus={setTaskStatus} removeTask={removeTask} setShowIncomplete={setShowIncomplete}/>
  
  <AddForm handleSubmit={handleSubmit} newTask={newTask} handleInputChange={handleInputChange}/>
  
  
</div>

  )
}

export default App
