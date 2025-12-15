import { useState } from "react";

function Form({updateIncome,addExpense,nuclearDel}){
    const [earnt,setEarnt] = useState("");
    const [spent,setSpent] = useState("");
    const [note,setNote] = useState("");

    function handleKeyDownForEarnt(e){
        if(e.key === "Enter"){
            updateIncome(earnt);
            setEarnt("");
        }
    }

    function handleKeyDownForSpent(e){
        if(e.key === "Enter"){
            addExpense(spent,note);
            setSpent("");
            setNote("");
        }
    }

    function handleKeyDownForNote(e){
        if(e.key === "Enter"){
            addExpense(spent,note);
            setSpent("");
            setNote("");
        }
    }

    return(
        <>
            <input 
                type="Number" 
                placeholder="Enter Money Earned"
                value={earnt}
                onChange={(e) => setEarnt(parseFloat(e.target.value))}
                onKeyDown={handleKeyDownForEarnt}
            />
            <input 
                type="Number"
                placeholder="Enter Money Spent"
                value={spent}
                onChange={(e) => setSpent(parseFloat(e.target.value))}
                onKeyDown={handleKeyDownForSpent}
            />
            <input 
                type="text" 
                placeholder="Enter Item Money Spent On"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onKeyDown={handleKeyDownForNote}
            />
            <button className="nuke" onClick={() => {nuclearDel()}}>Nuclear Delete</button>
        </>
    )
}

export default Form;