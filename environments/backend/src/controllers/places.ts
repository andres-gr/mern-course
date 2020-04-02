import {
  RequestHandler,
  Response,
} from 'express'
import {
  PlacesIdGetRequest,
  PlacesUserIdGetRequest,
} from 'Api/apis'
import {
  BaseErrorResponse,
  GetPlaceResponse,
  GetPlacesResponse,
  Place,
} from 'Api/models'
import { PLACES } from 'Utils/mockDB'
import { ApiParams } from 'Utils/types'
import HttpError from 'Utils/httpError'

const getPlaces: RequestHandler = async (_req, res: Response<GetPlacesResponse>) => {
  const places = await new Promise<Place[]>(resolve => {
    setTimeout(() => {
      resolve(PLACES)
    }, 1200)
  })
  res
    .status(200)
    .json({
      message: 'All places',
      places,
    })
    .end()
}

const getPlace: RequestHandler<ApiParams<PlacesIdGetRequest>> = async (req, res: Response<GetPlaceResponse | BaseErrorResponse>, next) => {
  const {
    id: placeId,
  } = req.params
  const place = await new Promise<Place>(resolve => {
    setTimeout(() => {
      const result = PLACES.find(({ id }) => id === placeId)
      resolve(result)
    }, 1000)
  })
  if (!place) {
    return next(new HttpError({
      message : 'No place found with id',
      status  : 404,
    }))
  }
  res
    .status(200)
    .json({
      message: 'Single place',
      place,
    })
    .end()
}

const getUserPlaces: RequestHandler<ApiParams<PlacesUserIdGetRequest>> = async (req, res: Response<GetPlacesResponse | BaseErrorResponse>, next) => {
  const {
    id: uId,
  } = req.params
  const places = await new Promise<Place[]>(resolve => {
    setTimeout(() => {
      const results = PLACES.filter(({ userId }) => userId === uId)
      resolve(results)
    }, 1200)
  })
  if (places.length === 0) {
    return next(new HttpError({
      message : 'No places found for user id.',
      status  : 404,
    }))
  }
  res
    .status(200)
    .json({
      message: 'User places',
      places,
    })
    .end()
}

export {
  getPlace,
  getPlaces,
  getUserPlaces,
}
