import React from 'react'
import { useState } from 'react'
import './stylesheets/Like.css'

const Like = () => {
    
    let [isLike, setisLike]=useState(false);
    let [count, setcount]=useState(0);
    let clicked=()=>{
        setisLike(!isLike)
        {isLike?setcount(count-1):setcount(count+1)}
    }
    
    let style={color:"rgb(255, 0, 81)",textShadow: "0 0 20px rgb(255, 0, 81)"}
  return (
    <>
    <p onClick={clicked}  >
        {isLike ?(<i class="fa-solid fa-heart" style={style}><br></br>liked</i>):(<i class="fa-regular fa-heart" ><br></br>unliked</i>)}
    </p>
    <p>
        total Likes = {count}
    </p>
    </>
  )
}

export default Like