import { useState } from 'react'
import Card from './components/Card'
import questions from '../scripts/index'
import './App.css'

function App() {

  return (
    <>
      <div className='main-container'>
        <Card questions={questions} />
      </div>
    </>
  )
}

export default App
