import { useState } from 'react';
import useIDB from './useIDB';

// Check cache before requesting data...
function useFetchData() {
  const [data, setData] = useState([]);
  const { addDB, DBEntries } = useIDB();

  let H = new Headers();
  let encode = window.btoa(`${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`)
  H.append('Authorization', `Basic ${encode}`);
  let req = new Request('https://sheetdb.io/api/v1/smyv5xfvpjqeh', {
    method: 'GET',
    headers: H,
  });

  async function fetchData() {
    console.log('get db data before fetching', DBEntries)
    if (DBEntries.length > 0) {
      console.log('FROM IDB')
      setData(DBEntries)
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
        setData(json)
      }
      catch (error) {
        setData(error)
      }
    }
  };

  return { data, fetchData }
}

export default useFetchData