import React, { useState } from 'react';
import useFetchData from './utils/useFecthData'
import EmployeeList from './components/EmployeeList'
import FilterList from './components/FilterList'

function App() {
  const { result, fetchData } = useFetchData();
  const [filter, setFilter] = useState([]);

  const getFilters = items => items.filter((el, i, self) => i === self.findIndex(item => item.function === el.function)).map(el => el.function)

  const handleFilter = newFilter => {
    if (filter.includes(newFilter)) return

    setFilter(oldFilter => {
      return [...oldFilter, newFilter]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>1. fetch data</button>
      </header>

      <section>
        {result && (
          <>
            <div>
              filter by:
              <FilterList data={getFilters(result)} setFilter={handleFilter} />
            </div>
            <EmployeeList data={result} filter={filter} />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
