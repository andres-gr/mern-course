/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render } from 'react-dom'
import mapboxgl from 'mapbox-gl'
import 'Styles/index.css'
import { MAPS_TOKEN } from 'Utils/constants'
import App from './App'

mapboxgl.accessToken = MAPS_TOKEN

render(<App />, document.getElementById('app-root'))
