import Head from 'next/head'
import Layout from '../components/_common/layout'

import ProjectCard from '../components/projects/projectCard'

import utilStyles from '../styles/utils.module.css'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1 className={utilStyles.introTitle}>Projects</h1>

        <ProjectCard title={'Ghost.css Stylesheet'} imgLocation={'https://raw.githubusercontent.com/kazewaze/Ghost/e71a5b8d2b7a98049e95eba2210fa6e033997fd0/images/Ghost.svg'} imgWidth={'100px'} imgHeight={'100px'} imgAlt={'Project Logo'} projectLocation={'https://ghost-css.netlify.app'} sourceLocation={'https://github.com/kazewaze/Ghost'} />
      </div>
    </Layout>
  )
}