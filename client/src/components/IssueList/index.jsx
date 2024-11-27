import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './IssueList.module.css'

const IssueList = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/issues')
      .then(response => {
        setIssues(response.data)
      })
      .catch(error => {
        console.error('Ошибка при получении списка выдачи!', error)
      })
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Список виданих книг</h2>
      <ul className={styles.list}>
        {issues.map(issue => (
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
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IssueList
