import { EXPERIENCES as experiences } from "../constants"
import { Fade } from 'react-awesome-reveal'
import { ANIMATION_DURATION } from "../constants"

export default function Experience() {
  return (
    <Fade duration={ANIMATION_DURATION} triggerOnce={true}>
      <article className="mt-20" id="Experience">
        <h2 className='text-2xl pb-10 font-bold  pl-6 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0'>Experience</h2>
        {
          experiences.map((experience, index: number) => (
            <section key={index} className="mb-5">
              <div className="flex flex-col md:flex-row">
                <h2 className="pl-6 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0 pr-0 md:pr-2 lg:pr-2 xl:pr-2 2xl:pr-2">{experience.position}
                </h2>
                <span className="font-bold text-yellow-400 px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0 text-sm md:text-base">@ {experience.company}</span>
              </div>

              <span className="text-xs text-gray-400 px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0">{experience.dateRange}</span>
              <ul className="pt-4">
                {
                  experience.responsabilities.map((responsability, index: number) => (
                    <li className="flex items-center px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0" key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right text-yellow-400" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                      <span className="pl-4 opacity-80">{responsability}</span>
                    </li>
                  ))
                }
              </ul>
            </section>
          ))
        }
      </article>
    </Fade>
  )
}
