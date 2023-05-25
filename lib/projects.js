import ProjectCard from '../components/projects/projectCard'

export const projectsData = [
  {
    title: "Alva",
    description: "A Zero Dependency Deep Learning Toolkit for composing datasets.",
    sourceLocation: "https://github.com/kazewaze/Alva"
  },
  {
    title: "grokking DL Book",
    description: "My Code from Andrew Trask's book 'grokking Deep Learning'",
    sourceLocation: "https://github.com/kazewaze/Book"
  }
]

export const webProjectsData = [
  {
    title: "Ghost",
    description: "A CSS Stylesheet with base styling to jump start your projects.",
    projectLocation: "https://ghost-css.netlify.app",
    sourceLocation: "https://github.com/kazewaze/Ghost"
  },
  {
    title: "PickMe",
    description: "A simple random picker.",
    projectLocation: "https://kazewaze-pickme.vercel.app",
    sourceLocation: "https://github.com/kazewaze/PickMe"
  },
  {
    title: "SizeMeUp",
    description: "A simple website that displays your screen dimensions.",
    projectLocation: "https://sizemeup.netlify.app",
    sourceLocation: "https://github.com/kazewaze/SizeMeUp"
  },
  {
    title: "Hemingway",
    description: "A visually appealing website to host 'Monologue to the Maestro' by Ernest Hemingway.",
    projectLocation: "https://ernest-hemingway.vercel.app",
    sourceLocation: "https://github.com/kazewaze/hemingway"
  }
]

export function projects(projectsArray) {
  if (!typeof projectsArray === 'object') {
     return "Must provide an array of projects.";
  }

  return projectsArray.map(project => {
    project.projectLocation ?
      <ProjectCard
        key={project + "Key"}
        title={project.title}
        imgLocation={project.imgLocation}
        imgWidth={project.imgWidth}
        imgHeight={project.imgHeight}
        imgAlt={project.imgAlt}
        projectLocation={project.projectLocation}
        sourceLocation={project.sourceLocation}
      /> :
      <ProjectCard
        key={project + "Key"}
        title={project.title}
        imgLocation={project.imgLocation}
        imgWidth={project.imgWidth}
        imgHeight={project.imgHeight}
        imgAlt={project.imgAlt}
        projectLocation={false}
        sourceLocation={project.sourceLocation}
      />
    }
  );
}