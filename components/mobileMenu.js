import styles from './styles/mobileMenu.module.css'

export default function MobileMenu() {
  return (
    <div id={styles.mobileMenu}>
      <ul className={styles.mobileMenuInner}>
        <li className={styles.menuLogo}><a href="https://github.com/kazewaze" target="_blank" rel="noreferrer"><strong>kazewaze</strong></a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}