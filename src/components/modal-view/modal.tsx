import { X } from 'lucide-react'
import { useAirport } from '../../context/airport-context'
import { motion } from 'framer-motion'

interface ModalProps {
  onClose: () => void
}

export function Modal({ onClose }: ModalProps) {
  const { startPoint, endPoint } = useAirport()
  return (
    <motion.div
      layoutId="modal-view"
      className="fixed top-28 left-3 max-h-[85vh] w-[90vw] max-w-[450px] rounded-[5px] bg-primary p-[25px] transition-opacity"
    >
      <motion.h1 className="text-white font-medium text-2xl mb-10">
        Informações
      </motion.h1>

      <motion.div className="flex flex-col items-center justify-center gap-5">
        <motion.span className="text-white font-medium">
          {startPoint.airportName}
        </motion.span>

        <motion.div className="flex flex-col items-center max-w-[300px] min-w-[300px]">
          <motion.div className="rounded-full bg-white size-3" />
          <motion.div className="w-1 h-[300px] bg-white" />
          <motion.div className="rounded-full bg-white size-3" />
        </motion.div>

        <motion.span className="text-white font-medium">
          {endPoint.airportName}
        </motion.span>
      </motion.div>

      <motion.button
        className="text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] items-center justify-center rounded-full outline-none"
        onClick={onClose}
      >
        <X />
      </motion.button>
    </motion.div>
  )
}
