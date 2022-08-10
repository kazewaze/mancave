import Head from 'next/head'
import Layout from '../components/_common/layout'

import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1>About</h1>
      </div>
    </Layout>
  )
}