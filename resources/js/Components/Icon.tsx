import * as icons from 'lucide-react'
import { type LucideIcon as LucideIconType } from 'lucide-react'
import { CSSProperties } from 'react'

type IconProps = {
  name: keyof typeof icons
  color?: string
  size?: number | string
  strokeWidth?: number
  className?: string
  style?: CSSProperties
}

const Icon = ({ name, color, size = '1rem', strokeWidth, className, style }: IconProps) => {
  const LucideIcon = icons[name] as LucideIconType

  return (
    <LucideIcon
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      style={style}
    />
  )
}

export default Icon
