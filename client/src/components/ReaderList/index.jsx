import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './ReaderList.module.css'

const ReaderList = () => {
  const [readers, setReaders] = useState([])
  const [filteredReaders, setFilteredReaders] = useState([]) // Состояние для отфильтрованных читателей
  const [searchTerm, setSearchTerm] = useState('') // Состояние для строки поиска
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/readers')
      .then(response => {
        setReaders(response.data)
        setFilteredReaders(response.data) // Изначально все читатели
      })
      .catch(error => {
        console.error('Ошибка при загрузке читателей:', error)
        setError('Ошибка при загрузке данных')
      })
  }, [])

  const handleDelete = id => {
    axios
      .delete(`http://localhost:3000/api/readers/${id}`)
      .then(() => {
        setReaders(prevReaders => {
          const updatedReaders = prevReaders.filter(reader => reader.id !== id)
          setFilteredReaders(updatedReaders) // Обновляем фильтрованный список
          return updatedReaders
        })
      })
      .catch(error => {
        console.error('Ошибка при удалении читателя:', error)
        setError('Не удалось удалить читателя')
      })
  }

  const handleSearch = e => {
    const value = e.target.value.toLowerCase()
    setSearchTerm(value)
    setFilteredReaders(
      readers.filter(reader =>
        `${reader.name} ${reader.phoneNumber}`.toLowerCase().includes(value)
      )
    )
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Список читачів</h2>
      <input
        type='text'
        placeholder="Пошук за ім'ям або телефоном"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <ul className={styles.list}>
        {filteredReaders.map(reader => (
          <li key={reader.id} className={styles.listItem}>
            <span className={styles.name}>Ім'я: {reader.name}</span>
            <span className={styles.phone}>Телефон: {reader.phoneNumber}</span>
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
