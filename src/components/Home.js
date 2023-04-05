import React from 'react'
import { useState } from 'react'


export default function Home(props) {

    const [text, setText] = useState('');
    const handleUppercase = () => {
        setText(text.toUpperCase());
        props.showALert("Uppercase applied","success");
    }
    const handleLowercase = () => {
        setText(text.toLowerCase());
        props.showALert("Lowercase applied","success");
    }
    const handleOnchange = () => {
        setText(event.target.value)
    }
    const handleCleartext = () => {
        setText('')
        props.showALert("Text has been cleared","success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showALert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showALert("Extra spaces removed!", "success");
    }

    return (
        <>
            <div className="mb-3" >
                <label htmlFor="exampleFormControlTextarea1" className={`form-label mx-3 my-3 text-${props.mode=='light'?'dark':'light'}`}><h1>Enter Text to analyze</h1></label>
                <textarea className={`form-control mx-3 bg-${props.mode} text-${props.mode=='light'?'dark':'light'}`} value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8" style={{ width: "50%" }}></textarea>

            </div>
            <div>
                <button disabled={text.length==0} type="button" className="btn btn-primary mx-2" onClick={handleUppercase}>Convert To UpperCase</button>
                <button disabled={text.length==0} type="button" className="btn btn-primary mx-2" onClick={handleLowercase}>Convert To LowerCase</button>
                <button disabled={text.length==0} type="button" className="btn btn-primary mx-2" onClick={handleCleartext}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p style={{wordWrap: 'break-word'}}>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
