import React from 'react';

function LocationInfoBox({ info }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50px',
        right: '50px',
        width: '400px',
        minHeight: '200px',
        padding: '20px',
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: '#fff',
        borderRadius: '10px',
        fontSize: '18px '
      }}
    >
      <h2>Event Location Info</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li style={{ padding: '5px 0' }}>
          ID : <strong> {info.id}</strong>
        </li>
        <li>
          Title <strong> {info.title}</strong>
        </li>
      </ul>
    </div>
  );
}

export default LocationInfoBox;
