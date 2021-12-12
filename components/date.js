import { parseISO, format } from 'date-fns'
import styles from '../styles/utils.module.css'

export default function Date({ small=false, dateString }) {
  const date = parseISO(dateString)
  return (
    small ?
      <small>
        <time className={styles.lightText} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
      </small>
      :
      <time className={styles.lightText} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  )
}