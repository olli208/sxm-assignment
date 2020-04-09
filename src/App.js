import React from 'react';
import useFetchData from './utils/useFecthData'
import EmployeeList from './components/EmployeeList'

function App() {
  const { result, fetchData } = useFetchData();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>1. fetch data (from db or url ????)</button>
        {result && <EmployeeList data={result} />}
      </header>
    </div>
  );
}

export default App;
