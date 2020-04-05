import { body } from 'express-validator'
import router from 'Routes/router'
import {
  createPlace,
  deletePlace,
  getPlace,
  getPlaces,
  getUserPlaces,
  updatePlace,
} from 'Controllers/places'

const BASE = '/places'

router.get(`${BASE}/user/:id`, getUserPlaces)

router.get(`${BASE}/:id`, getPlace)

router.get(BASE, getPlaces)

router.post(BASE, [
  body([
    'address',
    'image',
    'title',
    'userId',
  ])
    .notEmpty(),
  body('description')
    .notEmpty()
    .isLength({ min: 5 }),
], createPlace)

router.patch(`${BASE}/:id`, [
  body([
    'address',
    'image',
    'title',
    'userId',
  ])
    .optional({ nullable: true })
    .notEmpty(),
  body('description')
    .optional({ nullable: true })
    .notEmpty()
    .isLength({ min: 5 }),
], updatePlace)

router.delete(`${BASE}/:id`, deletePlace)
