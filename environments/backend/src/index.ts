import 'Startup/env'
import 'Startup/routes'
import cors from 'cors'
import express from 'express'
import path from 'path'
import router from 'Routes/router'

const PORT = process.env.PORT!
const isProd = process.env.NODE_ENV === 'production'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (isProd) {
  app.use('/', express.static(path.resolve(__dirname, '../dist')))
}

app.use('/api/v1', router)

app.listen(
  PORT,
  () => {
    console.log(`\nServer listening on port: ${PORT}\n`)
  },
)
