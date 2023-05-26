import Head from 'next/head'
import Layout from '../components/_common/layout'

// import pageStyles from './styles/contact.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1 className={utilStyles.introTitle}>Hit me up</h1>
        <p className={utilStyles.pageContent}>
          <span align="left">
            My Twitter handle is <em>thekazewaze</em>. Don&apos;t be shy!
          </span>
        </p>
      </div>
    </Layout>
  )
}