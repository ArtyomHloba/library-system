import React, { useState } from 'react'
import axios from 'axios'
import styles from './BookForm.module.css'

const BookForm = ({ refreshBooks }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:3000/api/books', { title, author, year })
      .then(() => {
        refreshBooks()
        setTitle('')
        setAuthor('')
        setYear('')
      })
      .catch(error => console.error('Ошибка при добавлении книги:', error))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Додати книгу</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Назва:</label>
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Автор:</label>
          <input
            type='text'
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Рік:</label>
          <input
            type='number'
            value={year}
            onChange={e => setYear(e.target.value)}
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

export default BookForm
