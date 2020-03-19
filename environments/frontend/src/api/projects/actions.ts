import {
  Project,
  ProjectsApi,
} from 'Axios/api'
import {
  AnyPromise,
  ZustandActions,
} from 'Utils/types'
import delay from 'Utils/delay'
import { ProjectsState } from './state'
import ProjectsTypes from './types'

export interface ProjectsActions {
  addProject: (project: Project) => (void | Promise<void>)
  fetchProject: AnyPromise
}

const ProjectsAxios = new ProjectsApi()

const projectsActions: ZustandActions<ProjectsState, ProjectsActions> = set => ({
  addProject: async project => {
    await delay(500)
    set(state => void state.projects.push(project), ProjectsTypes.ADD_PROJECT)
  },
  fetchProject: async () => {
    const result = await ProjectsAxios.projectGet()
    const {
      data: { project },
    } = result
    if (project) {
      set(state => void state.projects.push(project), ProjectsTypes.FETCH_PROJECT)
    }
  },
})

export default projectsActions
