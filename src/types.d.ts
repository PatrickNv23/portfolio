export interface Skill {
  nameLogo: string,
  description: string
}

export interface ProjectData {
  imageUrl: string,
  title: string,
  description: string,
  technologies: Array<string>,
  githubUrl: string,
  publicUrl: string;
}

export interface ExperienceData {
  position: string,
  company: string,
  dateRange: string,
  responsabilities: Array<string>
}

export type optionNavigation = string;