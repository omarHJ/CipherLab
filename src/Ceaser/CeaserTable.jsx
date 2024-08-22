import React, { useState } from 'react';

const CaesarCipher = () => {
    const [text, setText] = useState('');
    const [shift, setShift] = useState(0);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const shiftAlphabet = (shift) => {
        const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
        return shiftedAlphabet;
    };

    const encryptText = (text, shift) => {
        const shiftedAlphabet = shiftAlphabet(shift);
        return text
            .toUpperCase()
            .split('')
            .map(char => {
                const index = alphabet.indexOf(char);
                if (index !== -1) {
                    return shiftedAlphabet[index];
                }
                return char;
            })
            .join('');
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleShiftChange = (event) => {
        const newShift = parseInt(event.target.value);
        setShift(newShift);

        // Flip the cubes
        let cubes = document.querySelectorAll('.cube');
        cubes.forEach(cube => {
            cube.classList.add('flip');
            setTimeout(() => {
                cube.classList.remove('flip');
            }, 250);
        });
    };

    return (
        <div id='mainDiv'>
            <h1>Caesar Cipher</h1>
            <table>
                <tbody>
                    <tr>
                        {shiftAlphabet(shift).split('').map((value, index) => (
                            <td key={index}>
                                <div className="cube">
                                    <div className="face front">{value}</div>
                                    <div className="face back"></div>
                                </div>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <div className='nextdiv'>
                <div className='nextnextdiv'>
                    <div>
                        <p style={{textAlign: 'left', marginLeft:'2%'}}>Enter PlainText:</p>
                        <textarea id="inputText" value={text} onChange={handleTextChange} rows={4} cols={50} />
                    </div>
                    <div>
                        <p style={{textAlign: 'left'}}>Shift Number:</p>
                        <input type="number" id="shiftNumber" value={shift} onChange={handleShiftChange} />
                    </div>
                </div>
                <div className='nextnextdiv' style={{  marginTop: '5%'}}>
                    <h3>CipherText:</h3>
                    <p id='nexDivP'>{encryptText(text, shift)}</p>
                </div>
            </div>
        </div>
    );
};

export default CaesarCipher;