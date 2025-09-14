import Todolist from "./Todolist"

function App(){
     const myTodos = [
    { id: 1, task: "Learn React props", completed: true },
    { id: 2, task: "Practice conditional rendering", completed: true },
    { id: 3, task: "Build todo app", completed: false },
  ];
return(
       <>
  {myTodos.length === 0 ? (
    <p>No task</p>
  ) : (
    <>
      <h2>This is my todolist</h2>
      <Todolist todos={myTodos} />
    </>
  )}
</>
       
    )
};

export default App

