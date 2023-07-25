import { ButtonHTMLAttributes } from 'react'

export default function IconButton({
  className = '',
  disabled,
  rounded = false,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { rounded?: boolean }) {
  return (
    <button
      {...props}
      className={
        `inline-flex items-center justify-center h-8 w-8 p-1  bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${
          disabled && 'opacity-25'
        } ${rounded ? 'rounded-full' : 'rounded-md'} ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  )
}
