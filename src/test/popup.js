
import React from 'react'

function popup(props) {
    return props.trigger?(
        <div>
            <button onClick={()=>{
                props.setTrigger(false)
            }}>
                close
            </button>
            {props.children}
        </div>
    ):""
}

export default popup;
