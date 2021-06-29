const ScoreBoard = (props) => {
  return (
    <div>
      <p>Do not click on the same card twice.</p>
      <p>Score is: {props.count}</p>
      <p>High Score is: {props.highScore}</p>
    </div>
  )
}

export default ScoreBoard
