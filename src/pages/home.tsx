import { MapPin } from 'lucide-react'
import ReactMapboxGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
} from 'react-map-gl'
import { Feature } from 'geojson'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useAirport } from '../context/airport-context'
import { Header } from '../components/header'
import { ModalView } from '../components/modal-view'
import { NavButton } from '../components/nav-button'

export function Home() {
  const { startPoint, endPoint } = useAirport()

  // Divide as coordenadas em latitude e longitude
  const start = startPoint.coordinates.split(',').map(parseFloat)
  const end = endPoint.coordinates.split(',').map(parseFloat)

  // Dados da linha entre as duas coordenadas
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
          initialViewState={{
            latitude: start[0],
            longitude: start[1],
            zoom: 7,
          }}
          mapboxAccessToken={import.meta.env.VITE_API_ACCESS_TOKEN}
          style={{ width: '100%', height: '90vh' }}
          mapStyle="mapbox://styles/mapbox/dark-v11"
        >
          <div className="absolute right-3 top-3">
            <NavigationControl />
          </div>

          <div className="absolute bottom-48 md:bottom-10 right-3">
            <NavButton coordinates={start} />
          </div>

          <Marker
            latitude={start[0]}
            longitude={start[1]}
            pitchAlignment="viewport"
          >
            <MapPin className="size-7" fill="#77BC58" />
          </Marker>

          <Marker latitude={end[0]} longitude={end[1]}>
            <MapPin className="size-7" fill="#77BC58" />
          </Marker>

          {/* Cria uma linha entre as duas coordenadas */}
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
        <ModalView />
      </div>
    </main>
  )
}
