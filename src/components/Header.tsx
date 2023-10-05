import { useState, useRef } from "react"
import { OPTIONS_NAVIGATION as options } from "../constants"
import { Link } from 'react-scroll'
import { Fade } from 'react-awesome-reveal'
import { ANIMATION_DURATION } from "../constants"
export default function Header() {

  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  const ref: any = useRef(null);

  const handleOpenNavBar = () => {
    setIsOpenNavBar(!isOpenNavBar)
    ref.current?.classList.toggle("hidden")
    ref.current?.classList.toggle("opacity-0")
  }

  return (
    <Fade duration={ANIMATION_DURATION} triggerOnce={true} className="pt-8 md:pt-0">
      <header className='md:min-h-[80px] h-auto flex md:justify-between md:items-center md:flex-row flex-col relative'>
        <a href="#" className="hover:text-yellow-500 hover:scale-95 duration-200 px-6 md:px-0">PatrickNv23</a>
        <nav ref={ref} className='h-auto md:w-auto w-full opacity-0 md:opacity-100 transition-all ease-in duration-500 hidden md:block'>

          <ul className='flex w-100 md:items-center md:flex-row flex-col'>
            {
              options && options.map((option: string, index: number) => (
                <Link key={index} to={option} spy={true} smooth={true} duration={500} className="text-sm cursor-pointer hover:scale-95 duration-200 text-center py-4 md:py-0 px-6">
                  {option}
                </Link>
              ))
            }
            <li className="flex justify-center px-6">
              <a type="button" href="CV.pdf" download='CV_NavarroVásquezPatrickAlberto' className="text-yellow-400 w-24 h-10 border border-yellow-400 rounded-md text-sm  hover:scale-95 duration-200 hover:text-yellow-500 flex justify-center items-center">
                <span>Resume</span>
              </a>
            </li>
          </ul>

        </nav>


        {
          !isOpenNavBar && (
            <svg onClick={() => handleOpenNavBar()} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2 absolute right-6 md:opacity-0 opacity-100 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          )
        }

        {
          isOpenNavBar && (
            <svg onClick={() => handleOpenNavBar()} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x absolute right-6 md:opacity-0 opacity-100 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          )
        }
      </header>
    </Fade>
  )
}
