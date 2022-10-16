import ProjectCard from '../components/projects/projectCard'

export const projectsData = [
  {
    title: "Ghost",
    titleColor: "#000000",
    description: "A CSS Stylesheet with base styling to jump start your projects.",
    projectLocation: "https://ghost-css.netlify.app",
    sourceLocation: "https://github.com/kazewaze/Ghost"
  },
  {
    title: "PickMe",
    titleColor: "#00c14e",
    description: "A simple random picker.",
    projectLocation: "https://kazewaze-pickme.vercel.app",
    sourceLocation: "https://github.com/kazewaze/PickMe"
  },
  {
    title: "SizeMeUp",
    titleColor: "#ffe100",
    description: "A simple website that displays your screen dimensions.",
    projectLocation: "https://sizemeup.netlify.app",
    sourceLocation: "https://github.com/kazewaze/SizeMeUp"
  },
]

export function projects(projectsArray) {
  if (!typeof projectsArray === 'object') {
     return "Must provide an array of projects.";
  }

  return projectsArray.map(project => <ProjectCard
      key={project + "Key"}
      title={project.title}
      imgLocation={project.imgLocation}
      imgWidth={project.imgWidth}
      imgHeight={project.imgHeight}
      imgAlt={project.imgAlt}
      projectLocation={project.projectLocation}
      sourceLocation={project.sourceLocation}
    />
  );
}