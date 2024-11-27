import React, { useState } from 'react'
import axios from 'axios'
import styles from './ReaderForm.module.css'

const ReaderForm = ({ refreshReaders }) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:3000/api/readers', { name, phoneNumber })
      .then(() => {
        refreshReaders()
        setName('')
        setPhoneNumber('')
      })
      .catch(error => console.error('Ошибка при добавлении читателя:', error))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Додати нового читача</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Им'я читача:</label>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Номер телефона:</label>
          <input
            type='text'
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button type='submit' className={styles.button}>
          Підтвердити
        </button>
      </form>
    </div>
  )
}

export default ReaderForm
