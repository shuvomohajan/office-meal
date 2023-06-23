type Catering = {
  id: number
  name: string
  phone: number
  address: string
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
