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
        <li className={styles.menuLogo}>
          <Link href="/">
            <a>
              <strong>kazewaze</strong>
            </a>
          </Link></li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/skills">
            <a>Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default function Header() {
  const links = ['Projects', 'Skills', 'Posts', 'About', 'Contact'].map(item => {
    return (
      <li key={item + "Key"}>
        <Link href={"/" + item.toLowerCase()}>
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