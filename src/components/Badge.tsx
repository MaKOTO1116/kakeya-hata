import type { ReactNode } from 'react'

type Color = 'purple' | 'green' | 'blue' | 'amber'

type Props = {
  children: ReactNode
  color?: Color
}

const COLOR_STYLES: Record<Color, string> = {
  purple: 'bg-purple-100 text-purple-700 border border-purple-200',
  green: 'bg-green-100 text-green-700 border border-green-200',
  blue: 'bg-blue-100 text-blue-700 border border-blue-200',
  amber: 'bg-amber-100 text-amber-700 border border-amber-200',
}

/** キーフレーズ・タグ用の丸バッジ */
export function Badge({ children, color = 'purple' }: Props) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold font-rounded ${COLOR_STYLES[color]}`}>
      {children}
    </span>
  )
}
