import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
export const AddMovie = ({setCategories: setMovie}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange=(e)=>{
    setInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length> 2){
            setMovie( movies=>[inputValue,...movies,]);
            setInputValue('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
       <input
       type="text"
       value={inputValue}
       onChange={
        handleInputChange}
       />
    </form>
  )
}


AddMovie.prototype={
    setCategories:PropTypes.func.isRequired
}