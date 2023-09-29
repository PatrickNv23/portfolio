import { OPTIONS_NAVIGATION as options } from "../constants"

export default function Header() {

  return (
    <header className='min-h-[80px] h-auto flex justify-between items-center'>
      <a href="#" className="hover:text-yellow-500 hover:scale-95 duration-200">PatrickNv23</a>
      <nav className='h-auto w-2/4'>
        <ul className='flex w-100 justify-between items-center'>
          {
            options && options.map((option: string, index: number) => (
              <li key={index} className="text-sm cursor-pointer hover:scale-95 duration-200">{option}</li>
            ))
          }
          <li>
            <a type="button" href="CV.pdf" download='CV_NavarroVásquezPatrickAlberto' className="text-yellow-400 w-24 h-10 border border-yellow-400 rounded-md text-sm  hover:scale-95 duration-200 hover:text-yellow-500 flex justify-center items-center">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
