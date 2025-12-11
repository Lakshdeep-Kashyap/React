import { useState } from "react";
import Display from "./Display";

function App(){

  const [isLoggedIn,set] = useState(false)
  
  function toggle(){
    set(!isLoggedIn)
  }
  
  return(
    <>
      <Display
        isLoggedIn = {isLoggedIn}
        toggle = {toggle}
      />
    </>
  )
}

export default App;