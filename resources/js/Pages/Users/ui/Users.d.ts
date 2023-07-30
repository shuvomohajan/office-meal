export type User = {
  id: number
  role_id: number
  name: string
  phone: string
  email: string
  status: boolean
  created_at: string
  updated_at: string
  imageUrl?: string
}

export type UserProp = {
  users: {
    data: User[]
    meta: {
      links: Link[]
    }
  }
}
