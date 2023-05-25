import Head from 'next/head'

import Layout from '../../_common/layout'
import Date from '../date'

import styles from '../../styles/post.module.css'
import utilStyles from '../../../styles/utils.module.css'

export default function Post({ children, frontMatter }) {
  const { title, date } = frontMatter;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article className={utilStyles.article}>
        <h1 className={utilStyles.postHeading}>{title}</h1>
        <Date dateString={date} />
        <main>
          { children }
        </main>
      </article>
    </Layout>
  )
}