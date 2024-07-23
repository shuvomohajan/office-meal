import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import { useState } from 'react'
import Meal from './Meal'

export default function AddMeals({ meals, setMeals }: AddMealsProps) {
  const [mealList, setMealList] = useState(meals)

  const handleAddMeal = () => {
    setMealList(prev => {
      const newMeals = [...prev, { id: Math.random() + Math.random(), name: '', price: 0 }]

      setMeals(newMeals)

      return newMeals
    })
  }

  const handleMealChange = <K extends keyof Meal>(index: number, key: K, value: Meal[K]) => {
    setMealList(prev => {
      const newMeals = [...prev]
      newMeals[index][key] = value
      setMeals(newMeals)
      return newMeals
    })
  }

  const handleDeleteMeal = (index: number) => {
    setMealList(prev => {
      const newMeals = [...prev]
      newMeals.splice(index, 1)
      setMeals(newMeals)
      return newMeals
    })
  }

  return (
    <div>
      <h2 className="mb-4 text-md font-medium text-gray-900 dark:text-gray-100">Add Meals</h2>

      <div className="space-y-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-md">
        <div className="grid grid-cols-3 gap-4">
          <InputLabel className="col-span-2">Title</InputLabel>
          <InputLabel>Price</InputLabel>
        </div>
        {mealList.map((item, i) => (
          <Meal
            {...item}
            index={i}
            key={item.id}
            handleMealChange={handleMealChange}
            handleDeleteMeal={handleDeleteMeal}
          />
        ))}
        <PrimaryButton type="button" onClick={handleAddMeal}>
          Add Meal
        </PrimaryButton>
      </div>
    </div>
  )
}
