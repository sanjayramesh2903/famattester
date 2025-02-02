'use client'

import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/mcq">MCQ</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
