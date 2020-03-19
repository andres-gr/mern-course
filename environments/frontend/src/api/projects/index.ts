import ZustandStoreCreator from 'Api/store'
import projectsActions, { ProjectsActions } from './actions'
import projectsState, { ProjectsState } from './state'
import ProjectsTypes from './types'

class ProjectsStore extends ZustandStoreCreator<ProjectsState, ProjectsActions> {
  constructor () {
    super(
      {
        actions : projectsActions,
        name    : ProjectsTypes.PROJECTS_STORE,
        state   : projectsState,
      },
    )
  }
}

const projectsStore = new ProjectsStore()

const [
  useProjectsStore,
  projectsApi,
] = projectsStore.createStore()

export {
  projectsApi,
  useProjectsStore,
}
