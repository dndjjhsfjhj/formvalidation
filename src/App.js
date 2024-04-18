import {useState} from "react"
import './App.css';

function App() {
const [data,setData]=useState("")
const[form,setform]=useState([])
let handleSubmit=(e)=>{
e.preventDefault()
form.push(data)
console.log(form)
}
return (
    <div className="App">
      <form>
       Name
       <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
       Email
       <input type="email" onChange={(e)=>setData(e.target.value)}/>
       <button onClick={handleSubmit}>Submit</button>
     </form>
    </div>
  );
}

export default App;
