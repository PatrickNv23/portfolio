import { SKILLS_DATA as skills } from '../constants';

export default function Skills() {
  return (
    <article className="mt-20 ">
      <h2 className='text-2xl pb-10 font-bold pl-6 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0'> Skills </h2>
      <section className='grid grid-cols-3 gap-4 w-4/6 mx-auto'>
        {
          skills.map((skill, index: number) => (
            <figure key={index} className='flex flex-col justify-center items-center h-auto cursor-pointer hover:scale-105 duration-200 border border-gray-300 rounded-md hover:border-yellow-400'>
              <img src={skill.nameLogo} alt="" className='w-10 h-10 mt-3' />
              <figcaption className='text-[8px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm py-3 opacity-80'>{skill.description}</figcaption>
            </figure>
          ))
        }
      </section>
    </article>
  )
}
