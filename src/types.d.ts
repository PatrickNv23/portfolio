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