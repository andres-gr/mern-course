/* eslint-disable import/prefer-default-export */
import faker from 'faker'
import {
  GetProjectResponse,
  Project,
} from 'Api/models'
import { ReqHandler } from 'Utils/types'

const getProject: ReqHandler<never, GetProjectResponse> = async (_req, res) => {
  const project = await new Promise<Project>(resolve => {
    setTimeout(() => {
      resolve({
        author  : faker.name.findName(),
        company : faker.company.companyName(),
        id      : faker.random.uuid(),
      })
    }, 1200)
  })
  res
    .status(200)
    .json({
      message: 'Random project',
      project,
    })
    .end()
}

export {
  getProject,
}
