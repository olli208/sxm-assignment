import React, { useState } from 'react';
import useFetchData from './utils/useFecthData'
import Header from './components/Header'
import ResultSection from './components/ResultSection'
import FilterSection from './components/FilterSection'

function App() {
  const { data, fetchData } = useFetchData();
  const [filter, setFilter] = useState([]);
  const [filteredData, setFilterdData] = useState(data)

  const getFilters = items => items.filter((el, i, self) => i === self.findIndex(item => item.function === el.function)).map(el => el.function)

  const handleFilter = newFilter => {
    if (filter.includes(newFilter)) {
      setFilter(filter.filter(e => e !== newFilter))
      return
    }

    setFilter(oldFilter => [...oldFilter, newFilter])
  }

  const handleInput = e => {
    const regex = new RegExp(e.target.value, 'gi')
    setFilterdData(() => data.filter(el => el.function.match(regex) || el.first_name.match(regex) || el.last_name.match(regex)))
  }

  return (
    <div>
      <Header handleInput={handleInput} fetchData={fetchData} />

      {data && (
        <ResultSection data={filteredData || data} filter={filter}>
          <FilterSection data={getFilters(data)} handleFilter={handleFilter} filter={filter} />
        </ResultSection>
      )}
    </div>
  );
}

export default App;
