import { useState } from "react";


function Update(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carmake , setmake] = useState("");
    const[carmodel, setmodel] = useState("");

    function Add(){
        const newcar = {year: carYear, make: carmake, model: carmodel}

        setCars(c => [...c, newcar]);
        setCarYear(new Date().getFullYear());
        setmake("");
        setmodel("");
    }

    function Remove(index){
        setCars(c => c.filter((_, i) => i !== index))
    }
    function YearChange(e){
        setCarYear(e.target.value)
    }
    function MakeChange(e){
        setmake(e.target.value)
    }
    function ModelChange(e){
        setmodel(e.target.value)
    }
    return(
       <div>
        <h2>List of car Objects</h2>
        <ul>
        {cars.map((car, index) => 
        <li key={index} onClick={() => Remove(index)} >
            {car.year} {car.make} {car.model}
            
        </li>
        )}
        </ul>
        <input type="number" value={carYear} onChange={YearChange}/>
        <input type="text" value={carmake} onChange={MakeChange} placeholder="Make"/>
        <br />
         <input type="text" value={carmodel} onChange={ModelChange} placeholder="Model"/>
        <button onClick={Add}>Add a car</button>
        </div>
    )
};


export default Update


// Update Objects in state
// function Update(){
//     const [car, setCar] = useState({year : 2025,
//                                     nae : "Rover",
//                                     model : "Range"});

//     function YearHandler(event){
//         setCar(c => ({...c, year: event.target.value}));
//     }
//      function NaeHandler(event){
//         setCar(c => ({...c, nae: event.target.value}))
//     }
//      function ModelHandler(event){
//         setCar (c => ({...c, model: event.target.value}))
//     }
// return(
    //    <div>
    //     <p>Your favourite car is : {car.model} {car.nae} {car.year}</p>
    //     <input type="number" value={car.year} onChange={YearHandler}/>
    //     <input type="text" value={car.nae} onChange={NaeHandler}/>
    //     <input type="text" value={car.model} onChange={ModelHandler}/>
    //    </div>
    // )
// }

// Update Array in state
// function Update(){
//     const [foods, setFood] = useState(["Apple", "Mango", "Pineapple","Banana"]);

//  function Add(){

//     const newfood = document.getElementById("txt").value
//      document.getElementById("txt").value = ""

//      setFood(f => ([...f, newfood]))
//  }

//  function Remove(index){
//     setFood(foods.filter((_, i) => i !==index))
//  }

//     return(
//        <div>
//        <h2>List of food</h2>
//        <ul>
//         {foods.map((food, index) => 
//         <li key={index}>
//             {food}
//             <button onClick={() => Remove(index)}>Remove</button>
//             </li>
//         )}
//        </ul>
//        <input type="text" id="txt" placeholder="Enter"/>
//        <button onClick={Add}>Add</button>
       
//        </div>
//     )
// };