import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    // Получаем все книги при загрузке компонента
    axios
      .get('http://localhost:3000/api/books')
      .then(response => {
        setBooks(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching books!', error)
      })
  }, [])

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
