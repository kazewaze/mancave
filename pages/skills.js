import fs from 'fs'

import Head from 'next/head'
import Image from 'next/image';
import Layout from '../components/_common/layout'

import styles from '../components/styles/skills.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Skills(props) {
  return (
    <Layout>
      <Head>
        <title>Skills</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1 className={utilStyles.introTitle}>Skills</h1>
        <div className={utilStyles.skillsContainer}>
          { props.skills }
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const skills =  fs.readdirSync('public/images/skills');
  return skills.map(skill => {
    <div className={styles.Skill}>
      <Image height={'100px'} width={'100px'} src={'public/images/skills/' + skill} />
    </div>
  })
}