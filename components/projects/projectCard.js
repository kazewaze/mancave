import Link from 'next/link'

import styles from '../styles/projects.module.css'
import classes from '../../lib/classes'

export default function ProjectCard({title='', titleColor='#000000', projectLocation='', sourceLocation=''}) {
  return (
    <div className={styles.Card}>
      <h1 className={classes(styles, ["projectTitle", {color: titleColor}])}>{ title }</h1>
      <div>
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