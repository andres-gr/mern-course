/* eslint-disable import/prefer-default-export */
import {
  RequestHandler,
  Response,
} from 'express'
import faker from 'faker'
import {
  GetUserResponse,
  User,
} from 'Api/models'

const getUser: RequestHandler = async (_req, res: Response<GetUserResponse>) => {
  const user = await new Promise<User>(resolve => {
    setTimeout(() => {
      resolve({
        email : faker.internet.email().toLowerCase(),
        id    : faker.random.uuid(),
        name  : faker.name.findName(),
      })
    }, 1500)
  })
  res
    .status(200)
    .json({
      message: 'Random user',
      user,
    })
    .end()
}

export {
  getUser,
}
