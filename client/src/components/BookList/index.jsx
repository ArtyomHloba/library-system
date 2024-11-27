import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './BookList.module.css'

const BookList = () => {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/books')
      .then(response => {
        setBooks(response.data)
        setFilteredBooks(response.data)
      })
      .catch(error => {
        console.error('Ошибка при загрузке списка книг:', error)
        setError('Ошибка при загрузке данных')
      })
  }, [])

  const handleDelete = id => {
    axios
      .delete(`http://localhost:3000/api/books/${id}`)
      .then(() => {
        setBooks(prevBooks => {
          const updatedBooks = prevBooks.filter(book => book.id !== id)
          setFilteredBooks(updatedBooks)
          return updatedBooks
        })
      })
      .catch(error => {
        console.error('Ошибка при удалении книги:', error)
        setError('Не удалось удалить книгу')
      })
  }

  const handleSearch = e => {
    const value = e.target.value.toLowerCase()
    setSearchTerm(value)
    setFilteredBooks(
      books.filter(book =>
        `${book.title} ${book.author} ${book.year}`
          .toLowerCase()
          .includes(value)
      )
    )
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Список книг</h2>
      <input
        type='text'
        placeholder='Пошук по назві, автору або року'
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <ul className={styles.list}>
        {filteredBooks.map(book => (
          <li key={book.id} className={styles.listItem}>
            <span className={styles.title}>Книга: </span>
            {book.title} <span className={styles.title}>Автор: </span>
            {book.author} <span className={styles.title}>Рік:</span>({book.year}
            )
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(book.id)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
