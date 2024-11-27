import React, { useState } from 'react'
import axios from 'axios'

const ReaderForm = () => {
  const [name, setName] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:3000/api/readers', { name })
      .then(response => {
        console.log('Reader added:', response.data)
        setName('')
      })
      .catch(error => {
        console.error('There was an error adding the reader!', error)
      })
  }

  return (
    <div>
      <h2>Add New Reader</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Reader Name:</label>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <button type='submit'>Add Reader</button>
      </form>
    </div>
  )
}

export default ReaderForm
