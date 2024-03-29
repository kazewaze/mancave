import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/_common/layout'
import Date from '../components/posts/date'

import getPosts from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.sectionHeading}>Latest Scribbles</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ title, date, path, id, gist}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={path}>
                {title}
              </Link>
              <p className={utilStyles.gist}>
                {gist}
              </p>
              <Date small={true} dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts(true).then(result => result);

  return {
    props: {
      posts
    }
  }
}