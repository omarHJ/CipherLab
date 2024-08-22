import React, { useState, useMemo } from 'react';
import PlaintextConverter from './PlaintextConverter';
import KeywordConverter from './KeywordConverter';
import MatrixWeightedSum from './MatrixWeightedSum';
import Mod26 from './Mod26';

const Body = () => {
    const [plaintext, setPlaintext] = useState('');
    const [keyword, setKeyword] = useState('');
    const [weightedSumResults, setWeightedSumResults] = useState([]);

    // Handle changes to plaintext, allowing only letters
    const handlePlaintextChange = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z]/g, ''); // Remove non-letter characters
        setPlaintext(value);
    };

    // Handle changes to keyword, allowing only letters
    const handleKeywordChange = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z]/g, ''); // Remove non-letter characters
        setKeyword(value);
    };

    const plaintextLength = plaintext.length;

    const plaintextArray = useMemo(() => {
        return plaintext.toUpperCase().split('').map(char => char.charCodeAt(0) - 65);
    }, [plaintext]);

    const keywordMatrix = useMemo(() => {
        if (plaintextLength === 0 || keyword.length === 0) return [];

        const keyArray = keyword.toUpperCase().split('').map(char => char.charCodeAt(0) - 65);
        const n = plaintextLength;

        while (keyArray.length < n * n) {
            keyArray.push(...keyArray);
        }

        const matrix = [];
        for (let i = 0; i < n; i++) {
            matrix.push(keyArray.slice(i * n, (i + 1) * n));
        }

        return matrix;
    }, [keyword, plaintextLength]);

    return (
        <>
            <h6>Hill Cipher</h6>
            <br />
            <main>
                <div className="para2">
                    <span className="para3">Enter Your PlainText (n)</span>
                    <textarea
                        id="T1"
                        value={plaintext}
                        onChange={handlePlaintextChange}
                    ></textarea>
                </div>
                <div className="para2">
                    <span className="para3">
                        Enter Your keyword (must be n<span style={{ fontSize: 'small' }}>2</span>)
                    </span>
                    <textarea
                        id="T2"
                        value={keyword}
                        onChange={handleKeywordChange}
                    ></textarea>
                </div>
            </main>
            <br />
            <p className="para3">using simple scheme (A = 0, B = 1, …, Z = 25) :</p>
            <br />
            <main style={{ fontSize: "x-large" }}>
                <PlaintextConverter plaintext={plaintext} />
                {keyword && plaintextLength > 0 && (
                    <>
                        <p style={{ transform: 'translateX(-20px) translateY(15px)', placeContent: 'center' }}>.</p>
                        <KeywordConverter
                            keyword={keyword}
                            plaintextLength={plaintextLength}
                        />
                    </>
                )}
                {keyword && plaintextLength > 0 && (
                    <>
                        <p style={{ transform: 'translateX(-10px) translateY(20px)', placeContent: 'center' }}>=</p>
                        <MatrixWeightedSum
                            plaintextArray={plaintextArray}
                            keywordMatrix={keywordMatrix}
                            onResult={setWeightedSumResults}
                        />
                    </>
                )}
            </main>
            <br />
            <main style={{ fontSize: "x-large" }}>
                {keyword && plaintextLength > 0 && (
                    <>
                        <Mod26 resultArray={weightedSumResults} />
                    </>
                )}
            </main>
            <br />
            <footer>
                ©{new Date().getFullYear()} Omar Jaber
            </footer>
        </>
    );
};

export default Body;
