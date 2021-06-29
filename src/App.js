import React, { useState, useEffect } from 'react'

import CardDisplay from './components/cardDisplay'
import ScoreBoard from './components/scoreBoard'

const App = () => {
  const [count, setCount] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [memory, setMemory] = useState([])

  useEffect(() => {
    console.log('use effect ran')
    for (let i = 0; i < memory.length; i++) {
      if (memory.indexOf(memory[i]) !== memory.lastIndexOf(memory[i])) {
        setMemory([])
        setHighScore(count)
        setCount(0)
        console.log('stop here')
      }
    }
    console.log('cotinue here')
  })

  const handleClick = (event) => {
    setCount(count + 1)
    const cardName = event.target.src
    const gameData = memory
    gameData.push(cardName)
    setMemory(gameData)
  }
  console.log('Render')
  return (
    <div>
      <ScoreBoard count={count} highScore={highScore} />
      <CardDisplay handleClick={handleClick} />
    </div>
  )
}

export default App
