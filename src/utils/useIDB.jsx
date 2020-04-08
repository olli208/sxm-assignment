import { useState } from 'react';

function useIDB() {
  let db;
  const [DBEntries, setDBEntries] = useState([]);

  const DBOpenReq = indexedDB.open('saxumers')

  DBOpenReq.onupgradeneeded = ev => {
    db = ev.target.result;

    db.createObjectStore('saxumers_user', { keyPath: 'id' })
    alert('upgrade')
  }

  DBOpenReq.onsuccess = ev => {
    db = DBOpenReq.result
    console.log(`DB ON SUCCESS ${db.name}`)
    // viewDB();
  }

  DBOpenReq.onerror = e => {
    console.log('err', e)
  }

  const addDB = data => {
    const tx = db.transaction('saxumers_user', 'readwrite')
    const sxmUsers = tx.objectStore('saxumers_user')

    data.forEach((el, i) => {
      sxmUsers.add(el)
    })
  }

  const viewDB = () => {
    let users = [];
    const tx = db.transaction('saxumers_user', 'readonly')
    const sxmUsers = tx.objectStore('saxumers_user')
    sxmUsers.openCursor().onsuccess = e => {
      const cursor = e.target.result;

      if (cursor) {
        console.log('user value ', users.value)
        users.push(cursor.value)
        cursor.continue()
      } else {
        // can cause problems, check back later...
        console.log('USERS', users)
        setDBEntries(users)
      }
    }
  }

  return { addDB, viewDB, DBEntries }
}

export default useIDB;