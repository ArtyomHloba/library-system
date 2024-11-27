import React, { useState, useEffect } from 'react'
import axios from 'axios'

const IssueForm = ({ refreshIssues }) => {
  const [books, setBooks] = useState([])
  const [readers, setReaders] = useState([])
  const [bookId, setBookId] = useState('')
  const [readerId, setReaderId] = useState('')
  const [issueDate, setIssueDate] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/books')
      .then(response => {
        setBooks(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching books!', error)
      })

    axios
      .get('http://localhost:3000/api/readers')
      .then(response => {
        setReaders(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching readers!', error)
      })
  }, [])

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:3000/api/issues', { bookId, readerId, issueDate })
      .then(response => {
        console.log('Book issued:', response.data)
        refreshIssues()
      })
      .catch(error => {
        console.error('There was an error issuing the book!', error)
      })
  }

  return (
    <div>
      <h2>Issue Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book:</label>
          <select value={bookId} onChange={e => setBookId(e.target.value)}>
            <option value=''>Select a book</option>
            {books.map(book => (
              <option key={book.id} value={book.id}>
                {book.title} by {book.author}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Reader:</label>
          <select value={readerId} onChange={e => setReaderId(e.target.value)}>
            <option value=''>Select a reader</option>
            {readers.map(reader => (
              <option key={reader.id} value={reader.id}>
                {reader.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Issue Date:</label>
          <input
            type='date'
            value={issueDate}
            onChange={e => setIssueDate(e.target.value)}
          />
        </div>

        <button type='submit'>Issue Book</button>
      </form>
    </div>
  )
}

export default IssueForm
