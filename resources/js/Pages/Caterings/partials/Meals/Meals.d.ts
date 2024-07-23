type CateringFormType = {
  name: string
  phone: string
  address: string
  email: string
  website: string
  status: boolean
  logo: File | null
  meal_menu: File | null
  meals: Meal[]
}

type Meal = {
  id: number
  name: string
  price: number
  description?: string
  status?: boolean
}

type AddMealsProps = {
  meals: Meal[]
  setMeals: (value: Meal[]) => void
}

type MealProps = Meal & {
  index: number
  handleMealChange: <K extends keyof Meal>(index: number, key: K, value: Meal[K]) => void
  handleDeleteMeal: (index: number) => void
}
