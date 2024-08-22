
import React from 'react';
import VigenereTable from './Vigenere/VigenereTable';

function App() {
  return (
    <>
      <div>
        <main>
          <VigenereTable />
        </main>
        <br />
        <footer>
          ©{new Date().getFullYear()} Omar Jaber
        </footer>
      </div>
    </>
  );
}

export default App;