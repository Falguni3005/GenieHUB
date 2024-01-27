import React, { useState } from 'react'
import './/style.css';
export default function TextForm(props) 
{
  const [text, setText] = useState('Enter text Here');
  const defaultvalue = "Enter text Here";
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);    
  }
  const handleOnChange = (event) => {
     setText(event.target.value);
  }
  const handleReset = () => {
      setText(defaultvalue);
  }
  const handleLpClick = () =>
  {
     let newText = text.toLowerCase();
     setText(newText);
  }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        <button className="btnbtn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="reset" onClick={handleReset}>Reset</button>
        <button className='btnbtn-primary' onClick={handleLpClick}>Convert to LowerCase</button>
        </div>
    </div>
  )
}
