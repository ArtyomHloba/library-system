import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './IssueList.module.css'

const IssueList = () => {
  const [issues, setIssues] = useState([])
  const [filteredIssues, setFilteredIssues] = useState([]) // Фильтрованные записи
  const [searchQuery, setSearchQuery] = useState('') // Строка поиска
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/issues')
      .then(response => {
        setIssues(response.data)
        setFilteredIssues(response.data) // Изначально отображаются все записи
      })
      .catch(error => {
        console.error('Ошибка при получении списка выдачи!', error)
        setError('Ошибка при загрузке данных')
      })
  }, [])

  const handleDelete = id => {
    axios
      .delete(`http://localhost:3000/api/issues/${id}`)
      .then(() => {
        setIssues(prevIssues => prevIssues.filter(issue => issue.id !== id))
        setFilteredIssues(prevIssues =>
          prevIssues.filter(issue => issue.id !== id)
        )
      })
      .catch(error => {
        console.error('Ошибка при удалении записи!', error)
        setError('Не удалось удалить запись')
      })
  }

  const handleSearch = e => {
    const value = e.target.value.toLowerCase()
    setSearchQuery(value)
    setFilteredIssues(
      issues.filter(
        issue =>
          issue.book.title.toLowerCase().includes(value) ||
          issue.reader.name.toLowerCase().includes(value) ||
          issue.issueDate.includes(value)
      )
    )
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Список виданих книг</h2>
      <input
        type='text'
        value={searchQuery}
        onChange={handleSearch}
        placeholder='Пошук за книгою, читачем або датою'
        className={styles.searchInput}
      />
      <ul className={styles.list}>
        {filteredIssues.map(issue => (
          <li key={issue.id} className={styles.listItem}>
            <span className={styles.book}>
              Книга: <strong>{issue.book.title}</strong>
            </span>
            <span className={styles.reader}>
              Читач: <strong>{issue.reader.name}</strong>
            </span>
            <span className={styles.date}>
              Дата видачи: <strong>{issue.issueDate}</strong>
            </span>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(issue.id)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IssueList
