import Head from 'next/head'
import Layout from '../components/_common/layout'

import utilStyles from '../styles/utils.module.css'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1>Projects</h1>
      </div>
    </Layout>
  )
}