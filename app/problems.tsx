'use client'

import { useState } from 'react'

const questions = [
  {
    question: 'What is the atomic number of Carbon?',
    options: ['6', '8', '12', '14'],
    answer: '6',
  },
  {
    question: 'What is the pH of pure water?',
    options: ['7', '0', '14', '1'],
    answer: '7',
  },
]

const McqPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)

  const handleAnswer = (option: string) => {
    if (option === questions[questionIndex].answer) {
      setScore(score + 1)
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    } else {
      alert(`Your score: ${score + 1} / ${questions.length}`)
    }
    setSelectedAnswer(null)
  }

  return (
    <div>
      <h1>Chemistry Olympiad MCQs</h1>
      <div>
        <p>{questions[questionIndex].question}</p>
        <div>
          {questions[questionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{ margin: '5px' }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default McqPage
