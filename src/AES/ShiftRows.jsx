import React, { useState, useEffect } from 'react';
import AESPic from './AES.png';
import MixColumnsTable from './MixColTable';
import KeyExpansion from './KeyExpansion';

function ShiftRowsTable({ table, initialKey }) {
    const [shiftedTable, setShiftedTable] = useState([]);

    useEffect(() => {
        if (Array.isArray(table) && table.length > 0 && Array.isArray(table[0])) {
            const shifted = shiftRows(table);
            console.log('shiftedTable:', shifted);
            setShiftedTable(shifted);
        } else {
            console.error('Invalid input data in ShiftRowsTable component');
        }
    }, [table]);

    // Function to perform ShiftRows operation
    const shiftRows = (table) => {
        if (!Array.isArray(table) || table.length === 0 || !Array.isArray(table[0])) {
            console.error('Invalid input data in ShiftRows component');
            return [];
        }

        const shifted = table.map((row) => [...row]); // Create a copy of each row

        // Shift each row according to its index
        for (let i = 1; i < 4; i++) {
            shifted[i] = shifted[i].slice(i).concat(shifted[i].slice(0, i));
        }

        return shifted;
    };

    return (
        <>
            <main style={{ justifyContent: 'space-between' }}>
                <div className="para4">
                    <img id='AESPic' src={AESPic} />
                </div>
                <div className="para4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', placeItems: 'center' }}>
                    <h2>ShiftRows Result</h2>
                    <table>
                        <tbody>
                            {shiftedTable.map((row, rowIndex) => (
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
            <main style={{ justifyContent: 'space-between' }}>
                <div className="para4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', placeItems: 'center' }}>
                    <MixColumnsTable shiftedTable={shiftedTable} />
                </div>
                <div className="para4">
                    <img id='AESPic' src={AESPic} />
                </div>           
            </main>
            <main>
                <div>
                    <KeyExpansion />
                </div>
            </main>
        </>
    );
}

export default ShiftRowsTable;