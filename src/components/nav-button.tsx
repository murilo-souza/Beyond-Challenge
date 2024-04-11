import { useMap } from 'react-map-gl'
import { Crosshair } from 'lucide-react'

interface NavButtonProps {
  coordinates: number[]
}

export function NavButton({ coordinates }: NavButtonProps) {
  const { current } = useMap()

  function handleNavigate() {
    current?.flyTo({
      center: [coordinates[1], coordinates[0]],
    })
  }
  return (
    <button
      className="bg-white p-2 rounded-md flex items-center gap-2"
      onClick={handleNavigate}
    >
      <Crosshair size={20} />
      <span className="text-sm font-medium">Re-centralizar</span>
    </button>
  )
}
