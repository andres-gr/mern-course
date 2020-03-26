import React, {
  FC,
  useLayoutEffect,
  useRef,
} from 'react'
import styled from '@emotion/styled'
import mapboxgl from 'mapbox-gl'

interface MapProps {
  center: {
    lat: number
    lon: number
  }
  zoom: number
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const Map: FC<MapProps> = ({
  center,
  zoom,
}) => {
  const element = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    setTimeout(() => {
      if (element.current) {
        const map = new mapboxgl.Map({
          center,
          container : element.current,
          style     : 'mapbox://styles/mapbox/streets-v11',
          zoom,
        })
        const marker = new mapboxgl.Marker()
        marker
          .setLngLat([
            center.lon,
            center.lat,
          ])
          .addTo(map)
      }
    }, 220)
  }, [
    center,
    center.lat,
    center.lon,
    zoom,
  ])

  return (
    <Container ref={ element } />
  )
}

export default Map
