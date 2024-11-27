import React, { useState, useEffect } from 'react'
import BookList from './components/BookList'
import BookForm from './components/BookForm'
import ReaderList from './components/ReaderList'
import IssueForm from './components/IssueForm'
import IssueList from './components/IssueList'
import ReaderForm from './components/ReaderForm' // Импортируем новый компонент
import axios from 'axios'

const App = () => {
  const [issues, setIssues] = useState([])
  const [books, setBooks] = useState([])
  const [readers, setReaders] = useState([])

  const refreshIssues = () => {
    axios
      .get('http://localhost:3000/api/issues')
      .then(response => {
        setIssues(response.data)
      })
      .catch(error => {
        console.error('Error fetching issues:', error)
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/books')
      .then(response => {
        setBooks(response.data)
      })
      .catch(error => {
        console.error('Error fetching books:', error)
      })

    axios
      .get('http://localhost:3000/api/readers')
      .then(response => {
        setReaders(response.data)
      })
      .catch(error => {
        console.error('Error fetching readers:', error)
      })
  }, [])

  return (
    <div>
      <h1>Library System</h1>
      <BookForm />

      <BookList books={books} />

      <ReaderForm />

      <ReaderList readers={readers} />

      <IssueForm
        refreshIssues={refreshIssues}
        books={books}
        readers={readers}
      />

      <IssueList issues={issues} />
    </div>
  )
}

export default App
