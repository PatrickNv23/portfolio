import { ProjectData } from "../types"

interface Props {
  project: ProjectData
}

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <section className="bg-purple-600 border">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <ul>
        {
          project.technologies.map((technology) => (
            <li>{technology}</li>
          ))
        }

      </ul>
      <a href={project.githubUrl} target="_BLANK">Github</a>
      <a href={project.publicUrl} target="_BLANK">Web</a>
    </section>
  )
}
