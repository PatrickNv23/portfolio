
export default function Header() {
  return (
    <header className='min-h-[60px] h-auto flex justify-between items-center'>
      <div>PatrickNv23</div>
      <nav className='h-auto w-2/4'>
        <ul className='flex w-100 justify-between'>
          <li>About</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>
            <button>CV</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
