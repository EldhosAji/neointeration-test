import React from 'react'
import SelectInputContainer from '../SelectInputContainer/SelectInputContainer';
import StatusMonitorSection from '../StatusMonitorSection/StatusMonitorSection';
import DetailedContainer from '../DetailedContainer/DetailedContainer'
import './style.css'

const HomeContainer = () => {
    return (
        <div className="HomeContainer-cont">
            <StatusMonitorSection/>
            <SelectInputContainer/>
            <DetailedContainer/>
        </div>
    )
}

export default HomeContainer
