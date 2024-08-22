// PlaintextConverter.js
import React, { useState, useEffect } from 'react';

const PlaintextConverter = ({ plaintext }) => {
    const [plaintextArray, setPlaintextArray] = useState([]);

    useEffect(() => {
        const convertToArray = () => {
            const array = plaintext.toUpperCase().split('').map(char => {
                return char.charCodeAt(0) - 65;
            });
            setPlaintextArray(array);
        };

        convertToArray();
    }, [plaintext]);

    return (
        <div className="para2" style={{placeItems:'center'}}>
            <span>
                PlainText:
            </span>
            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', placeContent:'center' }}>
                <span style={{ fontSize: '48px', lineHeight: '0.75' }}>[</span>
                <div style={{ display: 'inline-block', verticalAlign: 'middle'}}>
                    {plaintextArray.map((num, index) => (
                        <div key={index} style={{ fontSize: '24px', lineHeight: '1' }}>{num}</div>
                    ))}
                </div>
                <span style={{ fontSize: '48px', lineHeight: '0.75' }}>]</span>
            </span>
        </div>
    );
};

export default PlaintextConverter;