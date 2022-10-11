import ProjectCard from '../components/projects/projectCard'

export const projectsData = [
  {
    description: "A CSS Stylesheet with base styling to jump start your projects.",
    imgLocation: "https://raw.githubusercontent.com/kazewaze/Ghost/e71a5b8d2b7a98049e95eba2210fa6e033997fd0/images/Ghost.svg",
    imgAlt: "Ghost.css Logo",
    projectLocation: "https://ghost-css.netlify.app",
    sourceLocation: "https://github.com/kazewaze/Ghost"
  },
  {
    description: "A simple random picker.",
    imgLocation: "https://raw.githubusercontent.com/kazewaze/PickMe/main/public/pickme-logo.png",
    imgAlt: "PickMe! Logo",
    projectLocation: "https://kazewaze-pickme.vercel.app",
    sourceLocation: "https://github.com/kazewaze/PickMe"
  },
  {
    title: "SizeMeUp",
    description: "A simple website that displays your screen dimensions.",
    imgLocation: "https://raw.githubusercontent.com/kazewaze/SizeMeUp/848d9d4d44eb4acd3ce18a63850c2edbc3c8b919/favicon.svg",
    imgAlt: "SizeMeUp Logo",
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