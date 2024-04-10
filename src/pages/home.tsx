import { MapPin } from 'lucide-react'
import ReactMapboxGL, {
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  Source,
  useMap,
} from 'react-map-gl'
import { Feature } from 'geojson'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useCoordinates } from '../context/coordinates-context'
import { Header } from '../components/header'
import { ModalView } from '../components/modal-view'

export function Home() {
  const { startPoint, endPoint } = useCoordinates()
  const { current: map } = useMap()

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

  function handleClick() {
    map?.flyTo({
      center: [start[0], start[1]],
      zoom: 7,
      animate: true,
    })
  }

  return (
    <main>
      <Header />
      <div>
        <ReactMapboxGL
          mapboxAccessToken={import.meta.env.VITE_API_ACCESS_TOKEN}
          initialViewState={{
            latitude: start[0],
            longitude: start[1],
            zoom: 7,
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
          <button className="bg-white absolute top-0" onClick={handleClick}>
            teste
          </button>
        </ReactMapboxGL>
      </div>

      <ModalView />
    </main>
  )
}
