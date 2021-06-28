import React, { memo, useState } from 'react'

import CardDisplay from './components/cardDisplay'
import ScoreBoard from './components/scoreBoard'

const App = () => {
  const [count, setCount] = useState(0)
  const [currentValue, setCurrentValue] = useState()
  const [memory, setMemory] = useState([])

  const handleClick = (event) => {
    let id = event.target.id
    let memoryArray = memory

    if (memory.length === 0) {
      memoryArray.push(id)
      setMemory(memoryArray)
      console.log('beginning')
    } else if (memory.length !== 0) {
      for (let i = 0; i < memory.length; i++) {
        if (id === memoryArray[i]) {
          memoryArray = []
          setMemory(memoryArray)
          console.log('match')
          console.log(memory)
          console.log(id)
        }
      }

      memoryArray.push(id)
      setMemory(memoryArray)
      console.log('not match')
    }
  }
  console.log(memory)

  return (
    <div>
      <ScoreBoard count={count} />
      <CardDisplay handleClick={handleClick} />
    </div>
  )
}

export default App
