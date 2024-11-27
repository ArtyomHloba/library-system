import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './BookList.module.css'

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Ошибка при загрузке списка книг:', error))
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Список книг</h2>
      <ul className={styles.list}>
        {books.map(book => (
          <li key={book.id} className={styles.listItem}>
            {book.title} — {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
