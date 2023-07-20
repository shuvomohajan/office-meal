type Catering = {
  id: number
  name: string
  phone: string
  address: string
  email: string
  website: string
  status: boolean
  created_at: string
  updated_at: string
}

type Link = {
  url: string
  label: string
  active: boolean
}

type CateringProp = {
  caterings: {
    data: Catering[]
    links: Link[]
  }
}
