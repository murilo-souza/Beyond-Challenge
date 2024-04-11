import { SelectHTMLAttributes } from 'react'
import { useAirport } from '../context/airport-context'

// Tipagem do seletor com todas as propriedades do select do HTML
type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function Selector({ ...rest }: SelectProps) {
  // Dados de todos os aeroportos disponíveis
  const { selector } = useAirport()

  return (
    <select
      {...rest}
      className="inline-flex items-center justify-center rounded-md py-0 px-3 text-sm h-10 bg-primary text-zinc-200 border-2 border-solid border-white"
    >
      {selector.map((airport) => (
        <option
          key={airport.airportCode}
          className="text-sm text-zinc-200 rounded flex items-center h-6 py-0 pl-9 pr-6 relative select-none"
          value={airport.airportCode}
        >
          {airport.airportName}
        </option>
      ))}
    </select>
  )
}
