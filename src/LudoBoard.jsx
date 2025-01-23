import React from 'react'
import { useState } from 'react'

const LudoBoard = () => {
    let [move, setmove]=useState({blue:0, yellow:0, green:0, red:0})
    let updateBlue=()=> {
      setmove((preVal)=> {
        return{...preVal, blue:preVal.blue+1 }
      })
    }
    let updateYellow=()=> {
      setmove((preVal)=> {
        return{...preVal, yellow:preVal.yellow+1 }
      })
    }
    let updateGreen=()=> {
      setmove((preVal)=> {
        return{...preVal, green:preVal.green+1 }
      })
    }
    let updateRed=()=> {
      setmove((preVal)=> {
        return{...preVal, red:preVal.red+1 }
      })
    }
  return (
    <div className='board'>
      <p>Blue Moves = {move.blue}</p>
      <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
      <p>yellow Moves ={move.yellow}</p>
      <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
      <p>Green Moves ={move.green}</p>
      <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
      <p>Red Moves = {move.red}</p>
      <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
    </div>
  )
}

export default LudoBoard