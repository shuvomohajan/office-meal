import * as icons from 'lucide-react'
import { type LucideIcon as LucideIconType } from 'lucide-react'
import { CSSProperties } from 'react'

type IconProps = {
  name: keyof typeof icons
  color?: string
  size?: number | string
  strokeWidth?: number
  style?: CSSProperties
}

const Icon = ({ name, color, size = '1rem', strokeWidth, style }: IconProps) => {
  const LucideIcon = icons[name] as LucideIconType

  return <LucideIcon color={color} size={size} strokeWidth={strokeWidth} style={style} />
}

export default Icon
