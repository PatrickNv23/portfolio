import { Fade } from 'react-awesome-reveal'
import { ANIMATION_DURATION } from "../constants"

export default function Contact() {
  return (
    <Fade duration={ANIMATION_DURATION} triggerOnce={true}>
      <article className="mt-20 flex flex-col items-center mb-56">

        <div className="w-3/6 h-auto" id="Contact">
          <h2 className='text-2xl pb-10 font-bold text-center'>Get In Touch</h2>
          <p className="pb-10 text-gray-400">
            I'm currently looking for new opportunities, my inbox is always open. If you have any questions or just want to say hi, I'll be happy to answer!
          </p>
        </div>

        <a type="button" href="mailto:patricknv230101@gmail.com" className="text-yellow-400 w-40 h-14 border border-yellow-400 rounded-md max-w-prose mb-4 hover:scale-95 duration-200 hover:text-yellow-500 flex justify-center items-center">
          <span>Say Hello</span>
        </a>
      </article>
    </Fade>
  )
}
