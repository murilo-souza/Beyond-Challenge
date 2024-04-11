import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react'
import { airportData } from '../utils/airport-data'

// Tipagem dos aeroportos
interface Airport {
  airportName: string
  airportCode: string
  coordinates: string
}

// Tipagem do contexto
interface AirportContextType {
  selector: Airport[]
  startPoint: Airport
  endPoint: Airport
  handleStartChange: (event: ChangeEvent<HTMLSelectElement>) => void
  handleEndChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

// Cria o contexto
const AirportContext = createContext({} as AirportContextType)

export function AirportContextProvider({ children }: { children: ReactNode }) {
  // Começa os estados de ponte de partida e chegada com os aeroportos
  const [startPoint, setStartPoint] = useState<Airport>(airportData[0])
  const [endPoint, setEndPoint] = useState<Airport>(airportData[1])

  // Funções para alterar o aeroporto de partida
  const handleStartChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // Pega o valor do evento do select quando ele muda
    const { value } = event.target

    // Busca o aeroporto pelo seu código
    const selectedAirport = airportData.find(
      (airport) => airport.airportCode === value,
    )

    // Atualiza o estado do aeroporto de partida se o aeroporto for encontrado
    if (selectedAirport) {
      setStartPoint(selectedAirport)
    }
  }

  const handleEndChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // Pega o valor do evento do select quando ele muda
    const { value } = event.target

    // Busca o aeroporto pelo seu código
    const selectedAirport = airportData.find(
      (airport) => airport.airportCode === value,
    )

    // Atualiza o estado do aeroporto de chegada se o aeroporto for encontrado
    if (selectedAirport) {
      setEndPoint(selectedAirport)
    }
  }

  return (
    <AirportContext.Provider
      value={{
        selector: airportData,
        startPoint,
        endPoint,
        handleStartChange,
        handleEndChange,
      }}
    >
      {children}
    </AirportContext.Provider>
  )
}

// Hook para pegar os dados do contexto
export const useAirport = () => useContext(AirportContext)
