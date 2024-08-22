import React, { useState } from 'react';
import VigenereButton from './VigenereButton';
import VigenereCipher from './VigenereCipher';
import AlphabetTable from './Vigenere';

const KeyRepeater = () => {
  const [message, setMessage] = useState('');
  const [keyText, setKeyText] = useState('');
  const [showCipher, setShowCipher] = useState(false);
  const [selectedChar, setSelectedChar] = useState(null);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'Vmessage') {
      setMessage(value.replace(/[^a-zA-Z]/g, '')); // Remove everything except alphabet from message
    } else if (id === 'Vkey') {
      setKeyText(value);
    }
    setShowCipher(false); // Hide cipher whenever input changes
  };

  const generateKey = () => {
    if (keyText.length === 0) return '';

    const messageOnlyAlphabets = message.replace(/[^a-zA-Z]/g, ''); // Remove everything except alphabet from message

    let repeatedKey = '';
    let index = 0;
    for (let i = 0; i < messageOnlyAlphabets.length; i++) {
      repeatedKey += keyText[index];
      index = (index + 1) % keyText.length;
    }
    setKeyText(repeatedKey); // Update keyText state with generated key
    setShowCipher(true); // Show cipher after generating key
  };

  const handleCharacterClick = (char, index) => {
    const plainTextChar = message[index].toUpperCase();
    const keyChar = keyText[index % keyText.length].toUpperCase();
    setSelectedChar({ cipher: char, plain: plainTextChar, key: keyChar });
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        <p style={{ margin: '18px 0' }}>Vigenere Cipher</p>
        <span className="para3" style={{ marginLeft: '6%' }}>
          Enter Your Message (PlainText)
        </span>
        <textarea
          id="Vmessage"
          style={{ width: '88%' }}
          onChange={handleInputChange}
          value={message}
        />
        <span className="para3" style={{ marginLeft: '6%' }}>
          Enter Your Keyword
        </span>
        <div style={{ display: 'flex', flexDirection: 'row', width: '93%', marginLeft: '4.5%' }}>
          <textarea
            id="Vkey"
            onChange={handleInputChange}
            value={keyText}
          />
          <VigenereButton handleClick={generateKey} />
        </div>
        {showCipher && (
          <div>
            <p style={{ fontSize: 'x-large', marginBottom:'0px', textAlign:'left'}}>CipherText : </p>
            <VigenereCipher message={message} keyText={keyText} onCharacterClick={handleCharacterClick} />
          </div>
        )}
      </div>
      <div style={{ width: '100%' }}>
        <AlphabetTable selectedChar={selectedChar} />
      </div>
    </>
  );
};

export default KeyRepeater;