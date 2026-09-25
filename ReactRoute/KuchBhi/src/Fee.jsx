import React from 'react';

const Fee = () => {
  return (
    <div>
      <table style={{ border: '2px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '5px' }}>B.Tech</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>B.Com</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>BA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '5px' }}>1,28,000</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>1,24,000</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>1,30,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Fee;