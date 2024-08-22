import React, { useEffect } from 'react';

const FirstCipher = () => {
    // Define the 'key' array containing characters you want to populate in the table
    const key = [
        ['A', 'B', 'C', 'D', 'E', 'F'],
        ['G', 'H', 'I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P', 'Q', 'R'],
        ['S', 'T', 'U', 'V', 'W', 'X'],
        ['Y', 'Z', '0', '1', '2', '3'],
        ['4', '5', '6', '7', '8', '9']
    ];

    useEffect(() => {
        // This effect will run after the component mounts
        // Iterate through each row and cell
        for (let i = 0; i < 6; ++i) {
            for (let j = 0; j < 6; ++j) {
                // Get the corresponding table cell by ID
                const cellId = `cell${i}${j}`;
                const cell = document.getElementById(cellId);

                // Populate the cell with the value from the 'key' array
                if (cell) { // Check if cell exists (for safety)
                    cell.textContent = key[i][j];
                }
            }
        }
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
    <div className='para2'>
        <table id='keyTable'>
            <tbody>
                {key.map((row, i) => (
                    <tr key={`row${i}`}>
                        {row.map((value, j) => (
                            <td key={`cell${i}${j}`}>
                                <div className="cube">
                                    <div className="face front" id={`cell${i}${j}`}>{value}</div>
                                    <div className="face back"></div>
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};

export default FirstCipher;
