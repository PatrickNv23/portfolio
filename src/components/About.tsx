import profile from '../assets/profile.jpg';

export default function About() {
  return (
    <article className='mt-20'>
      <h2 className='text-2xl pb-10 font-bold'>About me</h2>
      <section className="grid grid-cols-2">
        <div>
          <p className='max-w-prose'>
            Hello, my name is Patrick Alberto Navarro Vásquez and I am currently finishing my studies in Systems Engineering and Computer Science.
          </p>
          <br />
          <p>On the other hand, I have been developing web applications since 2020, since my first approach to web development was through an HTML course and, little by little, it caught my attention and I decided to learn the necessary technologies on my own.</p>
        </div>
        <div className='grid justify-center'>
          <picture>
            <img src={profile} alt="" className="object-cover w-72 h-72 rounded-md cursor-pointer hover:scale-105 duration-200" />
          </picture>
        </div>
      </section>
    </article>

  )
}
