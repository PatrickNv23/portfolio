import profile from '../assets/profile.jpg';

export default function About() {
  return (
    <article className='mt-20'>
      <h2 className='text-2xl pb-10 font-bold pl-6 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0'>About me</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <div className='grid justify-center order-none md:order-1 lg:order-1 xl:order-1 2xl:order-1'>
          <picture>
            <img src={profile} alt="" className="object-cover w-72 h-72 rounded-md cursor-pointer hover:scale-105 duration-200 mb-6 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0" />
          </picture>
        </div>
        <div>
          <p className='max-w-prose  opacity-80 px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>
            Hello, my name is Patrick Alberto Navarro Vásquez and I am currently finishing my studies in Systems Engineering and Computer Science.
          </p>
          <br />
          <p className='opacity-80 px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>On the other hand, I have been developing web applications since 2020, since my first approach to web development was through an HTML course and, little by little, it caught my attention and I decided to learn the necessary technologies on my own.</p>
        </div>
        {/* <div className='grid justify-center'>
          <picture>
            <img src={profile} alt="" className="object-cover w-72 h-72 rounded-md cursor-pointer hover:scale-105 duration-200" />
          </picture>
        </div> */}
      </section>
    </article>

  )
}
