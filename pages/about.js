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
        <h1 className={utilStyles.introTitle}>About</h1>
        <p className={utilStyles.postHeading}>I&apos;m a Computer Science Student at a University in Texas with concentrations on AI. I&apos;m specifically interested in NLP {'('}Natural Language Processing{')'}, Understanding, Common-Sense Reasoning, etc.</p>
      </div>
    </Layout>
  )
}