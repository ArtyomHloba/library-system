import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BookList from './components/BookList'
import BookForm from './components/BookForm'
import ReaderList from './components/ReaderList'
import IssueForm from './components/IssueForm'
import IssueList from './components/IssueList'
import ReaderForm from './components/ReaderForm'
import axios from 'axios'
import NavHeader from './components/NavHeader'
import styles from './App.module.css'

const App = () => {
  const [issues, setIssues] = useState([])
  const [books, setBooks] = useState([])
  const [readers, setReaders] = useState([])

  const refreshBooks = () => {
    axios
      .get('http://localhost:3000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Помилка при отриманні книг:', error))
  }

  const refreshIssues = () => {
    axios
      .get('http://localhost:3000/api/issues')
      .then(response => setIssues(response.data))
      .catch(error => console.error('Помилка при отриманні записів:', error))
  }

  useEffect(() => {
    refreshBooks()
    refreshIssues()

    axios
      .get('http://localhost:3000/api/readers')
      .then(response => setReaders(response.data))
      .catch(error => console.error('Помилка при отриманні читачів:', error))
  }, [])

  return (
    <Router>
      <div className={styles.container}>
        <NavHeader />

        <Routes>
          <Route path='/books' element={<BookList books={books} />} />
          <Route
            path='/book-form'
            element={<BookForm refreshBooks={refreshBooks} />}
          />
          <Route path='/readers' element={<ReaderList readers={readers} />} />
          <Route
            path='/reader-form'
            element={<ReaderForm refreshReaders={() => {}} />}
          />
          <Route path='/issues' element={<IssueList issues={issues} />} />
          <Route
            path='/issue-form'
            element={
              <IssueForm
                refreshIssues={refreshIssues}
                books={books}
                readers={readers}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
