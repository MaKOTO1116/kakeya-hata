import { IMAGES } from '../constants'

const SHRINE_TAGS = ['🌿 森の静寂', '⛩️ 由緒正しき神社', '📸 フォトスポット', '🌲 千年杉ゆかり']

/** 波多神社の特集セクション。他のスポットより一段丁寧に紹介する */
export function Shrine() {
  return (
    <section id="shrine" className="shrine-bg relative px-5 pt-6 pb-10">
      {/* 木目調テクスチャ的な overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 30px)',
        }}
      />

      <div className="relative z-10">
        {/* 神社バッジ見出し */}
        <div className="text-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)' }}
          >
            <span className="text-amber-300 text-sm">⛩️</span>
            <span className="text-white/90 text-xs font-black tracking-widest">HATA SHRINE</span>
            <span className="text-amber-300 text-sm">⛩️</span>
          </div>
          <h2 className="font-rounded font-black text-3xl leading-tight" style={{ color: '#ffffff', textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            波多神社
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="w-8 h-px bg-amber-400/60" />
            <span className="text-amber-300 text-xs font-bold tracking-widest">由緒ある聖地</span>
            <div className="w-8 h-px bg-amber-400/60" />
          </div>
        </div>

        {/* メイン写真 */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-5" style={{ border: '2px solid rgba(255,255,255,0.15)' }}>
          <img src={IMAGES.shrine1} alt="波多神社 石段と鳥居" className="w-full object-cover" style={{ height: 260 }} loading="lazy" />
        </div>

        {/* 説明文 */}
        <div
          className="rounded-2xl p-5 mb-4"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
        >
          <p className="text-white/85 text-sm leading-loose">
            波多神社は、長い歴史を持つ由緒ある神社です。
            苔むした石段を一歩一歩上るごとに、日常の喧騒が遠のき、
            境内に漂う<strong className="text-green-300">静けさと荘厳な気配</strong>が心を満たします。
          </p>
          <p className="text-white/85 text-sm leading-loose mt-3">
            波多のシンボル・<strong className="text-amber-300">千年杉</strong>とも深いゆかりを持ち、
            悠久の自然と人々の祈りが重なり合う神聖な空気感は、
            訪れた人の記憶に深く刻まれます。
          </p>
          <p className="text-white/85 text-sm leading-loose mt-3">
            緑に包まれた境内は<strong className="text-green-300">写真映え</strong>するスポットとしても人気。
            四季折々の表情を見せる波多神社に、ぜひお参りにお越しください。
          </p>
        </div>

        {/* サブ写真 */}
        <div className="rounded-xl overflow-hidden shadow-lg" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          <img src={IMAGES.shrine2} alt="神社の森の参道" className="w-full object-cover" style={{ height: 180 }} loading="lazy" />
        </div>

        {/* 特徴バッジ */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {SHRINE_TAGS.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
