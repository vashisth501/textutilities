import React from 'react'

export default function Textform(props) {
    return (
        <div>
            <div className="container p-3">
                <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="mytextbox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
            </div>
        </div>
    )
}

Textform.defaultProps = {
  heading : "Enter the text to analyze below"
}