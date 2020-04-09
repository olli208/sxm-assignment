import React, { useState, useEffect } from 'react';
import useIDB from './useIDB';

// Check cache before requesting data...
function useFetchData() {
  const [result, setResult] = useState(null);
  const { addDB, DBEntries } = useIDB();

  let H = new Headers();
  let encode = window.btoa(`${process.env.USERNAME}:${process.env.PASSWORD}`)
  H.append('Authorization', `Basic ${encode}`);
  let req = new Request('https://sheetdb.io/api/v1/smyv5xfvpjqeh', {
    method: 'GET',
    headers: H,
  });

  async function fetchData() {
    console.log('get db data before fetching', DBEntries)
    if (DBEntries.length > 0) {
      console.log('FROM IDB')
      setResult(DBEntries)
    } else {
      try {
        const requestData = await fetch(req)
          .then(res => {
            return res
          })
          .catch(err => console.log('fetch error', err)) // fixme (catch doesnt handle all errors...)

        const json = await requestData.json();
        console.log('FROM FETCH')
        addDB(json)
        setResult(json)
      }
      catch (error) {
        setResult(error)
      }
    }
  };

  return { result, fetchData }
}

export default useFetchData