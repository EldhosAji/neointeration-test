import React from 'react'
import './style.css'
const ToggleBtn=({state=true,onChange=()=>null})=>{
    function onToggleChange(e){
        onChange(e.target.checked)
    }
    return <div className="switch">
                <label className="switch-toggle">
                    <input type="checkbox" checked={state} onChange={onToggleChange}/>
                    <span className="slider round"></span>
                </label>
        </div>
}

export default ToggleBtn
