export default function Presentation() {
  return (
    <article className="h-[400px] flex flex-col justify-around">
      <span className="text-yellow-400 pt-8">Hi, my name is </span>
      <div className="h-2/4">
        <h1 className="text-7xl font-bold pb-3">PATRICK NAVARRO</h1>
        <p className="max-w-prose opacity-80">I'm a software developer, specialized in building modern web applications.</p>
        <p className="max-w-prose opacity-80">
          Currently, I am focused on improving my knowledge of web architectures and performance, to offer the best results.
        </p>
      </div>
      <a type="button" href="CV.pdf" download='CV_NavarroVásquezPatrickAlberto' className="text-yellow-400 w-40 h-14 border border-yellow-400 rounded-md hover:scale-95 duration-200 hover:text-yellow-500 flex justify-center items-center">
        <span>Check my CV</span>
      </a>
    </article>
  )
}
