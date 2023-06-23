import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'
import { Fragment } from 'react'

export default function Caterings({ auth, caterings }: PageProps<CateringProp>) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Caterings
        </h2>
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
                  <tr>
                    {caterings.map(catering => (
                      <Fragment key={catering.id}>
                        <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                          {catering.name}
                        </td>
                        <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                          {catering.phone}
                        </td>
                        <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                          {catering.address}
                        </td>
                      </Fragment>
                    ))}
                    <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                      <div className="flex gap-2">
                        <button className="bd-gray-200 dark:bg-gray-900 px-2 rounded">Edit</button>
                        <button className="bd-gray-200 dark:bg-gray-900 px-2 rounded text-red-500">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
