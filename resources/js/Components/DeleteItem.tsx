import Icon from '@/Components/Icon'
import { useForm } from '@inertiajs/react'
import { useState } from 'react'
import DangerButton from './DangerButton'
import SecondaryButton from './SecondaryButton'

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
        <DangerButton onClick={deleteCatering} disabled={processing} className="px-1.5">
          <Icon name="Check" />
        </DangerButton>

        <SecondaryButton onClick={handleCancel} disabled={processing} className="px-1.5">
          <Icon name="X" />
        </SecondaryButton>
      </>
    )
  }

  return <DangerButton onClick={handleDelete}>Delete</DangerButton>
}
