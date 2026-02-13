# FAMAT Trivial

A modern, trivia-style practice interface for Florida Association of Mu Alpha Theta (FAMAT) problem sets.

## Features

- AMCTrivial-inspired one-problem-at-a-time flow.
- Filter by FAMAT level (Junior, Intermediate, Algebra I, Geometry, Algebra II, Comprehensive).
- Problem metadata shown per card: level, test, year, and question number.
- Difficulty proxy based on question number within each test.
- LaTeX rendering support for problem statements and answers via MathJax.
- Bluish-black, sleek UI optimized for quick practice rounds.
- GitHub Pages deployment pipeline included.

## Problem data

Problems are defined in:

- `data/famatProblems.ts`

Each record includes:

- level
- test name
- year
- question number
- statement
- answer
- source URL

### Adding problems manually (with source + LaTeX)

Add a new object to `famatProblems`:

```ts
{
  id: 'geo-2025-12',
  level: 'Geometry',
  test: 'Geometry Regional Test',
  year: 2025,
  questionNumber: 12,
  statement: 'Compute $\\frac{1}{2}\\cdot 10 \\cdot 8$.',
  answer: '$40$',
  sourceUrl: 'https://famat.org/path/to/exact/source.pdf',
}
```

LaTeX delimiters supported:

- Inline: `$...$` or `\(...\)`
- Display: `$$...$$` or `\[...\]`

When you save, the randomizer and filters automatically include the new problem.

## Local development

```bash
npm install
npm run dev
```

## Build static output

```bash
npm run build
```

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml` which:

1. Installs dependencies
2. Builds the static Next.js export (`out/`)
3. Publishes to GitHub Pages

To use it, enable GitHub Pages in repository settings and set the source to **GitHub Actions**.
