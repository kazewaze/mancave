import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/projects.module.css'

export default function projectCard(children, img, projectLocation, sourceLocation) {
  return (
    <div className={styles.Card}>
      <Image src={img.location} width={img.width} height={img.height} alt={img.alt} />

      <h1 className={styles.projectTitle}>{ children }</h1>

      <Link href={projectLocation}>
        Demo
      </Link>
      <Link href={sourceLocation}>
        Source Code
      </Link>
    </div>
  )
}