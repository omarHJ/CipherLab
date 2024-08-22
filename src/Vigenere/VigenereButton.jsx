import React from 'react';

const VigenereButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      Encrypt
    </button>
  );
};

export default VigenereButton;
