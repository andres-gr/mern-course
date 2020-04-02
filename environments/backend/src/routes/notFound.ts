import {
  NextFunction,
  Request,
  Response,
} from 'express'
import router from 'Routes/router'
import HttpError from 'Utils/httpError'

router.use((_req, _res, next) => {
  const error = new HttpError({
    message : 'Not found',
    status  : 404,
  })
  next(error)
})

router.use((err: HttpError, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err)
  }
  res
    .status(err.status || 500)
    .json({
      error: {
        message: err.message || 'An error occured on the server!',
      },
    })
    .end()
})
