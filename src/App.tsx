import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { AboutHata } from './sections/AboutHata'
import { Shrine } from './sections/Shrine'
import { CallToAction } from './sections/CallToAction'
import { Footer } from './sections/Footer'

/**
 * 波多地区 紹介ページ
 *
 * セクション構成:
 *   1. Header        - 上部固定ナビゲーション
 *   2. Hero           - ファーストビュー（写真＋キャッチコピー）
 *   3. AboutHata        - 「波多ってこんなところ」（紹介文＋スポットカード＋名物）
 *   4. Shrine             - 波多神社 特集
 *   5. CallToAction         - まとめ・呼びかけ＋公式HP/Instagramリンク
 *   6. Footer                 - フッター
 *
 * 各セクションの中身は src/sections/ 以下、
 * 使い回している部品は src/components/ 以下にあります。
 */
export default function App() {
  return (
    <div className="min-h-screen font-rounded" style={{ maxWidth: 480, margin: '0 auto', background: '#fafaf8' }}>
      <Header />
      <Hero />
      <AboutHata />

      {/* ── 波型区切り → 神社セクションへ ── */}
      <div style={{ lineHeight: 0, marginTop: 32 }}>
        <svg viewBox="0 0 480 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 64 }}>
          <path d="M0,20 C80,60 160,0 240,30 C320,60 400,10 480,30 L480,80 L0,80 Z" fill="#1E3A2F" />
        </svg>
      </div>

      <Shrine />

      {/* ── 神社→まとめ 波型 ── */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 480 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 64 }}>
          <path d="M0,50 C80,10 160,70 240,40 C320,10 400,60 480,40 L480,0 L0,0 Z" fill="#1E3A2F" />
          <path d="M0,50 C80,10 160,70 240,40 C320,10 400,60 480,40 L480,80 L0,80 Z" fill="#faf5ff" />
        </svg>
      </div>

      <CallToAction />
      <Footer />
    </div>
  )
}
