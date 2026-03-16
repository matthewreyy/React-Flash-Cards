import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.badge}>From Beginner to Advanced Questions</span>

      <div className={styles.titleRow}>
        <svg
          className={styles.reactLogo}
          viewBox="-11.5 -10.23174 23 20.46348"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="React logo"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
        <h1 className={styles.title}>The React Flash Cards.</h1>
      </div>

      <p className={styles.subtitle}>
        Test your react knowledge by answering the flashcards below
      </p>
    </header>
  )
}

export default Header
