import React, { useState } from 'react';
import useFetchData from './utils/useFecthData'
import EmployeeList from './components/EmployeeList'
import FilterList from './components/FilterList'

function App() {
  const { result, fetchData } = useFetchData();
  const [filter, setFilter] = useState([]);
  const [filterdResult, setFilterdResult] = useState(result)

  const getFilters = items => items.filter((el, i, self) => i === self.findIndex(item => item.function === el.function)).map(el => el.function)

  const handleFilter = newFilter => {
    if (filter.includes(newFilter)) {
      setFilter(filter.filter(e => e !== newFilter))
      return
    }

    setFilter(oldFilter => [...oldFilter, newFilter])
  }

  const handleInput = e => {
    console.log(e.target.value)
    const regex = new RegExp(e.target.value, 'gi')
    setFilterdResult(() => result.filter(el => {
      return el.function.match(regex) || el.first_name.match(regex)
    }))
  }

  console.log('ya boi', filterdResult)

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={handleInput} />
        <button onClick={fetchData}>1. fetch data</button>
      </header>

      <section>
        {result && (
          <>
            <div>
              filter by:
              <FilterList data={getFilters(result)} filter={filter} setFilter={handleFilter} />
            </div>
            <EmployeeList data={filterdResult || result} filter={filter} />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
