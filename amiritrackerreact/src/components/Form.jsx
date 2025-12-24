import { useState } from "react"

function Form({addIncome,addExpense}){
    const [i,setI] = useState(0)
    const [s,setS] = useState(0)
    const [n,setN] = useState("")
    const [c,setC] = useState("Rent")

    function handleEnter(){
        addIncome(i)
        addExpense(s,n,c)
    }
    return(
        <>
            <form onSubmit={handleEnter}>
                <input 
                    type="Number"
                    placeholder="Enter Income!"
                    onChange={(e)=>{setI(e.target.value)}}
                />
                <input 
                    type="Number"
                    placeholder="Enter Money Spent!"
                    onChange={(e)=>{setS(e.target.value)}}
                />
                <input 
                    type="text"
                    placeholder="Enter Note!"
                    onChange={(e)=>{setN(e.target.value)}}
                />
                {/* <input 
                    type="text"
                    placeholder="Enter Category!"
                    onChange={(e)=>setC(e.target.value)}
                /> */}
                <label htmlFor="categories">Select Expense Category:</label>
                <select id="categories" onChange={(e)=>{setC(e.target.value)}}>
                    <option value="Rent">Rent</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Entertainement">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit">Add Expense!</button>
            </form>
        </>
    )
}

export default Form