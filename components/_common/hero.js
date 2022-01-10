import styles from './styles/hero.module.css'

export default function Hero({ children, title, description }) {
  return (
    <div className={styles.texts}>
      <h1 className={styles.title}>{ title }</h1>
      { children ? (
          <div className={styles.buttons}>
            { children }
          </div>
        ) : ''
      }
      <h2 className={styles.description}>{ description }</h2>
    </div>
  )
}