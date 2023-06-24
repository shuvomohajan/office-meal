import { Link } from '@inertiajs/react'

type PaginationProps = {
  links: Link[]
}

export default function Pagination({ links }: PaginationProps) {
  return (
    <div className="flex items-center justify-end gap-1 mt-6">
      {links.map(page => (
        <Link
          href={page.url}
          className={[
            'inline-block py-1 px-2 rounded',
            page.active ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-100 dark:bg-gray-900'
          ].join(' ')}
        >
          <span dangerouslySetInnerHTML={{ __html: page.label }} />
        </Link>
      ))}
    </div>
  )
}
