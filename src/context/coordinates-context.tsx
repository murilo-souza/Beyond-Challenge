import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react'
import { airportData } from '../utils/airport-data'

interface Airport {
  airportName: string
  airportCode: string
  coordinates: string
}

interface CoordinatesContextType {
  selector: Airport[]
  startPoint: Airport
  endPoint: Airport
  handleStartChange: (event: ChangeEvent<HTMLSelectElement>) => void
  handleEndChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const CoordinatesContext = createContext({} as CoordinatesContextType)

export function CoordinatesContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [startPoint, setStartPoint] = useState<Airport>(airportData[0])
  const [endPoint, setEndPoint] = useState<Airport>(airportData[1])

  const handleStartChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    const selectedAirport = airportData.find(
      (airport) => airport.airportCode === value,
    )
    if (selectedAirport) {
      setStartPoint(selectedAirport)
    }
  }

  const handleEndChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    const selectedAirport = airportData.find(
      (airport) => airport.airportCode === value,
    )
    if (selectedAirport) {
      setEndPoint(selectedAirport)
    }
  }

  return (
    <CoordinatesContext.Provider
      value={{
        selector: airportData,
        startPoint,
        endPoint,
        handleStartChange,
        handleEndChange,
      }}
    >
      {children}
    </CoordinatesContext.Provider>
  )
}

export const useCoordinates = () => useContext(CoordinatesContext)
