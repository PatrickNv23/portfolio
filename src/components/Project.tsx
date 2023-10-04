import { ProjectData } from "../types"
import { Fade } from 'react-awesome-reveal'
import { ANIMATION_DURATION } from "../constants"

interface Props {
  project: ProjectData,
  index: number
}

export const Project: React.FC<Props> = ({ project, index }) => {

  function showOddProject() {

    return (
      <Fade direction="right" duration={ANIMATION_DURATION} triggerOnce={true}>
        <section className="min-h-auto h-auto md:h-[510px] max-h-auto md:max-h-[510px] grid grid-cols-1 md:grid-cols-6 md:w-11/12 mb-10 mx-6 md:mx-0">
          <div className="md:col-span-4 rounded-md">
            <img className="object-cover h-[500px] w-full rounded-md" src={project.imageUrl} alt="" />
          </div>
          <div className="text-center md:text-end md:col-span-2 flex flex-col justify-center h-full">
            <div className=" h-4/6 flex flex-col justify-around items-center md:items-stretch">
              <div className="my-4 md:my-0">
                <h2 className="text-yellow-400 text-sm">Featured Project</h2>
                <h1 className="text-2xl font-bold hover:text-yellow-400 cursor-pointer">{project.title}</h1>
              </div>
              <div className="bg-slate-800 md:-translate-x-36 w-auto md:w-[495px] max-w-[495px] h-auto max-h-36 flex flex-col justify-center items-center shadow-md rounded-md my-4 md:my-0">
                <p className="text-sm text-center max-w-prose py-6 px-3 xs:text-[12px]">{project.description}</p>
              </div>
              <ul className="flex justify-around w-full my-4 md:my-0 flex-wrap">
                {
                  project.technologies.map((technology, index: number) => (
                    <li className="text-[12px] text-gray-400" key={index}>{technology}</li>
                  ))
                }
              </ul>
              <div className="flex justify-end">
                <a href={project.githubUrl} target="_BLANK" className="px-2 hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <a href={project.publicUrl} target="_BLANK" className="px-2 hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fade>

    )
  }

  function showPairProject() {
    return (
      <Fade direction="left" duration={ANIMATION_DURATION} triggerOnce={true}>
        <section className="min-h-auto h-auto md:h-[510px] max-h-auto md:max-h-[510px] grid grid-cols-1 md:grid-cols-6 md:w-11/12 mb-10 mx-6 md:mx-0">
          <div className="md:col-span-4 rounded-md order-none md:order-last">
            <img className="object-cover h-[500px] w-full rounded-md" src={project.imageUrl} alt="" />
          </div>
          <div className="text-center md:text-start md:col-span-2 flex flex-col justify-center h-full">
            <div className="h-4/6 flex flex-col justify-around items-center md:items-stretch">
              <div className="my-4 md:my-0">
                <h2 className="text-yellow-400 text-sm">Featured Project</h2>
                <h1 className="text-2xl font-bold hover:text-yellow-400 cursor-pointer">{project.title}</h1>
              </div>
              <div className="bg-slate-800 md:translate-x-0 w-auto md:w-[495px] max-w-[495px] h-auto max-h-36 flex flex-col justify-center items-center shadow-md rounded-md my-4 md:my-0">

                <p className="text-sm text-center max-w-prose py-6 px-3 xs:text-[12px]">{project.description}</p>
              </div>
              <ul className="flex justify-around w-full my-4 md:my-0 flex-wrap">
                {
                  project.technologies.map((technology, index: number) => (
                    <li className="text-[12px] text-gray-400" key={index}>{technology}</li>
                  ))
                }
              </ul>
              <div className="flex justify-start">
                <a href={project.githubUrl} target="_BLANK" className="px-2 hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <a href={project.publicUrl} target="_BLANK" className="px-2 hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    )
  }

  return (
    <>
      {
        (project && ((index + 1) % 2 !== 0)) && (
          showOddProject()
        )
      }
      {
        (project && ((index + 1) % 2 === 0)) && (
          showPairProject()
        )
      }
    </>
  )
}
