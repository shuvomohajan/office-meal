import Modal from '@/Components/Modal'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type EditModalProps = {
  isOpen: boolean
  closeModal: () => void
  catering?: Catering
}

export default function EditModal({ isOpen, closeModal, catering }: EditModalProps) {
  return (
    <Modal show={isOpen} onClose={closeModal}>
      <form className="p-6">
        <h2 className="text-md font-medium text-gray-900 dark:text-gray-100">Edit Catering</h2>
      </form>
    </Modal>
  )
}
