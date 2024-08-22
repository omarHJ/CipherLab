import React, { useState, useEffect } from 'react';

const VigenereCipher = ({ message, keyText, onCharacterClick }) => {
  const [cipherText, setCipherText] = useState('');

  const applyVigenereCipher = (message, key) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cipheredText = '';

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i].toUpperCase();
      const keyChar = key[i % key.length].toUpperCase();

      if (alphabet.includes(messageChar)) {
        const messageIndex = alphabet.indexOf(messageChar);
        const keyIndex = alphabet.indexOf(keyChar);
        const cipherIndex = (messageIndex + keyIndex) % alphabet.length;
        cipheredText += alphabet[cipherIndex];
      } else {
        cipheredText += messageChar;
      }
    }

    return cipheredText;
  };

  useEffect(() => {
    if (keyText.length > 0) {
      const cipheredText = applyVigenereCipher(message, keyText);
      setCipherText(cipheredText);
    }
  }, [message, keyText]);

  // Split cipherText into an array of characters
  const cipherTextArray = cipherText.split('');


  useEffect(() => {
    if (keyText.length > 0) {
      const cipheredText = applyVigenereCipher(message, keyText);
      setCipherText(cipheredText);
    }
  }, [message, keyText]);

  return (
    <div id="VigenereCipherText" style={{ textAlign: 'center' }}>
      {cipherText.split('').map((char, index) => (
        <p 
          key={index} 
          onClick={() => onCharacterClick(char, index)}
          style={{ cursor: 'pointer' }}
        >
          {char}
        </p>
      ))}
    </div>
  );
};

export default VigenereCipher;