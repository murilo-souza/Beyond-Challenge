import { MapPin } from 'lucide-react'
import { Header } from './components/header'
import ReactMapboxGL, {
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  Source,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

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
          mapStyle="mapbox://styles/mapbox/streets-v9"
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
    </main>
  )
}
