# FAMAT Trivial

A modern, trivia-style practice interface for Florida Association of Mu Alpha Theta (FAMAT) problem sets.

## Features

- AMCTrivial-inspired one-problem-at-a-time flow.
- Filter by FAMAT level (Junior, Intermediate, Algebra I, Geometry, Algebra II, Comprehensive).
- Problem metadata shown per card: level, test, year, and question number.
- Difficulty proxy based on question number within each test.
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
