import React from 'react';
import PropTypes from 'prop-types';

const Mod26 = ({ resultArray }) => {
    // Function to calculate the mode 26 of each result
    const calculateMode26 = (results) => {
        return results.map(result => result % 26);
    };

    // Function to convert numbers to corresponding letters
    const numberToLetter = (num) => {
        return String.fromCharCode(num + 65); // Convert to ASCII (A = 65)
    };

    if (!Array.isArray(resultArray) || resultArray.length === 0) {
        return <div>No results available for mode 26 calculation.</div>;
    }

    // Calculate mode 26 for each result
    const mode26Results = React.useMemo(() => calculateMode26(resultArray), [resultArray]);

    // Convert mode 26 results to letters
    const letterResults = mode26Results.map(numberToLetter);

    return (
        <main style={{width:'100%', justifyContent:'space-evenly'}}>
            <div>
                <span>Numeric Results:</span>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{fontSize:'x-large'}}>=</span>
                    <span style={{ fontSize: '48px', lineHeight: '0.75' }}>[</span>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        {mode26Results.map((num, index) => (
                            <div key={index} style={{ fontSize: '24px', lineHeight: '1' }}>
                                {num}
                            </div>
                        ))}
                    </div>
                    <span style={{ fontSize: '48px', lineHeight: '0.75' }}>]</span>
                </div>
            </div>
            <div>
                <span>CipherText:</span>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '48px', lineHeight: '0.75' }}>[</span>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        {letterResults.map((letter, index) => (
                            <div key={index} style={{ fontSize: '24px', lineHeight: '1' }}>
                                {letter}
                            </div>
                        ))}
                    </div>
                    <span style={{ fontSize: '48px', lineHeight: '0.75' }}>]</span>
                </div>
            </div>
        </main>
    );
};

Mod26.propTypes = {
    resultArray: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Mod26;
