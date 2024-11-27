import React from 'react'
import { Link } from 'react-router-dom'
import logo from './book-icon.svg'
import styles from './NavHeader.module.css'

const NavHeader = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <img src={logo} alt='' className={styles.logo} />
        </li>
        <li>
          <Link to='/books'>Список книг</Link>
        </li>
        <li>
          <Link to='/readers'>Список читачів</Link>
        </li>
        <li>
          <Link to='/issues'>Видані книги</Link>
        </li>
        <li>
          <Link to='/book-form'>Додати книгу</Link>
        </li>
        <li>
          <Link to='/reader-form'>Додати читача</Link>
        </li>
        <li>
          <Link to='/issue-form'>Видати книгу</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavHeader
