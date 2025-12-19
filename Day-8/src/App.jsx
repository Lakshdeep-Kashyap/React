import { useState } from "react"


function App(){

  const[user,setUser] = useState(null)
  const[username,setUsername] = useState("")
  const[loading,setLoading] = useState(false)
  const[error,setError] = useState(null)

  async function handleSearch(){
    setUser(null)
    setError(null)
    setLoading(true)
    try{
      const res = await fetch(`https://api.github.com/users/${username}`)
      if(!res.ok) throw new Error("API call/fetch failed")

      const u = await res.json()
      console.log(res)
      setUser(u)
    }
    catch(err){
      setError(err.message)
    }
    finally{
      setLoading(false)
    }
    
  }

  return(
    <>
      <input 
        type="text"
        value={username}
        onChange={(e) => {setUsername(e.target.value)}}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading user data...</p>}
      {error && <p>{error}</p>}

      {/* <img src={user.avatar_url}/>
      <h1>Name: {user.name}</h1>
      <p>Login: {user.login}</p>
      <p>Bio: {user.bio}</p>
      <p>Repos: {user.public_repos}</p> */}

      {user && 
        <>
          <img src={user.avatar_url}/>
          <h1>Name: {user.name}</h1>
          <p>Login: {user.login}</p>
          <p>Bio: {user.bio}</p>
          <p>Repos: {user.public_repos}</p>
        </>
      }
      
    </>
  )
}

export default App