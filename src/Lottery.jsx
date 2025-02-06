import { useState } from "react"
import './stylesheets/Lottery.css'
import { getTicket } from "./helper"

const Lottery = () => {
  let[ticket, setTicket]=useState(getTicket(5))

  return (
    <div>
        <h1>Lottery Game!</h1>
        <div className='ticket'>
          <span>{ticket[0]}</span>
          <span>{ticket[1]}</span>
          <span>{ticket[2]}</span>
          <span>{ticket[3]}</span>
          <span>{ticket[4]}</span>
        </div>
        <button>Get Ticket</button>
    </div>
  )
}

export default Lottery