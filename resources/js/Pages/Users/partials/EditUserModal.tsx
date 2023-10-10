import Icon from '@/Components/Icon'
import IconButton from '@/Components/IconButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import { type User } from '@/Pages/Users/ui/Users.d'
import { Switch } from '@headlessui/react'
import { useForm } from '@inertiajs/react'
import { FormEventHandler, useEffect, useState } from 'react'

type EditUserProps = {
  user: User
}

export default function EditUserModal({ user }: EditUserProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
    _method: 'put',
    name: user.name || '',
    phone: user.phone || '',
    email: user.email || '',
    status: user.status || false,
    image: null as File | null,
    remove_image: false
  })

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const submit: FormEventHandler = e => {
    e.preventDefault()

    post(route('users.update', user.id), {
      onSuccess: () => {
        closeModal()
        reset('image', 'remove_image')
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
      <IconButton onClick={openModal}>
        <Icon name="Edit3" />
      </IconButton>

      <Modal show={isOpen} onClose={closeModal}>
        <form className="md:p-6" onSubmit={submit}>
          <h2 className="text-md font-medium text-gray-900 dark:text-gray-100">Edit User</h2>

          <div className="mt-4">
            <InputLabel htmlFor="name" value="Name" />
            <TextInput
              id="name"
              type="text"
              name="name"
              value={data.name}
              className="mt-1 block w-full"
              autoComplete="name"
              isFocused={true}
              onChange={e => setData('name', e.target.value)}
            />
            <InputError message={errors.name} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="phone" value="Phone" />
            <TextInput
              id="phone"
              type="tel"
              name="phone"
              value={data.phone}
              className="mt-1 block w-full"
              autoComplete="phone"
              onChange={e => setData('phone', e.target.value)}
            />
            <InputError message={errors.phone} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="email"
              onChange={e => setData('email', e.target.value)}
            />
            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="status" value="Status" />
            <Switch
              checked={data.status}
              onChange={val => setData('status', val)}
              className={`${
                data.status ? 'bg-indigo-500' : 'bg-gray-200 dark:bg-gray-500'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  data.status ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <InputError message={errors.status} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="image" value="Logo" />

            {!data.remove_image && user.imageUrl ? (
              <div className="relative w-20 h-20 my-2">
                <img
                  src={user.imageUrl}
                  alt="image"
                  className="w-full h-full object-cover border rounded"
                />
                <IconButton
                  rounded
                  type="button"
                  className="text-red-600 absolute top-0 right-0 -mr-4 -mt-4"
                  onClick={() => setData('remove_image', true)}
                >
                  <Icon name="X" />
                </IconButton>
              </div>
            ) : null}

            <TextInput
              id="image"
              type="file"
              name="image"
              className="mt-1 block w-full border px-2 py-1"
              autoComplete="image"
              onChange={e => setData('image', e.target.files?.[0] || null)}
              accept="image/*"
            />

            <InputError message={errors.image} className="mt-2" />
          </div>

          <div className="flex items-center justify-end mt-4">
            <SecondaryButton type="button" className="ml-4" onClick={closeModal}>
              Cancel
            </SecondaryButton>

            <PrimaryButton className="ml-4" disabled={processing}>
              Update
            </PrimaryButton>
          </div>
        </form>
      </Modal>
    </>
  )
}
