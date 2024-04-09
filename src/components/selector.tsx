import { SelectHTMLAttributes } from 'react'
import { useCoordinates } from '../context/coordinates-context'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function Selector({ ...rest }: SelectProps) {
  const { selector } = useCoordinates()

  return (
    <select
      {...rest}
      className="inline-flex items-center justify-center rounded-md py-0 px-3 text-sm h-10 bg-header text-zinc-200 border-2 border-solid border-white"
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
