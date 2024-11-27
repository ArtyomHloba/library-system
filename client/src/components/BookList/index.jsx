import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './BookList.module.css'

const BookList = () => {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => {
        console.error('Ошибка при загрузке списка книг:', error)
        setError('Ошибка при загрузке данных')
      })
  }, [])

  const handleDelete = id => {
    axios
      .delete(`http://localhost:3000/api/books/${id}`)
      .then(() => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id))
      })
      .catch(error => {
        console.error('Ошибка при удалении книги:', error)
        setError('Не удалось удалить книгу')
      })
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Список книг</h2>
      <ul className={styles.list}>
        {books.map(book => (
          <li key={book.id} className={styles.listItem}>
            {book.title} — {book.author} ({book.year})
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(book.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
