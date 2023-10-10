import Icon from '@/Components/Icon'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import Select from '@/Components/Select'
import TextInput from '@/Components/TextInput'
import { type User } from '@/Pages/Users/ui/Users.d'
import { useForm } from '@inertiajs/react'
import { FormEventHandler, useEffect, useState } from 'react'

export default function MakeUserPayment({ users }: { users: User[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
    user_id: '',
    amount: ''
  })

  const userOptions = users.map(user => ({
    label: user.name,
    value: user.id
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

    post(route('user-payments.store'), {
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
        <Icon name="DollarSign" /> User Payment
      </PrimaryButton>

      <Modal show={isOpen} onClose={closeModal}>
        <form className="md:p-6" onSubmit={submit}>
          <h2 className="text-md font-medium text-gray-900 dark:text-gray-100">Make user payment</h2>

          <div className="mt-4">
            <InputLabel htmlFor="user_id" value="Select User" />
            <Select
              id="user_id"
              name="user_id"
              options={userOptions}
              value={data.user_id}
              className="mt-1 block w-full"
              autoComplete="user_id"
              isFocused={true}
              onChange={e => setData('user_id', e.target.value)}
            />
            <InputError message={errors.user_id} className="mt-2" />
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
            <SecondaryButton type="button" className="ml-4" onClick={closeModal}>
              Cancel
            </SecondaryButton>

            <PrimaryButton className="ml-4" disabled={processing}>
              Save
            </PrimaryButton>
          </div>
        </form>
      </Modal>
    </>
  )
}
