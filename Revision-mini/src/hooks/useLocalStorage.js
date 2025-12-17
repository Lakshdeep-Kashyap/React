// import { useState , useEffect } from "react";

// export default function useLocalStorage(key,initial){

//     const [val,setVal] = useState(() => {
//         const saved = localStorage.getItem(key);
//         if(saved !== null){
//             return JSON.parse(saved)
//         }
//         return initial;
//     })

//     useEffect(() => {
//         localStorage.setItem(key,val)
//     },val)


//     return(
//         [val,setVal]
//     )
// }




import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {

  const [val, setVal] = useState(() => {
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      try {
        return JSON.parse(saved);   // works for numbers, arrays, objects
      } catch {
        return saved;               // fallback for plain strings
      }
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  },[val]);

  return [val, setVal];
}
