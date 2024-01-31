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
  const handleTaOnClick = () =>
  {
    if(text===defaultvalue)
    setText("");
  }
  const handleReset = () => {
      setText(defaultvalue);
  }
  const handleLpClick = () =>
  {
     let newText = text.toLowerCase();
     setText(newText);
  }
  let now;
  if(text==="")
    now = 0;
  else
    now=text.split(" ").length;

  const handleSpeech = () =>
  {
    const Speech= new SpeechSynthesisUtterance();
    Speech.text= text;
    window.speechSynthesis.speak(Speech);
  }
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} onClick={handleTaOnClick} id="myBox" rows="6"></textarea>
        <button className="btnbtn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="reset" onClick={handleReset}>Reset</button>
        <button className='btnbtn-primary' onClick={handleLpClick}>Convert to LowerCase</button>
        <button className="textToSpeech" onClick={handleSpeech}>Convert to Speech</button>
        </div>
    </div>
    <div className="container" my-3>
      <h2>Text Summary</h2>
      <p>{now} words and {text.length} characters</p>
      <p>{0.008 * now} minutes to read</p>
    </div>
    </>
  )
}
