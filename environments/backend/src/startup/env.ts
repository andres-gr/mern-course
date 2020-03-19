import { config } from 'dotenv'
import path from 'path'

config({
  path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`),
})
