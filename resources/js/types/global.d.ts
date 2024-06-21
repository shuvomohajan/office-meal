import { AxiosInstance } from 'axios'
import { route as ziggyRoute } from 'ziggy-js'

declare global {
  interface Window {
    axios: AxiosInstance
  }

  type PaginationLink = {
    url: string
    label: string
    active: boolean
  }

  var route: typeof ziggyRoute
}
