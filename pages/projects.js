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

        <ProjectCard img={{location: 'https://raw.githubusercontent.com/kazewaze/Ghost/e71a5b8d2b7a98049e95eba2210fa6e033997fd0/images/Ghost.svg', width: '100px', height: '100px', alt: 'Project Logo'}} projectLocation={'https://ghost-css.netlify.app'} sourceLocation={'https://github.com/kazewaze/Ghost'}>
          Ghost.css Stylesheet
        </ProjectCard>
      </div>
    </Layout>
  )
}