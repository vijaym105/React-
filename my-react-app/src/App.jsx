import StopWatch, {UserContext} from "./StopWatch"


function App(){
const user = { name: "Vijay",
              Age: 20,
              Role: "Dev"}


return(
  <UserContext.Provider value={user}>
<StopWatch user/>
</UserContext.Provider>
  )
}

export default App