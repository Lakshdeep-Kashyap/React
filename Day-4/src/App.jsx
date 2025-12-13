import { useState , useEffect} from 'react'

function App(){

  const [count,setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect ran!");
    document.title = `Count : ${count}`;
  },[]);

  return(
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Count : {count}</button>
    </>
  )
}

export default App;
