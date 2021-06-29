const ScoreBoard = (props) => {
  return (
    <div>
      <p>Score is {props.count}</p>
      <p>High Score is {props.highScore}</p>
    </div>
  )
}

export default ScoreBoard
