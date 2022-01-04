import Link from 'next/link';
import Image from 'next/image';

import styles from './styles/header.module.css';
import classes from '../lib/classes';

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

export default function Header() {
  const links = ['Projects', 'Skills', 'Posts', 'About', 'Contact'].map(item => {
    return (
      <li key={item + 'Key'}>
        <Link href={'/' + item.toLowerCase()}>
          <a>
            { item }
          </a>
        </Link>
      </li>
    );
  });

  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.imgWrapper}>
            <Image height={"45px"} width={"45px"} className={styles.logo} src="/images/kazewaze.svg" alt="kazewaze logo"/>
          </div>
          <ul className={styles.links}>
            { links }
          </ul>
          <MenuButton />
          <MobileMenu />
        </nav>
      </header>
  )
}