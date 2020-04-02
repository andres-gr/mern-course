import router from 'Routes/router'
import {
  getPlace,
  getPlaces,
  getUserPlaces,
} from 'Controllers/places'

const BASE = '/places'

router.get(`${BASE}/user/:id`, getUserPlaces)

router.get(`${BASE}/:id`, getPlace)

router.get(BASE, getPlaces)
