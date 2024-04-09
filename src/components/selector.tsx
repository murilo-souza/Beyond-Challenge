import { SelectHTMLAttributes } from 'react'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function Selector({ ...rest }: SelectProps) {
  return (
    <select
      {...rest}
      className="inline-flex items-center justify-center rounded-md py-0 px-3 text-sm h-10 bg-header text-zinc-200 border-2 border-solid border-white"
    >
      <option
        className="text-sm text-zinc-200 rounded flex items-center h-6 py-0 pl-9 pr-6 relative select-none"
        value="SBSP"
      >
        Aeroporto de Congonhas
      </option>
      <option
        className="text-sm text-zinc-200 rounded flex items-center h-6 py-0 pl-9 pr-6 relative select-none"
        value="SBRJ"
      >
        Aeroporto Santos Dumont
      </option>
    </select>
  )
}
