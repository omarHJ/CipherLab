import React, { useState } from 'react';

function InputMessage() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const input = event.target.value.replace(/[^a-fA-F0-9]/g, ''); // Allow only hex characters
        const formattedInput = input.replace(/(.{2})/g, '$1 '); // Add space after every two characters
        setInputValue(formattedInput.trim().slice(0, 47)); // Limit to 32 characters and trim trailing space
    };

    const createTable = () => {
        // Initialize tableData with zeros
        const tableData = [
            ['00', '00', '00', '00'],
            ['00', '00', '00', '00'],
            ['00', '00', '00', '00'],
            ['00', '00', '00', '00']
        ];

        // Replace with actual input values where available
        const values = inputValue.trim().split(' ');
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (values[i * 4 + j]) {
                    tableData[i][j] = values[i * 4 + j];
                }
            }
        }

        return tableData;
    };

    return (
        <div className='Para2'>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                maxLength={47}
                placeholder="Enter 32 hex characters Message"
            />
            <div style={{ display:'flex', justifyContent:'center'}}>
                <table className='smallTable'>
                    <tbody>
                        {createTable().map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InputMessage;
