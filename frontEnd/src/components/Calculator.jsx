import { useState } from "react"

export const Calculator= ()=>{
  const [input, setInput] = useState("");
  const allButtons= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "(", ")", "+", "-", "*", "/"] 

  const addInput = (val) => {
    setInput((input)=> input+val);
  }
  const solve = () => {
    
  }

  return <>
    {input}
    <br />
    {
      allButtons.map((val, index)=>
        <button key={index} onClick= {()=>{addInput(val)}}>{val}</button>
      )
    }
    <button onClick={solve}>=</button>
    <button onClick={()=>setInput("")}>clear</button>
    <button onClick={()=>setInput(input=>input.slice(0, -1))}>delete</button>
  </>
}