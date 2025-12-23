import {Routes,Route} from "react-router-dom"

import LeftPanel from "./components/LeftPanel"
import MidPanel from "./components/MidPanel"
import RightPanel from "./components/RightPanel"

import "./css/App.css"

function App(){
  return(
    <>
      <div className="applayout">
        <LeftPanel/>
        <MidPanel/>
        <RightPanel/>
      </div>
    </>
  )
}

export default App