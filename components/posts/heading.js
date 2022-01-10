import styles from '../styles/heading.module.css'

export default function Heading({ content }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{ content }</h1>
    </div>
  )
}