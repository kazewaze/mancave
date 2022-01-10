import styles from '../styles/button.module.css'

export default function Button({ children, handler }) {
  return (
    <button className={styles.button} onClick={ handler }>
      { children }
    </button>
  )
}