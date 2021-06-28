import React, { useState, useEffect } from 'react'

import CardDisplay from './components/cardDisplay'
import ScoreBoard from './components/scoreBoard'

const App = () => {
  const [count, setCount] = useState(0)
  const [memory, setMemory] = useState([])

  useEffect(() => {
    console.log(memory)
    console.log('use effect ran')
  })

  const handleClick = (event) => {
    setCount(count + 1)
    const cardName = event.target.src
    const gameData = memory
    gameData.push(cardName)
    setMemory(gameData)
    console.log('handle click ran')
  }

  return (
    <div>
      <ScoreBoard count={count} />
      <CardDisplay handleClick={handleClick} />
    </div>
  )
}

export default App
