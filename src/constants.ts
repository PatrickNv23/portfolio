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
import foodiusScreenshot from './assets/screenshots/foodius_screenshot.webp';
import windbnbScreenshot from './assets/screenshots/windbnb_screenshot.webp';
import todoappScreenshot from './assets/screenshots/todoapp_screenshot.webp';
import randomquoteScreenshot from './assets/screenshots/randomquote_screenshot.webp';
import { Skill, ProjectData, ExperienceData, optionNavigation } from './types';

export const OPTIONS_NAVIGATION: Array<optionNavigation> = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Contact"
]

export const ANIMATION_DURATION: number = 2000;

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
    imageUrl: foodiusScreenshot,
    title: 'Foodius',
    description: 'Food recipe application consuming a public API, where the user can filter recipes by name, category, ingredient and area, in addition, each recipe has its information detail.All this secured through full firebase authentication.',
    technologies: [
      'VS Code',
      'Angular',
      'Git',
      'Tailwind CSS',
      'Firebase',
    ],
    githubUrl: 'https://github.com/PatrickNv23/foodius',
    publicUrl: 'https://foodius.netlify.app/auth'
  },
  {
    imageUrl: windbnbScreenshot,
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
    imageUrl: todoappScreenshot,
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
    imageUrl: randomquoteScreenshot,
    title: 'Random Quote Generator',
    description: 'A front-end challenge of the devChallenges page with generation of random quotes from authors through the consumption of a public API, in addition, animations were added for a better user experience.',
    technologies: [
      'VS Code',
      'React',
      'Git',
      'CSS Modules',
      'React-spring'
    ],
    githubUrl: 'https://github.com/PatrickNv23/Random-Quote-Generator-devChallenges',
    publicUrl: 'https://randomquotegeneratornv.netlify.app'
  }
]

export const EXPERIENCES: Array<ExperienceData> = [
  {
    position: "Full Stack Developer",
    company: "Avatar Global SAC",
    dateRange: "March 2024 - Present",
    responsabilities: [
      "Development of scalable functionalities for multiplatform systems.",
      "Code refactoring applying good practices.",
      "Support for existing functionalities.",
      "Continuous training."
    ]
  },
  {
    position: "Full Stack Developer",
    company: "Dasser Innovating Solutions S.A.C.",
    dateRange: "January 2023 - July 2023",
    responsabilities: [
      "Refactoring, good practices with clean architecture.",
      "Component performance analysis.",
      "Development of scalable functionalities for web applications.",
      "Generation of scripts in the database to optimize data."
    ]
  }
]