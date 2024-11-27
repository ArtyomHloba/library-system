import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './ReaderList.module.css'

const ReaderList = () => {
  const [readers, setReaders] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/readers')
      .then(response => setReaders(response.data))
      .catch(error => {
        console.error('Ошибка при загрузке читателей:', error)
        setError('Ошибка при загрузке данных')
      })
  }, [])

  const handleDelete = id => {
    axios
      .delete(`http://localhost:3000/api/readers/${id}`)
      .then(() => {
        setReaders(prevReaders =>
          prevReaders.filter(reader => reader.id !== id)
        )
      })
      .catch(error => {
        console.error('Ошибка при удалении читателя:', error)
        setError('Не удалось удалить читателя')
      })
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Список читачів</h2>
      <ul className={styles.list}>
        {readers.map(reader => (
          <li key={reader.id} className={styles.listItem}>
            <span className={styles.name}>{reader.name}</span>
            <span className={styles.phone}>{reader.phoneNumber}</span>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(reader.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReaderList
