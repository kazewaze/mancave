// import { useState } from 'react';
import Link from 'next/link';

import styles from './styles/nav.module.css';

export default function Header() {

//  const [status, setStatus] = useState(false);
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
    <header>
      <nav className={styles.nav}>
        <img className={styles.logo} src="/images/kazewaze.svg" alt="kazewaze logo"/>
        <ul>
          { links }
        </ul>
      </nav>
    </header>
  )
}
