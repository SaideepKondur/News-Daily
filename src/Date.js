import React from 'react';
import './News.css';

const Date = ({ datetime }) => {
  const extractDate = (datetimeString) => {
    return datetimeString.split('T')[0];
  };

  const formattedDate = extractDate(datetime);

  return (
    <div>
      <p>Published on: {formattedDate}</p>
    </div>
  );
};

export default Date;