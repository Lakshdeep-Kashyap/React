import { useEffect, useState } from "react";


export default function useOnlineStatus(){
    const [isOnline,setisOnline] = useState(navigator.onLine);

    function handleonline(){
        setisOnline(true)
    }
    function handleoffline(){
        setisOnline(false)
    }

    useEffect(() => {
        // window.addEventListener("online",() => (       piece of shit cant remove arrow fxns 
        //     setisOnline(true)                          needs reference smh
        // ))
        // window.addEventListener("offline",() => (
        //     setisOnline(false)
        // ))

        window.addEventListener("online",handleonline)
        window.addEventListener("offline",handleoffline)

        return () => {
            window.removeEventListener("online",handleonline)
            window.removeEventListener("offline",handleoffline)
        }
    },[])

    return isOnline
}