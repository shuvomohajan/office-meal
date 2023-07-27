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

export type CateringProp = {
  caterings: {
    data: Catering[]
    links: Link[]
  }
}
