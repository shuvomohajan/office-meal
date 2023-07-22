import Icon from '@/Components/Icon'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Switch } from '@headlessui/react'
import { useForm } from '@inertiajs/react'
import { FormEventHandler, useEffect, useState } from 'react'

export default function AddCateringModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    phone: '',
    address: '',
    email: '',
    website: '',
    status: true,
    logo: null as File | null,
    meal_menu: null as File | null
  })

  const closeModal = () => {
    setIsOpen(false)
    reset()
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const submit: FormEventHandler = e => {
    e.preventDefault()

    post(route('caterings.store'), {
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
        <Icon name="Plus" /> Add Catering
      </PrimaryButton>

      <Modal show={isOpen} onClose={closeModal}>
        <form className="p-6" onSubmit={submit}>
          <h2 className="text-md font-medium text-gray-900 dark:text-gray-100">Add New Catering</h2>

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
            <InputLabel htmlFor="address" value="Address" />

            <TextInput
              id="address"
              type="text"
              name="address"
              value={data.address}
              className="mt-1 block w-full"
              autoComplete="address"
              onChange={e => setData('address', e.target.value)}
            />

            <InputError message={errors.address} className="mt-2" />
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
            <InputLabel htmlFor="website" value="Website" />

            <TextInput
              id="website"
              type="url"
              name="website"
              value={data.website}
              className="mt-1 block w-full"
              autoComplete="website"
              onChange={e => setData('website', e.target.value)}
            />

            <InputError message={errors.website} className="mt-2" />
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
            <InputLabel htmlFor="logo" value="Logo" />

            <TextInput
              id="logo"
              type="file"
              name="logo"
              className="mt-1 block w-full border px-2 py-1"
              autoComplete="logo"
              onChange={e => setData('logo', e.target.files?.[0] || null)}
              accept="image/*"
            />

            <InputError message={errors.logo} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="meal_menu" value="Meal Menu Image" />

            <TextInput
              id="meal_menu"
              type="file"
              name="meal_menu"
              className="mt-1 block w-full border px-2 py-1"
              autoComplete="meal_menu"
              onChange={e => setData('meal_menu', e.target.files?.[0] || null)}
              accept="image/*"
            />

            <InputError message={errors.meal_menu} className="mt-2" />
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
