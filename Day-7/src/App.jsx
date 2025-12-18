import { useState } from "react";


function App(){

    const [query,setQuery] = useState("")
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    async function handleSearch(){
        setLoading(true)
        try{
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve("success")
                },2000)
            })

            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            if(!res.ok) throw new Error("API Failed!")

            const data = await res.json()
            const filtered = data.filter((post) => post.title.includes(query))

            setPosts(filtered)

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
                value={query}
                onChange={(e) => {setQuery(e.target.value)}}
            />
            <button onClick={handleSearch}>Search</button>

            {loading && <p>Loading Data...</p>}
            {error && <p>An Error Occured!</p>}

            {posts.map(p => (
                <p key={p.id}>{p.title}</p>
            ))}
        </>
    )
}

export default App;