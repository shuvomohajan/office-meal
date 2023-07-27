export type User = {
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

export type UserProp = {
  users: {
    data: User[]
    links: Link[]
  }
}
