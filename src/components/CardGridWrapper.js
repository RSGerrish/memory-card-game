import CardGrid from './CardGrid.js';

const CardGridWrapper = ({ thundercats, onCardClicked }) => {
  return (
    <div className="CardGridWrapper">
      <CardGrid thundercats={thundercats} onCardClicked={onCardClicked} />
    </div>
  )
}

export default CardGridWrapper;