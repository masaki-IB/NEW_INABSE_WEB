# INBASE Website プロジェクト記録

## 基本情報
- **プロジェクト名**: INBASE 株式会社 コーポレートサイト
- **ドメイン**: https://in-base.jp / https://www.in-base.jp
- **GitHub**: https://github.com/masaki-IB/NEW_INABSE_WEB
- **ホスティング**: Vercel (https://vercel.com/inbases-projects/new-inabse-web)
- **作成日**: 2026年1月27日

---

## 技術スタック
- **フレームワーク**: Next.js 16.1.3
- **言語**: TypeScript, React 19
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React

---

## プロジェクト構成

```
INBASE_Web/
├── public/
│   └── logo.png          # INBASEロゴ（白文字版）
├── src/
│   ├── app/
│   │   ├── globals.css   # グローバルスタイル
│   │   ├── layout.tsx    # レイアウト
│   │   ├── page.tsx      # トップページ
│   │   └── services/     # サービス詳細ページ
│   │       ├── promotion/page.tsx
│   │       ├── digital/page.tsx
│   │       ├── creative/page.tsx
│   │       └── consulting/page.tsx
│   ├── components/
│   │   ├── Header.tsx    # ヘッダー・ナビゲーション
│   │   ├── Hero.tsx      # ヒーローセクション
│   │   ├── Services.tsx  # サービス一覧
│   │   ├── Company.tsx   # 会社概要
│   │   ├── Contact.tsx   # お問い合わせ
│   │   └── Footer.tsx    # フッター
│   └── lib/
│       └── utils.ts      # ユーティリティ関数
└── package.json
```

---

## デザイン仕様

### カラーパレット
- **背景**: ダークスレート (`slate-900`, `slate-950`)
- **テキスト**: 白 (`white`), スレートグレー (`slate-300`, `slate-400`)
- **アクセント**: スカイブルー (`sky-400`, `sky-500`)
- **グラデーション**: スカイブルー → バイオレット

### テーマ
- モダン、ミニマル、プロフェッショナル
- ダークテーマベース
- Unsplash高品質画像を多用
- Framer Motionでスムーズなアニメーション

---

## 会社情報（Contact/Company/Footer共通）
- **会社名**: 株式会社INBASE
- **設立**: 2023年6月
- **所在地**: 東京都板橋区
- **メール**: info@in-base.jp
- **電話番号**: 非公開（削除済み）

---

## 更新履歴

### 2026/01/27 - 初期リリース
- ウェブサイト全体をモダンダークテーマにリデザイン
- 4つのサービス詳細ページ作成（Promotion, Digital, Creative, Consulting）
- 各ページに画像ベースのカードデザインを実装
- ロゴを画像に変更（白文字版）
- Vercelにデプロイ、in-base.jpドメイン設定完了

---

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# GitHubにプッシュ（Vercel自動デプロイ）
git add .
git commit -m "変更内容"
git push origin main
```

---

## 今後の拡張候補
- [ ] 採用ページ
- [ ] ニュース/お知らせセクション
- [ ] 実績詳細ページ
- [ ] ブログ機能
- [ ] レスポンシブデザイン最終調整
- [ ] お問い合わせフォーム機能実装（メール送信）

---

## 注意事項
- 画像はUnsplashから取得（商用利用可）
- GitHubにプッシュすると自動でVercelにデプロイされる
- DNS設定はお名前.comで管理

---

*このファイルはプロジェクトの継続作業のために作成されました。*
*次回作業時は「INBASE」で検索してこのプロジェクトを開いてください。*
