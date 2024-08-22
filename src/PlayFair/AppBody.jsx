import React from 'react';
import FirstCipher from './FirstCipher.jsx';
import ButtonGenerateKey from './ButtonGenerateKey.jsx';
import ButtonEncrypt from './ButtonEncrypt.jsx';

const HtmlBody = () => {
    return (
        <>
            <span>
                <h6>Play Fair Cipher</h6>
                <main>
                    <div className="para2">
                        <FirstCipher />
                        <span style={{ fontSize: 'large', margin: '20px 0 -50px 0' }}> 1) Enter your key word</span>
                        <p className="para1">
                            <input type="text" id="keywordInput" placeholder="Enter your keyword" autoFocus />
                            <ButtonGenerateKey />
                        </p>
                    </div>
                    <div className="para2">
                        <span className="para3">
                            2) Enter Your Message
                        </span>
                        <textarea id="T1"></textarea>
                        <span className="para3">
                            Removing Spaces and Capitalize the Letters
                        </span>
                        <textarea id="T2" readOnly></textarea>
                        <span className="para3">
                            Add (X) Between Doubles & the End of Message if it has Odd Number of Characters
                        </span>
                        <textarea id="T3" readOnly></textarea>
                        <span className="para3">
                            Message To Encrypt
                        </span>
                        <textarea id="T4" readOnly></textarea>
                        <ButtonEncrypt />
                    </div>
                </main>
                <div className="scroll-down-container" id="scrollArrow" style={{ textAlign: 'center' }}>
                    <a href="#CipherText" className="scroll-down">CipherText
                        <span>&darr;</span>
                    </a>
                </div>
                <div id="CipherText" style={{ marginTop: '50px', textAlign: 'center' }}></div>
                <br />
                <br />
                <div id="tryagain">
                    <a onClick={() => window.location.reload()}> Want to Try Again ? </a>
                </div>
                <br />
                <footer>
                    ©{new Date().getFullYear()} Omar Jaber
                </footer>
            </span>
        </>
    );
};

export default HtmlBody;
