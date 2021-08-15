import React , {  useState } from 'react'
import './style.css';
import { month } from '../../const/const-v';
import ToggleBtn from '../ToggleBtn/ToggleBtn';
import DatePicker from '../DatePicker/DatePicker';


//Date filter from 2020-08-13 to 13 Aug 2021
const dateFilter = (date)=>{
    const darr = date.split('-');
    return `${darr[2]} ${month[darr[1]]} ${darr[0]}`;
}

//Status monitor header
const StatusMonitorSection = () => {
    const [switchState, setSwitchState] =useState(false);
    const [date,setDate] = useState('22 Oct 2020');
    const setDateChanges= (e)=>{
        const d = dateFilter(e);
        setDate(d);
    }
    return (
        <div className="StatusMonitorSection">
            <div className="StatusMonitorSection-cont">
                <div className="StatusMonitorSection-cont-sec">
                    <span className="StatusMonitorSection-cont-span">
                        Status Monitor
                        <DatePicker value={date} onChange={setDateChanges}/>
                    </span>

                    <div className="toggle-container">
                        <ToggleBtn state={switchState} onChange={setSwitchState}/>
                        <span>Auto Refresh</span>
                    </div>
                </div>
                <p>Brief intro to the page functionality will be listed here.</p>
            </div>
            
        </div>
    )
}

export default StatusMonitorSection
