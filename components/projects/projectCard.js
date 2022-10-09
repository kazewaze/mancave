import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/projects.module.css'

export default function projectCard(children, imgLocation) {
  return (
    <div>
      <Link>
        { children }
      </Link>
    </div>
  )
}