import React from 'react';
import CipherKeyGenerator from "./CipherKeyGenerator.jsx";

export default function ButtonGenerateKey() {
    const handleClick = () => {
        // Call the CipherKeyGenerator function
        CipherKeyGenerator();

        // Focus on the input element with id "T1"
        document.getElementById('T1').focus();
    };

    return (
        <button onClick={handleClick}>Generate Key</button>
    );
}