import React from 'react';

function FilterList({ data, filter, setFilter }) {
  return (
    data.map(el => (
      <label>
        <input
          name="function"
          type="checkbox"
          checked={filter.includes(el)}
          onChange={() => setFilter(el)}
        />
        {el}
      </label>
    ))
  )
}

export default FilterList;