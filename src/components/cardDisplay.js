const CardDisplay = (props) => {
  let items = []
  for (let i = 0; i < 9; i++) {
    items.push(
      <img
        className="imagesClass"
        src={'images/' + i + '.png'}
        alt="card"
        style={{ width: 25 + '%' }}
        onClick={props.handleClick}
        id={i}
      />
    )
  }
  let randomArray = []
  for (let i = 0; i < 8; i++) {
    randomArray.push(items[Math.floor(Math.random() * items.length)])
  }
  return <div>{items}</div>
}

export default CardDisplay
