import FlashCard from './FlashCard'
import styles from './FlashCardGrid.module.css'

function FlashCardGrid({ cards, flippedId, onFlip }) {
  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <FlashCard
          key={card.id}
          card={card}
          index={index}
          isFlipped={flippedId === card.id}
          onFlip={onFlip}
        />
      ))}
    </div>
  )
}

export default FlashCardGrid
