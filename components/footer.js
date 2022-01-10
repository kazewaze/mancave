import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from './styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h5>
        <Link href="/">
          <a>
            <span className={ utilStyles.nameLogoTxt }><strong>kazewaze</strong></span>
          </a>
        </Link>
      </h5>
      <p>Copyright © 2022 Kaycee Ingram</p>
    </footer>
  )
}