import React, { useState, useEffect } from 'react';

const KeywordConverter = ({ keyword, plaintextLength }) => {
    const [keywordMatrix, setKeywordMatrix] = useState([]);

    useEffect(() => {
        const convertToMatrix = () => {
            if (plaintextLength === 0 || keyword.trim().length === 0) return;

            const n = plaintextLength;
            const keyArray = keyword.toUpperCase().split('').map(char => char.charCodeAt(0) - 65);

            // Ensure the keyword is long enough, repeating if necessary
            while (keyArray.length < n * n) {
                keyArray.push(...keyArray);
            }

            // Create n x n matrix
            const matrix = [];
            for (let i = 0; i < n; i++) {
                matrix.push(keyArray.slice(i * n, (i + 1) * n));
            }

            setKeywordMatrix(matrix);
        };

        convertToMatrix();
    }, [keyword, plaintextLength]);

    return (
        <div className="para2" style={{placeItems:'center'}}>
            <span>Keyword:</span>
            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', placeContent:'center' }}>
                <span style={{ fontSize: '48px', lineHeight: '0.75' }}>[</span>
                <div style={{ display: 'inline-block', verticalAlign: 'middle'}}>
                    {keywordMatrix.map((row, index) => (
                        <div key={index} style={{ fontSize: '24px', lineHeight: '1', wordSpacing:'7px' }}>{row.join('   ')}</div>
                    ))}
                </div>
                <span style={{ fontSize: '48px', lineHeight: '0.75' }}>]</span>
            </span>
        </div>
    );
};

export default KeywordConverter;
