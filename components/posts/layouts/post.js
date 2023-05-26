import Head from 'next/head'

import Layout from '../../_common/layout'
import Date from '../date'

import utilStyles from '../../../styles/utils.module.css'

export default function Post({ children, frontMatter }) {
  const { title, date } = frontMatter;
  console.log("Content: ", frontMatter.content);
  console.log('Matter: ', frontMatter.matter);
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