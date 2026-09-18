import { DotBg } from '../components/DotBg'

// TODO: 正式なURLが決まったら差し替える
const HATA_HP_URL = 'https://example.com/hata'
const HATA_INSTAGRAM_URL = 'https://instagram.com/hata_area'

/** まとめ・呼びかけセクション：締めのメッセージ＋公式HP/Instagramリンク */
export function CallToAction() {
  return (
    <section id="visit" className="px-5 pt-4 pb-10" style={{ background: 'linear-gradient(180deg, #faf5ff 0%, #eff6ff 100%)' }}>
      <div
        className="relative overflow-hidden rounded-3xl p-6 text-center shadow-xl"
        style={{ background: 'linear-gradient(135deg, #6A3DE8 0%, #3D8BFF 60%, #4CAF7D 100%)' }}
      >
        <DotBg />
        <div className="relative z-10">
          <div className="text-4xl mb-3">🌿</div>
          <h2 className="font-rounded font-black text-2xl text-white leading-tight mb-4">
            自然豊かで、
            <br />
            人が温かい波多へ
          </h2>
          <p className="text-white/85 text-sm leading-loose mb-6">
            四季折々の美しい自然と、
            <br />
            笑顔あふれる地域の人々が待っています。
            <br />
            ぜひ一度、波多へ足を運んでみてください。
          </p>

          {/* リンクボタン */}
          <div className="flex flex-col gap-3">
            <a
              href={HATA_HP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-full font-black text-sm shadow-lg transition-all active:scale-95"
              style={{ background: 'rgba(255,255,255,0.95)', color: '#6A3DE8' }}
            >
              🏠 波多地区 公式HP
            </a>
            <a
              href={HATA_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-full font-black text-sm shadow-lg transition-all active:scale-95"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '2px solid rgba(255,255,255,0.4)' }}
            >
              📸 Instagram で見る
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
