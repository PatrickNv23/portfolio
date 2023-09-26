import reactLogo from './assets/skills_icons/react.svg';
import angularLogo from './assets/skills_icons/angular.svg';
import javascriptLogo from './assets/skills_icons/javascript.svg'
import typescriptLogo from './assets/skills_icons/typescript.svg'
import javaLogo from './assets/skills_icons/java.svg'
import springLogo from './assets/skills_icons/spring.svg'
import csharpLogo from './assets/skills_icons/csharp.svg'
import aspnetcoreLogo from './assets/skills_icons/aspnetcore.svg'
import gitLogo from './assets/skills_icons/git.svg'
import sqlserverLogo from './assets/skills_icons/sqlserver.svg'
import mysqlLogo from './assets/skills_icons/mysql.svg'
import tailwindLogo from './assets/skills_icons/tailwindcss.svg'
import { Skill, ProjectData } from './types';

export const SKILLS_DATA: Array<Skill> = [
  {
    nameLogo: javascriptLogo,
    description: 'Javascript'
  },
  {
    nameLogo: typescriptLogo,
    description: 'Typescript'
  },
  {
    nameLogo: reactLogo,
    description: 'React'
  },
  {
    nameLogo: angularLogo,
    description: 'Angular'
  },
  {
    nameLogo: javaLogo,
    description: 'Java'
  },
  {
    nameLogo: springLogo,
    description: 'Spring'
  },
  {
    nameLogo: csharpLogo,
    description: 'C#'
  },
  {
    nameLogo: aspnetcoreLogo,
    description: 'ASP .NET Core'
  },
  {
    nameLogo: sqlserverLogo,
    description: 'Sql Server'
  },
  {
    nameLogo: mysqlLogo,
    description: 'MySQL'
  },
  {
    nameLogo: gitLogo,
    description: 'Git'
  },
  {
    nameLogo: tailwindLogo,
    description: 'Tailwind CSS'
  }
]

export const PROJECTS_DATA: Array<ProjectData> = [
  {
    imageUrl: 'dfgdfgd',
    title: 'Foodius',
    description: 'Food recipe application consuming a public API, where the user can filter recipes by name, category, ingredient and area, in addition, each recipe has its information detail.All this secured through full firebase authentication.',
    technologies: [
      'VS Code',
      'Angular',
      'Git',
      'Github',
      'Tailwind CSS',
      'Firebase Authentication',
      'Typescript'
    ],
    githubUrl: 'https://github.com/PatrickNv23/foodius',
    publicUrl: 'https://foodius.netlify.app/auth'
  },
  {
    imageUrl: 'dfgdfgd',
    title: 'Windbnb',
    description: 'A frontend challenge from the devChallenges page, inspired by the Airbnb page.',
    technologies: [
      'VS Code',
      'React',
      'Git',
      'Github',
      'CSS Modules'
    ],
    githubUrl: 'https://github.com/PatrickNv23/Windbnb-devChallenge',
    publicUrl: 'https://patricknv23windbnb.netlify.app'
  },
  {
    imageUrl: 'dfgdfgd',
    title: 'TodoApp',
    description: 'A frontend challenge from the devChallenges page with filters for total, pending and completed tasks, and also contains a save in localStorage.',
    technologies: [
      'VS Code',
      'React',
      'Git',
      'Github',
      'CSS Modules'
    ],
    githubUrl: 'https://github.com/PatrickNv23/TodoApp-devChallenges',
    publicUrl: 'https://todoappnv.netlify.app'
  },
  {
    imageUrl: 'dfgdfgd',
    title: 'Random Quote Generator',
    description: 'A front-end challenge of the devChallenges page with generation of random quotes from authors through the consumption of a public API, in addition, animations were added for a better user experience.',
    technologies: [
      'VS Code',
      'React',
      'Git',
      'Github',
      'CSS Modules',
      'React-spring'
    ],
    githubUrl: 'https://github.com/PatrickNv23/Random-Quote-Generator-devChallenges',
    publicUrl: 'https://randomquotegeneratornv.netlify.app'
  }
]