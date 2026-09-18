import { IMAGES } from '../constants'

/** ファーストビュー：背景写真＋キャッチコピー＋キーフレーズバッジ */
export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 580 }}>
      {/* 背景写真コラージュ */}
      <div className="absolute inset-0">
        <img src={IMAGES.heroMain} alt="波多の自然" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* 右上サブ写真 */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <img
          src={IMAGES.heroSecond}
          alt="波多神社"
          className="w-24 h-20 object-cover rounded-xl shadow-lg border-2 border-white/40"
          loading="lazy"
        />
        <img
          src={IMAGES.heroThird}
          alt="はやしこ"
          className="w-24 h-20 object-cover rounded-xl shadow-lg border-2 border-white/40"
          loading="lazy"
        />
      </div>

      {/* ヒーローコンテンツ */}
      <div className="relative z-10 px-6 pt-16 pb-8 flex flex-col items-start min-h-[520px] justify-center">
        {/* バッジ群 */}
        <div className="flex gap-2 mb-5 flex-wrap">
          <span
            className="px-3 py-1.5 rounded-full text-xs font-black text-white shadow-sm"
            style={{ background: 'rgba(76,175,125,0.9)', backdropFilter: 'blur(4px)' }}
          >
            🌿 自然豊か
          </span>
          <span
            className="px-3 py-1.5 rounded-full text-xs font-black text-white shadow-sm"
            style={{ background: 'rgba(106,61,232,0.85)', backdropFilter: 'blur(4px)' }}
          >
            💛 人が温かい
          </span>
        </div>

        {/* メインキャッチ */}
        <div className="mb-2">
          <div className="font-rounded font-black leading-none" style={{ fontSize: 72, letterSpacing: '-2px' }}>
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 40%, #93c5fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 8px rgba(106,61,232,0.6))',
              }}
            >
              波多
            </span>
          </div>
          <div className="text-white/90 font-rounded font-bold text-xl mt-1 tracking-wide">— 島根県雲南市 掛合町波多 —</div>
        </div>

        <p className="text-white/80 text-sm leading-relaxed mt-3 max-w-xs">
          深い森と清らかな水、
          <br />
          そして温かな人々が出迎える
          <br />
          <strong className="text-white">秘境の里・波多</strong>へようこそ。
        </p>

        {/* スクロール誘導 */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-white/70 text-xs font-bold tracking-widest">SCROLL</span>
          <div className="animate-bounce-arrow text-white/70 text-xl">↓</div>
        </div>
      </div>

      {/* 波型下端 */}
      <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 480 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 50 }}>
          <path d="M0,30 C120,60 240,0 360,30 C420,45 450,15 480,30 L480,60 L0,60 Z" fill="#fafaf8" />
        </svg>
      </div>
    </section>
  )
}
