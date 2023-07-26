type MediaCollection = {
  original_url: string
  collection_name: string
  size: number
}

export type Catering = {
  id: number
  name: string
  phone: string
  address: string
  email: string
  website: string
  status: boolean
  media: MediaCollection[]
  created_at: string
  updated_at: string
}

type Link = {
  url: string
  label: string
  active: boolean
}

export type CateringProp = {
  caterings: {
    data: Catering[]
    links: Link[]
  }
}
