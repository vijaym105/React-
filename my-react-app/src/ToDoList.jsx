import { func } from "prop-types";
import { useEffect, useState } from "react";

function ToDoList(){
    const [width, setWdith] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() =>{
    window.addEventListener("resize", handleSize )
        console.log("event added baibe");
    
},[])
        function handleSize(){
            setHeight(window.innerHeight);
            setWdith(window.innerWidth);
        }
    return(
        <>
        <p>Window Width: {width}px</p>
        <p> Window Height: {height}px </p>
        </>
    )
}



export default ToDoList



// Code for useEffect (Counter)
// function ToDoList(){
//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green")

//     useEffect(() => {
//         document.title = `Count: ${count} `
        

//         return () => {

//         }
//     },[count, color])
//     function AddCount(){
//         setCount(c => c+1)
//     }
//     function SubCount(){
//         setCount(c => c-1)
//     }
//     function Chngcolor(){
//         setColor(c => c == "green" ? "red" : "green")
//     }
//     return(
//         <div>
//             <h2>This is counter</h2>
//             <h4>Count: {count}</h4>
//             <button onClick={AddCount}>Add</button>
//             <button onClick={SubCount}>Sub</button><br />
//             <button onClick={Chngcolor}>Change Color</button>
//         </div>
//     )
// }