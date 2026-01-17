import { createContext, useContext, useEffect, useRef, useState } from "react"

export const UserContext = createContext();
function StopWatch(){
    
    const user = useContext(UserContext);


    return(
        <div>
            <h1>MySelf {user.name}!</h1>
              <p>Age: {user.Age}</p>
      <p>Role: {user.Role}</p>
        </div>
    )
}

export default StopWatch

// for counting every re-render
// const [count, setCount] = useState(0);
// const inpref = useRef(0);
 
// useEffect(() => {
//     inpref.current += 1 ;
// });
   
//     function Add(){
//         setCount(count + 1);
//     }
    
//     return(
//         <div>
//            <p>Component is rendered {count} times</p>
//            <button onClick={Add}>Add</button>
//         </div>
//     )
// }


//  For zoom in and zoom out
//     const igref = useRef(null);
//     const [zoom, setZoom] = useState(false);

//     function zoomin(){
//         igref.current.style.transform = "scale(1.5)";
//         igref.current.style.transition = "ease-in 0.3s";
//     }
//     function zoomout(){
//         igref.current.style.transform = "scale(1)";
//         igref.current.style.transition = "ease-out 0.3s";
//     }
//     return(
//         <div>
//           <img ref={igref} 
//           src="https://unsplash.com/photos/a-brown-and-black-abstract-design-on-a-black-background-2lmnaQQBHH4" 
//           alt="Imagezomiingg" 
//           style={{width: "200px", height: "200px"}}/>
//           <br />
//           <button onClick={zoomin}>Zoom in</button>
//           <br />
//           <button onClick={zoomout}>Zoom out</button>
//         </div>
//     )
// }
