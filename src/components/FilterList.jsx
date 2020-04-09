import React from 'react';

function FilterList({ data, setFilter }) {
  return (
    data.map(el => {
      return <button onClick={() => setFilter(el)}>{el}</button>
    }
    )
  )
}

export default FilterList;