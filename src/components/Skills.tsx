import { SKILLS_DATA as skills } from '../constants';

export default function Skills() {
  return (
    <article>
      <h2>SKILLS</h2>
      <section className='grid grid-cols-3 gap-4'>
        {
          skills.map((skill) => (
            <figure className='bg-green-300'>
              <img src={skill.nameLogo} alt="" className='w-10 h-10' />
              <figcaption>{skill.description}</figcaption>
            </figure>
          ))
        }
      </section>
    </article>
  )
}
