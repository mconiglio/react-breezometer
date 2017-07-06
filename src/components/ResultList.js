import React from 'react';
import Result from './Result';

const ResultList = ({ results }) => (
  <table>
    <thead>
      <th>Country</th>
      <th>Result description</th>
      <th>AQI</th>
      <th>Color</th>
    </thead>
    <tbody>
      {results.map(result => {
        const { id, name, description, aqi, color } = result

        return (
          <Result
            key={id}
            name={name}
            description={description}
            aqi={aqi}
            color={color}
          />
        );
      })}
    </tbody>
  </table>
);

export default ResultList;
