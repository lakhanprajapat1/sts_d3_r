import React from 'react'
import { useState } from 'react'

const LudoBoard = () => {
    let [move, setmove]=useState()
  return (
    <div className='board'>
      <p>Blue Moves =</p>
      <button style={{backgroundColor:"blue"}}>+1</button>
      <p>yellow Moves =</p>
      <button style={{backgroundColor:"yellow", color:"black"}}>+1</button>
      <p>Green Moves =</p>
      <button style={{backgroundColor:"green"}}>+1</button>
      <p>Red Moves =</p>
      <button style={{backgroundColor:"red"}}>+1</button>
    </div>
  )
}

export default LudoBoard