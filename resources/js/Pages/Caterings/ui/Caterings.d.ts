export type Catering = {
  id: number
  name: string
  phone: string
  address: string
  email: string
  website: string
  status: boolean
  created_at: string
  updated_at: string
  logoUrl?: string
  mealMenuUrl?: string
}

export type CateringProp = {
  caterings: {
    data: Catering[]
    meta: {
      links: Link[]
    }
  }
}
