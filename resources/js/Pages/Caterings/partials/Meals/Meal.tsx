import Icon from '@/Components/Icon'
import IconButton from '@/Components/IconButton'
import TextInput from '@/Components/TextInput'

export default function Meal({ index, name, price, handleMealChange, handleDeleteMeal }: MealProps) {
  const handleChange = <K extends keyof Meal>(key: K, value: Meal[K]) => {
    handleMealChange(index, key, value)
  }

  return (
    <div className="flex items-center gap-4">
      <TextInput className="w-full" value={name} onChange={e => handleChange('name', e.target.value)} />
      <TextInput
        className="w-36"
        type="number"
        onChange={e => handleChange('price', Number(e.target.value))}
        min={0}
        value={price}
      />
      <IconButton
        className="shrink-0 text-red-600"
        type="button"
        onClick={() => handleDeleteMeal(index)}
      >
        <Icon name="Trash2" />
      </IconButton>
    </div>
  )
}
