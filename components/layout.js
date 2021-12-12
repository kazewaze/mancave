import Head from 'next/head'
import Link from 'next/link'

import Navbar from './navbar'
import Footer from './footer'

import styles from './styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export const siteTitle = 'Kaycee Ingram'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <h1 className={utilStyles.heading4Xl}>
                <span className={utilStyles.thinText}>Hello, I’m </span><strong>Kaycee Ingram</strong><span className={utilStyles.thinText}>, a.k.a </span><span className={utilStyles.myHandleHeading}><strong>kazewaze</strong></span>.
              </h1>
            </>
          ) : (
            <>
            </>
            // <div className="breadCrumbs">
            //   <Link href="/">
            //     <a>
            //       Kaycee
            //     </a>
            //   </Link>
            // </div>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}