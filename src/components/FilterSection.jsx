import React from 'react';
import FilterList from './FilterList'

function FilterSection({ data, filter, handleFilter }) {
  return (
    <div>
      filter by:
      <FilterList data={data} filter={filter} setFilter={handleFilter} />
    </div>
  )
}

export default FilterSection;