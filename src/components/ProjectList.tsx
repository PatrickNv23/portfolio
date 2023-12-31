import { Project } from "./Project";
import { PROJECTS_DATA as projects } from "../constants";
import { ProjectData } from "../types";

export default function Projects() {
  return (
    <>
      <article className="mt-20" id="Projects">
        <h2 className='text-2xl pb-10 font-bold pl-6 md:pl-0'>Projects</h2>
        <div className="flex flex-col items-center">
          {
            projects.map((project: ProjectData, index: number) => (
              <Project key={index} project={project} index={index} />
            ))
          }
        </div>
      </article>
    </>
  )
}
