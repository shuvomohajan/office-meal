import { AxiosInstance } from 'axios'
import ziggyRoute, { Config as ZiggyConfig } from 'ziggy-js'

declare global {
  interface Window {
    axios: AxiosInstance
  }

  interface MediaCollection {
    original_url: string
    collection_name: string
    size: number
  }

  interface Link {
    url: string
    label: string
    active: boolean
  }

  var route: typeof ziggyRoute
  var Ziggy: ZiggyConfig
}
