import { OPTIONS_NAVIGATION as options } from "../constants"
export default function Header() {
  return (
    <header className='min-h-[60px] h-auto flex justify-between items-center'>
      <div>PatrickNv23</div>
      <nav className='h-auto w-2/4'>
        <ul className='flex w-100 justify-between items-center'>
          {
            options && options.map((option: string, index: number) => (
              <li key={index} className="text-sm">{option}</li>
            ))
          }
          <li>
            <button className="text-yellow-400 w-24 h-10 border border-yellow-400 rounded-md text-sm">
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
