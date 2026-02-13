'use client'

import { useMemo, useState } from 'react'
import { famatProblems, type FamatLevel } from '@/data/famatProblems'

const levels: FamatLevel[] = ['Junior', 'Intermediate', 'Algebra I', 'Geometry', 'Algebra II', 'Comprehensive']

export default function HomePage() {
  const [selectedLevel, setSelectedLevel] = useState<FamatLevel | 'All'>('All')
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const filtered = useMemo(() => {
    const scoped = selectedLevel === 'All' ? famatProblems : famatProblems.filter((p) => p.level === selectedLevel)
    return [...scoped].sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year
      if (a.test !== b.test) return a.test.localeCompare(b.test)
      return a.questionNumber - b.questionNumber
    })
  }, [selectedLevel])

  const current = filtered[index] ?? filtered[0]

  const setLevel = (value: FamatLevel | 'All') => {
    setSelectedLevel(value)
    setIndex(0)
    setShowAnswer(false)
  }

  const nextQuestion = () => {
    if (!filtered.length) return
    setIndex((prev) => (prev + 1) % filtered.length)
    setShowAnswer(false)
  }

  const randomQuestion = () => {
    if (!filtered.length) return
    const randomIdx = Math.floor(Math.random() * filtered.length)
    setIndex(randomIdx)
    setShowAnswer(false)
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">Florida Association of Mu Alpha Theta</p>
        <h1>FAMAT Trivial</h1>
        <p>
          Practice FAMAT-style problems in a fast trivia flow. Filter by level and solve in increasing question-number
          difficulty.
        </p>
      </header>

      <section className="controls">
        <button className={selectedLevel === 'All' ? 'pill active' : 'pill'} onClick={() => setLevel('All')}>
          All Levels
        </button>
        {levels.map((level) => (
          <button key={level} className={selectedLevel === level ? 'pill active' : 'pill'} onClick={() => setLevel(level)}>
            {level}
          </button>
        ))}
      </section>

      <section className="card">
        {current ? (
          <>
            <div className="meta-row">
              <span>{current.level}</span>
              <span>{current.test}</span>
              <span>{current.year}</span>
              <span>Q{current.questionNumber}</span>
            </div>
            <h2>{current.statement}</h2>
            {showAnswer ? <p className="answer">Answer: {current.answer}</p> : <p className="answer hidden">Answer hidden</p>}
            <div className="button-row">
              <button onClick={() => setShowAnswer((prev) => !prev)}>{showAnswer ? 'Hide Answer' : 'Reveal Answer'}</button>
              <button onClick={nextQuestion}>Next</button>
              <button onClick={randomQuestion}>Random</button>
            </div>
            <a href={current.sourceUrl} target="_blank" rel="noreferrer" className="source-link">
              FAMAT Source
            </a>
          </>
        ) : (
          <p>No problems available for this level.</p>
        )}
      </section>

      <footer className="footer-note">
        <p>{filtered.length} total problem(s) in current filter.</p>
      </footer>
    </div>
  )
}
