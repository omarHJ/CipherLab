import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const KeyExpansion = () => {
  const initialKey = '00000000000000000000000000000000'; // Initial key value
  const [currentKey, setCurrentKey] = useState(initialKey);
  const [nextKey, setNextKey] = useState('');
  const [inputKey, setInputKey] = useState(initialKey); // Set initial value here

  useEffect(() => {
    generateNextKey();
  }, [currentKey]);

  useEffect(() => {
    setCurrentKey(initialKey);
    setInputKey(initialKey);
  }, [initialKey]);

  const generateNextKey = () => {
    const hashedKey = CryptoJS.SHA256(currentKey);
    const truncatedHash = hashedKey.toString(CryptoJS.enc.Hex).slice(0, 32);
    setNextKey(truncatedHash);
  };

  const handleGenerateNew = () => {
    setCurrentKey(nextKey);
  };

  const handleUpdateKey = () => {
    setCurrentKey(inputKey);
  };

  const handleInputChange = (e) => {
    // Remove any non-hexadecimal characters and convert to uppercase
    const cleanedInput = e.target.value.replace(/[^0-9A-Fa-f]/g, '').toUpperCase();
    setInputKey(cleanedInput);
  };

  const insertSpaces = (str) => {
    let spacedStr = '';
    for (let i = 0; i < str.length; i++) {
      spacedStr += str[i].toUpperCase();
      if ((i + 1) % 8 === 0 && i + 1 < str.length) {
        spacedStr += ' ';  // Add a space every 8 characters
      }
    }
    return spacedStr;
  };

  return (
    <div>
      <h2>Key Generator</h2>
      <p>Current Key: {insertSpaces(currentKey)}</p>
      <p>Next Key: {insertSpaces(nextKey)}</p>
      <input
        type="text"
        value={insertSpaces(inputKey)}
        onChange={handleInputChange}
        placeholder="Enter new key"
        maxLength={32}
      />
      <button onClick={handleUpdateKey}>Update Current Key</button>
      <button onClick={handleGenerateNew}>Generate Next Key</button>
    </div>
  );
};

export default KeyExpansion;
