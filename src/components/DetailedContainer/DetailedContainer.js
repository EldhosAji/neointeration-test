import React from 'react'
import CardDetailedContainer from '../CardDetailedContainer/CardDetailedContainer'
import './style.css'



const DetailedHeaderSection = ()=>{
    return <div className="DetailedHeaderSection">
            <span id="branched-0">NotBranched</span>
            <span id="branched-1">Branched</span>
            <span id="branched-2">Not Branched</span>
            <span id="branched-3">Branched</span>
            <span id="branched-4">NotBranched</span>
            <span id="branched-5">Branched</span>
    </div>

}
const DetailedContainer = () => {
    return (
        <div className="DetailedContainer">
            <DetailedHeaderSection/>
            <CardDetailedContainer/>
        </div>
    )
}

export default DetailedContainer
