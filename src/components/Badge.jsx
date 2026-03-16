import styles from './Badge.module.css'

function Badge({ difficulty }) {
  const difficultyClass = {
    Easy: styles.easy,
    Medium: styles.medium,
    Hard: styles.hard,
  }

  return (
    <span className={`${styles.badge} ${difficultyClass[difficulty]}`}>
      {difficulty}
    </span>
  )
}

export default Badge
