import React from 'react';

const Result = ({ color, description, aqi, name }) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>
    <td>{aqi}</td>
    <td style={{ backgroundColor: color }}></td>
  </tr>
);

export default Result;
