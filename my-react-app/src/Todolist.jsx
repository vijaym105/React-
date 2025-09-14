

function Card({todos}){
    return(
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id} 
                    
                     style={{ color: todo.completed ? "green" : "red" }}
                >
                    {todo.task} &nbsp; {todo.completed ? "✅" : "❎"}
                     </li>
            ))}
        </ul>
    );
}


export default Card