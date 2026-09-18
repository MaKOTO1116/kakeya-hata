import { IMAGES } from '../constants'
import { DotBg } from '../components/DotBg'
import { Badge } from '../components/Badge'
import { SpotCard } from '../components/SpotCard'

/** 「波多ってこんなところ」セクション：紹介文＋スポットカード＋名物 */
export function AboutHata() {
  return (
    <section id="spots" className="relative px-5 pt-10 pb-4">
      <DotBg />
      <div className="relative z-10">
        {/* 見出し */}
        <div className="mb-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3"
            style={{ background: 'linear-gradient(135deg, #6A3DE8, #3D8BFF)', boxShadow: '0 4px 15px rgba(106,61,232,0.3)' }}
          >
            <span className="text-white text-xs font-black tracking-wide">ABOUT HATA</span>
          </div>
          <h2 className="font-rounded font-black text-2xl text-gray-800 leading-tight">
            波多って
            <br />
            こんなところ
          </h2>
          <div className="w-12 h-1 rounded-full mx-auto mt-3" style={{ background: 'linear-gradient(90deg, #6A3DE8, #3D8BFF)' }} />
        </div>

        {/* 紹介文 */}
        <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-purple-50">
          <p className="text-gray-700 text-sm leading-loose">
            波多は、島根県雲南市掛合町の奥深くに位置する<strong className="text-purple-600">自然豊かな</strong>
            里山の地区です。
            清流が流れる渓谷、苔むした古道、悠久の時を刻む千年杉——訪れる人の心を静かに包み込む風景が広がります。
          </p>
          <p className="text-gray-700 text-sm leading-loose mt-3">
            地区に暮らす<strong className="text-green-600">人が温かい</strong>のも波多の魅力のひとつ。
            地域の産直マーケットや温浴施設には、笑顔あふれる地元の方々が集い、
            訪れた人をいつでも温かく迎えてくれます。
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            <Badge color="green">🌿 自然豊か</Badge>
            <Badge color="purple">💛 人が温かい</Badge>
            <Badge color="blue">🏔️ 秘境の里</Badge>
          </div>
        </div>

        {/* スポットカード */}
        <div className="flex flex-col gap-4">
          <SpotCard
            img={IMAGES.hayashiko}
            title="はやしこ"
            desc="波多を代表する渓谷景観スポット。苔と緑に包まれた清流は、訪れる人に深い安らぎを与えます。"
            badge="🏞️ 景観スポット"
            badgeColor="blue"
          />
          <SpotCard
            img={IMAGES.onsen}
            title="万寿の湯"
            desc="地域の温浴・交流施設。疲れた体をほっこり温めながら、地元の方々とのふれあいも楽しめます。"
            badge="♨️ 温浴施設"
            badgeColor="amber"
          />
          <SpotCard
            img={IMAGES.market}
            title="交流センター マーケット"
            desc="地元の産直マーケットが名物！新鮮な農産物や手作り品が並び、波多の温かさをまるごと感じられます。"
            badge="🛒 産直マーケット"
            badgeColor="green"
          />
          <SpotCard
            img={IMAGES.cedar}
            title="千年杉"
            desc="悠久の時を刻む、波多のシンボル。太古から地を守り続ける巨樹の前に立つと、自然の力強さを感じます。"
            badge="🌲 波多のシンボル"
            badgeColor="green"
          />

          {/* はたせんべい 名物カード */}
          <div
            className="card-hover rounded-2xl overflow-hidden shadow-md border-2"
            style={{ borderColor: '#6A3DE8', background: 'linear-gradient(135deg, #faf5ff 0%, #eff6ff 100%)' }}
          >
            <div className="p-5 flex gap-4 items-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 text-4xl shadow-sm"
                style={{ background: 'linear-gradient(135deg, #e9d5ff, #bfdbfe)' }}
              >
                🍘
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-rounded font-black text-lg text-gray-800">はたせんべい</span>
                  <Badge color="amber">名物</Badge>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  素朴で温かみのある波多らしさが詰まった名物せんべい。
                  地元の愛が伝わる、お土産にもぴったりの一品です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
