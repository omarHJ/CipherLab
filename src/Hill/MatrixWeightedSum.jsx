import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const MatrixWeightedSum = ({ plaintextArray, keywordMatrix, onResult }) => {
    const calculateWeightedSum = (matrix, weights) => {
        return matrix.map(row =>
            row.reduce((sum, value, index) => sum + value * (weights[index] || 0), 0)
        );
    };

    useEffect(() => {
        if (keywordMatrix.length > 0 && plaintextArray.length > 0) {
            const resultMatrix = calculateWeightedSum(keywordMatrix, plaintextArray);
            onResult(resultMatrix);
        }
    }, [keywordMatrix, plaintextArray, onResult]);

    if (keywordMatrix.length === 0 || plaintextArray.length === 0) {
        return <div>No data available for calculation.</div>;
    }

    const resultMatrix = calculateWeightedSum(keywordMatrix, plaintextArray);

    return (
        <div className="para2" style={{ placeItems: 'center' }}>
            <span>Weighted Sum Result:</span>
            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', placeContent:'center' }}>
                <span style={{ fontSize: '48px', lineHeight: '0.75' }}>[</span>
                <div style={{ display: 'inline-block', verticalAlign: 'middle'}}>
                    {resultMatrix.map((num, index) => (
                        <div key={index} style={{ fontSize: '24px', lineHeight: '1' }} >{num}</div>
                    ))}
                </div>
                <span style={{ fontSize: '48px', lineHeight: '0.75' }}>]</span>
                <span style={{fontSize:'medium'}}>mod26</span>
            </span>
        </div>
    );
};

MatrixWeightedSum.propTypes = {
    plaintextArray: PropTypes.arrayOf(PropTypes.number).isRequired,
    keywordMatrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    onResult: PropTypes.func.isRequired,
};

export default MatrixWeightedSum;