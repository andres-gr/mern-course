import axios from 'axios'
import { GeocodeResponse } from '@googlemaps/google-maps-services-js'
import HttpError from './httpError'

const API_KEY = process.env.KEY

async function getCoords (address: string) {
  const search = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${API_KEY}`
  const {
    data: {
      results,
      status,
    },
  } = await axios.get<GeocodeResponse['data']>(search)
  if (results.length === 0 || status === 'ZERO_RESULTS') {
    throw new HttpError({
      message : 'No location found for address.',
      status  : 422,
    })
  }
  const coords = results[0].geometry.location
  return coords
}

export default getCoords
