import React, { useState, useEffect } from 'react'
import axios from 'axios'

const IssueList = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    // Получаем все записи о выдаче книг при загрузке компонента
    axios
      .get('http://localhost:3000/api/issues')
      .then(response => {
        setIssues(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching issues!', error)
      })
  }, [])

  return (
    <div>
      <h2>Issued Books</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            Book: {issue.book.title}, Issued to: {issue.reader.name}, Date:{' '}
            {issue.issueDate}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IssueList
