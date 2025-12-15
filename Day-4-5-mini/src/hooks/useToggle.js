import { useState } from "react";

export default function useToggler(initial){

    const [isShowin,setShowin] = useState(initial);
    const toggle = () => setShowin(prev => !prev);

    return [isShowin,toggle]
}