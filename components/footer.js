import Image from 'next/image'

import styles from './styles/footer.module.css'

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <a
        href="https://kayceeingram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          <Image src="/images/kazewaze-name.svg" alt="kazewaze name logo" width={150} height={75} />
        </span>
      </a>
      <p>Copyright © 2021 Kaycee Ingram</p>
    </footer>
  )
}