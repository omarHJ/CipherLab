import React from 'react';

const AlphabetTable = ({ selectedChar }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const getCellId = (row, col) => `cell-${row}-${col}`;

  const getBackgroundColor = (rowLetter, colLetter) => {
    if (!selectedChar) return 'white';
    
    if (rowLetter === selectedChar.key && colLetter === selectedChar.plain) {
      return 'yellow';
    } else if (rowLetter === selectedChar.key || colLetter === selectedChar.plain) {
      return 'lightblue';
    }
    
    return 'white';
  };

  const headerRow = alphabet.map((letter, col) => (
    <th 
      key={col + 1} 
      id={getCellId(0, col + 1)}
      style={{
        backgroundColor: selectedChar && letter === selectedChar.plain ? 'lightblue' : 'white',
      }}
    >
      {letter}
    </th>
  ));

  const tableRows = alphabet.map((rowLetter, rowIndex) => (
    <tr key={rowIndex + 1}>
      <th 
        id={getCellId(rowIndex + 1, 0)} 
        style={{ 
          border: '3px solid teal',
          backgroundColor: selectedChar && rowLetter === selectedChar.key ? 'lightblue' : 'white',
        }}
      >
        {rowLetter}
      </th>
      {alphabet.map((colLetter, colIndex) => (
        <td 
          key={colIndex + 1} 
          id={getCellId(rowIndex + 1, colIndex + 1)} 
          style={{ 
            border: '1px solid black', 
            height: '2px',
            backgroundColor: getBackgroundColor(rowLetter, colLetter),
          }}
        >
          {alphabet[(rowIndex + colIndex) % alphabet.length]}
        </td>
      ))}
    </tr>
  ));

  return (
    <section style={{ display: 'flex', flexDirection: 'column', fontSize: 'small', width: '100%' }}>
      <span style={{ textAlign: 'center', marginBottom: '-15px', marginTop: '8px' }}>PlainText</span>
      <section style={{ display: 'flex', flexDirection: 'row', fontSize: 'small', width: '95%' }}>
        <p style={{ textAlign: 'center', placeContent: 'center', marginRight: '-15px', height: '25%', marginTop: '250px' }} className='rotated-text'>Keyword</p>
        <table style={{ borderCollapse: 'collapse', border: 'teal 3px solid', width: '100%', fontSize: 'x-small' }}>
          <thead>
            <tr><th style={{ border: '3px solid teal' }}>&nbsp;</th>
              {headerRow.map((headerCell, index) => (
                React.cloneElement(headerCell, {
                  key: `header-${index}`,
                  style: { ...headerCell.props.style, border: '3px solid teal' }
                })
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default AlphabetTable;