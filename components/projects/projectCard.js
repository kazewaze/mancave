import Link from 'next/link'

import styles from '../styles/projects.module.css'

export default function ProjectCard({title='', description='', projectLocation='', sourceLocation=''}) {
  return (
    <div className={styles.Card}>
      <h1 className={styles.projectTitle}>{ title }</h1>
      <div className={styles.cardLinks}>
        <Link className={styles.demoLink} href={projectLocation}>
          Demo
        </Link>
        <Link className={styles.srcLink} href={sourceLocation}>
          Source
        </Link>
      </div>
    </div>
  )
}