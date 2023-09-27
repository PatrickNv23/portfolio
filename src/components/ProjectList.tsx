import { Project } from "./Project";
import { PROJECTS_DATA as projects } from "../constants";
import { ProjectData } from "../types";

export default function Projects() {
  return (
    <article>
      {
        projects.map((project: ProjectData, index: number) => (
          <Project key={index} project={project} />
        ))
      }
    </article>
  )
}
