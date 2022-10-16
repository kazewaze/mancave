import Head from 'next/head'
import Layout from '../components/_common/layout'

import * as skills from '../public/images/skills'

import utilStyles from '../styles/utils.module.css'

export default function Skills() {
  console.log(skills);
  return (
    <Layout>
      <Head>
        <title>Skills</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1 className={utilStyles.introTitle}>Skills</h1>
      </div>
    </Layout>
  )
}