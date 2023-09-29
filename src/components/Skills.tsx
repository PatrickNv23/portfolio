import { SKILLS_DATA as skills } from '../constants';

export default function Skills() {
  return (
    <article className="mt-20 ">
      <h2 className='text-2xl pb-10 font-bold'> Skills </h2>
      <section className='grid grid-cols-3 gap-4 w-4/6 mx-auto'>
        {
          skills.map((skill, index: number) => (
            <figure key={index} className='flex flex-col justify-center items-center h-auto cursor-pointer hover:scale-105 duration-200 border border-gray-300 rounded-md hover:border-yellow-400'>
              <img src={skill.nameLogo} alt="" className='w-10 h-10 mt-3' />
              <figcaption className='text-sm py-3 opacity-80'>{skill.description}</figcaption>
            </figure>
          ))
        }
      </section>
    </article>
  )
}
