import { Project } from 'Axios/api'

export interface ProjectsState {
  projects: Project[]
}

const projectsState: ProjectsState = {
  projects: [],
}

export default projectsState
