import { validationResult } from 'express-validator'
import faker from 'faker'
import {
  PlacesIdDeleteRequest,
  PlacesIdGetRequest,
  PlacesIdPatchRequest,
  PlacesUserIdGetRequest,
} from 'Api/apis'
import {
  BaseErrorResponse,
  DeletePlaceResponse,
  GetPlaceResponse,
  GetPlacesResponse,
  PatchPlaceResponse,
  Place,
  PlaceBody,
  PostPlaceResponse,
} from 'Api/models'
import { PLACES } from 'Utils/mockDB'
import { ReqHandler } from 'Utils/types'
import HttpError from 'Utils/httpError'

const getPlaces: ReqHandler<never, GetPlacesResponse> = async (_req, res) => {
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

const getPlace: ReqHandler<PlacesIdGetRequest, GetPlaceResponse | BaseErrorResponse> = async (req, res, next) => {
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

const getUserPlaces: ReqHandler<PlacesUserIdGetRequest, GetPlacesResponse | BaseErrorResponse> = async (req, res, next) => {
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

const createPlace: ReqHandler<never, PostPlaceResponse, PlaceBody> = async (req, res, next) => {
  const results = validationResult(req)
  if (!results.isEmpty()) {
    return next(new HttpError({
      errors  : results.array(),
      message : 'Incorrect or missing values',
      status  : 422,
    }))
  }
  const place = await new Promise<Place>(resolve => {
    setTimeout(() => {
      const result = {
        ...req.body,
        id: faker.random.uuid(),
      }
      PLACES.push(result)
      resolve(result)
    }, 1000)
  })
  res
    .status(201)
    .json({
      message: 'New place created',
      place,
    })
    .end()
}

const updatePlace: ReqHandler<PlacesIdPatchRequest, PatchPlaceResponse, PlaceBody> = async (req, res, next) => {
  const results = validationResult(req)
  if (!results.isEmpty()) {
    return next(new HttpError({
      errors  : results.array(),
      message : 'Incorrect or missing values',
      status  : 422,
    }))
  }
  const {
    params: {
      id: placeId,
    },
  } = req
  const currentPlace = await new Promise<Place>(resolve => {
    setTimeout(() => {
      const result = PLACES.find(({ id }) => id === placeId)
      resolve(result)
    }, 1000)
  })
  if (!currentPlace) {
    return next(new HttpError({
      message : 'No place found for given ID.',
      status  : 404,
    }))
  }
  const place = {
    ...currentPlace,
    ...req.body,
    id: placeId,
  }
  const index = PLACES.findIndex(({ id }) => id === placeId)
  PLACES.splice(index, 1, place)
  res
    .status(200)
    .json({
      message: 'Updated place',
      place,
    })
    .end()
}

const deletePlace: ReqHandler<PlacesIdDeleteRequest, DeletePlaceResponse> = async (req, res, next) => {
  const {
    params:{
      id: placeId,
    },
  } = req
  const place = await new Promise<Place>(resolve => {
    setTimeout(() => {
      const result = PLACES.find(({ id }) => id === placeId)
      resolve(result)
    }, 1000)
  })
  if (!place) {
    return next(new HttpError({
      message : 'No place found for given ID.',
      status  : 404,
    }))
  }
  const index = PLACES.findIndex(({ id }) => id === placeId)
  PLACES.splice(index, 1)
  res
    .status(200)
    .json({
      message: 'Place deleted',
      place,
    })
    .end()
}

export {
  createPlace,
  deletePlace,
  getPlace,
  getPlaces,
  getUserPlaces,
  updatePlace,
}
