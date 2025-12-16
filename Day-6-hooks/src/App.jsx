import { useState } from "react"
import useDebounce from "./hooks/useDebounce"
import useOnlineStatus from "./hooks/useOnlineStatus";

function App(){
  const [Val,setVal] = useState("sth");
  const debounce = useDebounce(Val,1000);

  const isOnline = useOnlineStatus()
  return(
    <>
      <input 
        id="sth"
        type="text"
        onChange={(e) => {setVal(e.target.value)}}
      />
      <h1>{debounce}</h1>
      <h1>{isOnline?"Online":"Offline"}</h1>
    </>
  )
}

export default App