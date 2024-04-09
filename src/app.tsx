import { ArrowUpSquare, MapPin } from 'lucide-react'
import { Header } from './components/header'
import ReactMapboxGL, {
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  Source,
} from 'react-map-gl'

import { Feature } from 'geojson'

import * as Dialog from '@radix-ui/react-dialog'

import 'mapbox-gl/dist/mapbox-gl.css'
import { Modal } from './components/modal'
import { useCoordinates } from './context/coordinates-context'

export function App() {
  const { startPoint, endPoint } = useCoordinates()

  const start = startPoint.coordinates.split(',').map(parseFloat)
  const end = endPoint.coordinates.split(',').map(parseFloat)

  const polyline: Feature = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [
        [start[1], start[0]],
        [end[1], end[0]],
      ],
    },
  }

  return (
    <main>
      <Header />
      <div>
        <ReactMapboxGL
          mapboxAccessToken="pk.eyJ1IjoibXVyaWxvMzIzIiwiYSI6ImNsdXNsaDUwbDAyODMybW15YWpqcjhuenoifQ.Hzq9779iQ8n65zNh2a7Cew"
          initialViewState={{
            latitude: start[0],
            longitude: start[1],
            zoom: 10,
          }}
          style={{ width: '100%', height: '90vh' }}
          mapStyle="mapbox://styles/mapbox/dark-v11"
        >
          <div style={{ position: 'absolute', right: 10, top: 10 }}>
            <NavigationControl />
          </div>

          <div style={{ position: 'absolute', right: 10, top: 40 }}>
            <GeolocateControl />
          </div>

          <Marker latitude={start[0]} longitude={start[1]}>
            <MapPin className="text-marker size-7" />
          </Marker>

          <Marker latitude={end[0]} longitude={end[1]}>
            <MapPin className="text-marker size-7" />
          </Marker>

          <Source type="geojson" data={polyline}>
            <Layer
              id="lineLayer"
              type="line"
              paint={{
                'line-color': '#77BC58',
                'line-width': 2,
              }}
            />
          </Source>
        </ReactMapboxGL>
      </div>

      <Dialog.Root>
        <Dialog.DialogTrigger asChild>
          <button className="absolute bottom-10 left-6 bg-white rounded-full p-3">
            <ArrowUpSquare className="size-10" />
          </button>
        </Dialog.DialogTrigger>
        <Modal />
      </Dialog.Root>
    </main>
  )
}
