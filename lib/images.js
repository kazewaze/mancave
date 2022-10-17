import Image from 'next/image';
import fs from 'fs'

import styles from '../components/styles/skills.module.css'

export default function skillImgs() {
  const skills =  fs.readdirSync('public/images/skills');
  return skills.map(skill => {
    <div className={styles.Skill}>
      <Image height={'100px'} width={'100px'} src={'public/images/skills/' + skill} />
    </div>
  })
}