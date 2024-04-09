import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useCoordinates } from '../context/coordinates-context'

export function Modal() {
  const { startPoint, endPoint } = useCoordinates()
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/55 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-28 left-3 max-h-[85vh] w-[90vw] max-w-[450px] rounded-[5px] bg-modal p-[25px]  focus:outline-none">
        <Dialog.Title className="text-white font-medium text-2xl mb-10">
          Informações
        </Dialog.Title>

        <div className="flex flex-col items-center justify-center gap-5">
          <span className="text-white font-medium">
            {startPoint.airportName}
          </span>

          <div className="flex flex-col items-center max-w-[300px] min-w-[300px]">
            <div className="rounded-full bg-white size-3" />
            <div className="w-1 h-[300px] bg-white" />
            <div className="rounded-full bg-white size-3" />
          </div>

          <span className="text-white font-medium">{endPoint.airportName}</span>
        </div>

        <Dialog.Close asChild>
          <button
            className="text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] items-center justify-center rounded-full outline-none"
            aria-label="Close"
          >
            <X />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
