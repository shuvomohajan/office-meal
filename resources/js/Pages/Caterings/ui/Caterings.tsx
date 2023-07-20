import DeleteItem from '@/Components/DeleteItem'
import Pagination from '@/Components/Pagination'
import SecondaryButton from '@/Components/SecondaryButton'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'
import { useRef, useState } from 'react'
import AddCateringModal from '../partials/AddCateringModal'
import EditCateringModal from '../partials/EditCateringModal'

export default function Caterings({ auth, caterings }: PageProps<CateringProp>) {
  const [isOpen, setIsOpen] = useState(false)
  const editRef = useRef<Catering['id'] | null>(null)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const editCatering = (cateringId: Catering['id']) => {
    editRef.current = cateringId
    openModal()
  }

  const getCatering = () => {
    if (editRef.current === null) return null
    return caterings.data.find(catering => catering.id === editRef.current)
  }

  const editableCatering = getCatering()

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Caterings
          </h2>
          <div>
            <AddCateringModal title="Add Catering" />
          </div>
        </div>
      }
    >
      <Head title="Caterings" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                      Name
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                      Phone
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                      Address
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {caterings.data.map(catering => (
                    <tr key={catering.id}>
                      <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                        {catering.name}
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                        {catering.phone}
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                        {catering.address}
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                        <div className="flex gap-1">
                          <SecondaryButton
                            onClick={() => editCatering(catering.id)}
                            className="px-2 py-1"
                          >
                            Edit
                          </SecondaryButton>
                          <DeleteItem route={route('caterings.destroy', catering.id)} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Pagination links={caterings.links} />
            </div>
          </div>
        </div>
      </div>

      {editableCatering && (
        <EditCateringModal isOpen={isOpen} closeModal={closeModal} catering={editableCatering} />
      )}
    </AuthenticatedLayout>
  )
}
