import { useState } from 'react'
import Card from './components/Card'
import questions from '../scripts/index'
import './App.css'

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <>
      <div className='main-container'>
        <Card question={questions[questionIndex]} />
      </div>
    </>
  )
}

export default App
