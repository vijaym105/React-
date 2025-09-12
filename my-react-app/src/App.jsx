import List from "./List"



function App(){

    const fruits = [{id:1,name:"Apple", calories: 95},
                    {id:2,name:"orange",calories: 45},  
                    {id:3,name:"pineapple",calories: 65},
                    {id:4,name:"abta",calories: 145},
                    {id:5,name:"limbu",calories: 165},]

    
    const Veges = [{id:6,name:"batata", calories: 195},
                    {id:7,name:"Bhendi",calories: 145},  
                    {id:8,name:"kela",calories: 165},
                    {id:9,name:"shat",calories: 45},
                    {id:11,name:"bhat",calories: 65},]
    return(
        <>
     {fruits.length >0  && <List ite = {fruits} category = "Fruits"/>}
     {Veges.length > 0 && <List ite = {Veges} category = "Vegetable"/>}
     </>
    )
};

export default App