import React from 'react';
import spinner from './spinner.gif';

function Loader() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}
    >
      <img src={spinner} alt="Loading" style={{ width: '400px' }} />
      <h1 style={{ marginTop: '100px' }}>Fetching Data</h1>
    </div>
  );
}

export default Loader;
