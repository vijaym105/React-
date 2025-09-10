
import Student from "./Student";

function App(){
    return(
        <>
     <Student name="Vijay" age={20} isstudent={false}/>
     <Student name="sumit" age={25} isstudent={true}/>
     <Student name="Vijay" age={20} isstudent={false}/>
     <Student name="hell"/>
     </>
    );
}

export default App