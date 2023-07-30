import { SelectHTMLAttributes, forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

export default forwardRef(function TextInput(
  {
    className = '',
    isFocused = false,
    options = [],
    ...props
  }: SelectHTMLAttributes<HTMLSelectElement> & {
    isFocused?: boolean
    options?: { label: string; value: string | number }[]
  },
  ref
) {
  const localRef = useRef<HTMLSelectElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus()
  }))

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus()
    }
  }, [])

  return (
    <select
      {...props}
      className={
        'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
        className
      }
      ref={localRef}
    >
      <option value="" disabled>
        Select option
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
})
