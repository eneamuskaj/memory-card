const CardDisplay = (props) => {
  let items = []
  for (let i = 1; i < 66; i++) {
    items.push(
      <img
        className="imagesClass"
        src={'images/1 (' + i + ').png'} //1 (1)
        alt="card"
        style={{ width: 15 + '%' }}
        onClick={props.handleClick}
        id={i}
      />
    )
  }
  let randomArray = []
  for (let i = 0; i < 12; i++) {
    randomArray.push(items[Math.floor(Math.random() * items.length)])
  }
  return <div className="mainDisplay">{randomArray}</div>
}

export default CardDisplay
