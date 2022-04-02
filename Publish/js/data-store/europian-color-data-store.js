/**
 * ヨーロッパ伝統色のデータストアを提供します。
 * これはデータベースなどを表すダミーです。
 */
class EuropianColorDataStore {
    /**
     * ヨーロッパの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    get = () => {
        return this.#get1().concat(this.#get2());
    }

    /**
     * ヨーロッパの色1を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #get1 = () => {
        return [
            {
                "hex": "#ffc6d6",
                "name": "baby pink",
                "phonetic": "ベビー ピンク"
            },
            {
                "hex": "#ffbdb3",
                "name": "shell pink",
                "phonetic": "シェル ピンク"
            },
            {
                "hex": "#f2d5cc",
                "name": "flesh pink",
                "phonetic": "フレッシュ ピンク"
            },
            {
                "hex": "#fc9db8",
                "name": "pastel pink",
                "phonetic": "パステル ピンク"
            },
            {
                "hex": "#f55064",
                "name": "rose pink",
                "phonetic": "ローズ ピンク"
            },
            {
                "hex": "#ecc2c8",
                "name": "pink",
                "phonetic": "ピンク"
            },
            {
                "hex": "#ef8184",
                "name": "french rose",
                "phonetic": "フレンチ ローズ"
            },
            {
                "hex": "#e8c7cc",
                "name": "peach blossom",
                "phonetic": "ピーチ ブラッサム"
            },
            {
                "hex": "#cf8878",
                "name": "lotus",
                "phonetic": "ロータス"
            },
            {
                "hex": "#d8b197",
                "name": "tea rose",
                "phonetic": "ティー ローズ"
            },
            {
                "hex": "#ff9c8c",
                "name": "salmon pink",
                "phonetic": "サーモン ピンク"
            },
            {
                "hex": "#ffcec6",
                "name": "aurora",
                "phonetic": "オーロラ"
            },
            {
                "hex": "#b1988f",
                "name": "vinous",
                "phonetic": "ヴァイナス"
            },
            {
                "hex": "#f39aab",
                "name": "cosmos",
                "phonetic": "コスモス"
            },
            {
                "hex": "#c49793",
                "name": "corinthian pink",
                "phonetic": "コーリンシアン ピンク"
            },
            {
                "hex": "#f05187",
                "name": "cherry pink",
                "phonetic": "チェリー ピンク"
            },
            {
                "hex": "#fc9db8",
                "name": "fuchsia pink",
                "phonetic": "フクシァ ピンク"
            },
            {
                "hex": "#fd90a5",
                "name": "pompadour pink",
                "phonetic": "ポンパドール ピンク"
            },
            {
                "hex": "#a26168",
                "name": "daphne pink",
                "phonetic": "ダフニー ピンク"
            },
            {
                "hex": "#d37a83",
                "name": "carnation",
                "phonetic": "カーネーション"
            },
            {
                "hex": "#dc7563",
                "name": "shrimp pink",
                "phonetic": "シェリンプ ピンク"
            },
            {
                "hex": "#ff9888",
                "name": "coral pink",
                "phonetic": "コーラル ピンク"
            },
            {
                "hex": "#a66061",
                "name": "rose pompadour",
                "phonetic": "ローズ ポンパドウル"
            },
            {
                "hex": "#f08687",
                "name": "empire rose",
                "phonetic": "エンパイア ローズ"
            },
            {
                "hex": "#ef8865",
                "name": "flamingo",
                "phonetic": "フラミンゴ"
            },
            {
                "hex": "#b0755c",
                "name": "etruscan rose",
                "phonetic": "エトラスカン ローズ"
            },
            {
                "hex": "#b86d77",
                "name": "ashes of rose",
                "phonetic": "アッシズ オブ ローズ"
            },
            {
                "hex": "#e31262",
                "name": "rose red",
                "phonetic": "ローズ レッド"
            },
            {
                "hex": "#e85466",
                "name": "camellia",
                "phonetic": "カメリア"
            },
            {
                "hex": "#e22838",
                "name": "geranium",
                "phonetic": "ゼラニウム"
            },
            {
                "hex": "#d00026",
                "name": "cherry",
                "phonetic": "チェリー"
            },
            {
                "hex": "#e0002a",
                "name": "signal red",
                "phonetic": "シグナル レッド"
            },
            {
                "hex": "#e10041",
                "name": "carmine",
                "phonetic": "カーマイン"
            },
            {
                "hex": "#b21d33",
                "name": "turkey red",
                "phonetic": "ターキー レッド"
            },
            {
                "hex": "#ce382b",
                "name": "poppy red",
                "phonetic": "ポピーレッド"
            },
            {
                "hex": "#891e34",
                "name": "cardinal",
                "phonetic": "カーディナル"
            },
            {
                "hex": "#aa0044",
                "name": "crimson rake",
                "phonetic": "クリムスン レーキ"
            },
            {
                "hex": "#cf498f",
                "name": "pomegranate",
                "phonetic": "ポメグラネイト"
            },
            {
                "hex": "#ed2f1f",
                "name": "cinnabar",
                "phonetic": "シナバー"
            },
            {
                "hex": "#c13321",
                "name": "tomato red",
                "phonetic": "トマト レッド"
            },
            {
                "hex": "#ae003a",
                "name": "ruby",
                "phonetic": "ルビー"
            },
            {
                "hex": "#d47467",
                "name": "english red",
                "phonetic": "イングリッシュ レッド"
            },
            {
                "hex": "#7f3330",
                "name": "oxide red",
                "phonetic": "オクサイドレッド"
            },
            {
                "hex": "#7b2b47",
                "name": "oxblood red",
                "phonetic": "オックスブラッド レッド"
            },
            {
                "hex": "#9b5033",
                "name": "bole",
                "phonetic": "ボール"
            },
            {
                "hex": "#3c1117",
                "name": "burgundy",
                "phonetic": "バーガンディ"
            },
            {
                "hex": "#4b1016",
                "name": "mahogany",
                "phonetic": "マホガニー"
            },
            {
                "hex": "#6a1a2e",
                "name": "flea",
                "phonetic": "フリー"
            },
            {
                "hex": "#ffd4c4",
                "name": "beach",
                "phonetic": "ピーチ"
            },
            {
                "hex": "#ffc8ab",
                "name": "flesh",
                "phonetic": "フレッシュ"
            },
            {
                "hex": "#f79469",
                "name": "apricot",
                "phonetic": "アプリコット"
            },
            {
                "hex": "#d4a56f",
                "name": "sunset",
                "phonetic": "サンセット"
            },
            {
                "hex": "#af7c54",
                "name": "sunburn",
                "phonetic": "サンバーン"
            },
            {
                "hex": "#e23724",
                "name": "fire red",
                "phonetic": "ファイアー レッド"
            },
            {
                "hex": "#e97117",
                "name": "carrot orange",
                "phonetic": "キャロット オレンジ"
            },
            {
                "hex": "#dd562e",
                "name": "tangerine",
                "phonetic": "タンジェリン"
            },
            {
                "hex": "#fd680d",
                "name": "orange",
                "phonetic": "オレンジ"
            },
            {
                "hex": "#ebac85",
                "name": "maize",
                "phonetic": "メイズ"
            },
            {
                "hex": "#fe6d0d",
                "name": "chrome orange",
                "phonetic": "クローム オレンジ"
            },
            {
                "hex": "#bc753b",
                "name": "amber",
                "phonetic": "アンバー"
            },
            {
                "hex": "#562f2f",
                "name": "morocco",
                "phonetic": "モロッコ"
            },
            {
                "hex": "#d47643",
                "name": "caramel",
                "phonetic": "キャラメル"
            },
            {
                "hex": "#de772c",
                "name": "tan",
                "phonetic": "タン"
            },
            {
                "hex": "#c47c50",
                "name": "topaz",
                "phonetic": "トパーズ"
            },
            {
                "hex": "#fcd8b1",
                "name": "moon light",
                "phonetic": "ムーンライト"
            },
            {
                "hex": "#ffd0a1",
                "name": "ecru",
                "phonetic": "エクリュ"
            },
            {
                "hex": "#ebc6a9",
                "name": "flax",
                "phonetic": "フラックス"
            },
            {
                "hex": "#e0b188",
                "name": "blond",
                "phonetic": "ブロンド"
            },
            {
                "hex": "#c88659",
                "name": "cafe au lait",
                "phonetic": "カフェ オ レ"
            },
            {
                "hex": "#ffb989",
                "name": "biscuit",
                "phonetic": "ビスケット"
            },
            {
                "hex": "#c0ab8a",
                "name": "parchment",
                "phonetic": "バーチメント"
            },
            {
                "hex": "#e7bf7c",
                "name": "champagne",
                "phonetic": "シャンパーニュ"
            },
            {
                "hex": "#b57a59",
                "name": "camel",
                "phonetic": "キャメル"
            },
            {
                "hex": "#9e756c",
                "name": "grege",
                "phonetic": "グレージュ"
            },
            {
                "hex": "#ad775a",
                "name": "fawn",
                "phonetic": "フォーン"
            },
            {
                "hex": "#f7c2c2",
                "name": "chamois",
                "phonetic": "シャモア"
            },
            {
                "hex": "#b75237",
                "name": "burnt sienna",
                "phonetic": "バーント シエンナ"
            },
            {
                "hex": "#9c302a",
                "name": "brick red",
                "phonetic": "ブリック レッド"
            },
            {
                "hex": "#5c3418",
                "name": "brown",
                "phonetic": "ブラウン"
            },
            {
                "hex": "#86410b",
                "name": "raw sienna",
                "phonetic": "ローシェンナ"
            },
            {
                "hex": "#854e38",
                "name": "raw umber",
                "phonetic": "ローアンバー"
            },
            {
                "hex": "#604a2b",
                "name": "caffee",
                "phonetic": "カフェ"
            },
            {
                "hex": "#56001d",
                "name": "maroon",
                "phonetic": "マルーン"
            },
            {
                "hex": "#8b6165",
                "name": "liver",
                "phonetic": "リバー"
            },
            {
                "hex": "#9a1912",
                "name": "henna",
                "phonetic": "ヘンナ"
            },
            {
                "hex": "#ad5f47",
                "name": "russet",
                "phonetic": "ラセット"
            },
            {
                "hex": "#68412f",
                "name": "chestnut brown",
                "phonetic": "チェスナット ブラウン"
            },
            {
                "hex": "#695242",
                "name": "hair brown",
                "phonetic": "ヘア ブラウン"
            },
            {
                "hex": "#3e1f0f",
                "name": "chocolate",
                "phonetic": "チョコレート"
            },
            {
                "hex": "#402923",
                "name": "sepia",
                "phonetic": "セピア"
            },
            {
                "hex": "#7f5139",
                "name": "vandike brown",
                "phonetic": "ヴァンダイク ブラウン"
            },
            {
                "hex": "#f8f4e6",
                "name": "ivory",
                "phonetic": "アイボリー"
            },
            {
                "hex": "#e8c59c",
                "name": "vanilla",
                "phonetic": "ヴァニラ"
            },
            {
                "hex": "#e7c59c",
                "name": "leghorn",
                "phonetic": "レグホーン"
            },
            {
                "hex": "#f2db9c",
                "name": "straw",
                "phonetic": "ストロー"
            },
            {
                "hex": "#fccda2",
                "name": "massicot",
                "phonetic": "マシコット"
            },
            {
                "hex": "#ffd93c",
                "name": "sulphar yellow",
                "phonetic": "サルファー イエロー"
            },
            {
                "hex": "#c5be82",
                "name": "dyres broom",
                "phonetic": "ダイヤーズブルーム"
            },
            {
                "hex": "#ffcd25",
                "name": "mimosa",
                "phonetic": "ミモザ"
            },
            {
                "hex": "#ffbc7b",
                "name": "naples yellow",
                "phonetic": "ネープルス イエロー"
            },
            {
                "hex": "#b68954",
                "name": "honey yellow",
                "phonetic": "ハニー イエロー"
            },
            {
                "hex": "#e2b55b",
                "name": "gamboge",
                "phonetic": "ガンボージ"
            },
            {
                "hex": "#f7cb4a",
                "name": "auripigment",
                "phonetic": "オーピメント"
            },
            {
                "hex": "#ff9700",
                "name": "indian yellow",
                "phonetic": "インディアン イエロー"
            },
            {
                "hex": "#edaa5a",
                "name": "daffodil yellow",
                "phonetic": "ダファディル イエロー"
            },
            {
                "hex": "#ffaf00",
                "name": "saffran yellow",
                "phonetic": "サフラン イエロー"
            },
            {
                "hex": "#f4c600",
                "name": "chrome yellow",
                "phonetic": "クローム イエロー"
            },
            {
                "hex": "#f3b927",
                "name": "yolk yellow",
                "phonetic": "ヨーク イエロー"
            },
            {
                "hex": "#ffd718",
                "name": "canary",
                "phonetic": "カナリー"
            },
            {
                "hex": "#f5d300",
                "name": "banana",
                "phonetic": "バナナ"
            },
            {
                "hex": "#fec300",
                "name": "lemon yellow",
                "phonetic": "レモン イエロー"
            },
            {
                "hex": "#e3ab0d",
                "name": "mustard",
                "phonetic": "マスタード"
            },
            {
                "hex": "#eade5d",
                "name": "chartreuse yellow",
                "phonetic": "シャトルーズ イエロー"
            },
            {
                "hex": "#a37e00",
                "name": "gold",
                "phonetic": "ゴールド"
            },
            {
                "hex": "#ac6b25",
                "name": "bronze",
                "phonetic": "ブロンズ"
            },
            {
                "hex": "#584c0f",
                "name": "olive",
                "phonetic": "オリーブ"
            },
            {
                "hex": "#cfd10c",
                "name": "lime green",
                "phonetic": "ライム グリーン"
            },
            {
                "hex": "#bdce96",
                "name": "sea foam green",
                "phonetic": "シーフォーム グリーン"
            },
            {
                "hex": "#ebf7d3",
                "name": "pistache",
                "phonetic": "ピスターシュ"
            },
            {
                "hex": "#45aa31",
                "name": "night green",
                "phonetic": "ナイト グリーン"
            },
            {
                "hex": "#87ac9e",
                "name": "eggshell green",
                "phonetic": "エッグシェル グリーン"
            },
            {
                "hex": "#96be7b",
                "name": "grass green",
                "phonetic": "グラス グリーン"
            },
            {
                "hex": "#b6bea2",
                "name": "glaucas",
                "phonetic": "グローカス"
            },
            {
                "hex": "#97be1c",
                "name": "apple green",
                "phonetic": "アップル グリーン"
            },
            {
                "hex": "#5c700a",
                "name": "gay green",
                "phonetic": "ゲイグリーン"
            },
            {
                "hex": "#93b17d",
                "name": "pea green",
                "phonetic": "ピーグリーン"
            },
            {
                "hex": "#b4cb5e",
                "name": "spring green",
                "phonetic": "スプリング グリーン"
            },
            {
                "hex": "#95875a",
                "name": "willow green",
                "phonetic": "ウィロー グリーン"
            },
            {
                "hex": "#507a49",
                "name": "godey green",
                "phonetic": "ゴーディ グリーン"
            },
            {
                "hex": "#7b7c46",
                "name": "moth green",
                "phonetic": "モス グリーン"
            },
            {
                "hex": "#615c41",
                "name": "lincoln green",
                "phonetic": "リンカーン グリーン"
            },
            {
                "hex": "#3b3f10",
                "name": "olive green",
                "phonetic": "オリーブ グリーン"
            },
            {
                "hex": "#5c7449",
                "name": "flower drew green",
                "phonetic": "フラワードリュースグリーン"
            },
            {
                "hex": "#00ae42",
                "name": "schweinfurt green",
                "phonetic": "シュヴァインフルトグリーン"
            },
            {
                "hex": "#006252",
                "name": "mint",
                "phonetic": "ミント"
            },
            {
                "hex": "#00885f",
                "name": "chrome green",
                "phonetic": "クローム グリーン"
            },
            {
                "hex": "#347655",
                "name": "malachite green",
                "phonetic": "マラカイト グリーン"
            },
            {
                "hex": "#5ba080",
                "name": "verdigris",
                "phonetic": "ヴェルディグリ"
            },
            {
                "hex": "#576a3e",
                "name": "mistletoe",
                "phonetic": "ミスルトー"
            },
            {
                "hex": "#0e291b",
                "name": "hunter green",
                "phonetic": "ハンター グリーン"
            },
            {
                "hex": "#0b2f31",
                "name": "bottle green",
                "phonetic": "ボトル グリーン"
            },
            {
                "hex": "#273931",
                "name": "myrtle green",
                "phonetic": "マートル グリーン"
            },
            {
                "hex": "#b0e2f6",
                "name": "horizon blue",
                "phonetic": "ホリゾン ブルー"
            },
            {
                "hex": "#418c8c",
                "name": "nile blue",
                "phonetic": "ナイル ブルー"
            },
            {
                "hex": "#cbecf6",
                "name": "baby blue",
                "phonetic": "ベビー ブルー"
            },
            {
                "hex": "#54b6be",
                "name": "cambridge blue",
                "phonetic": "ケンブリッジ ブルー"
            },
            {
                "hex": "#8bafdb",
                "name": "sky blue",
                "phonetic": "スカイ ブルー"
            },
            {
                "hex": "#496f8e",
                "name": "celestial blue",
                "phonetic": "シレスティアル ブルー"
            },
            {
                "hex": "#999db9",
                "name": "zenith blue",
                "phonetic": "ゼニスブルー"
            },
            {
                "hex": "#02977d",
                "name": "vnet",
                "phonetic": "ヴェニット"
            },
            {
                "hex": "#327585",
                "name": "aqua marine",
                "phonetic": "アクア マリン"
            },
            {
                "hex": "#0097a2",
                "name": "turquoise",
                "phonetic": "ターコイズ"
            },
            {
                "hex": "#5e94a5",
                "name": "porcelain blue",
                "phonetic": "ポースリン ブルー"
            },
            {
                "hex": "#66b7d8",
                "name": "forget me not",
                "phonetic": "フォーゲット ミー ノット"
            },
            {
                "hex": "#e6f6fc",
                "name": "powder blue",
                "phonetic": "パウダー ブルー"
            },
            {
                "hex": "#00586d",
                "name": "peacock",
                "phonetic": "ピーコック"
            },
            {
                "hex": "#006785",
                "name": "egyptian blue",
                "phonetic": "エジプシアン ブルー"
            },
            {
                "hex": "#427596",
                "name": "vice",
                "phonetic": "バイス"
            },
            {
                "hex": "#505b8c",
                "name": "wedgewood blue",
                "phonetic": "ウェッジウッド ブルー"
            },
            {
                "hex": "#5782a1",
                "name": "bluette",
                "phonetic": "ブルーエット"
            },
            {
                "hex": "#325e9a",
                "name": "hydrangea blue",
                "phonetic": "ハイドレンジア ブルー"
            },
            {
                "hex": "#5dbbb8",
                "name": "cyan blue",
                "phonetic": "サイアン ブルー"
            },
            {
                "hex": "#1581c5",
                "name": "cobalt blue",
                "phonetic": "コバルト ブルー"
            },
            {
                "hex": "#3a4789",
                "name": "smalt",
                "phonetic": "スマルト"
            },
            {
                "hex": "#004d6a",
                "name": "sapphire blue",
                "phonetic": "サファイア ブルー"
            },
            {
                "hex": "#2d3289",
                "name": "ultramarine",
                "phonetic": "ウルトラマリン"
            },
            {
                "hex": "#392c87",
                "name": "prussian blue",
                "phonetic": "プルシアン ブルー"
            },
            {
                "hex": "#004e8a",
                "name": "royal blue",
                "phonetic": "ロイヤル ブルー"
            },
            {
                "hex": "#00538d",
                "name": "garter blue",
                "phonetic": "ガーター ブルー"
            },
            {
                "hex": "#002d64",
                "name": "delft blue",
                "phonetic": "デルフト ブルー"
            },
            {
                "hex": "#1847aa",
                "name": "marine blue",
                "phonetic": "マリン ブルー"
            },
            {
                "hex": "#001d3a",
                "name": "navy blue",
                "phonetic": "ネイヴィブルー"
            },
            {
                "hex": "#1a1f47",
                "name": "midnight blue",
                "phonetic": "ミッドナイト ブルー"
            },
            {
                "hex": "#ab85b2",
                "name": "lavender",
                "phonetic": "ラべンダー"
            },
            {
                "hex": "#7b639c",
                "name": "wisteria",
                "phonetic": "ウィスタリア"
            },
            {
                "hex": "#d191b4",
                "name": "lilac",
                "phonetic": "ライラック"
            },
            {
                "hex": "#c6639e",
                "name": "mallow",
                "phonetic": "マロウ"
            },
            {
                "hex": "#822759",
                "name": "thistle",
                "phonetic": "シスル"
            },
            {
                "hex": "#926a90",
                "name": "mineral violet",
                "phonetic": "ミネラル バイオレット"
            },
            {
                "hex": "#a269a8",
                "name": "cobalt violet",
                "phonetic": "コバルト バイオレット"
            },
            {
                "hex": "#4c045a",
                "name": "purple",
                "phonetic": "パープル"
            },
            {
                "hex": "#634669",
                "name": "amethyst",
                "phonetic": "アメジスト"
            },
            {
                "hex": "#993945",
                "name": "amaranth purple",
                "phonetic": "アメジスト パープル"
            },
            {
                "hex": "#de0067",
                "name": "magenta",
                "phonetic": "マゼンタ"
            },
            {
                "hex": "#35178c",
                "name": "pansy",
                "phonetic": "パンジー"
            },
            {
                "hex": "#ae006d",
                "name": "fuchsia",
                "phonetic": "フューシャ"
            },
            {
                "hex": "#661065",
                "name": "aconite violet",
                "phonetic": "アコナイト バイオレット"
            },
            {
                "hex": "#2e141c",
                "name": "murray",
                "phonetic": "マーリー"
            },
            {
                "hex": "#75106d",
                "name": "heliotrope",
                "phonetic": "ヘリオトロープ"
            },
            {
                "hex": "#361a33",
                "name": "plum purple",
                "phonetic": "プラム パープル"
            },
            {
                "hex": "#8a004f",
                "name": "raspberry",
                "phonetic": "ラズベリー"
            },
            {
                "hex": "#491830",
                "name": "raisins",
                "phonetic": "レーズン"
            },
            {
                "hex": "#6b0032",
                "name": "wine",
                "phonetic": "ワイン"
            },
            {
                "hex": "#f9fbf9",
                "name": "white lead",
                "phonetic": "ホワイト レド"
            },
            {
                "hex": "#fcdfd4",
                "name": "alabaster",
                "phonetic": "アラバスター"
            },
            {
                "hex": "#fdfaed",
                "name": "milk white",
                "phonetic": "ミルク ホワイト"
            },
            {
                "hex": "#b5b9bc",
                "name": "silver",
                "phonetic": "シルバー"
            },
            {
                "hex": "#a69278",
                "name": "sand",
                "phonetic": "サンド"
            },
            {
                "hex": "#c2b799",
                "name": "ash grey",
                "phonetic": "アッシュ グレイ"
            },
            {
                "hex": "#83857a",
                "name": "smoke grey",
                "phonetic": "スモーク グレイ"
            },
            {
                "hex": "#c2ceba",
                "name": "pearl green",
                "phonetic": "パール グリーン"
            },
            {
                "hex": "#777777",
                "name": "mouse grey",
                "phonetic": "マウス グレイ"
            },
            {
                "hex": "#987c84",
                "name": "dove gray",
                "phonetic": "ダブ グレイ"
            },
            {
                "hex": "#af9090",
                "name": "mist",
                "phonetic": "ミスト"
            },
            {
                "hex": "#000000",
                "name": "graphite",
                "phonetic": "グラファイト"
            },
            {
                "hex": "#323934",
                "name": "goose gray",
                "phonetic": "グーズグレイ"
            }
        ];
    }

    /**
     * ヨーロッパの色2を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #get2 = () => {
        return [
            {
                "hex": "#192f60",
                "name": "アイアンブルー",
                "phonetic": "iron blue"
            },
            {
                "hex": "#a3d6cc",
                "name": "アイスグリーン",
                "phonetic": "ice green"
            },
            {
                "hex": "#578a3d",
                "name": "アイビーグリーン",
                "phonetic": "ivy green"
            },
            {
                "hex": "#666c67",
                "name": "アイビーグレイ",
                "phonetic": "ivy gray"
            },
            {
                "hex": "#f8f4e6",
                "name": "アイボリー",
                "phonetic": "ivory"
            },
            {
                "hex": "#c7a5cc",
                "name": "アイリス",
                "phonetic": "iris"
            },
            {
                "hex": "#88bfbf",
                "name": "アクアグリーン",
                "phonetic": "aqua green"
            },
            {
                "hex": "#67b5b7",
                "name": "アクアマリン",
                "phonetic": "aquamarine"
            },
            {
                "hex": "#d83473",
                "name": "アザレ",
                "phonetic": "azalee"
            },
            {
                "hex": "#dbebc4",
                "name": "アスパラガスグリーン",
                "phonetic": "asparagus green"
            },
            {
                "hex": "#9fa09e",
                "name": "アッシュグレイ",
                "phonetic": "ash gray"
            },
            {
                "hex": "#b5b5ae",
                "name": "アッシュブロンド",
                "phonetic": "ash blond"
            },
            {
                "hex": "#e6bfab",
                "name": "アッシュローズ",
                "phonetic": "ash rose"
            },
            {
                "hex": "#a7d28d",
                "name": "アップルグリーン",
                "phonetic": "apple green"
            },
            {
                "hex": "#f7b977",
                "name": "アプリコット",
                "phonetic": "apricot"
            },
            {
                "hex": "#54917f",
                "name": "アンティークグリーン",
                "phonetic": "antique green"
            },
            {
                "hex": "#c1ab05",
                "name": "アンティックゴールド",
                "phonetic": "antique gold"
            },
            {
                "hex": "#c2894b",
                "name": "アンバー",
                "phonetic": "amber"
            },
            {
                "hex": "#fff9f5",
                "name": "アンバーホワイト",
                "phonetic": "amber white"
            },
            {
                "hex": "#e6bfb2",
                "name": "アンバーローズ",
                "phonetic": "amber rose"
            },
            {
                "hex": "#ffdc00",
                "name": "イエロー",
                "phonetic": "yellow"
            },
            {
                "hex": "#c4972f",
                "name": "イエローオーカー",
                "phonetic": "yellow ocher"
            },
            {
                "hex": "#003f8e",
                "name": "インクブルー",
                "phonetic": "ink blue"
            },
            {
                "hex": "#043c78",
                "name": "インディゴ",
                "phonetic": "indigo"
            },
            {
                "hex": "#e8c59c",
                "name": "ヴァニラ",
                "phonetic": "vanilla"
            },
            {
                "hex": "#8d93c8",
                "name": "ウイスタリア",
                "phonetic": "wistaria"
            },
            {
                "hex": "#d3d6dd",
                "name": "ウィステリアミスト",
                "phonetic": "wisteria mist"
            },
            {
                "hex": "#a5c9c1",
                "name": "ウォーターグリーン",
                "phonetic": "water green"
            },
            {
                "hex": "#434da2",
                "name": "ウルトラマリン",
                "phonetic": "ultramarine"
            },
            {
                "hex": "#4753a2",
                "name": "ウルトラマリンブルー",
                "phonetic": "ultramarine blue"
            },
            {
                "hex": "#eee7e0",
                "name": "エクリュ",
                "phonetic": "ecru"
            },
            {
                "hex": "#f6e5cc",
                "name": "エクルベージュ",
                "phonetic": "ecru beige"
            },
            {
                "hex": "#0073a8",
                "name": "エジプシャンブルー",
                "phonetic": "egyptian blue"
            },
            {
                "hex": "#00984f",
                "name": "エバーグリーン",
                "phonetic": "evergreen"
            },
            {
                "hex": "#00a968",
                "name": "エメラルドグリーン",
                "phonetic": "emerald green"
            },
            {
                "hex": "#9f9f98",
                "name": "エレファントスキン",
                "phonetic": "elephant skin"
            },
            {
                "hex": "#eae1cf",
                "name": "オイスター",
                "phonetic": "oyster"
            },
            {
                "hex": "#eae8e1",
                "name": "オイスターホワイト",
                "phonetic": "oyster white"
            },
            {
                "hex": "#ba8b40",
                "name": "オーカー",
                "phonetic": "ochre"
            },
            {
                "hex": "#d9aacd",
                "name": "オーキッド",
                "phonetic": "orchid"
            },
            {
                "hex": "#bcc7d7",
                "name": "オーキッドグレイ",
                "phonetic": "orchid gray"
            },
            {
                "hex": "#af0082",
                "name": "オーキッドパープル",
                "phonetic": "orchid purple"
            },
            {
                "hex": "#da81b2",
                "name": "オーキッドピンク",
                "phonetic": "orchid pink"
            },
            {
                "hex": "#d3d3d8",
                "name": "オーキッドミスト",
                "phonetic": "orchid mist"
            },
            {
                "hex": "#e3adc1",
                "name": "オールドオーキッド",
                "phonetic": "old orchid"
            },
            {
                "hex": "#b0778c",
                "name": "オールドライラック",
                "phonetic": "old lilac"
            },
            {
                "hex": "#e29399",
                "name": "オールドローズ",
                "phonetic": "old rose"
            },
            {
                "hex": "#bee0ce",
                "name": "オパールグリーン",
                "phonetic": "opal green"
            },
            {
                "hex": "#bfbec5",
                "name": "オパールグレイ",
                "phonetic": "opal gray"
            },
            {
                "hex": "#e95388",
                "name": "オペラ",
                "phonetic": "opera"
            },
            {
                "hex": "#72640c",
                "name": "オリーブ",
                "phonetic": "olive"
            },
            {
                "hex": "#5f6527",
                "name": "オリーブグリーン",
                "phonetic": "olive green"
            },
            {
                "hex": "#665a1a",
                "name": "オリーブドラブ",
                "phonetic": "olive drab"
            },
            {
                "hex": "#26499d",
                "name": "オリエンタルブルー",
                "phonetic": "oriental blue"
            },
            {
                "hex": "#ee7800",
                "name": "オレンジ",
                "phonetic": "orange"
            },
            {
                "hex": "#c5a05a",
                "name": "カーキー",
                "phonetic": "khaki"
            },
            {
                "hex": "#942343",
                "name": "ガーネット",
                "phonetic": "garnet"
            },
            {
                "hex": "#d70035",
                "name": "カーマイン",
                "phonetic": "carmine"
            },
            {
                "hex": "#387d39",
                "name": "カクタス",
                "phonetic": "cactus"
            },
            {
                "hex": "#fff462",
                "name": "カナリヤ",
                "phonetic": "canary yellow"
            },
            {
                "hex": "#946c45",
                "name": "カフェオレ",
                "phonetic": "cafe au lait"
            },
            {
                "hex": "#00a3a7",
                "name": "カプリブルー",
                "phonetic": "capri blue"
            },
            {
                "hex": "#da536e",
                "name": "カメリア",
                "phonetic": "camellia"
            },
            {
                "hex": "#bc611e",
                "name": "キャラメル",
                "phonetic": "caramel"
            },
            {
                "hex": "#ed6d35",
                "name": "キャロットオレンジ",
                "phonetic": "carrot orange"
            },
            {
                "hex": "#d4d9df",
                "name": "クラウド",
                "phonetic": "cloud"
            },
            {
                "hex": "#7b8d42",
                "name": "グラスグリーン",
                "phonetic": "grass green"
            },
            {
                "hex": "#594e52",
                "name": "グラファイト",
                "phonetic": "graphite"
            },
            {
                "hex": "#941f57",
                "name": "クラレット",
                "phonetic": "claret"
            },
            {
                "hex": "#e3d7a3",
                "name": "クリーム",
                "phonetic": "cream"
            },
            {
                "hex": "#fff3b8",
                "name": "クリームイエロー",
                "phonetic": "cream yellow"
            },
            {
                "hex": "#00a960",
                "name": "グリーン",
                "phonetic": "green"
            },
            {
                "hex": "#abb1ad",
                "name": "グリーンフォッグ",
                "phonetic": "green fog"
            },
            {
                "hex": "#7d7d7d",
                "name": "グレイ",
                "phonetic": "gray"
            },
            {
                "hex": "#56256e",
                "name": "グレープ",
                "phonetic": "grape"
            },
            {
                "hex": "#b79fcb",
                "name": "クロッカス",
                "phonetic": "crocus"
            },
            {
                "hex": "#fcc800",
                "name": "クロムイエロー",
                "phonetic": "chrome yellow"
            },
            {
                "hex": "#00533f",
                "name": "クロムグリーン",
                "phonetic": "chrome green"
            },
            {
                "hex": "#25b7c0",
                "name": "ケンブリッジブルー",
                "phonetic": "cambridge blue"
            },
            {
                "hex": "#7b5544",
                "name": "コーヒー",
                "phonetic": "coffee"
            },
            {
                "hex": "#ef857d",
                "name": "コーラルレッド",
                "phonetic": "coral red"
            },
            {
                "hex": "#f6ae54",
                "name": "ゴールデンイエロー",
                "phonetic": "golden yellow"
            },
            {
                "hex": "#6e4a55",
                "name": "ココア",
                "phonetic": "cocoa"
            },
            {
                "hex": "#98605e",
                "name": "ココアブラウン",
                "phonetic": "cocoa brown"
            },
            {
                "hex": "#dc6b9a",
                "name": "コスモス",
                "phonetic": "cosmos"
            },
            {
                "hex": "#c82c55",
                "name": "コチニールレッド",
                "phonetic": "cochineal red"
            },
            {
                "hex": "#3cb37a",
                "name": "コバルトグリーン",
                "phonetic": "cobalt green"
            },
            {
                "hex": "#0068b7",
                "name": "コバルトブルー",
                "phonetic": "cobalt blue"
            },
            {
                "hex": "#c49a6a",
                "name": "コルク",
                "phonetic": "cork"
            },
            {
                "hex": "#f3a68c",
                "name": "サーモンピンク",
                "phonetic": "salmon pink"
            },
            {
                "hex": "#418b89",
                "name": "サックスブルー",
                "phonetic": "saxe blue"
            },
            {
                "hex": "#e29676",
                "name": "サハラ",
                "phonetic": "sahara"
            },
            {
                "hex": "#0068b7",
                "name": "サファイアブルー",
                "phonetic": "sapphire blue"
            },
            {
                "hex": "#fac559",
                "name": "サフランイエロー",
                "phonetic": "saffron yellow"
            },
            {
                "hex": "#009944",
                "name": "サマーグリーン",
                "phonetic": "summer green"
            },
            {
                "hex": "#a1d8e2",
                "name": "サマーシャワー",
                "phonetic": "summer shower"
            },
            {
                "hex": "#94adda",
                "name": "サルビアブルー",
                "phonetic": "salvia blue"
            },
            {
                "hex": "#ffedab",
                "name": "サンシャインイエロー",
                "phonetic": "sunshine yellow"
            },
            {
                "hex": "#f6b483",
                "name": "サンセット",
                "phonetic": "sunset"
            },
            {
                "hex": "#c9c9c2",
                "name": "サンドグレイ",
                "phonetic": "sand gray"
            },
            {
                "hex": "#dcd6d2",
                "name": "サンドベージュ",
                "phonetic": "sand beige"
            },
            {
                "hex": "#00a1e9",
                "name": "シアン",
                "phonetic": "cyan"
            },
            {
                "hex": "#00ac97",
                "name": "シーグリーン",
                "phonetic": "sea green"
            },
            {
                "hex": "#fbdac8",
                "name": "シェルピンク",
                "phonetic": "shell pink"
            },
            {
                "hex": "#e8383d",
                "name": "シグナルレッド",
                "phonetic": "signal red"
            },
            {
                "hex": "#d04f97",
                "name": "シクラメンピンク",
                "phonetic": "cyclamen pink"
            },
            {
                "hex": "#eddc44",
                "name": "シトラス",
                "phonetic": "citrus"
            },
            {
                "hex": "#618e34",
                "name": "シトロングリーン",
                "phonetic": "citron green"
            },
            {
                "hex": "#be8f68",
                "name": "シナモン",
                "phonetic": "cinnamon"
            },
            {
                "hex": "#edde7b",
                "name": "ジャスミンイエロー",
                "phonetic": "jasmine yellow"
            },
            {
                "hex": "#719bad",
                "name": "シャドウブルー",
                "phonetic": "shadow blue"
            },
            {
                "hex": "#d9e367",
                "name": "シャトルーズグリーン",
                "phonetic": "chartreuse green"
            },
            {
                "hex": "#e3e548",
                "name": "シャルトルーズイエロー",
                "phonetic": "chartreuse yellow"
            },
            {
                "hex": "#e9dacb",
                "name": "シャンパン",
                "phonetic": "champagne"
            },
            {
                "hex": "#ffdc00",
                "name": "ジョンブリアン",
                "phonetic": "jaune brillant"
            },
            {
                "hex": "#c9caca",
                "name": "シルバー",
                "phonetic": "silver"
            },
            {
                "hex": "#afafb0",
                "name": "シルバーグレイ",
                "phonetic": "silver gray"
            },
            {
                "hex": "#eeeaec",
                "name": "シルバーピンク",
                "phonetic": "silver pink"
            },
            {
                "hex": "#efefef",
                "name": "シルバーホワイト",
                "phonetic": "silver white"
            },
            {
                "hex": "#ea5532",
                "name": "スカーレット",
                "phonetic": "scarlet"
            },
            {
                "hex": "#bee0c2",
                "name": "スカイグリーン",
                "phonetic": "sky green"
            },
            {
                "hex": "#cbd0d3",
                "name": "スカイグレイ",
                "phonetic": "sky gray"
            },
            {
                "hex": "#a0d8ef",
                "name": "スカイブルー",
                "phonetic": "sky blue"
            },
            {
                "hex": "#736d71",
                "name": "スチールグレイ",
                "phonetic": "steel gray"
            },
            {
                "hex": "#aaaab0",
                "name": "ストームグレイ",
                "phonetic": "storm gray"
            },
            {
                "hex": "#898880",
                "name": "ストーングレイ",
                "phonetic": "stone gray"
            },
            {
                "hex": "#ece093",
                "name": "ストロー",
                "phonetic": "straw"
            },
            {
                "hex": "#e73562",
                "name": "ストロベリー",
                "phonetic": "strawberry"
            },
            {
                "hex": "#fafdff",
                "name": "スノーホワイト",
                "phonetic": "snow white"
            },
            {
                "hex": "#417038",
                "name": "スピナッチグリーン",
                "phonetic": "spinach green"
            },
            {
                "hex": "#9cbb1c",
                "name": "スプリンググリーン",
                "phonetic": "spring green"
            },
            {
                "hex": "#a4d5bd",
                "name": "スプレイグリーン",
                "phonetic": "spray green"
            },
            {
                "hex": "#79c06e",
                "name": "スペアミント",
                "phonetic": "spearmint"
            },
            {
                "hex": "#0075c2",
                "name": "スペクトラムブルー",
                "phonetic": "spectrum blue"
            },
            {
                "hex": "#a4c1d7",
                "name": "スモークブルー",
                "phonetic": "smoke blue"
            },
            {
                "hex": "#3c7170",
                "name": "スレートグリーン",
                "phonetic": "slate green"
            },
            {
                "hex": "#626063",
                "name": "スレートグレイ",
                "phonetic": "slate gray"
            },
            {
                "hex": "#4496d3",
                "name": "ゼニスブルー",
                "phonetic": "zenith blue"
            },
            {
                "hex": "#622d18",
                "name": "セピア",
                "phonetic": "sepia"
            },
            {
                "hex": "#008db7",
                "name": "セルリアンブルー",
                "phonetic": "cerulean blue"
            },
            {
                "hex": "#009b9f",
                "name": "ターコイズ",
                "phonetic": "turquoise"
            },
            {
                "hex": "#00947a",
                "name": "ターコイズグリーン",
                "phonetic": "turquoise green"
            },
            {
                "hex": "#00afcc",
                "name": "ターコイズブルー",
                "phonetic": "turquoise blue"
            },
            {
                "hex": "#007199",
                "name": "ダックブルー",
                "phonetic": "duck blue"
            },
            {
                "hex": "#7d7b83",
                "name": "ダブグレイ",
                "phonetic": "dove gray"
            },
            {
                "hex": "#a50082",
                "name": "ダリアパープル",
                "phonetic": "dahlia purple"
            },
            {
                "hex": "#bf783e",
                "name": "タン",
                "phonetic": "tan"
            },
            {
                "hex": "#eb6ea0",
                "name": "チェリーピンク",
                "phonetic": "cherry pink"
            },
            {
                "hex": "#d4dcd3",
                "name": "チャイナクレイ",
                "phonetic": "china clay"
            },
            {
                "hex": "#ed6d46",
                "name": "チャイニーズレッド",
                "phonetic": "chinese red"
            },
            {
                "hex": "#4e454a",
                "name": "チャコールグレイ",
                "phonetic": "charcoal gray"
            },
            {
                "hex": "#68a9cf",
                "name": "チョークブルー",
                "phonetic": "chalk blue"
            },
            {
                "hex": "#6c3524",
                "name": "チョコレート",
                "phonetic": "chocolate"
            },
            {
                "hex": "#47266e",
                "name": "ディープロイヤルパープル",
                "phonetic": "deep royal purple"
            },
            {
                "hex": "#a3b9e0",
                "name": "デイドリーム",
                "phonetic": "day dream"
            },
            {
                "hex": "#006a6c",
                "name": "テールグリーン",
                "phonetic": "teal green"
            },
            {
                "hex": "#bd6856",
                "name": "テラコッタ",
                "phonetic": "terracotta"
            },
            {
                "hex": "#504946",
                "name": "トープ",
                "phonetic": "taupe"
            },
            {
                "hex": "#e9bc00",
                "name": "トパーズ",
                "phonetic": "topaz"
            },
            {
                "hex": "#ea5549",
                "name": "トマトレッド",
                "phonetic": "tomato red"
            },
            {
                "hex": "#2cb4ad",
                "name": "ナイルブルー",
                "phonetic": "nile blue"
            },
            {
                "hex": "#202f55",
                "name": "ネービーブルー",
                "phonetic": "navy blue"
            },
            {
                "hex": "#fdd35c",
                "name": "ネープルスイエロー",
                "phonetic": "naples yellow"
            },
            {
                "hex": "#fce4d6",
                "name": "ネールピンク",
                "phonetic": "nail pink"
            },
            {
                "hex": "#6c2735",
                "name": "バーガンディー",
                "phonetic": "burgundy"
            },
            {
                "hex": "#9b72b0",
                "name": "パープル",
                "phonetic": "purple"
            },
            {
                "hex": "#ea553a",
                "name": "バーミリオン",
                "phonetic": "vermilion"
            },
            {
                "hex": "#c9c9c4",
                "name": "パールグレイ",
                "phonetic": "pearl gray"
            },
            {
                "hex": "#f7f6f5",
                "name": "パールホワイト",
                "phonetic": "pearl white"
            },
            {
                "hex": "#6f5436",
                "name": "バーントアンバー",
                "phonetic": "burnt umber"
            },
            {
                "hex": "#bb5535",
                "name": "バーントシェンナ",
                "phonetic": "burnt sienna"
            },
            {
                "hex": "#5a4498",
                "name": "バイオレット",
                "phonetic": "violet"
            },
            {
                "hex": "#f5ecf4",
                "name": "パウダーピンク",
                "phonetic": "powder pink"
            },
            {
                "hex": "#bccddb",
                "name": "パウダーブルー",
                "phonetic": "powder blue"
            },
            {
                "hex": "#898989",
                "name": "バトルシップグレイ",
                "phonetic": "battleship gray"
            },
            {
                "hex": "#caac71",
                "name": "バフ",
                "phonetic": "buff"
            },
            {
                "hex": "#37a34a",
                "name": "パロットグリーン",
                "phonetic": "parrot green"
            },
            {
                "hex": "#4d4398",
                "name": "パンジー",
                "phonetic": "pannsy"
            },
            {
                "hex": "#e5a323",
                "name": "パンプキン",
                "phonetic": "pumpkin"
            },
            {
                "hex": "#00a497",
                "name": "ピーコックグリーン",
                "phonetic": "peacock green"
            },
            {
                "hex": "#009e9f",
                "name": "ピーコックブルー",
                "phonetic": "peacock blue"
            },
            {
                "hex": "#fbd8b5",
                "name": "ピーチ",
                "phonetic": "peach"
            },
            {
                "hex": "#88b5d3",
                "name": "ピジョンブルー",
                "phonetic": "pigeon blue"
            },
            {
                "hex": "#ead7a4",
                "name": "ビスケット",
                "phonetic": "biscuit"
            },
            {
                "hex": "#6c9bd2",
                "name": "ヒヤシンス",
                "phonetic": "hyacinth"
            },
            {
                "hex": "#7a99cf",
                "name": "ヒヤシンスブルー",
                "phonetic": "hyacinth blue"
            },
            {
                "hex": "#00885a",
                "name": "ビリジアン",
                "phonetic": "viridian"
            },
            {
                "hex": "#005c42",
                "name": "ビリヤードグリーン",
                "phonetic": "billiard green"
            },
            {
                "hex": "#f5b2b2",
                "name": "ピンク",
                "phonetic": "pink"
            },
            {
                "hex": "#e3acae",
                "name": "ピンクアーモンド",
                "phonetic": "pink almond"
            },
            {
                "hex": "#ede4e1",
                "name": "ピンクベージュ",
                "phonetic": "pink beige"
            },
            {
                "hex": "#fef9fb",
                "name": "ピンクホワイト",
                "phonetic": "pink white"
            },
            {
                "hex": "#e62f8b",
                "name": "ブーゲンビリア",
                "phonetic": "bougainvillaea"
            },
            {
                "hex": "#abb1b5",
                "name": "フォッグ",
                "phonetic": "fog"
            },
            {
                "hex": "#288c66",
                "name": "フォレストグリーン",
                "phonetic": "forest green"
            },
            {
                "hex": "#8f6552",
                "name": "ブラウン",
                "phonetic": "brown"
            },
            {
                "hex": "#000000",
                "name": "ブラック",
                "phonetic": "black"
            },
            {
                "hex": "#f5b2ac",
                "name": "フラミンゴピンク",
                "phonetic": "flamingo pink"
            },
            {
                "hex": "#6c2463",
                "name": "プラム",
                "phonetic": "plum"
            },
            {
                "hex": "#9a0d7c",
                "name": "フランボワーズ",
                "phonetic": "framboise"
            },
            {
                "hex": "#0075c2",
                "name": "ブルー",
                "phonetic": "blue"
            },
            {
                "hex": "#006eb0",
                "name": "ブルーアシード",
                "phonetic": "bleu acide"
            },
            {
                "hex": "#a4a8d4",
                "name": "ブルーラベンダー",
                "phonetic": "blue lavender"
            },
            {
                "hex": "#192f60",
                "name": "プルシャンブルー",
                "phonetic": "prussian blue"
            },
            {
                "hex": "#fad09e",
                "name": "フレッシュ",
                "phonetic": "flesh"
            },
            {
                "hex": "#8da0b6",
                "name": "フレンチグレイ",
                "phonetic": "french gray"
            },
            {
                "hex": "#e8ece9",
                "name": "フロスティグレイ",
                "phonetic": "frosty gray"
            },
            {
                "hex": "#bbdbf3",
                "name": "フロスティブルー",
                "phonetic": "frosty blue"
            },
            {
                "hex": "#e6eae6",
                "name": "フロスティホワイト",
                "phonetic": "frosty white"
            },
            {
                "hex": "#ac6b25",
                "name": "ブロンズ",
                "phonetic": "bronze"
            },
            {
                "hex": "#f2d58a",
                "name": "ブロンド",
                "phonetic": "blond"
            },
            {
                "hex": "#a2c2e6",
                "name": "ベイビーブルー",
                "phonetic": "baby blue"
            },
            {
                "hex": "#eedcb3",
                "name": "ベージュ",
                "phonetic": "beige"
            },
            {
                "hex": "#eee9e6",
                "name": "ベージュカメオ",
                "phonetic": "beige cameo"
            },
            {
                "hex": "#b4ada9",
                "name": "ベージュグレイ",
                "phonetic": "beige gray"
            },
            {
                "hex": "#e8d3ca",
                "name": "ベージュローゼ",
                "phonetic": "beige rose"
            },
            {
                "hex": "#00ac9a",
                "name": "ペパーミントグリーン",
                "phonetic": "peppermint green"
            },
            {
                "hex": "#fdede4",
                "name": "ベビーピンク",
                "phonetic": "baby pink"
            },
            {
                "hex": "#bbe2f1",
                "name": "ベビーブルー",
                "phonetic": "baby blue"
            },
            {
                "hex": "#68a4d9",
                "name": "ヘブンリーブルー",
                "phonetic": "heavenly blue"
            },
            {
                "hex": "#9079b6",
                "name": "ヘリオトロープ",
                "phonetic": "heliotrope"
            },
            {
                "hex": "#006948",
                "name": "ホーリーグリーン",
                "phonetic": "holly green"
            },
            {
                "hex": "#004d25",
                "name": "ボトルグリーン",
                "phonetic": "bottle green"
            },
            {
                "hex": "#ea5550",
                "name": "ポピーレッド",
                "phonetic": "poppy red"
            },
            {
                "hex": "#82cddd",
                "name": "ホライズンブルー",
                "phonetic": "horizon blue"
            },
            {
                "hex": "#a1d8e6",
                "name": "ホリゾンブルー",
                "phonetic": "horizon blue"
            },
            {
                "hex": "#6c272d",
                "name": "ボルドー",
                "phonetic": "bordeaux"
            },
            {
                "hex": "#ffffff",
                "name": "ホワイト",
                "phonetic": "white"
            },
            {
                "hex": "#f0f6da",
                "name": "ホワイトリリー",
                "phonetic": "white lily"
            },
            {
                "hex": "#c0c5c2",
                "name": "マーブルグレイ",
                "phonetic": "marble gray"
            },
            {
                "hex": "#e4007f",
                "name": "マゼンタ",
                "phonetic": "magenta"
            },
            {
                "hex": "#00608d",
                "name": "マドンナブルー",
                "phonetic": "madonna blue"
            },
            {
                "hex": "#6b3f31",
                "name": "マホガニー",
                "phonetic": "mahogany"
            },
            {
                "hex": "#009854",
                "name": "マラカイトグリーン",
                "phonetic": "malachite green"
            },
            {
                "hex": "#f39800",
                "name": "マリーゴールド",
                "phonetic": "marigold"
            },
            {
                "hex": "#006888",
                "name": "マリンブルー",
                "phonetic": "marine blue"
            },
            {
                "hex": "#6a1917",
                "name": "マルーン",
                "phonetic": "marron"
            },
            {
                "hex": "#f3981d",
                "name": "マンダリンオレンジ",
                "phonetic": "mandarin orange"
            },
            {
                "hex": "#b4aeb1",
                "name": "ミスト",
                "phonetic": "mist"
            },
            {
                "hex": "#001e43",
                "name": "ミッドナイトブルー",
                "phonetic": "midnight blue"
            },
            {
                "hex": "#fff462",
                "name": "ミモザ",
                "phonetic": "mimosa"
            },
            {
                "hex": "#fffff9",
                "name": "ミルキーホワイト",
                "phonetic": "milky white"
            },
            {
                "hex": "#89c997",
                "name": "ミントグリーン",
                "phonetic": "mint green"
            },
            {
                "hex": "#d4d9dc",
                "name": "ムーングレイ",
                "phonetic": "moon gray"
            },
            {
                "hex": "#65ab31",
                "name": "メドウグリーン",
                "phonetic": "meadow green"
            },
            {
                "hex": "#e0de94",
                "name": "メロンイエロー",
                "phonetic": "melon yellow"
            },
            {
                "hex": "#915da3",
                "name": "モーブ",
                "phonetic": "mauve"
            },
            {
                "hex": "#777e41",
                "name": "モスグリーン",
                "phonetic": "moss green"
            },
            {
                "hex": "#7e837f",
                "name": "モスグレイ",
                "phonetic": "moss gray"
            },
            {
                "hex": "#409ecc",
                "name": "ヨットブルー",
                "phonetic": "yacht blue"
            },
            {
                "hex": "#b2cbe4",
                "name": "ライトブルー",
                "phonetic": "light blue"
            },
            {
                "hex": "#eaeea2",
                "name": "ライムイエロー",
                "phonetic": "lime yellow"
            },
            {
                "hex": "#e6eb94",
                "name": "ライムグリーン",
                "phonetic": "lime green"
            },
            {
                "hex": "#fff799",
                "name": "ライムライト",
                "phonetic": "limelight"
            },
            {
                "hex": "#d1bada",
                "name": "ライラック",
                "phonetic": "lilac"
            },
            {
                "hex": "#841a75",
                "name": "ラズベリー",
                "phonetic": "raspberry"
            },
            {
                "hex": "#9f166a",
                "name": "ラズベリーレッド",
                "phonetic": "raspberry red"
            },
            {
                "hex": "#cab8d9",
                "name": "ラベンダー",
                "phonetic": "lavender"
            },
            {
                "hex": "#f7f6fb",
                "name": "ラベンダーアイス",
                "phonetic": "lavender ice"
            },
            {
                "hex": "#bcbace",
                "name": "ラベンダーグレイ",
                "phonetic": "lavender gray"
            },
            {
                "hex": "#a688bd",
                "name": "ラベンダーモーブ",
                "phonetic": "lavender mauve"
            },
            {
                "hex": "#24140e",
                "name": "ランプブラック",
                "phonetic": "lamp black"
            },
            {
                "hex": "#d4d9d6",
                "name": "リードグレイ",
                "phonetic": "reed gray"
            },
            {
                "hex": "#9fc24d",
                "name": "リーフグリーン",
                "phonetic": "leaf green"
            },
            {
                "hex": "#e0b5d3",
                "name": "リラ",
                "phonetic": "lilla"
            },
            {
                "hex": "#c70067",
                "name": "ルビー",
                "phonetic": "ruby"
            },
            {
                "hex": "#e73562",
                "name": "ルビーレッド",
                "phonetic": "ruby red"
            },
            {
                "hex": "#6b395f",
                "name": "レーズン",
                "phonetic": "raisin"
            },
            {
                "hex": "#ffe9a9",
                "name": "レグホーン",
                "phonetic": "leghorn"
            },
            {
                "hex": "#d1de4c",
                "name": "レタスグリーン",
                "phonetic": "lettuce green"
            },
            {
                "hex": "#ea5550",
                "name": "レッド",
                "phonetic": "red"
            },
            {
                "hex": "#fff352",
                "name": "レモンイエロー",
                "phonetic": "lemon yellow"
            },
            {
                "hex": "#7f1184",
                "name": "ロイヤルパープル",
                "phonetic": "royal purple"
            },
            {
                "hex": "#866629",
                "name": "ローアンバー",
                "phonetic": "raw umber"
            },
            {
                "hex": "#e17b34",
                "name": "ローシェンナ",
                "phonetic": "raw sienna"
            },
            {
                "hex": "#e95464",
                "name": "ローズ",
                "phonetic": "rose"
            },
            {
                "hex": "#9d8e87",
                "name": "ローズグレイ",
                "phonetic": "rose gray"
            },
            {
                "hex": "#e6c0c0",
                "name": "ローズダスト",
                "phonetic": "rose dust"
            },
            {
                "hex": "#e6afcf",
                "name": "ローズタンドル",
                "phonetic": "rose tendre"
            },
            {
                "hex": "#e5c1cd",
                "name": "ローズドラジェ",
                "phonetic": "rose dragee"
            },
            {
                "hex": "#f19ca7",
                "name": "ローズピンク",
                "phonetic": "rose pink"
            },
            {
                "hex": "#debecc",
                "name": "ローズミスト",
                "phonetic": "rose mist"
            },
            {
                "hex": "#ea618e",
                "name": "ローズレッド",
                "phonetic": "rose red"
            },
            {
                "hex": "#de82a7",
                "name": "ロータスピンク",
                "phonetic": "lotus pink"
            },
            {
                "hex": "#b33e5c",
                "name": "ワインレッド",
                "phonetic": "wine red"
            }
        ];  
    }
}

export { EuropianColorDataStore };