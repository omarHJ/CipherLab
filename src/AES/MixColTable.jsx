import React, { useState, useEffect } from 'react';

function MixColumnsTable({ shiftedTable }) {
    const [mixedTable, setMixedTable] = useState([]);

    useEffect(() => {
        if (Array.isArray(shiftedTable) && shiftedTable.length > 0 && Array.isArray(shiftedTable[0])) {
            const mixed = mixColumns(shiftedTable);
            console.log('mixedTable:', mixed);
            setMixedTable(mixed);
        } else {
            console.error('Invalid input data in MixColumnsTable component');
        }
    }, [shiftedTable]);

    // Function to perform MixColumns operation
    const mixColumns = (table) => {
        if (!Array.isArray(table) || table.length === 0 || !Array.isArray(table[0])) {
            console.error('Invalid input data in MixColumns component');
            return [];
        }

        const mixed = table.map((row) => [...row]); // Create a copy of each row

        // Perform MixColumns operation on each column
        for (let col = 0; col < 4; col++) {
            const column = [table[0][col], table[1][col], table[2][col], table[3][col]];
            const mixedColumn = mixSingleColumn(column);

            for (let row = 0; row < 4; row++) {
                mixed[row][col] = mixedColumn[row];
            }
        }

        return mixed;
    };

    // Function to perform MixColumns operation on a single column
    const mixSingleColumn = (column) => {
        const mixedColumn = [];

        // Define the MixColumns matrix
        const mixMatrix = [
            [2, 3, 1, 1],
            [1, 2, 3, 1],
            [1, 1, 2, 3],
            [3, 1, 1, 2]
        ];

        // Perform matrix multiplication
        for (let i = 0; i < 4; i++) {
            let sum = 0;
            for (let j = 0; j < 4; j++) {
                sum ^= multiplyBy(mixMatrix[i][j], column[j]);
            }
            mixedColumn.push(sum);
        }

        return mixedColumn;
    };

    // Function to multiply two values in the Galois field
    const multiplyBy = (a, b) => {
        if (a === 0 || b === 0) {
            return 0;
        }

        let result = 0;
        let temp = b;

        for (let i = 0; i < 8; i++) {
            if (a & 1) {
                result ^= temp;
            }
            a >>= 1;
            temp <<= 1;
            if (temp & 0x100) {
                temp ^= 0x11b;
            }
        }

        return result;
    };

    return (
        <div className="para4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', placeItems: 'center' }}>
            <h2>MixColumns Result</h2>
            <table>
                <tbody>
                    {mixedTable.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex}>{cell.toString(16).padStart(2, '0')}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MixColumnsTable;