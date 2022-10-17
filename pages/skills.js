import Head from 'next/head'
import Layout from '../components/_common/layout'

import skillImgs from '../lib/images'

import utilStyles from '../styles/utils.module.css'

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>Skills</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1 className={utilStyles.introTitle}>Skills</h1>
        <div className={utilStyles.skillsContainer}>
          { skillImgs() }
        </div>
      </div>
    </Layout>
  )
}