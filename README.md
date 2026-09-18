# 波多地区 紹介ページ

島根県邑南町「波多地区」の紹介LP（スマホ向け1ページ）です。
React + Vite + Tailwind CSS 4 で作られています。

## フォルダ構成

```
src/
  App.tsx              ページ全体の組み立て（各セクションを順番に並べているだけ）
  constants.ts          写真URLなどの共通データ
  components/           使い回しの部品（バッジ、スポットカード、ドット背景、波の区切り線など）
  sections/               セクションごとのコンポーネント
    Header.tsx            上部固定ナビゲーション
    Hero.tsx                ファーストビュー
    AboutHata.tsx             「波多ってこんなところ」（紹介文＋スポットカード＋名物）
    Shrine.tsx                  波多神社 特集
    CallToAction.tsx              まとめ・呼びかけ＋公式HP/Instagramリンク
    Footer.tsx                     フッター
  index.css              全体のスタイル・カラー定義（Tailwindのテーマ設定含む）
```

修正したい箇所は `src/sections/` 内の該当ファイルを開くだけでOKです。

## 差し替えが必要な箇所（TODO）

- `src/sections/CallToAction.tsx` の `HATA_HP_URL` / `HATA_INSTAGRAM_URL` / `YAEDAKI_PHOTORALLY_URL` … 正式なURLが決まったら差し替え
- `src/constants.ts` の `IMAGES` … Unsplashのサンプル写真を実際の波多の写真（はやしこ・波多神社・万寿の湯・交流センター・千年杉）に差し替え

## ローカルでそのまま開く用（サーバー不要・ダブルクリックでOK）

```bash
npm install
npm run build:local
```

`dist-local/` フォルダに、通常の`<script>`タグで読み込む形式（ES Modulesではない）で出力されます。
`dist-local/index.html` をダブルクリックするだけでブラウザに表示できます。

```
dist-local/
  index.html
  assets/
    app.js      画面を作っているJavaScript
    style.css   スタイル
```

コードを直したときは `npm run build:local` を実行し直せば `dist-local/` の中身が更新されます。

## ローカルで開発しながら確認する（Viteの開発サーバー）

```bash
npm run dev
```

## ビルドする（GitHub Pages / Vercel / Netlify 用）

```bash
npm run build
```

`dist/` フォルダに静的ファイル一式が出力されます（ES Modules形式）。
このファイルは `type="module"` の`<script>`を使っているため、`dist/index.html` を直接ダブルクリックしても
ブラウザによっては動きません（ローカルで見るときは上の「ローカルでそのまま開く用」を使ってください）。

## GitHubへのPush・デプロイ

1. このフォルダの中身をリポジトリにPushする
2. 以下のいずれかのサービスでデプロイ
   - **Vercel / Netlify**：リポジトリを連携するだけで自動ビルド（ビルドコマンド `npm run build`、出力先 `dist`）
   - **GitHub Pages**：GitHub Actionsで `npm run build` → `dist` を `gh-pages` ブランチに配置、もしくは `dist` フォルダをそのままPagesの公開元に設定

`vite.config.ts` の `base: './'` によりアセットパスは相対指定になっているため、リポジトリ直下・サブフォルダどちらの配信でも問題なく動きます。
# kakeya-hata
# kakeya-hata
