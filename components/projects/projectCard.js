import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/projects.module.css'

export default function ProjectCard({title='', imgLocation, imgWidth="100px", imgHeight="100px", imgAlt="Project Logo", projectLocation, sourceLocation}) {
  return (
    <div className={styles.Card}>
      <Image src={imgLocation} width={imgWidth} height={imgHeight} alt={imgAlt} />

      <h1 className={styles.projectTitle}>{ title === '' ? '' : title }</h1>

      <Link href={projectLocation}>
        Demo
      </Link>
      <Link href={sourceLocation}>
        Source Code
      </Link>
    </div>
  )
}