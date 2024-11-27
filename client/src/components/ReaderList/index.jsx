import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ReaderList = () => {
  const [readers, setReaders] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/readers')
      .then(response => {
        setReaders(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching readers!', error)
      })
  }, [])

  return (
    <div>
      <h2>Reader List</h2>
      <ul>
        {readers.map(reader => (
          <li key={reader.id}>{reader.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReaderList
