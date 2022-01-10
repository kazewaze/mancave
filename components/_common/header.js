import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/header.module.css';
import classes from '../../lib/classes';
import generateLinks from '../../lib/links';

const links = generateLinks(['Projects', 'Skills', 'Posts', 'About', 'Contact']);

function MenuButton() {
  return (
    <>
      <input type="checkbox" className={styles.openMobileMenu} id={styles.openMobileMenu} />
      <label htmlFor={styles.openMobileMenu} className={styles.mobileIconToggle}>
        <span className={classes(styles, ["spinner", "diagonal", "one"])}></span>
        <span className={classes(styles, ["spinner", "horizontal"])}></span>
        <span className={classes(styles, ["spinner", "diagonal", "two"])}></span>
      </label>
    </>
  )
}

function MobileMenu() {
  return (
    <div id={styles.mobileMenu}>
      <ul className={styles.mobileMenuInner}>
        <li className={styles.menuLogo}>
          <Link href="/">
            <a>
              <strong>kazewaze</strong>
            </a>
          </Link>
        </li>
        { links }
      </ul>
    </div>
  )
}

export default function Header() {
  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.imgWrapper}>
            <Link href="/">
              <a>
                <Image height={"45px"} width={"45px"} className={styles.logo} src="/images/kazewaze.svg" alt="kazewaze logo"/>
              </a>
            </Link>
          </div>
          <hr className={styles.hLine}/>
          <ul className={styles.links}>
            { links }
          </ul>
          <MenuButton />
          <MobileMenu />
        </nav>
      </header>
  )
}