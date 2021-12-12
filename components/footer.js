import Image from 'next/image'

import styles from './styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://kayceeingram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          <Image src="/images/kazewaze.svg" alt="Vercel Logo" width={35} height={35} />
        </span>
      </a>
      <p>Copyright © 2021 Kaycee Ingram</p>
    </footer>
  )
}