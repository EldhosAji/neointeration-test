import React from 'react';
import './style.css';
const InputContainer = ({children,label,className=""}) => {
    return (
        <div className={`InputContainer ${className}`}>
            <span className="input-label">{label}</span>
            {children}
        </div>
    )
}

export default InputContainer
