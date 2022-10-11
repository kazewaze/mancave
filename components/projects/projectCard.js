import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/projects.module.css'
import { startOfWeekYear } from 'date-fns'

export default function ProjectCard({title='', imgLocation='', imgWidth="100px", imgHeight="100px", imgAlt="Project Logo", projectLocation, sourceLocation}) {
  return (
    <div className={styles.Card}>
      { imgLocation === '' ? '' : <Image src={imgLocation} width={imgWidth} height={imgHeight} alt={imgAlt} /> }

      { title === 'PickMe!' ? (
          <h1 className={styles.projectTitle}><span style={{color: "#00c14e", fontWeight: '700'}}>{ title }</span></h1>
        ) : (
          <h1 className={styles.projectTitle}>{ title }</h1>
        )
      }

      <Link className={styles.demoLink} href={projectLocation}>
        Demo
      </Link>
      <Link className={styles.srcLink} href={sourceLocation}>
        Source Code
      </Link>
    </div>
  )
}