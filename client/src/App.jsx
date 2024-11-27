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

  // Функция для обновления списка выданных книг
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

  // Получаем список книг и читателей при загрузке страницы
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

      {/* Форма для добавления новой книги */}
      <BookForm />

      {/* Список книг */}
      <BookList books={books} />

      {/* Форма для добавления нового читателя */}
      <ReaderForm />

      {/* Список читателей */}
      <ReaderList readers={readers} />

      {/* Форма для выдачи книги, передаем функцию обновления данных */}
      <IssueForm
        refreshIssues={refreshIssues}
        books={books}
        readers={readers}
      />

      {/* Список выданных книг */}
      <IssueList issues={issues} />
    </div>
  )
}

export default App
