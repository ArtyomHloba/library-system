import React, { useState } from 'react'
import axios from 'axios'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:3000/api/books', { title, author, year })
      .then(response => {
        console.log('Book created:', response.data)
      })
      .catch(error => {
        console.error('There was an error creating the book!', error)
      })
  }

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type='text'
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type='number'
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </div>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default BookForm
