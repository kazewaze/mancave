import Head from 'next/head'
import Layout from '../components/_common/layout'

import { projects, projectsData} from '../lib/projects'

import utilStyles from '../styles/utils.module.css'

export default function Projects() {

  let projectCards = projects(projectsData);

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <h1 className={utilStyles.introTitle}>Projects</h1>
        <div className={utilStyles.projectsContainer}>
          { projectCards }
        </div>
      </div>
    </Layout>
  )
}