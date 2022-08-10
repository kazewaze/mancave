import Head from 'next/head'
import Layout from '../components/_common/layout'

import utilStyles from '../styles/utils.module.css'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1>Contact</h1>
      </div>
    </Layout>
  )
}