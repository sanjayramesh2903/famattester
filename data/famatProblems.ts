export type FamatLevel = 'Calculus' | 'Precalculus' | 'Algebra I' | 'Geometry' | 'Algebra II' | 'Stats'

export type FamatProblem = {
  id: string
  level: FamatLevel
  test: string
  year: number
  questionNumber: number
  statement: string
  answer: string
  sourceUrl: string
}

export const famatProblems: FamatProblem[] = [
  { id: "Alg1-2026-1"
level: "Algebra I"
test: "January Regional Individual Test"
year: 2026
questionNumber: 1
statement: "A three-digit number is written as abc where a, b, and c are digits. What is a × b − c?"
answer: "NOTA"
sourceUrl: "https://drive.google.com/drive/folders/1_oiJyH5CS8G_S9MeC4RB1x7hFZifg1Yl"
},
{
  id: "Alg1-2026-2"
level: "Algebra I"
test: "January Regional Individual Test"
year: 2026
questionNumber: 2
statement: "If 60% of N = 30, then what is 50% of N?"
answer: "25"
sourceUrl: "https://drive.google.com/drive/folders/1_oiJyH5CS8G_S9MeC4RB1x7hFZifg1Yl"
},
{
  id: "Alg1-2026-3"
level: "Algebra I"
test: "January Regional Individual Test"
year: 2026
questionNumber: 3
statement: "The sum of nine consecutive positive integers is 99. What is the difference between the largest and smallest of the nine integers?"
answer: "8"
sourceUrl: "https://drive.google.com/drive/folders/1_oiJyH5CS8G_S9MeC4RB1x7hFZifg1Yl"
}
]
