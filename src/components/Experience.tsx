import { EXPERIENCES as experiences } from "../constants"

export default function Experience() {
  return (
    <article className="mt-20">
      <h2 className='text-2xl pb-10 font-bold'>Experience</h2>
      {
        experiences.map((experience, index: number) => (
          <section key={index}>
            <h2>{experience.position}
              <span className="font-bold text-yellow-400"> @ {experience.company}</span>
            </h2>
            <span className="text-xs text-gray-400">{experience.dateRange}</span>
            <ul className="pt-4">
              {
                experience.responsabilities.map((responsability, index: number) => (
                  <li className="flex items-center" key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right text-yellow-400" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                    <span className="pl-4 opacity-80">{responsability}</span>
                  </li>
                ))
              }
              {/* <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right text-yellow-400" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
                <span className="pl-4">Refactoring, good practices with clean architecture.</span>
              </li>
              <li>Component performance analysis.</li>
              <li>Development of scalable functionalities for web applications.</li>
              <li>Generation of scripts in the database to optimize data. </li> */}
            </ul>
          </section>
        ))
      }
      {/* <section>
        <h2>Full Stack Developer
          <span className="font-bold text-yellow-400"> @ Dasser Innovating Solutions S.A.C.</span>
        </h2>
        <span className="text-xs text-gray-400">January 2023 - July 2023</span>
        <ul>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right text-yellow-400" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
            <span className="pl-4">Refactoring, good practices with clean architecture.</span>
          </li>
          <li>Component performance analysis.</li>
          <li>Development of scalable functionalities for web applications.</li>
          <li>Generation of scripts in the database to optimize data. </li>
        </ul>
      </section> */}
    </article>
  )
}
