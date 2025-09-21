import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;