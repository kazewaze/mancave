import utilStyles from '../styles/utils.module.css'
import styles from './styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h5>
        <a
        href="https://kayceeingram.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          <span className={ utilStyles.nameLogoTxt }><strong>kazewaze</strong></span>
        </a>
      </h5>
      <p>Copyright © 2021 Kaycee Ingram</p>
    </footer>
  )
}