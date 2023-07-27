import DeleteItem from '@/Components/DeleteItem'
import Pagination from '@/Components/Pagination'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { getFirstMediaUrl } from '@/helpers/laravelMediaQuery'
import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'
import AddUserModal from '@/Pages/Users/partials/AddUserModal'
import EditUserModal from '@/Pages/Users/partials/EditUserModal'
import { type UserProp } from '@/Pages/Users/ui/Users.d'
import Badge from '@/Components/Badge'

export default function Users({ auth, users }: PageProps<UserProp>) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Users</h2>
          <div>
            <AddUserModal />
          </div>
        </div>
      }
    >
      <Head title="Users" />

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
                        Email
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                        Status
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900 text-right w-36">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.data.map(user => {
                      const image = getFirstMediaUrl(user.media, 'image')

                      return (
                        <tr key={user.id}>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3 flex items-center gap-3">
                            {image ? (
                              <img
                                src={image}
                                alt="image"
                                className={`${
                                  user.role_id === 2 ? 'outline outline-indigo-500' : ''
                                } h-10 w-10 object-cover rounded-full`}
                              />
                            ) : (
                              <div
                                className={`${
                                  user.role_id === 2 ? 'outline outline-indigo-500' : ''
                                } h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700`}
                              ></div>
                            )}
                            {user.name}
                            {user.role_id === 2 ? (
                              <div>
                                <Badge className="bg-indigo-500 dark:bg-indigo-500 text-white">
                                  Manager
                                </Badge>
                              </div>
                            ) : (
                              ''
                            )}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            {user.phone}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            {user.email}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            {user.status ? (
                              'Active'
                            ) : (
                              <Badge className="bg-red-500 dark:bg-red-500 text-white">Inactive</Badge>
                            )}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            <div className="flex gap-1 justify-end">
                              <EditUserModal user={user} />
                              <DeleteItem route={route('users.destroy', user.id)} />
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <Pagination links={users.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
