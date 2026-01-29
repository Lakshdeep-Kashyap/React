import { useState } from "react"

function Form({addTransactions}){
    const [i,setI] = useState(0)
    const [s,setS] = useState(0)
    const [n,setN] = useState("")
    const [c,setC] = useState("Rent")

    function handleEnter(e){
        e.preventDefault()
        addTransactions(parseFloat(s),n,c,"expense")
    }
    function handleEnterIncome(e){
        e.preventDefault()
        addTransactions(parseFloat(i),"","","income")
    }
    return(
        <>
            <form onSubmit={handleEnterIncome}>
                <input 
                    type="number"
                    placeholder="Enter Income!"
                    onChange={(e)=>{setI(e.target.value)}}
                />
                <button type="submit">Add Income!</button>
            </form>
            <form onSubmit={handleEnter}>
                <input 
                    type="number"
                    placeholder="Enter Money Spent!"
                    onChange={(e)=>{setS(e.target.value)}}
                />
                <input 
                    type="text"
                    placeholder="Enter Note!"
                    onChange={(e)=>{setN(e.target.value)}}
                />
                <label htmlFor="categories">Select Expense Category:</label>
                <select id="categories" onChange={(e)=>{setC(e.target.value)}}>
                    <option value="Rent">Rent</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit">Add Expense!</button>
            </form>
        </>
    )
}

export default Form