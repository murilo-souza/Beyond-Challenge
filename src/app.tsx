import { ArrowUpSquare, MapPin } from 'lucide-react'
import { Header } from './components/header'
import ReactMapboxGL, {
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  Source,
} from 'react-map-gl'
import * as Dialog from '@radix-ui/react-dialog'

import 'mapbox-gl/dist/mapbox-gl.css'
import { Modal } from './components/modal'

export function App() {
  const points = [
    { latitude: -23.628221, longitude: -46.6596195 },
    { latitude: -22.9102755, longitude: -43.1670474 },
  ]

  const polyline = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: points.map((point) => [point.longitude, point.latitude]),
    },
  }

  return (
    <main>
      <Header />
      <div>
        <ReactMapboxGL
          mapboxAccessToken="pk.eyJ1IjoibXVyaWxvMzIzIiwiYSI6ImNsdXNsaDUwbDAyODMybW15YWpqcjhuenoifQ.Hzq9779iQ8n65zNh2a7Cew"
          initialViewState={{
            latitude: -23.628221,
            longitude: -46.6596195,
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

          {points.map((point, key) => (
            <Marker
              key={key}
              longitude={point.longitude}
              latitude={point.latitude}
            >
              <MapPin className="text-marker size-7" />
            </Marker>
          ))}

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
