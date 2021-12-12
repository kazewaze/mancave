import { useState } from 'react';
import Link from 'next/link';

import styles from './styles/nav.module.css';

export default function Navbar() {
  // const [status, setStatus] = useState(false);
  const navLinks = [{ label: 'Home', path: '/', key: 'HomeLinkKey' }, { label: 'About', path: '/about', key: 'AboutLinkKey' }, { label: 'Contact', path: '/contact', key: 'ContactLinkKey' }];

  // status ? styles.navdrop.display = 'block' : styles.navdrop.display = 'none';

  return (
    <nav className={styles.nav}>
        { navLinks.map(el => {
            return (
                <Link href={ el.path } key={ el.key }>
                  <a>
                    { el.label }
                  </a>
                </Link>
            )
          })
        }
    </nav>
  );
}