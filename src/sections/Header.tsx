/** 上部固定のナビゲーションヘッダー */
export function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-5 py-3"
      style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(106,61,232,0.1)' }}
    >
      <div className="flex items-center gap-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm"
          style={{ background: 'linear-gradient(135deg, #6A3DE8, #3D8BFF)' }}
        >
          波
        </div>
        <span className="font-rounded font-bold text-gray-800 text-sm">波多地区</span>
      </div>
      <nav className="flex gap-4 text-xs font-bold text-gray-500">
        <a href="#spots" className="hover:text-purple-600 transition-colors">
          スポット
        </a>
        <a href="#shrine" className="hover:text-purple-600 transition-colors">
          波多神社
        </a>
        <a href="#visit" className="hover:text-purple-600 transition-colors">
          アクセス
        </a>
      </nav>
    </header>
  )
}
