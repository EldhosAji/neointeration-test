import React from 'react'
import './style.css'
import InputContainer from '../InputContainer/InputContainer';

const SelectInputContainer = () => {
    return (
        <div className="SelectInputContainer">
             <InputContainer label="Clients">
                    <select>
                        <option value="test">3 Clients Selected</option>
                        <option value="test2">3 Clients Selected</option>
                        <option value="test2">3 Clients Selected</option>
                    </select>
            </InputContainer>
            <InputContainer label="Clients">
                    <select>
                        <option value="test">Select Service</option>
                        <option value="test2">Select Service</option>
                        <option value="test2">Select Service</option>
                    </select>
            </InputContainer>
            <InputContainer label="Clients">
                    <select>
                        <option value="test">Select Task</option>
                        <option value="test2">Select Task</option>
                        <option value="test2">Select Task</option>
                    </select>
            </InputContainer>
            <InputContainer label="Clients" className="search-input-select">
                    <input type="text" className="search-inp" placeholder="Search here"/>
            </InputContainer>
        </div>
    )
}

export default SelectInputContainer
