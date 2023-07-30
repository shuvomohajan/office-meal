import Icon from '@/Components/Icon'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import Select from '@/Components/Select'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'
import { FormEventHandler, useEffect, useState } from 'react'
import { type User } from '@/Pages/Users/ui/Users.d'

export default function MakeManager({ users }: { users: User[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
    user_id: '',
    start_date: '',
    end_date: ''
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

    post(route('manager-histories.store'), {
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
        <Icon name="User" /> New Manager
      </PrimaryButton>

      <Modal show={isOpen} onClose={closeModal}>
        <form className="md:p-6" onSubmit={submit}>
          <h2 className="text-md font-medium text-gray-900 dark:text-gray-100">Make New Manager</h2>

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
            <InputLabel htmlFor="start_date" value="Start Date" />
            <TextInput
              id="start_date"
              type="date"
              name="start_date"
              value={data.start_date}
              className="mt-1 block w-full"
              autoComplete="start_date"
              onChange={e => setData('start_date', e.target.value)}
            />
            <InputError message={errors.start_date} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="end_date" value="End Date" />
            <TextInput
              id="end_date"
              type="date"
              name="end_date"
              value={data.end_date}
              className="mt-1 block w-full"
              autoComplete="end_date"
              onChange={e => setData('end_date', e.target.value)}
            />
            <InputError message={errors.end_date} className="mt-2" />
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
