// import { useState } from "react";

// function Form({updateIncome,addExpense}){
//     const[income,setIncome] = useState("")
//     const[spent,setSpent] = useState("")
//     const[note,setNote] = useState("")

//     function handleKeyDownIncome(e){
//         if(e.key === "Enter"){
//             updateIncome(income)
//             setIncome("")
//         }
//     }

//     function handleKeyDownSpent(e){
//         if(e.key === "Enter"){
//             addExpense(spent,note)
//             setSpent("")
//             setNote("")
//         }
//     }

//     function handleKeyDownNote(e){
//         if(e.key === "Enter"){
//             addExpense(spent,note)
//             setSpent("")
//             setNote("")
//         }
//     }
    
//     return(
//         <>
//             <input 
//                 type="Number" 
//                 value={income}
//                 placeholder="Enter Money Earnt!" 
//                 onChange={(e) => setIncome(Number(e.target.value))}
//                 onKeyDown={handleKeyDownIncome}
//             />
//             <input 
//                 type="Number" 
//                 value={spent}
//                 placeholder="Enter Money Earnt!" 
//                 onChange={(e) => setSpent(Number(e.target.value))}
//                 onKeyDown={handleKeyDownSpent}
//             />
//             <input 
//                 type="text" 
//                 value={note}
//                 placeholder="Enter Money Earnt!"
//                 onChange={(e) => setNote(e.target.value)}
//                 onKeyDown={handleKeyDownNote}
//             />
//         </>
//     )
// }

// export default Form







import { useState } from "react";

function Form({ updateIncome, addExpense }) {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
  const [note, setNote] = useState("");

  function handleIncomeKey(e) {
    if (e.key === "Enter" && income !== "") {
      updateIncome(income);
      setIncome("");
    }
  }

  function handleExpenseKey(e) {
    if (e.key === "Enter" && spent !== "") {
      addExpense(spent, note);
      setSpent("");
      setNote("");
    }
  }

  return (
    <>
      {/* Income input */}
      <input
        type="number"
        value={income}
        placeholder="Enter Money Earned"
        onChange={(e) => setIncome(e.target.value)}
        onKeyDown={handleIncomeKey}
      />

      {/* Amount spent */}
      <input
        type="number"
        value={spent}
        placeholder="Enter Money Spent"
        onChange={(e) => setSpent(e.target.value)}
        onKeyDown={handleExpenseKey}
      />

      {/* Note for the expense */}
      <input
        type="text"
        value={note}
        placeholder="What was it for?"
        onChange={(e) => setNote(e.target.value)}
        onKeyDown={handleExpenseKey}
      />
    </>
  );
}

export default Form;
