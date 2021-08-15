import React from 'react';
import './style.css';
import {push_pin,push_off,expand_less2x,Group,expand_close
    } from '../../assets/Index';
import { dataurl } from '../../const/const-v';

const SubExpcardItem = ({data})=>{
    return <div className="SubExpcardItem">
                <div className="sub-e-head">
                    <strong>{data?.title}</strong>
                    <img src={Group} alt="group-icon"/>
                </div>
                <div className="sub-e-cont f-center">
                    <button className={`${!data?.status&&'warn'}`}><strong>{data?.status?"TO BE STARTED":"BREACHED/FAILED"}</strong></button>
                    <p>{data?.dtime}</p>
                </div>
        </div>
}

const StatusIndicator = ({l,r,label,status=false})=>{
    return <div className="StatusIndicator f-center">
            <p>{label}</p>
            <div className="ch-ind">
                <span className="f-center">{l}</span>
                <span className={`f-center ${status&&'g-light'}`}>{r}</span>
            </div>
    </div>
}

const StatusIndicatorSection = ({data})=>{
    return <div className="StatusIndicatorSection">
            <StatusIndicator l={data?.c?.l} r={data?.c?.r} label="Not started"/>
            <StatusIndicator l={data?.ip?.l} r={data?.ip?.r} label="In Progress"/>
            <StatusIndicator l={data?.ns?.l} r={data?.ns?.r} status={true} label="Completed"/>
        </div>
}

const ExpCard = ({cont})=>{
    const [exp,setExp]  = React.useState(false);
    return <div className={`ExpCard ${exp&&'ExpCard-exp'}`}>
            <div className="exp-sec-one">
                <div className="ExpCard-header">
                    <h1>{cont.title}</h1>
                    <img src={!exp?expand_less2x:expand_close} 
                            alt="expand-icon" onClick={()=>setExp(e=>!e)}/>
                </div>
                <StatusIndicatorSection data={cont?.lu}/>
            </div>
            <div className="exp-sec-two">
                {
                    cont?.exp.map(item=>{
                        return <SubExpcardItem key={item?.id} data={item}/>
                    })
                }
            </div>
        </div>
}

//Filter data from api to pinned or unpinned 
const filterData = (list)=>{
    const D = list.data;
    let p = {};
    let up = {};
    Object.keys(D).map(key=>{
        const item = D[key]
        if(item.pinned){
            p[key]=item;
        }else{
            up[key]=item;
        }
    });
    return [p,up]
}

const CardsSectionContainer=({pinned,desabled=false,id,onPinClick=()=>null})=>{
    return <div className={`CardsSectionContainer ${desabled&&'CardsSectionContainer-desable'}`}>
            {!desabled&&<div className="pin-icon">
                <h1>{pinned.title}</h1>
                <div>
                    <img className="pev-icon" onClick={()=>onPinClick(id,pinned.pinned)} src={pinned.pinned?push_pin:push_off} alt="pin-icon" />
                    <div className="t-tip">
                        <span class={pinned.pinned?'':'warn'}>{pinned.pinned?'Add pinned clients':'Remove pinned clients'}</span>
                    </div>
                </div>
            </div>}
                {
                    !desabled&&pinned?.data?.map(item=>{
                        return <ExpCard cont={item} key={item?.id}/>
                    })
                }
            </div>
}

//Data fetch call
const apiCall = async ()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
     return fetch(dataurl, requestOptions).then(response => response.json())
}

const CardDetailedContainer = () => {
    const [pinned,setPinned] = React.useState({});
    const [unPinnd,setUnPinned] = React.useState({});
    const [loading,setLoading] = React.useState(true);
    const scrollRef =React.useRef(null);

    const init =()=>{
        apiCall().then(res=>{
            const [p,up] = filterData(res);
            setPinned(p);
            setUnPinned(up);
            setLoading(false);
        }).catch(error => console.log('error', error));
    }
    React.useEffect(()=>{
        init();
        return null;
    },[])

    function onNext(){
        scrollRef.current.scrollLeft = scrollRef.current.scrollLeft+100;
    }
    function onPrev(){
        scrollRef.current.scrollLeft = scrollRef.current.scrollLeft-100;
    }

    const removeFromObj=(arr,id)=>{
        let prevValue = arr;
        let newObj = {}
        Object.keys(arr).map(item=>{
            if(item!==id){
                newObj = {...newObj,[item]:arr[item]}
            }
        })
        return newObj;
    }


    const addToObj=(obj,id,upValue)=>{
        let newValue = obj;
        newValue[id] = upValue;
        return newValue;
    }


    const addToStateValue =(arr,id,upValue)=>{
        const data = addToObj(arr,id,upValue);
        return data;
    }

    const removeFromState = (obj,id)=>{
        const data = removeFromObj(obj,id);
        return data;
    }

    function pinUpdate(id,state){
        if(state){
            const dvalue  = {...pinned[id],pinned:!state};
            const pstate = removeFromState(pinned,id) 
            const upState = addToStateValue(unPinnd,id,dvalue)
            setPinned(pstate);
            setUnPinned(upState);
        }else{
            const dvalue  = {...unPinnd[id],pinned:!state};
            const upState = removeFromState(unPinnd,id) 
            const pstate = addToStateValue(pinned,id,dvalue)
            setUnPinned(upState);
            setPinned(pstate);
        }
    }

    if(loading)
        return <div>
            <p>Loading...</p>
        </div>
    return (
        <div className="CardDetailedContainer">    
            <div className="pinned-sec">
                {
                    Object.keys(pinned).map(item=>{
                        return <CardsSectionContainer onPinClick={pinUpdate} desabled={false} pinned={pinned[item]} id={item} key={pinned[item].id}/>
                    })
                }
            </div>
           
            <div className="unpinned-sec">
                 <img className="pev-icon" onClick={()=>onPrev()} src={expand_close} alt="prev-icon" />
                    <div ref={scrollRef} className="unpinned-sec-cont">
                        {
                            Object.keys(unPinnd).map(item=>{
                                return <CardsSectionContainer onPinClick={pinUpdate} desabled={false} pinned={unPinnd[item]} id={item} key={unPinnd[item].id}/>
                            })
                            
                        }
                        {
                            (Object.keys(unPinnd).length<3)&&Array(3-Object.keys(unPinnd).length).fill(null).map((item,key)=><CardsSectionContainer desabled={true} key={key}/>)
                        }
                    </div>
                <img className="next-icon" onClick={()=>onNext()} src={expand_close} alt="prev-icon" />
            </div>
        </div>
    )
    
}

export default CardDetailedContainer
