import React from 'react';
import MessageProcessor from './MessageProcessor.jsx'

export default function ButtonEncrypt() {
    
    const handleClick = () => {
        document.getElementById('tryagain').style.display = 'block';
        MessageProcessor();
    }

    return (
        <button id="Encrypt" onClick={handleClick}>Encrypt</button>
    );
}