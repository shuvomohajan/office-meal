import Icon from '@/Components/Icon'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import Select from '@/Components/Select'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'
import { FormEventHandler, useEffect, useState } from 'react'
import { type Catering } from '@/Pages/Caterings/ui/Caterings.d'

export default function MakeCateringPayment({ caterings }: { caterings: Catering[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
    catering_id: '',
    amount: ''
  })

  const cateringOptions = caterings.map(catering => ({
    label: catering.name,
    value: catering.id
  }))

  const closeModal = () => {
    setIsOpen(false)
    reset()
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const submit: FormEventHandler = e => {
    e.preventDefault()

    post(route('catering-payments.store'), {
      onSuccess: () => {
        closeModal()
      }
    })
  }

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  return (
    <>
      <PrimaryButton onClick={openModal} className="flex gap-1">
        <Icon name="DollarSign" /> Make Payment
      </PrimaryButton>

      <Modal show={isOpen} onClose={closeModal}>
        <form className="md:p-6" onSubmit={submit}>
          <h2 className="text-md font-medium text-gray-900 dark:text-gray-100">Make catering payment</h2>

          <div className="mt-4">
            <InputLabel htmlFor="catering_id" value="Select Catering" />
            <Select
              id="catering_id"
              name="catering_id"
              options={cateringOptions}
              value={data.catering_id}
              className="mt-1 block w-full"
              autoComplete="catering_id"
              isFocused={true}
              onChange={e => setData('catering_id', e.target.value)}
            />
            <InputError message={errors.catering_id} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="amount" value="Amount" />
            <TextInput
              id="amount"
              type="tel"
              name="amount"
              value={data.amount}
              className="mt-1 block w-full"
              autoComplete="amount"
              onChange={e => setData('amount', e.target.value)}
            />
            <InputError message={errors.amount} className="mt-2" />
          </div>

          <div className="flex items-center justify-end mt-4">
            <PrimaryButton className="ml-4" disabled={processing}>
              Save
            </PrimaryButton>
          </div>
        </form>
      </Modal>
    </>
  )
}
