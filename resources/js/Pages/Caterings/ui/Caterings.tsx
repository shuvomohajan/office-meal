import DeleteItem from '@/Components/DeleteItem'
import Pagination from '@/Components/Pagination'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import AddCateringModal from '@/Pages/Caterings/partials/AddCateringModal'
import EditCateringModal from '@/Pages/Caterings/partials/EditCateringModal'
import { type CateringProp } from '@/Pages/Caterings/ui/Caterings.d'
import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'

export default function Caterings({ auth, caterings }: PageProps<CateringProp>) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Caterings
          </h2>
          <div>
            <AddCateringModal />
          </div>
        </div>
      }
    >
      <Head title="Caterings" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="overflow-auto">
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
                        Menu
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                        Address
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900 text-right w-36">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {caterings.data.map(catering => {
                      return (
                        <tr key={catering.id}>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3 flex items-center gap-3">
                            {catering.logoUrl ? (
                              <img
                                src={catering.logoUrl}
                                alt="logo"
                                className="h-10 w-10 object-cover rounded-full"
                              />
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            )}
                            {catering.name}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            {catering.phone}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            {catering.mealMenuUrl && (
                              <a href={catering.mealMenuUrl} target="_blank">
                                <img
                                  src={catering.mealMenuUrl}
                                  alt="menu"
                                  className="h-10 w-10 object-cover"
                                />
                              </a>
                            )}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            {catering.address}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            <div className="flex gap-1 justify-end">
                              <EditCateringModal catering={catering} />
                              <DeleteItem route={route('caterings.destroy', catering.id)} />
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <Pagination links={caterings.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
