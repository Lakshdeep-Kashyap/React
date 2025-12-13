import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Timing from './Timing.jsx'
import RenderList from './RenderList.jsx'

createRoot(document.getElementById('root')).render(
  <>  
    <App />
    {/* <Timing></Timing> */}
    {/* <RenderList></RenderList> */}
  </>
)
