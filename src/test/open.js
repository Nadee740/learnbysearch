import Popup from "./popup"


import React from 'react'
import { useState } from "react"

function Open(props) {

  const [buttonpopup,setbuttonpopup]=useState(false);

    return (
        <div>
            <button onClick={()=>{
                setbuttonpopup(!buttonpopup)
            }}> open popup</button>
            <Popup trigger={buttonpopup} setTrigger={setbuttonpopup}>
<h2>hyyy</h2>
            </Popup>
        </div>
    )
}

export default Open


