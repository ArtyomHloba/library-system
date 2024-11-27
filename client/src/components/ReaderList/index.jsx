import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './ReaderList.module.css'

const ReaderList = () => {
  const [readers, setReaders] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/readers')
      .then(response => setReaders(response.data))
      .catch(error => console.error('Ошибка при загрузке читателей:', error))
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Список читачів</h2>
      <ul className={styles.list}>
        {readers.map(reader => (
          <li key={reader.id} className={styles.listItem}>
            <span className={styles.name}>{reader.name}</span>
            <span className={styles.phone}>{reader.phoneNumber}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReaderList
