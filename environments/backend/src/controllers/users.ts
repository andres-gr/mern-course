/* eslint-disable import/prefer-default-export */
import {
  compare,
  hash,
} from 'bcrypt'
import { validationResult } from 'express-validator'
import faker from 'faker'
import {
  GetUsersResponse,
  LoginContent,
  LoginResponse,
  SignupContent,
  SignupResponse,
  User,
} from 'Api/models'
import {
  USER_PASSWORDS,
  USERS,
} from 'Utils/mockDB'
import { ReqHandler } from 'Utils/types'
import HttpError from 'Utils/httpError'

const getUsers: ReqHandler<never, GetUsersResponse> = async (_req, res) => {
  const users = await new Promise<User[]>(resolve => {
    setTimeout(() => {
      resolve(USERS)
    }, 1000)
  })
  res
    .status(200)
    .json({
      message: 'Get all users',
      users,
    })
    .end()
}

const signup: ReqHandler<never, SignupResponse, SignupContent> = async (req, res, next) => {
  const results = validationResult(req)
  if (!results.isEmpty()) {
    return next(new HttpError({
      errors  : results.array(),
      message : 'Incorrect or missing values',
      status  : 422,
    }))
  }
  const {
    body: {
      email: userEmail,
      name,
      password,
    },
  } = req
  const currentUser = await new Promise<User>(resovle => {
    setTimeout(() => {
      const user = USERS.find(({ email }) => email === userEmail)
      resovle(user)
    }, 1000)
  })
  if (currentUser) {
    return next(new HttpError({
      message : 'Email already in use',
      status  : 403,
    }))
  }
  const userId = faker.random.uuid(),
        user: User = {
          email  : userEmail,
          id     : userId,
          image  : faker.image.avatar(),
          name,
          places : 0,
        }
  USER_PASSWORDS[userId] = await hash(password, 10)
  USERS.push(user)
  res
    .status(201)
    .json({
      message: 'New user created',
      user,
    })
    .end()
}

const login: ReqHandler<never, LoginResponse, LoginContent> = async (req, res, next) => {
  const {
    body: {
      email: userEmail,
      password,
    },
  } = req
  const user = await new Promise<User>(resolve => {
    setTimeout(() => {
      const result = USERS.find(({ email }) => email === userEmail)
      resolve(result)
    }, 1000)
  })
  if (!user) {
    return next(new HttpError({
      message : 'No user found for email',
      status  : 401,
    }))
  }
  const passIsValid = await compare(password, USER_PASSWORDS[user.id])
  if (!passIsValid) {
    return next(new HttpError({
      message : 'Password is incorrect',
      status  : 401,
    }))
  }
  res
    .status(200)
    .json({
      message: 'Login',
      user,
    })
    .end()
}

export {
  getUsers,
  login,
  signup,
}
