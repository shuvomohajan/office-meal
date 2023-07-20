import Icon from '@/Components/Icon'
import { useForm } from '@inertiajs/react'
import { useState } from 'react'
import DangerButton from './DangerButton'
import SecondaryButton from './SecondaryButton'
import IconButton from './IconButton'

type DeleteItemProps = {
  route: string
}

export default function DeleteItem({ route }: DeleteItemProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const { delete: destroy, processing } = useForm()

  const handleDelete = () => {
    setIsDeleting(true)
  }

  const handleCancel = () => {
    setIsDeleting(false)
  }

  const deleteCatering = () => {
    destroy(route, {
      preserveScroll: true
    })
  }

  if (isDeleting) {
    return (
      <>
        <IconButton
          onClick={deleteCatering}
          disabled={processing}
          className="text-red-600 dark:text-red-600"
        >
          <Icon name="Check" />
        </IconButton>

        <IconButton onClick={handleCancel} disabled={processing}>
          <Icon name="X" />
        </IconButton>
      </>
    )
  }

  return (
    <IconButton onClick={handleDelete} className="text-red-600 dark:text-red-600">
      <Icon name="Trash2" />
    </IconButton>
  )
}
