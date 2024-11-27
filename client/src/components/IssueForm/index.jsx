import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './IssueForm.module.css'

const IssueForm = ({ refreshIssues }) => {
  const [books, setBooks] = useState([])
  const [readers, setReaders] = useState([])
  const [bookId, setBookId] = useState('')
  const [readerId, setReaderId] = useState('')
  const [issueDate, setIssueDate] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Ошибка при загрузке книг:', error))

    axios
      .get('http://localhost:3000/api/readers')
      .then(response => setReaders(response.data))
      .catch(error => console.error('Ошибка при загрузке читателей:', error))
  }, [])

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:3000/api/issues', { bookId, readerId, issueDate })
      .then(() => {
        refreshIssues()
        setBookId('')
        setReaderId('')
        setIssueDate('')
      })
      .catch(error => console.error('Ошибка при выдаче книги:', error))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Видати книгу</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Книга:</label>
          <select
            value={bookId}
            onChange={e => setBookId(e.target.value)}
            className={styles.select}
          >
            <option value=''>Оберіть книгу</option>
            {books.map(book => (
              <option key={book.id} value={book.id}>
                {book.title} — {book.author}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Читач:</label>
          <select
            value={readerId}
            onChange={e => setReaderId(e.target.value)}
            className={styles.select}
          >
            <option value=''>Оберіть читача</option>
            {readers.map(reader => (
              <option key={reader.id} value={reader.id}>
                {reader.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Дата видачи:</label>
          <input
            type='date'
            value={issueDate}
            onChange={e => setIssueDate(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type='submit' className={styles.button}>
          Підтвердити
        </button>
      </form>
    </div>
  )
}

export default IssueForm
