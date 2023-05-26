import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/_common/layout'
import Date from '../components/posts/date'

import getPosts from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

export default function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <div>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.introTitle}>Scribbles</h2>
          <ul className={utilStyles.postsList}>
            {posts.map(({ title, date, path, id }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={path}>
                  <a>{title}</a>
                </Link>
                <br />
                <Date small={true} dateString={date} />
              </li>
            ))}
          </ul>
        </section>
      </div>
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