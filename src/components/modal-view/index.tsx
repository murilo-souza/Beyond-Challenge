import { AnimatePresence, motion } from 'framer-motion'
import { Modal } from './modal'
import { useState } from 'react'
import { ArrowUpSquare } from 'lucide-react'

const animation = {
  hidden: { opacity: 0.25 },
  visible: {
    opacity: 1,
  },
}

export function ModalView() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      {isOpen ? (
        <AnimatePresence>
          <Modal onClose={() => setIsOpen(false)} />
        </AnimatePresence>
      ) : (
        <motion.button
          variants={animation}
          layoutId="modal-view"
          className="absolute bottom-10 left-6 bg-white rounded-full p-3"
          onClick={() => setIsOpen(true)}
        >
          <ArrowUpSquare className="size-10" />
        </motion.button>
      )}
    </>
  )
}
