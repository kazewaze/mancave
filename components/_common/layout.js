import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from './header'
import Footer from './footer'

import styles from '../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

export const siteTitle = 'Kaycee Ingram'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="author"
          content="Kaycee Ingram"
        />
        <meta
          name="description"
          content="Kaycee Ingram's Personal Website"
        />
        <meta
          property="og:image"
          content="/kazewaze.svg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/kazewaze.svg" />
        <meta property="og:url" content="https://kaycee.vercel.app" />
        <meta property="og:site_name" content="kazewaze" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className={ styles.container }>
        <div className={ utilStyles.introContainer }>
          {
            home ? (
              <>
                <h1 className={ utilStyles.introTitle }>
                  <span className={ utilStyles.thinText }>Hi, my name is </span><strong>Kaycee Ingram</strong><span className={ utilStyles.thinText }>, a.k.a </span><span className={ utilStyles.heroNameLogoTxt }><strong>kazewaze</strong></span>.
                </h1>
                <h3 className={utilStyles.introDescription}>I&apos;m a <em>Computer Science Student</em> focused on all things AI. </h3>
              </>
            ) : (
              <>
              </>
            )
          }
        </div>
        <main>{ children }</main>
        {
          !home && (
            <div className={ styles.backToHome }>
              <Image height={"70px"} width={"70px"} className={styles.backToHomeImg} src="/images/waterboy.png" />
              <Link href="/">
                ← Home where you make it
              </Link>
            </div>
          )
        }
      </div>
      <Footer/>
    </>
  )
}