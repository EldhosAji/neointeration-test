import React from 'react'
import {calendar_today,calendar_today2x} from '../../assets/Index'
import './style.css';
const DatePicker = ({value,onChange})=>{
    function print(e){
        onChange(e.target.value)
    }
    return <div className="s-datepicker">
            <img srcSet={`${calendar_today} 480w,${calendar_today2x} 800w`}
                sizes="(max-width: 600px) 480px, 800px"
                src={calendar_today2x}
                alt="drawer-icon"/>
                <div className="new-dt">
                    <input type="date" id="date" onChange={print} className="unstyled" />
                    <span>{value}</span>
                </div>
        </div>
}

export default DatePicker
