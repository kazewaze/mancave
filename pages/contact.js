import Head from 'next/head'
import Layout from '../components/_common/layout'

import pageStyles from './styles/contact.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1 className={utilStyles.introTitle}>Contact me</h1>

        {/* <form className={pageStyles.contactForm} action="/api/form" method="post">
          <label>Name</label>
          <input type="text" id="name" name="name" required/>

          <label>Email</label>
          <input type="email" id="email" name="email" required/>

          <button type="submit">Submit</button>
        </form> */}
      </div>
    </Layout>
  )
}