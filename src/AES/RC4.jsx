import React, { useState } from 'react';

const RC4 = () => {
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState('');
  const [ciphertext, setCiphertext] = useState('');

  const encrypt = () => {
    const plainArray = Array.from(plaintext);
    const keyArray = Array.from(key);

    // Initialization
    let S = Array.from(Array(256).keys());
    let j = 0;

    // Key-scheduling algorithm
    for (let i = 0; i < 256; i++) {
      j = (j + S[i] + keyArray[i % keyArray.length]) % 256;
      [S[i], S[j]] = [S[j], S[i]];
    }

    // Pseudo-random generation algorithm
    let i = 0;
    j = 0;
    let cipherArray = [];
    for (let n = 0; n < plainArray.length; n++) {
      i = (i + 1) % 256;
      j = (j + S[i]) % 256;
      [S[i], S[j]] = [S[j], S[i]];
      const t = (S[i] + S[j]) % 256;
      const keystream = S[t];
      cipherArray.push(plainArray[n].charCodeAt(0) ^ keystream);
    }

    setCiphertext(String.fromCharCode(...cipherArray));
  };

  const decrypt = () => {
    encrypt();
  };

  return (
    <div>
      <h2>RC4 Simplified Cipher</h2>
      <label>
        Plaintext:
        <input
          type="text"
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value)}
        />
      </label>
      <br />
      <label>
        Key:
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </label>
      <br />
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt}>Decrypt</button>
      <p>Ciphertext: {ciphertext}</p>
    </div>
  );
};

export default RC4;