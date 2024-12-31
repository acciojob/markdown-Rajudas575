import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import './../styles/App.css';


const App = () => {

    const [markdown, setMarkdown] = useState("")
    const [loading, setLoading] = useState(true)

    const hancleChange = (e) => {
        setMarkdown(e.target.value)
    }

    return (
        <div className='app'>
            <textarea className="textarea" onChange={hancleChange}></textarea>
            <ReactMarkdown className="preview" children={markdown} />
        </div>
    )
}

export default App
