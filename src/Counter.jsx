import { useState } from "react"

export default function Counter(){
    let[count, setCount]=useState(0)
    
    function incCounter(){
        setCount(count+1)
        console.log(count)
    }
    return(
        <>
            <h3>count = {count}</h3>
            <button onClick={incCounter}>Increase Count</button>
        </>
        
    )
}