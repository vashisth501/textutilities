import React, {useState} from 'react'

export default function Textform(props) {
    const changeToUpper = ()=>{
        var uppercaseText = text.toUpperCase();
        setstate(uppercaseText);    
    }

    const handlingChange = (event)=>{
        setstate(event.target.value);
    }

    const changeToLower = ()=>{
        var lowerCaseText = text.toLowerCase();
        setstate(lowerCaseText);
    }
    const [text, setstate] = useState("Enter your Text Here")
    return (
        <>
        <div className="container">
            <div className="container p-3">
                <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handlingChange} id="mytextbox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary  mx-1" onClick={changeToUpper}>Convert to UpperCase</button>
            <button className="btn btn-primary  mx-1" onClick={changeToLower}>Convert to LowerCase</button>
            </div>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} alphabets</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2 className="mt-2">Preview the Entered Text</h2>
            <p className="border border-info p-3">{text}</p>
        </div>
        </>
    )
}

Textform.defaultProps = {
  heading : "Enter the text to analyze below"
}