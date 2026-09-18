export function Footer() {
  return (
    <footer className="px-5 py-8 text-center" style={{ background: '#1a1535', borderTop: '2px solid rgba(106,61,232,0.3)' }}>
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-3"
        style={{ background: 'linear-gradient(135deg, #6A3DE8, #3D8BFF)' }}
      >
        波
      </div>
      <p className="text-white/70 font-rounded font-bold text-sm mb-1">波多地区 紹介ページ</p>
      <p className="text-white/40 text-xs mb-4">島根県雲南市 掛合町波多</p>
      <p className="text-white/30 text-xs leading-relaxed">
        運営：波多地区 地域振興会（仮）
        <br />
        ページ作成：後日差し替え予定
      </p>
      <div className="w-full h-px my-4" style={{ background: 'rgba(255,255,255,0.08)' }} />
      <p className="text-white/25 text-xs">© 2026 波多地区 紹介ページ. All rights reserved.</p>
    </footer>
  )
}
