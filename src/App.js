import React, { useEffect } from 'react';
import useFetchData from './utils/useFecthData'
import useIDB from './utils/useIDB'

function App() {
  const { result, fetchData } = useFetchData();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>1. fetch data (from db or url ????)</button>
        <ul>
          {
            result && result.map((el, i) => (
              <li>
                {el.last_name}
              </li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
