import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'

import Navbar from './header'
import Footer from './footer'
// import Hero from './hero'

import styles from './styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

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
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
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
                <h3 className={utilStyles.introDescription}>I'm a <em>Front-End Developer</em> with a splash of OCD thrown in who Loves building things that function just as good as they look.</h3>
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
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )
        }
      </div>
      <Footer/>
    </>
  )
}