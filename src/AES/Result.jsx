import React, { useState } from 'react';
import ResultTable from './resultToSBox';

function XorTable() {
    const [messageInput, setMessageInput] = useState('00000000000000000000000000000000');
    const [keyInput, setKeyInput] = useState('00000000000000000000000000000000');
    const [result, setResult] = useState([
        ['00', '00', '00', '00'],
        ['00', '00', '00', '00'],
        ['00', '00', '00', '00'],
        ['00', '00', '00', '00'],
    ]);

    const handleChangeMessage = (event) => {
        const input = event.target.value.replace(/[^a-fA-F0-9]/g, ''); // Allow only hex characters
        const formattedInput = input.toUpperCase().slice(0, 32); // Limit to 32 characters
        setMessageInput(formattedInput);
    };

    const handleChangeKey = (event) => {
        const input = event.target.value.replace(/[^a-fA-F0-9]/g, ''); // Allow only hex characters
        const formattedInput = input.toUpperCase().slice(0, 32); // Limit to 32 characters
        setKeyInput(formattedInput);
    };

    const calculateXor = () => {
        const message = formatInput(messageInput);
        const key = formatInput(keyInput);

        const xorResult = [];
        for (let i = 0; i < 4; i++) {
            const row = [];
            for (let j = 0; j < 4; j++) {
                const hexValue = (
                    parseInt(message[i][j], 16) ^ parseInt(key[i][j], 16)
                ).toString(16);
                row.push(hexValue.padStart(2, '0')); // Ensure two-digit hex representation
            }
            xorResult.push(row);
        }
        setResult(xorResult);
    };

    const formatInput = (input) => {
        const formatted = [];
        for (let i = 0; i < 4; i++) {
            formatted.push([
                input.slice(i * 8, i * 8 + 2),
                input.slice(i * 8 + 2, i * 8 + 4),
                input.slice(i * 8 + 4, i * 8 + 6),
                input.slice(i * 8 + 6, i * 8 + 8),
            ]);
        }
        return formatted;
    };

    return (
        <>
            <main >
                <div className='para4'>
                    <h3>Enter 32 hex Message</h3>
                    <input
                        type="text"
                        value={messageInput}
                        onChange={handleChangeMessage}
                        maxLength={32}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <table className="smallTable">
                            <tbody>
                                {formatInput(messageInput).map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, colIndex) => (
                                            <td key={colIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{ placeContent: 'center', fontSize: 'xx-large', marginTop: '140px' }}>⊕</div>
                <div className='para4'>
                    <h3>Enter 32 hex Key</h3>
                    <input
                        type="text"
                        value={keyInput}
                        onChange={handleChangeKey}
                        maxLength={32}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <table className="smallTable">
                            <tbody>
                                {formatInput(keyInput).map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, colIndex) => (
                                            <td key={colIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{ placeContent: 'center', fontSize: 'xx-large', marginTop: '140px' }}>=</div>
                <div className='para4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', placeItems: 'center' }}>
                    <h3>XOR Result:</h3>
                    <table className="smallTable">
                        <tbody>
                            {result.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, colIndex) => (
                                        <td key={colIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <button onClick={calculateXor}>Calculate XOR</button>
            {keyInput.length === 32 && (
                <ResultTable result={result} />
            )}
        </>
    );
}

export default XorTable;
