import Head from 'next/head'
import Layout from '../components/_common/layout'

import utilStyles from '../styles/utils.module.css'

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>Skills</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1>Skills</h1>
      </div>
    </Layout>
  )
}