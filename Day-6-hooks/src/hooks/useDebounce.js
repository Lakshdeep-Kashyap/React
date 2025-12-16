import { useEffect, useState } from "react";

export default function useDebounce(Val,Delay){

    const [key,setkey] = useState(Val);

    useEffect(() => {
        const handler = setTimeout(() => {
                            setkey(Val)
                        },Delay)

        return () => clearTimeout(handler);
    },[Val,Delay])

    return key;
}