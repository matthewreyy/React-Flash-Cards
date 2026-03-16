import Badge from './Badge'
import styles from './FlashCard.module.css'

function FlashCard({ card, index, isFlipped, onFlip }) {
  const handleClick = () => {
    onFlip(card.id)
  }

  return (
    <div
      className={`${styles.cardWrapper} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleClick}
    >
      <div className={styles.cardInner}>
        {/* Front Side */}
        <div className={styles.cardFront}>
          <div>
            <p className={styles.cardLabel}>Question {index + 1}</p>
            <h2 className={styles.cardQuestion}>{card.question}</h2>
          </div>
          <div className={styles.cardFooter}>
            <Badge difficulty={card.difficulty} />
          </div>
        </div>

        {/* Back Side */}
        <div className={styles.cardBack}>
          <div className={styles.cardBackHeader}>
            <span className={styles.answerLabel}>Answer :</span>
            <Badge difficulty={card.difficulty} />
          </div>
          <h2 className={styles.cardAnswerTitle}>{card.question}</h2>
          <p className={styles.cardAnswerText}>{card.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FlashCard
