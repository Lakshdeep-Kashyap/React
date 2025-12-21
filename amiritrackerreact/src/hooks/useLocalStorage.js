import { useEffect, useState } from "react"

export  function useLocalStorage(key,initial){
    const [val,setVal] = useState(()=>{
        const saved = localStorage.getItem(key)
        if(!saved) return initial

        return JSON.parse(saved)
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(val))
    },[key,val])

    return [val,setVal]
}