import { useState } from 'react';
import Link from 'next/link';

import styles from './styles/nav.module.css';

export default function Nav() {
  const [status, setStatus] = useState(false);

  return (
    <nav className={styles.nav}>
    { status ?
      (
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
      ) :
      (
        <h1>Hello Kaycee</h1>
      )
    }
    </nav>
  );
}