'use client'

import styles from '../styles/Home.module.css'

const ProblemsPage = () => {
  const problems = [
    { title: 'Problem 1', description: 'Description of problem 1' },
    { title: 'Problem 2', description: 'Description of problem 2' },
  ]

  return (
    <div className={styles.container}>
      <h1>USACO Problems</h1>
      <ul>
        {problems.map((problem, index) => (
          <li key={index}>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProblemsPage
