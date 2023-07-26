type MediaCollection = {
  original_url: string
  collection_name: string
  size: number
}

type User = {
  id: number
  role_id: number
  name: string
  phone: string
  email: string
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

export type UserProp = {
  users: {
    data: User[]
    links: Link[]
  }
}
