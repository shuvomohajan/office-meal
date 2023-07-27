export default function Badge({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={'bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded-full text-sm ' + className}>
      {children}
    </span>
  )
}
