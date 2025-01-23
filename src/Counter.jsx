import { useState } from "react"

function init() {
    console.log("init was execute")
    return Math.random()
}
export default function Counter(){
    

    let[count, setCount]=useState(init)
    console.log("component was re rendered");
    
    function incCounter(){
        setCount((curVal)=>{
           return curVal+1
        })
        // setCount(143)
    }
    return(
        <>
            <h3>count = {count}</h3>
            <button onClick={incCounter}>Increase Count</button>
        </>
        
    )
}