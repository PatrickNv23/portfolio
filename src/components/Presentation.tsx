import { Fade } from 'react-awesome-reveal'
import { ANIMATION_DURATION } from "../constants"

export default function Presentation() {
  return (
    <Fade duration={ANIMATION_DURATION} triggerOnce={true}>
      <article className="min-h-[400px] h-auto flex flex-col justify-around ">
        <span className="text-yellow-400 pt-8 pl-6 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0">Hi, my name is </span>
        <div className="h-2/4">

          <h1 className="font-bold pb-3 text-3xl sm:text-5xl md:text-7xl pl-6 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0">PATRICK NAVARRO</h1>


          <p className="max-w-prose opacity-80 px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0">I'm a software developer, specialized in building modern web applications.</p>
          <p className="max-w-prose opacity-80 px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
            Currently, I am focused on improving my knowledge of web architectures and performance, to offer the best results.
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <a type="button" href="CV.pdf" download='CV_NavarroVásquezPatrickAlberto' className="text-yellow-400 w-40 h-14 border border-yellow-400 rounded-md hover:scale-95 duration-200 hover:text-yellow-500 flex justify-center items-center">
            <span>Check my CV</span>
          </a>
        </div>
      </article>
    </Fade>
  )
}
