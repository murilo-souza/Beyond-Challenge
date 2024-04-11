import { ArrowDown, ArrowRight } from 'lucide-react'
import Logo from '../assets/logo.png'
import { Selector } from './selector'
import { useAirport } from '../context/airport-context'

export function Header() {
  // Dados do aeroporto de partida e chegada dos aeroportos selecionados
  const { selector, startPoint, handleStartChange, handleEndChange, endPoint } =
    useAirport()
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-3 py-4 bg-primary md:max-h-[10vh] md:min-h-[10vh]">
      <img src={Logo} alt="Logo" className="w-[90px] mb-4 md:mb-0" />
      <div className="flex flex-col md:flex-row items-center gap-1 md:gap-10">
        <Selector
          defaultValue={selector[0].airportCode}
          value={startPoint.airportCode}
          onChange={handleStartChange}
        />
        <ArrowRight className="size-7 text-white hidden md:block" />
        <ArrowDown className="size-7 text-white md:hidden" />
        <Selector
          defaultValue={selector[1].airportCode}
          value={endPoint.airportCode}
          onChange={handleEndChange}
        />
      </div>
    </header>
  )
}
