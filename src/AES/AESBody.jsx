import React from 'react';
import AESSBox from './SBox';
import InputMessage from './Message';
import InputKey from './Key';
import XorTable from './Result';
import RC4 from './RC4';

function Body() {
  return (
    <>
      <h2>AES - 128<span style={{ fontSize: 'medium' }}>bit {'\u00A0'} </span>  Cipher</h2>
      
      <XorTable />
    </>
  );
}

export default Body;