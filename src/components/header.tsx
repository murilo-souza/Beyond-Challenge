import { ArrowRight } from 'lucide-react'
import Logo from '../assets/logo.png'
import { Selector } from './selector'
import { useAirport } from '../context/airport-context'

export function Header() {
  // Dados do aeroporto de partida e chegada dos aeroportos selecionados
  const { selector, startPoint, handleStartChange, handleEndChange, endPoint } =
    useAirport()
  return (
    <header className="flex items-center justify-between px-3 py-2 bg-primary">
      <img src={Logo} alt="Logo" />
      <div className="flex items-center gap-10">
        <Selector
          defaultValue={selector[0].airportCode}
          value={startPoint.airportCode}
          onChange={handleStartChange}
        />
        <ArrowRight className="size-7 text-white" />
        <Selector
          defaultValue={selector[1].airportCode}
          value={endPoint.airportCode}
          onChange={handleEndChange}
        />
      </div>
    </header>
  )
}
