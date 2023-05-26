import { parseISO, format } from 'date-fns'
import styles from '../../styles/utils.module.css'

export default function Date({ small=false, dateString }) {
  const date = parseISO(dateString)
  return (
    small ?
      <small style={{ marginTop: '8px' }}>
        <time className={styles.lightText} dateTime={dateString}>{'['}{format(date, 'LLLL d, yyyy')}{']'}</time>
      </small>
      :
      <time className={styles.date} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  )
}