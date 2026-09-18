import { Badge } from './Badge'

type Props = {
  img: string
  title: string
  desc: string
  badge?: string
  badgeColor?: 'purple' | 'green' | 'blue' | 'amber'
}

/** 波多のスポットを1件紹介するカード（写真＋タイトル＋説明文＋タグ） */
export function SpotCard({ img, title, desc, badge, badgeColor = 'purple' }: Props) {
  return (
    <div className="card-hover rounded-2xl overflow-hidden bg-white shadow-md border border-purple-50">
      <div className="relative h-44 bg-purple-100">
        <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge color={badgeColor}>{badge}</Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-rounded font-bold text-lg text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
