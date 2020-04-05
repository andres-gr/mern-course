import { body } from 'express-validator'
import router from 'Routes/router'
import {
  getUsers,
  login,
  signup,
} from 'Controllers/users'

const BASE = '/users'

router.get(BASE, getUsers)

router.post(`${BASE}/signup`, [
  body([
    'name',
    'password',
  ])
    .notEmpty(),
  body('email')
    .normalizeEmail()
    .notEmpty()
    .isEmail(),
], signup)

router.post(`${BASE}/login`, login)
