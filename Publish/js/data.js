/**
 * 色を表します。
 */
class Color {
    /**
     * インスタンスを初期化します。
     * @param {String} category カテゴリー名。
     * @param {Object} color 色情報。
     */
    constructor(category, color) {
        this.category = category;
        this.name = color.name;
        this.phonetic = color.phonetic;
        this.hex = color.hex;
    }

    /**
     * ヘックスをRGBに変換します。
     * @param {String} hex 色コード。
     * @returns {Object} RGBを返します。
     */
    #getRgbFromHex = hex => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    /**
     * 色のRGBを取得します。
     * @returns {Object} RGBを返します。
     */
    getRgb = () => {
        return this.#getRgbFromHex(this.hex);
    }

    /**
     * 色の差分を取得します。
     * @param {String} hex 
     * @return {Number} 差分を返します。
     */
    getDifference = hex => {
        // 比較対象のRGBを取得
        const comparison1 = this.getRgb();
        const comparison2 = this.#getRgbFromHex(hex);

        // 変換に失敗した場合は差分計算不可
        if (comparison1 == null || comparison2 == null) return null;

        // 差分の合計を返す
        return Math.abs(comparison1.r - comparison2.r)
            + Math.abs(comparison1.g - comparison2.g)
            + Math.abs(comparison1.b - comparison2.b);
    }
}

/**
 * データとの仲介を示すダミークラス。
 */
class Gateway {
    /**
     * 色を取得します。
     * @returns {Array<Color>} 色情報を返します。。
     */
    getColors = () => {
        // 返却用の配列を作成
        let colors = [];
        
        // 配列に追加する処理
        const add = (category, data) => {
            for (const i in data) {
                const color = data[i];
                colors.push(new Color(category, color));
            }
        };

        // 色を配列に追加
        add("africa"   , this.#getAfricanColors () );
        add("america"  , this.#getAmericanColors() );
        add("biritain" , this.#getBritishColors () );
        add("china"    , this.#getChineseColors () );
        add("europe"   , this.#getEuropianColors() );
        add("france"   , this.#getFrenchColors  () );
        add("japan"    , this.#getJapaneseColors() );
        add("web"      , this.#getWebColors     () );

        // 結果を返す
        return colors;
    }
    
    /**
     * アフリカの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getAfricanColors = () => {
        return [
            {
                "hex": "#fd0013",
                "name": "zanzibar",
                "phonetic": "ザンジバール"
            },
            {
                "hex": "#f62713",
                "name": "north africa",
                "phonetic": "ノース アフリカ"
            },
            {
                "hex": "#fa321f",
                "name": "western sahara",
                "phonetic": "ウェスタン サハラ"
            },
            {
                "hex": "#ed3524",
                "name": "swaziland",
                "phonetic": "スワジランド"
            },
            {
                "hex": "#ff8040",
                "name": "east africa",
                "phonetic": "イースト アフリカ"
            },
            {
                "hex": "#ff8042",
                "name": "libya",
                "phonetic": "リビア"
            },
            {
                "hex": "#ff8044",
                "name": "botswana",
                "phonetic": "ボツワナ"
            },
            {
                "hex": "#00ff00",
                "name": "west africa",
                "phonetic": "ウェスト アフリカ"
            },
            {
                "hex": "#00ff02",
                "name": "algeria",
                "phonetic": "アルジェリア"
            },
            {
                "hex": "#00ff04",
                "name": "zimbabwe",
                "phonetic": "ジンバブエ"
            },
            {
                "hex": "#00fff5",
                "name": "southern africa",
                "phonetic": "サザン アフリカ"
            },
            {
                "hex": "#00fff9",
                "name": "egypt",
                "phonetic": "エジプト"
            },
            {
                "hex": "#00ffff",
                "name": "south africa",
                "phonetic": "サファリ アフリカ"
            },
            {
                "hex": "#0000ff",
                "name": "morocco",
                "phonetic": "モロッコ"
            },
            {
                "hex": "#3300ff",
                "name": "namibia",
                "phonetic": "ナミビア"
            },
            {
                "hex": "#3300cc",
                "name": "saharan africa",
                "phonetic": "サハラ アフリカ"
            },
            {
                "hex": "#051a3b",
                "name": "touareg",
                "phonetic": "トゥアレグ"
            },
            {
                "hex": "#3d1c79",
                "name": "african violet",
                "phonetic": "アフリカンバイオレット"
            },
            {
                "hex": "#800085",
                "name": "central africa",
                "phonetic": "セントラル アフリカ"
            },
            {
                "hex": "#800082",
                "name": "tunisia",
                "phonetic": "チュニジア"
            },
            {
                "hex": "#800089",
                "name": "lesotho",
                "phonetic": "レソト"
            },
            {
                "hex": "#b2864e",
                "name": "sahara",
                "phonetic": "サハラ"
            },
            {
                "hex": "#9f4f05",
                "name": "sudan brown",
                "phonetic": "スーダン ブラウン"
            },
            {
                "hex": "#40201b",
                "name": "african brown",
                "phonetic": "アフリカン ブラウン"
            },
            {
                "hex": "#303b29",
                "name": "safari",
                "phonetic": "サファリ"
            },
            {
                "hex": "#005558",
                "name": "gini green",
                "phonetic": "ギニ グリーン"
            }
        ];
    }

    /**
     * アメリカの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getAmericanColors = () => {
        return [
            {
                "hex": "#bf0a30",
                "name": "american red",
                "phonetic": "アメリカン レッド"
            },
            {
                "hex": "#ff0000",
                "name": "buckeye red",
                "phonetic": "バッカイ レッド"
            },
            {
                "hex": "#e2184f",
                "name": "lincoln red",
                "phonetic": "リンカーン レッド"
            },
            {
                "hex": "#e24a4f",
                "name": "lincoln pink",
                "phonetic": "リンカーン ピンク"
            },
            {
                "hex": "#efc1a9",
                "name": "grand canyon pink",
                "phonetic": "グランドキャニオン ピンク"
            },
            {
                "hex": "#b10021",
                "name": "dixie red",
                "phonetic": "ディキシー レッド"
            },
            {
                "hex": "#e3003d",
                "name": "hawkeye red",
                "phonetic": "ホークアイ レッド"
            },
            {
                "hex": "#cc0033",
                "name": "natural red",
                "phonetic": "ナチュラル レッド"
            },
            {
                "hex": "#d60000",
                "name": "empire red",
                "phonetic": "エンパイア レッド"
            },
            {
                "hex": "#cc0033",
                "name": "glory red",
                "phonetic": "グローリー レッド"
            },
            {
                "hex": "#e03030",
                "name": "southern california",
                "phonetic": "カリフォルニア サザン"
            },
            {
                "hex": "#ee2222",
                "name": "southwest",
                "phonetic": "サウスウエスト"
            },
            {
                "hex": "#c10435",
                "name": "golden red",
                "phonetic": "ゴールデン レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "grand canyon red",
                "phonetic": "グランドキャニオン レッド"
            },
            {
                "hex": "#f3334b",
                "name": "badger red",
                "phonetic": "バッドゲル レッド"
            },
            {
                "hex": "#e06060",
                "name": "bay area california",
                "phonetic": "カリフォルニア ベイ エリア"
            },
            {
                "hex": "#e03030",
                "name": "shasta cascades",
                "phonetic": "シャスタ カスケード"
            },
            {
                "hex": "#002868",
                "name": "american blue",
                "phonetic": "アメリカン ブルー"
            },
            {
                "hex": "#006e53",
                "name": "american green",
                "phonetic": "アメリカン グリーン"
            },
            {
                "hex": "#deb301",
                "name": "american yellow",
                "phonetic": "アメリカン イエロー"
            },
            {
                "hex": "#cbddf3",
                "name": "american light blue",
                "phonetic": "アメリカン ライトブルー"
            },
            {
                "hex": "#9a6b37",
                "name": "american brown",
                "phonetic": "アメリカン ブラウン"
            },
            {
                "hex": "#afafb1",
                "name": "american gray",
                "phonetic": "アメリカン グレー"
            },
            {
                "hex": "#0000ff",
                "name": "glory blue",
                "phonetic": "グローリー ブルー"
            },
            {
                "hex": "#fff9f5",
                "name": "glory white",
                "phonetic": "グローリー ホワイト"
            },
            {
                "hex": "#ff6331",
                "name": "big apple red",
                "phonetic": "ビッグ アップル レッド"
            },
            {
                "hex": "#3131ce",
                "name": "big apple blue",
                "phonetic": "ビッグ アップル ブルー"
            },
            {
                "hex": "#001873",
                "name": "empire blue",
                "phonetic": "エンパイア ブルー"
            },
            {
                "hex": "#00b5d6",
                "name": "empire cyan",
                "phonetic": "エンパイア シアン"
            },
            {
                "hex": "#f7f700",
                "name": "empire yellow",
                "phonetic": "エンパイア イエロー"
            },
            {
                "hex": "#f79429",
                "name": "empire orange",
                "phonetic": "エンパイア オレンジ"
            },
            {
                "hex": "#084a29",
                "name": "empire green",
                "phonetic": "エンパイア グリーン"
            },
            {
                "hex": "#424a00",
                "name": "empire ebony",
                "phonetic": "エンパイア エボニー"
            },
            {
                "hex": "#000099",
                "name": "natural blue",
                "phonetic": "ナチュラル ブルー"
            },
            {
                "hex": "#84c8ef",
                "name": "natural light blue",
                "phonetic": "ナチュラル ライトブルー"
            },
            {
                "hex": "#90c924",
                "name": "natural green",
                "phonetic": "ナチュラル グリーン"
            },
            {
                "hex": "#f39234",
                "name": "natural orange",
                "phonetic": "ナチュラル オレンジ"
            },
            {
                "hex": "#843a2f",
                "name": "natural brown",
                "phonetic": "ナチュラル ブラウン"
            },
            {
                "hex": "#bfbfbf",
                "name": "natural gray",
                "phonetic": "ナチュラル グレー"
            },
            {
                "hex": "#3c3c9e",
                "name": "hawkeye blue",
                "phonetic": "ホークアイ ブルー"
            },
            {
                "hex": "#ffb30f",
                "name": "hawkeye yellow",
                "phonetic": "ホークアイ イエロー"
            },
            {
                "hex": "#a54a00",
                "name": "hawkeye brown",
                "phonetic": "ホークアイ ブラウン"
            },
            {
                "hex": "#000080",
                "name": "frontier blue",
                "phonetic": "フロンティア ブルー"
            },
            {
                "hex": "#d3eef7",
                "name": "frontier light blue",
                "phonetic": "フロンティア ライトブルー"
            },
            {
                "hex": "#024900",
                "name": "frontier green",
                "phonetic": "フロンティア グリーン"
            },
            {
                "hex": "#ffff00",
                "name": "frontier yellow",
                "phonetic": "フロンティア イエロー"
            },
            {
                "hex": "#8663bd",
                "name": "frontier purple",
                "phonetic": "フロンティア パープル"
            },
            {
                "hex": "#083152",
                "name": "dixie blue",
                "phonetic": "ディキシー ブルー"
            },
            {
                "hex": "#105a21",
                "name": "dixie green",
                "phonetic": "ディキシー グリーン"
            },
            {
                "hex": "#ffc621",
                "name": "dixie yellow",
                "phonetic": "ディキシー イエロー"
            },
            {
                "hex": "#002868",
                "name": "grand canyon blue",
                "phonetic": "グランドキャニオン ブルー"
            },
            {
                "hex": "#ce5c17",
                "name": "grand canyon brown",
                "phonetic": "グランドキャニオンブラウン"
            },
            {
                "hex": "#fed700",
                "name": "grand canyon yellow",
                "phonetic": "グランドキャニオンイエロー"
            },
            {
                "hex": "#00320b",
                "name": "grand canyon green",
                "phonetic": "グランドキャニオングリーン"
            },
            {
                "hex": "#64b4ff",
                "name": "lincoln light blue",
                "phonetic": "リンカーン ライトブルー"
            },
            {
                "hex": "#3c3c9e",
                "name": "lincoln blue",
                "phonetic": "リンカーン ブルー"
            },
            {
                "hex": "#3f863f",
                "name": "lincoln green",
                "phonetic": "リンカーン グリーン"
            },
            {
                "hex": "#ffe60f",
                "name": "lincoln yellow",
                "phonetic": "リンカーン イエロー"
            },
            {
                "hex": "#ffb316",
                "name": "lincoln orange",
                "phonetic": "リンカーン オレンジ"
            },
            {
                "hex": "#101195",
                "name": "hoosier blue",
                "phonetic": "フージャース ブルー"
            },
            {
                "hex": "#ffe700",
                "name": "hoosier yellow",
                "phonetic": "フージャース イエロー"
            },
            {
                "hex": "#197351",
                "name": "hoosier green",
                "phonetic": "フージャース グリーン"
            },
            {
                "hex": "#563837",
                "name": "hoosier brown",
                "phonetic": "フージャース ブラウン"
            },
            {
                "hex": "#002986",
                "name": "badger blue",
                "phonetic": "バッドゲル ブルー"
            },
            {
                "hex": "#00b2fd",
                "name": "badger light blue",
                "phonetic": "バッドゲル ライトブルー"
            },
            {
                "hex": "#f8b8de",
                "name": "badger pink",
                "phonetic": "バッドゲル ピンク"
            },
            {
                "hex": "#41ad16",
                "name": "badger green",
                "phonetic": "バッドゲル グリーン"
            },
            {
                "hex": "#ffe618",
                "name": "badger yellow",
                "phonetic": "バッドゲル イエロー"
            },
            {
                "hex": "#66180b",
                "name": "badger brown",
                "phonetic": "バッドゲル ブラウン"
            },
            {
                "hex": "#a2b9b9",
                "name": "badger gray",
                "phonetic": "バッドゲル グレー"
            },
            {
                "hex": "#ff3516",
                "name": "mountain red",
                "phonetic": "マウンテン レッド"
            },
            {
                "hex": "#003776",
                "name": "mountain blue",
                "phonetic": "マウンテン ブルー"
            },
            {
                "hex": "#20d942",
                "name": "mountain green",
                "phonetic": "マウンテン グリーン"
            },
            {
                "hex": "#ffb30f",
                "name": "mountain yellow",
                "phonetic": "マウンテン イエロー"
            },
            {
                "hex": "#d15b25",
                "name": "mountain brown",
                "phonetic": "マウンテン ブラウン"
            },
            {
                "hex": "#c0c0c0",
                "name": "mountain gray",
                "phonetic": "マウンテン グレー"
            },
            {
                "hex": "#0e4892",
                "name": "sooner blue",
                "phonetic": "ソナー ブルー"
            },
            {
                "hex": "#00adc6",
                "name": "sooner light blue",
                "phonetic": "ソナー ライトブルー"
            },
            {
                "hex": "#1b692b",
                "name": "sooner green",
                "phonetic": "ソナー グリーン"
            },
            {
                "hex": "#8ab87a",
                "name": "sooner opal",
                "phonetic": "ソナー オパール"
            },
            {
                "hex": "#f0c016",
                "name": "sooner yellow",
                "phonetic": "ソナー イエロー"
            },
            {
                "hex": "#421000",
                "name": "sooner brown",
                "phonetic": "ソナー ブラウン"
            },
            {
                "hex": "#ffc69c",
                "name": "sooner beige",
                "phonetic": "ソナー ベージュ"
            },
            {
                "hex": "#d6c6c6",
                "name": "sooner gray",
                "phonetic": "ソナー グレー"
            },
            {
                "hex": "#454442",
                "name": "sooner black",
                "phonetic": "ソナー ブラック"
            },
            {
                "hex": "#1a3b86",
                "name": "buckeye blue",
                "phonetic": "バッカイ ブルー"
            },
            {
                "hex": "#00784b",
                "name": "buckeye green",
                "phonetic": "バッカイ グリーン"
            },
            {
                "hex": "#f8c300",
                "name": "buckeye yellow",
                "phonetic": "バッカイ イエロー"
            },
            {
                "hex": "#4e3330",
                "name": "buckeye brown",
                "phonetic": "バッカイ ブラウン"
            },
            {
                "hex": "#027bc2",
                "name": "buckeye light blue",
                "phonetic": "バッカイ ライトブルー"
            },
            {
                "hex": "#002a86",
                "name": "beaver blue",
                "phonetic": "ビーバー ブルー"
            },
            {
                "hex": "#ffea0f",
                "name": "beaver yellow",
                "phonetic": "ビーバー イエロー"
            },
            {
                "hex": "#007e3a",
                "name": "golden green",
                "phonetic": "ゴールデン グリーン"
            },
            {
                "hex": "#391800",
                "name": "golden brown",
                "phonetic": "ゴールデン ブラウン"
            },
            {
                "hex": "#bc8e07",
                "name": "golden yellow",
                "phonetic": "ゴールデン イエロー"
            },
            {
                "hex": "#40a7aa",
                "name": "golden cyan",
                "phonetic": "ゴールデン シアン"
            },
            {
                "hex": "#84948e",
                "name": "golden gray",
                "phonetic": "ゴールデン グレー"
            },
            {
                "hex": "#00009c",
                "name": "sunflower blue",
                "phonetic": "サンフラワー ブルー"
            },
            {
                "hex": "#0092df",
                "name": "sunflower light blue",
                "phonetic": "サンフラワー ライトブルー"
            },
            {
                "hex": "#29b910",
                "name": "sunflower green",
                "phonetic": "サンフラワー グリーン"
            },
            {
                "hex": "#ff660f",
                "name": "sunflower orange",
                "phonetic": "サンフラワー オレンジ"
            },
            {
                "hex": "#b34e20",
                "name": "sunflower brown",
                "phonetic": "サンフラワー ブラウン"
            },
            {
                "hex": "#7c4790",
                "name": "sunflower purple",
                "phonetic": "サンフラワー パープル"
            },
            {
                "hex": "#ffe400",
                "name": "sunflower yellow",
                "phonetic": "サンフラワー イエロー"
            },
            {
                "hex": "#dedede",
                "name": "sunflower gray",
                "phonetic": "サンフラワー グレー"
            },
            {
                "hex": "#e25c5c",
                "name": "new england",
                "phonetic": "ニュー イングランド"
            },
            {
                "hex": "#5c7a7a",
                "name": "mid atlantic",
                "phonetic": "ミッド アトランティック"
            },
            {
                "hex": "#8a84a3",
                "name": "south",
                "phonetic": "サーフ"
            },
            {
                "hex": "#e9bda2",
                "name": "florida",
                "phonetic": "フロリダ"
            },
            {
                "hex": "#ffd577",
                "name": "midwest",
                "phonetic": "ミッドウェスト"
            },
            {
                "hex": "#77cbb3",
                "name": "texas",
                "phonetic": "テキサス"
            },
            {
                "hex": "#b6bc4d",
                "name": "great plains",
                "phonetic": "グレート プレインズ"
            },
            {
                "hex": "#e9df25",
                "name": "rocky mountain",
                "phonetic": "ロッキー マウンテン"
            },
            {
                "hex": "#e0fa92",
                "name": "california",
                "phonetic": "カリフォルニア"
            },
            {
                "hex": "#38911c",
                "name": "pacific northwest",
                "phonetic": "パシフィックノースウエスト"
            },
            {
                "hex": "#d09440",
                "name": "alaska",
                "phonetic": "アラスカ"
            },
            {
                "hex": "#4f93c0",
                "name": "hawaii",
                "phonetic": "ハワイ"
            },
            {
                "hex": "#999966",
                "name": "mountains alabama",
                "phonetic": "アラバマ マウンテン"
            },
            {
                "hex": "#ff9933",
                "name": "metropolitan alabama",
                "phonetic": "アラバマ メトロポリタン"
            },
            {
                "hex": "#996699",
                "name": "river heritage alabama",
                "phonetic": "アラバマリバーヘリテイジ"
            },
            {
                "hex": "#99cccc",
                "name": "gulf coast alabama",
                "phonetic": "ガルフ コースト アラバマ"
            },
            {
                "hex": "#e0b000",
                "name": "california desert",
                "phonetic": "カリフォルニア デザート"
            },
            {
                "hex": "#00b000",
                "name": "california central coast",
                "phonetic": "カリフォルニア セントラル コースト"
            },
            {
                "hex": "#a0a0c0",
                "name": "san joaquin valley",
                "phonetic": "サン ホアキン ヴァレイ"
            },
            {
                "hex": "#e0b000",
                "name": "sacramento valley",
                "phonetic": "サクラメント ヴァレイ"
            },
            {
                "hex": "#00e000",
                "name": "sierra nevada",
                "phonetic": "シエラ ネバダ"
            },
            {
                "hex": "#e0e000",
                "name": "gold country",
                "phonetic": "ゴールド カントリー"
            },
            {
                "hex": "#b0b000",
                "name": "california north coast",
                "phonetic": "カリフォルニア ノース コースト"
            },
            {
                "hex": "#336699",
                "name": "mississippi capital river",
                "phonetic": "ミシシッピキャピタルリバー"
            },
            {
                "hex": "#663366",
                "name": "mississippi delta",
                "phonetic": "ミシシッピ デルタ"
            },
            {
                "hex": "#339966",
                "name": "mississippi pines",
                "phonetic": "ミシシッピ パインズ"
            },
            {
                "hex": "#660033",
                "name": "gulf coast mississippi",
                "phonetic": "ミシシッピガルフコースト"
            },
            {
                "hex": "#996633",
                "name": "mississippi hills",
                "phonetic": "ミシシッピ ヒルズ"
            },
            {
                "hex": "#cc9966",
                "name": "panhandle nebraska",
                "phonetic": "パンハンドル ネブラスカ"
            },
            {
                "hex": "#cccc66",
                "name": "north central nebraska",
                "phonetic": "ノースセントラルネブラスカ"
            },
            {
                "hex": "#99cccc",
                "name": "eastern nebraska",
                "phonetic": "イースタン ネブラスカ"
            },
            {
                "hex": "#cc9999",
                "name": "western nevada",
                "phonetic": "ウェスタン ネバダ"
            },
            {
                "hex": "#cc9966",
                "name": "northern nevada",
                "phonetic": "ノーザン ネバダ"
            },
            {
                "hex": "#9999cc",
                "name": "central nevada",
                "phonetic": "セントラル ネバダ"
            },
            {
                "hex": "#99cccc",
                "name": "southern nevada",
                "phonetic": "サザン ネバダ"
            },
            {
                "hex": "#e0fa92",
                "name": "central new mexico",
                "phonetic": "セントラル ニューメキシコ"
            },
            {
                "hex": "#6699aa",
                "name": "north central new mexico",
                "phonetic": "ノース セントラル ニューメキシコ"
            },
            {
                "hex": "#b6bc4d",
                "name": "northeast new mexico",
                "phonetic": "ノース イースト ニューメキシコ"
            },
            {
                "hex": "#d09440",
                "name": "northwest new mexico",
                "phonetic": "ノース ウエスト ニューメキシコ"
            },
            {
                "hex": "#b2cc7f",
                "name": "southwest new mexico",
                "phonetic": "サウス ウエスト ニューメキシコ"
            },
            {
                "hex": "#ffff99",
                "name": "southeast new mexico",
                "phonetic": "サウス イースト ニューメキシコ"
            },
            {
                "hex": "#666633",
                "name": "northwest ohio",
                "phonetic": "ノース ウエスト オハイオ"
            },
            {
                "hex": "#669999",
                "name": "northeast ohio",
                "phonetic": "ノース イースト オハイオ"
            },
            {
                "hex": "#996666",
                "name": "mid ohio",
                "phonetic": "ミッド オハイオ"
            },
            {
                "hex": "#666699",
                "name": "southwest ohio",
                "phonetic": "サウス ウエスト オハイオ"
            },
            {
                "hex": "#cc9933",
                "name": "southeast ohio",
                "phonetic": "サウス イースト オハイオ"
            },
            {
                "hex": "#996699",
                "name": "western tennessee",
                "phonetic": "ウエスタン テネシー"
            },
            {
                "hex": "#339999",
                "name": "central tennessee",
                "phonetic": "セントラル テネシー"
            },
            {
                "hex": "#339966",
                "name": "eastern tennessee",
                "phonetic": "イースタン テネシー"
            },
            {
                "hex": "#80622f",
                "name": "panhandle texas",
                "phonetic": "パンハンドルテキサス"
            },
            {
                "hex": "#335c64",
                "name": "prairies and lakes",
                "phonetic": "プレリーズアンドレイクス"
            },
            {
                "hex": "#406324",
                "name": "piney woods",
                "phonetic": "ピニー ウッズ"
            },
            {
                "hex": "#7895a3",
                "name": "gulf coast texas",
                "phonetic": "ガルフ コースト テキサス"
            },
            {
                "hex": "#7d6b71",
                "name": "south texas plains",
                "phonetic": "サウステキサスプレインズ"
            },
            {
                "hex": "#d1a85e",
                "name": "hill country",
                "phonetic": "ヒル カントリー"
            },
            {
                "hex": "#c6ab7a",
                "name": "big bend country",
                "phonetic": "ビッグ ベンド カントリー"
            },
            {
                "hex": "#99cc33",
                "name": "wasatch front",
                "phonetic": "ワサッチ フロント"
            },
            {
                "hex": "#cc6600",
                "name": "canyon country",
                "phonetic": "キャニオン カントリー"
            },
            {
                "hex": "#669900",
                "name": "northeastern utah",
                "phonetic": "ノース イースタン ユタ"
            },
            {
                "hex": "#b2cc7f",
                "name": "dixie",
                "phonetic": "デキシー"
            },
            {
                "hex": "#999933",
                "name": "central utah",
                "phonetic": "セントラル ユタ"
            },
            {
                "hex": "#ffff99",
                "name": "western utah",
                "phonetic": "ウエスタン ユタ"
            },
            {
                "hex": "#9966ff",
                "name": "northern virginia",
                "phonetic": "ノーザン バージニア"
            },
            {
                "hex": "#33bbee",
                "name": "eastern virginia",
                "phonetic": "イースタン バージニア"
            },
            {
                "hex": "#ff6655",
                "name": "central virginia",
                "phonetic": "セントラル バージニア"
            },
            {
                "hex": "#ffcc33",
                "name": "southwest virginia",
                "phonetic": "サザンウエストバージニア"
            },
            {
                "hex": "#339933",
                "name": "shenandoah valley",
                "phonetic": "シェナンドー ヴァレイ"
            },
            {
                "hex": "#66cc99",
                "name": "southeast wisconsin",
                "phonetic": "サウス イースト ウィスコンシン"
            },
            {
                "hex": "#99ccff",
                "name": "southwest wisconsin",
                "phonetic": "サウス ウエスト ウィスコンシン"
            },
            {
                "hex": "#009999",
                "name": "northeast wisconsin",
                "phonetic": "ノース イースト ウィスコンシン"
            },
            {
                "hex": "#66ccff",
                "name": "north central wisconsin",
                "phonetic": "ノース セントラル ウィスコンシン"
            },
            {
                "hex": "#99cccc",
                "name": "northwest wisconsin",
                "phonetic": "ノース ウエスト ウィスコンシン"
            }
        ];
    }

    /**
     * イギリスの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getBritishColors = () => {
        return [
            {
                "hex": "#ffc6d6",
                "name": "Baby Pink",
                "phonetic": "ベビー ピンク"
            },
            {
                "hex": "#ffbdb3",
                "name": "Shell Pink",
                "phonetic": "シェル ピンク"
            },
            {
                "hex": "#f2d5cc",
                "name": "Fresh Pink",
                "phonetic": "フレッシュ ピンク"
            },
            {
                "hex": "#fc9db8",
                "name": "Pastel Pink",
                "phonetic": "パステル ピンク"
            },
            {
                "hex": "#f55064",
                "name": "Rose Pink",
                "phonetic": "ローズ ピンク"
            },
            {
                "hex": "#dfaeb1",
                "name": "Pink",
                "phonetic": "ピンク"
            },
            {
                "hex": "#ef8184",
                "name": "French Rose",
                "phonetic": "フレンチ ローズ"
            },
            {
                "hex": "#d5c1ce",
                "name": "Peach Blossam",
                "phonetic": "ピーチ ブロッサム"
            },
            {
                "hex": "#cf8878",
                "name": "Lotus",
                "phonetic": "ロータス"
            },
            {
                "hex": "#d8b197",
                "name": "Tea Rose",
                "phonetic": "ティー ローズ"
            },
            {
                "hex": "#ff9c8c",
                "name": "Salmon Pink",
                "phonetic": "サーモン ピンク"
            },
            {
                "hex": "#ffcec6",
                "name": "Aurora",
                "phonetic": "オーロラ"
            },
            {
                "hex": "#b1988f",
                "name": "Vinous",
                "phonetic": "ヴァイナス"
            },
            {
                "hex": "#f39aab",
                "name": "Cosmos",
                "phonetic": "コスモス"
            },
            {
                "hex": "#c49793",
                "name": "Corinthian Pink",
                "phonetic": "コーリンシアン ピンク"
            },
            {
                "hex": "#f05187",
                "name": "Cherry Pink",
                "phonetic": "チェリー ピンク"
            },
            {
                "hex": "#fc9db8",
                "name": "Fuchsia Pink",
                "phonetic": "フクシァ ピンク"
            },
            {
                "hex": "#a26168",
                "name": "Daphne Pink",
                "phonetic": "ダフニー ピンク"
            },
            {
                "hex": "#d37a83",
                "name": "Carnation",
                "phonetic": "カーネーション"
            },
            {
                "hex": "#dc7563",
                "name": "Shrimp Pink",
                "phonetic": "シェリンプ ピンク"
            },
            {
                "hex": "#ff9888",
                "name": "Coral Pink",
                "phonetic": "コーラル ピンク"
            },
            {
                "hex": "#a66061",
                "name": "Rose Pompadour",
                "phonetic": "ローズ ポンパドウル"
            },
            {
                "hex": "#f08687",
                "name": "Empire Rose",
                "phonetic": "エンパイア ローズ"
            },
            {
                "hex": "#ef8865",
                "name": "Flamingo",
                "phonetic": "フラミンゴ"
            },
            {
                "hex": "#b0755c",
                "name": "Etruscan Rose",
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
                "hex": "#e60032",
                "name": "signal red",
                "phonetic": "ユニオンジャッグレッド"
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
                "name": "Pomegranate",
                "phonetic": "ポメグラネイト"
            },
            {
                "hex": "#ed2f1f",
                "name": "cinnabar",
                "phonetic": "シナバー"
            },
            {
                "hex": "#ff0000",
                "name": "Cent Patrick cross",
                "phonetic": "セントパトリッククロス"
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
                "name": "Oxblood Red",
                "phonetic": "オックスブラッド レッド"
            },
            {
                "hex": "#9b5033",
                "name": "Bole",
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
                "name": "Flea",
                "phonetic": "フリー"
            },
            {
                "hex": "#f0bcb7",
                "name": "opal peach",
                "phonetic": "オパール ピーチ"
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
                "hex": "#86002c",
                "name": "morocco red",
                "phonetic": "モロッコ レッド"
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
                "hex": "#e3b797",
                "name": "beige",
                "phonetic": "ベージュ"
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
                "name": "Caffee",
                "phonetic": "カフェ"
            },
            {
                "hex": "#56001d",
                "name": "maroon",
                "phonetic": "マルーン"
            },
            {
                "hex": "#670026",
                "name": "maroon",
                "phonetic": "メイフェイア ローズ"
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
                "hex": "#87745c",
                "name": "Brunette",
                "phonetic": "ブルネット"
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
                "hex": "#f1e1ce",
                "name": "ivory",
                "phonetic": "アイボリー"
            },
            {
                "hex": "#e1c79a",
                "name": "vanilla",
                "phonetic": "ヴァニラ"
            },
            {
                "hex": "#e7c59c",
                "name": "leghorn",
                "phonetic": "レグホーン"
            },
            {
                "hex": "#fff4dc",
                "name": "cream",
                "phonetic": "クリーム"
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
                "hex": "#d9b453",
                "name": "Orpiment",
                "phonetic": "オーピメント"
            },
            {
                "hex": "#c1bc55",
                "name": "weld",
                "phonetic": "ウェルド"
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
                "hex": "#cc7f0f",
                "name": "mustard",
                "phonetic": "ロンドン ゴールド"
            },
            {
                "hex": "#eade5d",
                "name": "chartreuse yellow",
                "phonetic": "シャトルーズ イエロー"
            },
            {
                "hex": "#f0e889",
                "name": "union jug",
                "phonetic": "ユニオン ジャッグ"
            },
            {
                "hex": "#a37e00",
                "name": "gold",
                "phonetic": "ゴールド"
            },
            {
                "hex": "#fa9685",
                "name": "grecian bronze",
                "phonetic": "グリーシァン ローズ"
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
                "hex": "#abc789",
                "name": "bistachio Green",
                "phonetic": "ピスタチオ グリーン"
            },
            {
                "hex": "#45aa31",
                "name": "night green",
                "phonetic": "ナイト グリーン"
            },
            {
                "hex": "#4e9432",
                "name": "night green",
                "phonetic": "グリニッジ"
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
                "hex": "#718451",
                "name": "Caudy Green",
                "phonetic": "サウディー グリーン"
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
                "name": "flower drew",
                "phonetic": "フラワードリュース"
            },
            {
                "hex": "#00ae42",
                "name": "schweinfurt",
                "phonetic": "シュヴァインフルト"
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
                "phonetic": "シレスティアルブルー"
            },
            {
                "hex": "#999db9",
                "name": "zenith blue",
                "phonetic": "ゼニスブルー"
            },
            {
                "hex": "#02977d",
                "name": "Venet",
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
                "phonetic": "フォーゲットミーノット"
            },
            {
                "hex": "#e6f6fc",
                "name": "powder blue",
                "phonetic": "パウダー ブルー"
            },
            {
                "hex": "#00586d",
                "name": "Peacock",
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
                "hex": "#fd90a5",
                "name": "pompadour pink",
                "phonetic": "ポンパドール ピンク"
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
                "hex": "#385086",
                "name": "union jack",
                "phonetic": "ユニオン ジャック"
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
                "hex": "#1a2d4f",
                "name": "midnight blue",
                "phonetic": "ロンドン トワイライト"
            },
            {
                "hex": "#0b004e",
                "name": "midnight blue",
                "phonetic": "ウェストミンスター"
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
                "hex": "#ab5677",
                "name": "mallow",
                "phonetic": "チェルシー ピンク"
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
                "name": "Amaranth Purple",
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
                "phonetic": "アコナイトバイオレット"
            },
            {
                "hex": "#4a273b",
                "name": "mulberry",
                "phonetic": "マルベリー"
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
                "hex": "#ffffff",
                "name": "White",
                "phonetic": "ホワイト"
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
                "hex": "#fdf6db",
                "name": "pale white lily",
                "phonetic": "ペールホワイトリリー"
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
                "name": "Smoke Grey",
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
            },
            {
                "hex": "#000000",
                "name": "Black",
                "phonetic": "ブラック"
            },
            {
                "hex": "#ff2a2a",
                "name": "england",
                "phonetic": "イングランド"
            },
            {
                "hex": "#212178",
                "name": "scotland",
                "phonetic": "スコットランド"
            },
            {
                "hex": "#800000",
                "name": "wales",
                "phonetic": "ウェールズ"
            },
            {
                "hex": "#165016",
                "name": "northern Ireland",
                "phonetic": "ノーザン アイルランド"
            },
            {
                "hex": "#0066ff",
                "name": "channel Islands",
                "phonetic": "チャンネルアイスランド"
            },
            {
                "hex": "#d45500",
                "name": "isle of man",
                "phonetic": "アイル オブ マン"
            },
            {
                "hex": "#000080",
                "name": "london",
                "phonetic": "ロンドン"
            },
            {
                "hex": "#44aa00",
                "name": "south east",
                "phonetic": "サウス イースト"
            },
            {
                "hex": "#2ad4ff",
                "name": "west country",
                "phonetic": "ウエスト カントリー"
            },
            {
                "hex": "#d4aa00",
                "name": "east anglia",
                "phonetic": "イースト アングリア"
            },
            {
                "hex": "#3b5781",
                "name": "east midlands",
                "phonetic": "イースト ミッドランド"
            },
            {
                "hex": "#921faf",
                "name": "west midlands",
                "phonetic": "ウエスト ミッドランド"
            },
            {
                "hex": "#ffeeaa",
                "name": "yorkshire",
                "phonetic": "ヨークシャイア"
            },
            {
                "hex": "#c10000",
                "name": "north west",
                "phonetic": "ノース ウエスト"
            },
            {
                "hex": "#c87137",
                "name": "north east",
                "phonetic": "ノース イースト"
            },
            {
                "hex": "#d4aa00",
                "name": "borders",
                "phonetic": "ボーダーズ"
            },
            {
                "hex": "#55d400",
                "name": "south west",
                "phonetic": "サウス ウエスト"
            },
            {
                "hex": "#0000d4",
                "name": "central belt",
                "phonetic": "セントラル ベルト"
            },
            {
                "hex": "#b380ff",
                "name": "highlands",
                "phonetic": "ハイランド"
            },
            {
                "hex": "#ff0000",
                "name": "north east scotland",
                "phonetic": "ノース イースト スコットランド"
            },
            {
                "hex": "#87aade",
                "name": "hebrides",
                "phonetic": "ヘブリデス"
            },
            {
                "hex": "#d5d5ff",
                "name": "orkney islands",
                "phonetic": "オークニー アイランド"
            },
            {
                "hex": "#afe9dd",
                "name": "shetland islands",
                "phonetic": "シェトランド アイランド"
            },
            {
                "hex": "#8dd35f",
                "name": "north wales",
                "phonetic": "ノース ウェールズ"
            },
            {
                "hex": "#a0892c",
                "name": "mid wales",
                "phonetic": "ミド ウェールズ"
            },
            {
                "hex": "#d40000",
                "name": "south wales",
                "phonetic": "サウス ウェールズ"
            },
            {
                "hex": "#00aa00",
                "name": "county antrim",
                "phonetic": "カウンティ アントリム"
            },
            {
                "hex": "#87de87",
                "name": "county armagh",
                "phonetic": "カウンティ アーマー"
            },
            {
                "hex": "#447821",
                "name": "county londonderry",
                "phonetic": "カウンティ ロンドンデリー"
            },
            {
                "hex": "#5fd35f",
                "name": "county down",
                "phonetic": "カウンティ ダウン"
            },
            {
                "hex": "#aade87",
                "name": "county fermanagh",
                "phonetic": "カウンティ ファーマナ"
            },
            {
                "hex": "#71c837",
                "name": "county tyrone",
                "phonetic": "カウンティ ティロン"
            },
            {
                "hex": "#447821",
                "name": "oxfordshire",
                "phonetic": "オックスフォードシャー"
            },
            {
                "hex": "#5aa02c",
                "name": "buckinghamshire",
                "phonetic": "バッキンガムシャー"
            },
            {
                "hex": "#8dd35f",
                "name": "berkshire",
                "phonetic": "バークシャー"
            },
            {
                "hex": "#225500",
                "name": "hampshire",
                "phonetic": "ハンプシャー"
            },
            {
                "hex": "#008000",
                "name": "surrey",
                "phonetic": "サリー"
            },
            {
                "hex": "#aade87",
                "name": "west Sussex",
                "phonetic": "ウェスト サセックス"
            },
            {
                "hex": "#ccffaa",
                "name": "east Sussex",
                "phonetic": "イースト サセックス"
            },
            {
                "hex": "#44aa00",
                "name": "kent",
                "phonetic": "ケント"
            },
            {
                "hex": "#b3ff80",
                "name": "isle of wight",
                "phonetic": "アイル オブ ワイト"
            },
            {
                "hex": "#87cdde",
                "name": "gloucestershire",
                "phonetic": "グロスターシャー"
            },
            {
                "hex": "#2ad4ff",
                "name": "cornwall",
                "phonetic": "コーンウォール"
            },
            {
                "hex": "#aaeeff",
                "name": "wiltshire",
                "phonetic": "ウィルトシャー"
            },
            {
                "hex": "#80e5ff",
                "name": "somerset",
                "phonetic": "サマーセット"
            },
            {
                "hex": "#216778",
                "name": "dorset",
                "phonetic": "ドーセット"
            },
            {
                "hex": "#0088aa",
                "name": "devon",
                "phonetic": "デボン"
            },
            {
                "hex": "#162d50",
                "name": "isles of scilly",
                "phonetic": "アイルズ オブ シリー"
            },
            {
                "hex": "#554400",
                "name": "hertfordshire",
                "phonetic": "ハートフォードシャー"
            },
            {
                "hex": "#d3bc5f",
                "name": "essex",
                "phonetic": "エセックス"
            },
            {
                "hex": "#786721",
                "name": "bedfordshire",
                "phonetic": "ベッドフォードシャー"
            },
            {
                "hex": "#a0892c",
                "name": "cambridgeshire",
                "phonetic": "ケンブリッジシャー"
            },
            {
                "hex": "#e9ddaf",
                "name": "suffolk",
                "phonetic": "サフォーク"
            },
            {
                "hex": "#d4aa00",
                "name": "norfolk",
                "phonetic": "ノーフォーク"
            },
            {
                "hex": "#0044aa",
                "name": "northamptonshire",
                "phonetic": "ノーサンプトンシャー"
            },
            {
                "hex": "#214478",
                "name": "leicestershire",
                "phonetic": "レスターシャー"
            },
            {
                "hex": "#162d50",
                "name": "derbyshire",
                "phonetic": "ダービーシャー"
            },
            {
                "hex": "#000080",
                "name": "nottinghamshire",
                "phonetic": "ノッティンガムシャー"
            },
            {
                "hex": "#5599ff",
                "name": "lincolnshire",
                "phonetic": "リンカーンシャー"
            },
            {
                "hex": "#2c5aa0",
                "name": "rutland",
                "phonetic": "ラトランド"
            },
            {
                "hex": "#dd55ff",
                "name": "herefordshire",
                "phonetic": "ヘレフォードシャー"
            },
            {
                "hex": "#cd87de",
                "name": "worcestershire",
                "phonetic": "ウスターシャー"
            },
            {
                "hex": "#8d5fd3",
                "name": "warwickshire",
                "phonetic": "ウォーリックシャー"
            },
            {
                "hex": "#660080",
                "name": "west Midlands County",
                "phonetic": "ウェスト ミドランド カウンティ"
            },
            {
                "hex": "#c837ab",
                "name": "shropshire",
                "phonetic": "シュロップシャー"
            },
            {
                "hex": "#800066",
                "name": "staffordshire",
                "phonetic": "スタッフォードシャー"
            },
            {
                "hex": "#ffeeaa",
                "name": "north yorkshire",
                "phonetic": "ノース ヨークシャー"
            },
            {
                "hex": "#d3bc5f",
                "name": "east yorkshire",
                "phonetic": "イースト ヨークシャー"
            },
            {
                "hex": "#e9ddaf",
                "name": "south yorkshire",
                "phonetic": "サウス ヨークシャー"
            },
            {
                "hex": "#ffdd55",
                "name": "west yorkshire",
                "phonetic": "ウェスト ヨークシャー"
            },
            {
                "hex": "#ff5555",
                "name": "cheshire",
                "phonetic": "チェシャー"
            },
            {
                "hex": "#50162d",
                "name": "merseyside",
                "phonetic": "マージーサイド"
            },
            {
                "hex": "#aa0000",
                "name": "greater manchester",
                "phonetic": "グレイター マンチェスター"
            },
            {
                "hex": "#d40000",
                "name": "lancashire",
                "phonetic": "ランカシャー"
            },
            {
                "hex": "#ff8080",
                "name": "cumbria",
                "phonetic": "カンブリア"
            },
            {
                "hex": "#784421",
                "name": "cleveland",
                "phonetic": "クリーブランド"
            },
            {
                "hex": "#d45500",
                "name": "county durham",
                "phonetic": "カウンティ ダーラム"
            },
            {
                "hex": "#803300",
                "name": "tyne and wear",
                "phonetic": "タイン アン ウィア"
            },
            {
                "hex": "#c87137",
                "name": "northumberland",
                "phonetic": "ノーサンバーランド"
            },
            {
                "hex": "#338000",
                "name": "ayrshire",
                "phonetic": "エアシャー"
            },
            {
                "hex": "#00d400",
                "name": "clydesdale",
                "phonetic": "クライズデール"
            },
            {
                "hex": "#55d400",
                "name": "dumfries and galloway",
                "phonetic": "ダンフリース アンド ギャロウェー"
            },
            {
                "hex": "#aaffaa",
                "name": "isle of arran",
                "phonetic": "アイル オブ アラン"
            },
            {
                "hex": "#0000aa",
                "name": "clydeside",
                "phonetic": "クライドサイド"
            },
            {
                "hex": "#2c2ca0",
                "name": "the lothians",
                "phonetic": "ロジアン"
            },
            {
                "hex": "#0000d4",
                "name": "stirlingshire",
                "phonetic": "スターリングシャー"
            },
            {
                "hex": "#5f5fd3",
                "name": "clackmannanshire",
                "phonetic": "クラックマナンシャイア"
            },
            {
                "hex": "#7f2aff",
                "name": "argyll and bute",
                "phonetic": "アーガイル アンド ビュート"
            },
            {
                "hex": "#b380ff",
                "name": "highland",
                "phonetic": "ハイランド"
            },
            {
                "hex": "#e9afaf",
                "name": "moray",
                "phonetic": "モレイ"
            },
            {
                "hex": "#d35f5f",
                "name": "aberdeenshire",
                "phonetic": "アバディーンシャイア"
            },
            {
                "hex": "#ff5555",
                "name": "angus",
                "phonetic": "アンガス"
            },
            {
                "hex": "#ffaaaa",
                "name": "perth and kinross",
                "phonetic": "パース アンド キンロス"
            },
            {
                "hex": "#ff0000",
                "name": "fife",
                "phonetic": "ファイフ"
            },
            {
                "hex": "#3771c8",
                "name": "inner hebrides",
                "phonetic": "インナー ヘブリディーズ"
            },
            {
                "hex": "#afc6e9",
                "name": "outer hebrides",
                "phonetic": "アウター ヘブリディーズ"
            },
            {
                "hex": "#87deaa",
                "name": "anglesey",
                "phonetic": "アングルシー"
            },
            {
                "hex": "#8dd35f",
                "name": "gwynedd",
                "phonetic": "グウィネズ"
            },
            {
                "hex": "#44aa00",
                "name": "conwy",
                "phonetic": "コンウィ"
            },
            {
                "hex": "#71c837",
                "name": "denbighshire",
                "phonetic": "デンビーシャー"
            },
            {
                "hex": "#008000",
                "name": "flintshire",
                "phonetic": "フリントシャー"
            },
            {
                "hex": "#005522",
                "name": "wrexham",
                "phonetic": "レクサム"
            },
            {
                "hex": "#decd87",
                "name": "ceredigion",
                "phonetic": "ケレディジョン"
            },
            {
                "hex": "#a0892c",
                "name": "powys",
                "phonetic": "ポーイス"
            },
            {
                "hex": "#ffaaaa",
                "name": "pembrokeshire",
                "phonetic": "ペンブルックシャー"
            },
            {
                "hex": "#ff5555",
                "name": "carmarthenshire",
                "phonetic": "カーマーゼンシャー"
            },
            {
                "hex": "#d40000",
                "name": "glamorgan",
                "phonetic": "グラモーガン"
            },
            {
                "hex": "#d35f5f",
                "name": "monmouthshire",
                "phonetic": "モンマスシャー"
            }
        ];
    }

    /**
     * 中国の色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getChineseColors = () => {
        return [
            {
                "hex": "#eac0ce",
                "name": "粉鳳仙",
                "phonetic": "フェンフォンシェン"
            },
            {
                "hex": "#e5b8c3",
                "name": "浅粉",
                "phonetic": "チェンフェン"
            },
            {
                "hex": "#e8afc5",
                "name": "淡粉",
                "phonetic": "タンフェン"
            },
            {
                "hex": "#eea5d1",
                "name": "紫薇花",
                "phonetic": "ツーウェイホワ"
            },
            {
                "hex": "#e18dac",
                "name": "暗粉",
                "phonetic": "アンフェン"
            },
            {
                "hex": "#eb7faf",
                "name": "荷花紅",
                "phonetic": "フーホワホン"
            },
            {
                "hex": "#c3a6cb",
                "name": "紫水晶",
                "phonetic": "ツーシュイチン"
            },
            {
                "hex": "#ab96c5",
                "name": "浅石英紫",
                "phonetic": "チェンシーインツー"
            },
            {
                "hex": "#d294d3",
                "name": "浅鳳仙紫",
                "phonetic": "チェンフォンシェンツー"
            },
            {
                "hex": "#a381ba",
                "name": "木槿紫",
                "phonetic": "ムーチンツー"
            },
            {
                "hex": "#de7ab1",
                "name": "長春花色",
                "phonetic": "チァンチュンホワスー"
            },
            {
                "hex": "#9c6680",
                "name": "洋葱紫",
                "phonetic": "ヤンツォンツー"
            },
            {
                "hex": "#732e7e",
                "name": "紫羅藍",
                "phonetic": "ツールオラン"
            },
            {
                "hex": "#423171",
                "name": "龍胆紫",
                "phonetic": "ロンタンツー"
            },
            {
                "hex": "#79485a",
                "name": "雪紫",
                "phonetic": "シュエツー"
            },
            {
                "hex": "#c76079",
                "name": "紅蓮灰",
                "phonetic": "ホンリェンホイ"
            },
            {
                "hex": "#d3547e",
                "name": "艶粉",
                "phonetic": "イェンフェン"
            },
            {
                "hex": "#a54358",
                "name": "紫粉",
                "phonetic": "ツーフェン"
            },
            {
                "hex": "#a52664",
                "name": "鶏冠花紅",
                "phonetic": "チークワンホワホン"
            },
            {
                "hex": "#95509f",
                "name": "青蓮紫",
                "phonetic": "チンリェンツー"
            },
            {
                "hex": "#a22076",
                "name": "牽牛紫",
                "phonetic": "チェンニューツー"
            },
            {
                "hex": "#a71368",
                "name": "品紅",
                "phonetic": "ピンホン"
            },
            {
                "hex": "#ae506b",
                "name": "蘇木色",
                "phonetic": "スームースー"
            },
            {
                "hex": "#973444",
                "name": "玫瑰紅",
                "phonetic": "メイクイホン"
            },
            {
                "hex": "#793d56",
                "name": "玫瑰灰",
                "phonetic": "メイクイホイ"
            },
            {
                "hex": "#952e3a",
                "name": "臙脂",
                "phonetic": "イェンチ"
            },
            {
                "hex": "#af5e53",
                "name": "辰沙",
                "phonetic": "チェンシァ"
            },
            {
                "hex": "#aa4d3d",
                "name": "磚紅",
                "phonetic": "チュワンホン"
            },
            {
                "hex": "#a4414f",
                "name": "殷紅",
                "phonetic": "イェンホン"
            },
            {
                "hex": "#c56978",
                "name": "銀紅",
                "phonetic": "インホン"
            },
            {
                "hex": "#c17886",
                "name": "肉紅",
                "phonetic": "ロウホン"
            },
            {
                "hex": "#c35655",
                "name": "妃紅",
                "phonetic": "フェイホン"
            },
            {
                "hex": "#c43739",
                "name": "猩紅",
                "phonetic": "シンホン"
            },
            {
                "hex": "#a03e28",
                "name": "血紅",
                "phonetic": "シュエホン"
            },
            {
                "hex": "#bb1c33",
                "name": "月季紅",
                "phonetic": "ユエチーホン"
            },
            {
                "hex": "#b31f45",
                "name": "茉莉花紅",
                "phonetic": "モーリーホワホン"
            },
            {
                "hex": "#c5283d",
                "name": "烏羅松紅",
                "phonetic": "ウールオソンホン"
            },
            {
                "hex": "#d13559",
                "name": "銀星海棠",
                "phonetic": "インシンハイタン"
            },
            {
                "hex": "#bc343c",
                "name": "象牙紅",
                "phonetic": "シァンヤーホン"
            },
            {
                "hex": "#935458",
                "name": "曙紅",
                "phonetic": "シューホン"
            },
            {
                "hex": "#b80233",
                "name": "牡丹紅",
                "phonetic": "ムータンホン"
            },
            {
                "hex": "#cc3536",
                "name": "艶紅",
                "phonetic": "イェンホン"
            },
            {
                "hex": "#cf292f",
                "name": "蕉紅色",
                "phonetic": "チャオホンスー"
            },
            {
                "hex": "#d15d5e",
                "name": "銀朱",
                "phonetic": "インチュー"
            },
            {
                "hex": "#b84b48",
                "name": "硃砂",
                "phonetic": "チューシャ"
            },
            {
                "hex": "#c6574b",
                "name": "二硃",
                "phonetic": "アルチュー"
            },
            {
                "hex": "#e35c3e",
                "name": "硃膘",
                "phonetic": "チューピャオ"
            },
            {
                "hex": "#eb652d",
                "name": "章丹",
                "phonetic": "チァンタン"
            },
            {
                "hex": "#c4473d",
                "name": "蕃茄紅",
                "phonetic": "ファンチェホン"
            },
            {
                "hex": "#d54b44",
                "name": "榴花紅",
                "phonetic": "リューホワホン"
            },
            {
                "hex": "#ed7a3d",
                "name": "柿子色",
                "phonetic": "シーツスー"
            },
            {
                "hex": "#e7693f",
                "name": "桔紅",
                "phonetic": "チューホン"
            },
            {
                "hex": "#e8853b",
                "name": "桔黄",
                "phonetic": "チューホワン"
            },
            {
                "hex": "#e9745a",
                "name": "紅扇貝色",
                "phonetic": "ホンシャンペイスー"
            },
            {
                "hex": "#f89155",
                "name": "粉橙色",
                "phonetic": "フェンチョンスー"
            },
            {
                "hex": "#f07544",
                "name": "金紅",
                "phonetic": "チンホン"
            },
            {
                "hex": "#e47542",
                "name": "雄精",
                "phonetic": "ションチン"
            },
            {
                "hex": "#c77a3a",
                "name": "金黄",
                "phonetic": "チンホワン"
            },
            {
                "hex": "#d0853d",
                "name": "雄黄",
                "phonetic": "ションホワン"
            },
            {
                "hex": "#e1a14d",
                "name": "蝦黄",
                "phonetic": "シアホワン"
            },
            {
                "hex": "#e1a105",
                "name": "艶黄",
                "phonetic": "イェンホワン"
            },
            {
                "hex": "#f5a31f",
                "name": "鵝黄",
                "phonetic": "ウーホワン"
            },
            {
                "hex": "#fcb1aa",
                "name": "十様錦",
                "phonetic": "シーヤンチン"
            },
            {
                "hex": "#f4a9aa",
                "name": "鳳仙粉",
                "phonetic": "フォンシェンフェン"
            },
            {
                "hex": "#f1c7be",
                "name": "肉粉",
                "phonetic": "ロウフェン"
            },
            {
                "hex": "#f0b69d",
                "name": "肉黄",
                "phonetic": "ロウホワン"
            },
            {
                "hex": "#b65b46",
                "name": "釉紅",
                "phonetic": "ユーホン"
            },
            {
                "hex": "#bb848c",
                "name": "紅灰蓮",
                "phonetic": "ホンホイリェン"
            },
            {
                "hex": "#da9583",
                "name": "蛤蜊粉",
                "phonetic": "クーリーフェン"
            },
            {
                "hex": "#4d1919",
                "name": "銹紅",
                "phonetic": "シューホン"
            },
            {
                "hex": "#a95352",
                "name": "土紅",
                "phonetic": "トウホン"
            },
            {
                "hex": "#c06b49",
                "name": "瑪瑙色",
                "phonetic": "マーナオスー"
            },
            {
                "hex": "#c37e5f",
                "name": "赭石色",
                "phonetic": "チョーシースー"
            },
            {
                "hex": "#b56f58",
                "name": "赭紅",
                "phonetic": "チョーホン"
            },
            {
                "hex": "#c18453",
                "name": "紅狐色",
                "phonetic": "ホンフースー"
            },
            {
                "hex": "#a5855e",
                "name": "黄棕色",
                "phonetic": "ホワンツォンスー"
            },
            {
                "hex": "#b8844f",
                "name": "棕茶",
                "phonetic": "ツォンチャ"
            },
            {
                "hex": "#9b7e62",
                "name": "中駝",
                "phonetic": "チョントゥオ"
            },
            {
                "hex": "#ce9335",
                "name": "土黄",
                "phonetic": "トウホワン"
            },
            {
                "hex": "#b37349",
                "name": "樹皮色",
                "phonetic": "シューピースー"
            },
            {
                "hex": "#bb855d",
                "name": "桂皮色",
                "phonetic": "クイピースー"
            },
            {
                "hex": "#e3b587",
                "name": "土布色",
                "phonetic": "トウプースー"
            },
            {
                "hex": "#e2af45",
                "name": "黄琉璃",
                "phonetic": "ホワンリューリー"
            },
            {
                "hex": "#c48d39",
                "name": "琉璃色",
                "phonetic": "リューリースー"
            },
            {
                "hex": "#dc943b",
                "name": "檀香色",
                "phonetic": "タンシァンスー"
            },
            {
                "hex": "#c65306",
                "name": "蒼黄",
                "phonetic": "ツァンホワン"
            },
            {
                "hex": "#e1bda2",
                "name": "米紅",
                "phonetic": "ミーホン"
            },
            {
                "hex": "#d79b75",
                "name": "瑪瑙粉",
                "phonetic": "マーナオフェン"
            },
            {
                "hex": "#f4b974",
                "name": "向日黄",
                "phonetic": "シァンリーホワン"
            },
            {
                "hex": "#dea87a",
                "name": "浅黄棕",
                "phonetic": "チェンホワンツォン"
            },
            {
                "hex": "#f1b67f",
                "name": "南瓜黄",
                "phonetic": "ナンクワホワン"
            },
            {
                "hex": "#d8ad85",
                "name": "駱駝色",
                "phonetic": "ルオトゥオスー"
            },
            {
                "hex": "#e2c2a4",
                "name": "芦黄",
                "phonetic": "ルーホワン"
            },
            {
                "hex": "#da9558",
                "name": "浅桔黄",
                "phonetic": "チェンチュホワン"
            },
            {
                "hex": "#e7bb7c",
                "name": "鹿皮色",
                "phonetic": "ルーピースー"
            },
            {
                "hex": "#bb9755",
                "name": "鹿皮棕",
                "phonetic": "ルーピーツォン"
            },
            {
                "hex": "#f4d7b4",
                "name": "真絲綢色",
                "phonetic": "チェンスーチョウスー"
            },
            {
                "hex": "#f0d6ac",
                "name": "富春紡色",
                "phonetic": "フーチュンファンスー"
            },
            {
                "hex": "#eee1ca",
                "name": "乳白色",
                "phonetic": "ルーパイスー"
            },
            {
                "hex": "#efe0b9",
                "name": "乳黄色",
                "phonetic": "ルーホワンスー"
            },
            {
                "hex": "#eadcd6",
                "name": "甘石粉",
                "phonetic": "カンシーフェン"
            },
            {
                "hex": "#eacdd1",
                "name": "浅血牙",
                "phonetic": "チェンシュエヤー"
            },
            {
                "hex": "#e1dbcd",
                "name": "浅棕灰",
                "phonetic": "チェンツォンホイ"
            },
            {
                "hex": "#dac5b3",
                "name": "粉棕",
                "phonetic": "フェンツォン"
            },
            {
                "hex": "#eedecc",
                "name": "浅肉粉",
                "phonetic": "チェンロウフェン"
            },
            {
                "hex": "#c9ae8c",
                "name": "浅駝色",
                "phonetic": "チェントゥオスー"
            },
            {
                "hex": "#b0a085",
                "name": "浅棕茶",
                "phonetic": "タンツォンチャ"
            },
            {
                "hex": "#b89a83",
                "name": "肉棕灰",
                "phonetic": "ロウツォンホイ"
            },
            {
                "hex": "#d2ae8c",
                "name": "肉棕",
                "phonetic": "ロウツォン"
            },
            {
                "hex": "#896c50",
                "name": "珈琲棕",
                "phonetic": "カフェイツォン"
            },
            {
                "hex": "#9b603f",
                "name": "黄鴨色",
                "phonetic": "ホワンヤースー"
            },
            {
                "hex": "#6e4d40",
                "name": "煙色",
                "phonetic": "イェンスー"
            },
            {
                "hex": "#84624e",
                "name": "朱古力色",
                "phonetic": "チュークリースー"
            },
            {
                "hex": "#89303f",
                "name": "棗紅",
                "phonetic": "ツァオホン"
            },
            {
                "hex": "#6d4d56",
                "name": "葡萄灰",
                "phonetic": "プータオホイ"
            },
            {
                "hex": "#722e41",
                "name": "紫絳色",
                "phonetic": "ツーチァンスー"
            },
            {
                "hex": "#723d45",
                "name": "紫銅色",
                "phonetic": "ツートンスー"
            },
            {
                "hex": "#69282b",
                "name": "棗紫",
                "phonetic": "ツァオツー"
            },
            {
                "hex": "#50262b",
                "name": "黒紫",
                "phonetic": "ヘイツー"
            },
            {
                "hex": "#7c4b40",
                "name": "棕紅",
                "phonetic": "ツォンホン"
            },
            {
                "hex": "#773d38",
                "name": "深釉紅",
                "phonetic": "シェンユーホン"
            },
            {
                "hex": "#875a72",
                "name": "紫扇貝色",
                "phonetic": "ツーシャンペイスー"
            },
            {
                "hex": "#643441",
                "name": "深煙紅",
                "phonetic": "シェンイェンホン"
            },
            {
                "hex": "#7b5650",
                "name": "珈琲色",
                "phonetic": "カフェイスー"
            },
            {
                "hex": "#795253",
                "name": "豆棕",
                "phonetic": "トウツォン"
            },
            {
                "hex": "#7b563f",
                "name": "羅漢果色",
                "phonetic": "ルオハンクオスー"
            },
            {
                "hex": "#6f5750",
                "name": "深栗色",
                "phonetic": "シェンリースー"
            },
            {
                "hex": "#725338",
                "name": "醤色",
                "phonetic": "チァンスー"
            },
            {
                "hex": "#55473b",
                "name": "深褐色",
                "phonetic": "シェンホースー"
            },
            {
                "hex": "#704d4e",
                "name": "絳紫",
                "phonetic": "チァンツー"
            },
            {
                "hex": "#5a4c4c",
                "name": "深煙",
                "phonetic": "シェンイェン"
            },
            {
                "hex": "#674950",
                "name": "茄皮紫",
                "phonetic": "チェピーツー"
            },
            {
                "hex": "#544847",
                "name": "煙栗色",
                "phonetic": "イェンリースー"
            },
            {
                "hex": "#241d00",
                "name": "将校呢",
                "phonetic": "チェンシャオニー"
            },
            {
                "hex": "#6d614a",
                "name": "将校呢",
                "phonetic": "チャンシャオニー"
            },
            {
                "hex": "#a9987c",
                "name": "中棕灰",
                "phonetic": "チョンツォンホイ"
            },
            {
                "hex": "#b49436",
                "name": "姜黄",
                "phonetic": "チァンホワン"
            },
            {
                "hex": "#b4a761",
                "name": "新芽色",
                "phonetic": "シンヤースー"
            },
            {
                "hex": "#d5b884",
                "name": "卡其黄",
                "phonetic": "カーチーホワン"
            },
            {
                "hex": "#f2c04d",
                "name": "石黄",
                "phonetic": "シーホワン"
            },
            {
                "hex": "#c9b481",
                "name": "乳棕",
                "phonetic": "ルーツォン"
            },
            {
                "hex": "#c5bba3",
                "name": "乳灰",
                "phonetic": "ルーホイ"
            },
            {
                "hex": "#ebe1bd",
                "name": "蝋黄",
                "phonetic": "ラーホワン"
            },
            {
                "hex": "#b2ae9b",
                "name": "深銀灰",
                "phonetic": "シェンインホイ"
            },
            {
                "hex": "#c5bfad",
                "name": "米灰",
                "phonetic": "ミーホイ"
            },
            {
                "hex": "#ebe1b2",
                "name": "牙黄",
                "phonetic": "ヤーホワン"
            },
            {
                "hex": "#dbc7a6",
                "name": "枝黄",
                "phonetic": "チーホワン"
            },
            {
                "hex": "#d7c16b",
                "name": "丹東石",
                "phonetic": "タントンシー"
            },
            {
                "hex": "#cccc66",
                "name": "黄金色",
                "phonetic": "ホワンチンスー"
            },
            {
                "hex": "#f2de76",
                "name": "藤黄",
                "phonetic": "トンホワン"
            },
            {
                "hex": "#e7b55b",
                "name": "蛋黄",
                "phonetic": "タンホワン"
            },
            {
                "hex": "#efe452",
                "name": "槐黄",
                "phonetic": "ホワイホワン"
            },
            {
                "hex": "#f0c649",
                "name": "明黄",
                "phonetic": "ミンホワン"
            },
            {
                "hex": "#f7d550",
                "name": "絲瓜花黄",
                "phonetic": "スークワホワホワン"
            },
            {
                "hex": "#e2bd3b",
                "name": "嫩姜黄",
                "phonetic": "ネンチァンホワン"
            },
            {
                "hex": "#e4cf8e",
                "name": "甘草黄",
                "phonetic": "カンツァオホワン"
            },
            {
                "hex": "#e3d289",
                "name": "小鶏黄",
                "phonetic": "シャオチーホワン"
            },
            {
                "hex": "#ccc3aa",
                "name": "芽灰",
                "phonetic": "ヤーホイ"
            },
            {
                "hex": "#e9db39",
                "name": "檸檬黄",
                "phonetic": "ニンマンホワン"
            },
            {
                "hex": "#d4d570",
                "name": "楊桃色",
                "phonetic": "ヤンタオスー"
            },
            {
                "hex": "#eae3b3",
                "name": "淡黄",
                "phonetic": "タンホワン"
            },
            {
                "hex": "#e9e6c5",
                "name": "淡米色",
                "phonetic": "タンミースー"
            },
            {
                "hex": "#ebe8db",
                "name": "胡粉",
                "phonetic": "フーフェン"
            },
            {
                "hex": "#edeadc",
                "name": "蛤粉",
                "phonetic": "クーフェン"
            },
            {
                "hex": "#edebe0",
                "name": "立徳粉",
                "phonetic": "リートーフェン"
            },
            {
                "hex": "#d9e396",
                "name": "牙緑",
                "phonetic": "ヤーリュー"
            },
            {
                "hex": "#cddb8f",
                "name": "苦瓜緑",
                "phonetic": "クークワリュー"
            },
            {
                "hex": "#dbce54",
                "name": "草黄",
                "phonetic": "ツァオホワン"
            },
            {
                "hex": "#b7b278",
                "name": "枯緑",
                "phonetic": "クーリュー"
            },
            {
                "hex": "#7ea174",
                "name": "嫩草緑",
                "phonetic": "ネンツォンリュー"
            },
            {
                "hex": "#abcc89",
                "name": "浅草緑",
                "phonetic": "チェンツァオリュー"
            },
            {
                "hex": "#a5b795",
                "name": "銅緑色",
                "phonetic": "トンリュースー"
            },
            {
                "hex": "#9bae86",
                "name": "青豆色",
                "phonetic": "チントウスー"
            },
            {
                "hex": "#94a657",
                "name": "黄緑",
                "phonetic": "ホワンリュー"
            },
            {
                "hex": "#8c9636",
                "name": "深芽緑",
                "phonetic": "シェンヤーリュー"
            },
            {
                "hex": "#94c66b",
                "name": "葱緑",
                "phonetic": "ツォンリュー"
            },
            {
                "hex": "#5a715f",
                "name": "夜緑色",
                "phonetic": "イエリュースー"
            },
            {
                "hex": "#cad4ba",
                "name": "軍緑",
                "phonetic": "チュンリュー"
            },
            {
                "hex": "#4e5f45",
                "name": "蒼緑",
                "phonetic": "ツァンリュー"
            },
            {
                "hex": "#6a6834",
                "name": "橄欖緑",
                "phonetic": "カンランリュー"
            },
            {
                "hex": "#519670",
                "name": "冬瓜緑",
                "phonetic": "トンクワリュー"
            },
            {
                "hex": "#96bb8f",
                "name": "荷茎緑",
                "phonetic": "フーチンリュー"
            },
            {
                "hex": "#4f7e57",
                "name": "緑琉璃色",
                "phonetic": "リューリューリースー"
            },
            {
                "hex": "#93b469",
                "name": "嫩葱緑",
                "phonetic": "ネンツォオリュー"
            },
            {
                "hex": "#008e59",
                "name": "鸚鵡緑",
                "phonetic": "インウーリュー"
            },
            {
                "hex": "#006e5f",
                "name": "翠緑",
                "phonetic": "ツイリュー"
            },
            {
                "hex": "#46817e",
                "name": "湖緑",
                "phonetic": "フーリュー"
            },
            {
                "hex": "#168570",
                "name": "粗孔雀緑",
                "phonetic": "ツーコンチュエリュー"
            },
            {
                "hex": "#2f8f6d",
                "name": "深緑宝石",
                "phonetic": "シェンリューパオシー"
            },
            {
                "hex": "#5c8987",
                "name": "灰緑",
                "phonetic": "ホイリュー"
            },
            {
                "hex": "#68927d",
                "name": "冬緑",
                "phonetic": "トンリュー"
            },
            {
                "hex": "#00b483",
                "name": "巴黎緑",
                "phonetic": "パリーリュー"
            },
            {
                "hex": "#8ac28e",
                "name": "果緑",
                "phonetic": "クオリュー"
            },
            {
                "hex": "#88d5b9",
                "name": "玉緑",
                "phonetic": "ユーリュー"
            },
            {
                "hex": "#88aea3",
                "name": "果灰",
                "phonetic": "クオホイ"
            },
            {
                "hex": "#569597",
                "name": "碧玉石",
                "phonetic": "ピーユーシー"
            },
            {
                "hex": "#84c0be",
                "name": "浅松緑",
                "phonetic": "チェンソンリュー"
            },
            {
                "hex": "#67b4b0",
                "name": "深松緑",
                "phonetic": "シェンソンリュー"
            },
            {
                "hex": "#a9e1d3",
                "name": "浅鮮緑",
                "phonetic": "チェンシェンリュー"
            },
            {
                "hex": "#90caaf",
                "name": "三緑",
                "phonetic": "サンリュー"
            },
            {
                "hex": "#baded1",
                "name": "枝緑",
                "phonetic": "チーリュー"
            },
            {
                "hex": "#aec4b7",
                "name": "淡灰緑",
                "phonetic": "タンホイリュー"
            },
            {
                "hex": "#bed2b6",
                "name": "水黄",
                "phonetic": "シュイホワン"
            },
            {
                "hex": "#b8d6c2",
                "name": "淡緑",
                "phonetic": "タンリュー"
            },
            {
                "hex": "#d1e3db",
                "name": "鴨蛋青",
                "phonetic": "ヤータンチン"
            },
            {
                "hex": "#bbe2d6",
                "name": "浅水緑",
                "phonetic": "チェンシュイリュー"
            },
            {
                "hex": "#caddd5",
                "name": "浅青瓷釉色",
                "phonetic": "チェンチンツーユースー"
            },
            {
                "hex": "#b1c5b4",
                "name": "龍泉青瓷釉色",
                "phonetic": "ロンチュエンチンツーユースー"
            },
            {
                "hex": "#e3efd1",
                "name": "春緑",
                "phonetic": "チュンリュー"
            },
            {
                "hex": "#d1e2de",
                "name": "月白色",
                "phonetic": "ユエパイスー"
            },
            {
                "hex": "#b8c8b7",
                "name": "銹緑",
                "phonetic": "シューリュー"
            },
            {
                "hex": "#e7e5d0",
                "name": "蝋白",
                "phonetic": "ラーパイ"
            },
            {
                "hex": "#a9b08f",
                "name": "芦灰",
                "phonetic": "ルーホイ"
            },
            {
                "hex": "#b7b99c",
                "name": "蝦灰",
                "phonetic": "シアホイ"
            },
            {
                "hex": "#a2b2a9",
                "name": "大理石色",
                "phonetic": "ターリーシースー"
            },
            {
                "hex": "#919481",
                "name": "法国梧桐皮色",
                "phonetic": "ファークオウトンピース"
            },
            {
                "hex": "#7f877a",
                "name": "中条蝦緑",
                "phonetic": "チョンティアオシアリュー"
            },
            {
                "hex": "#b6b196",
                "name": "灰米",
                "phonetic": "ホイミー"
            },
            {
                "hex": "#bec5b5",
                "name": "松緑色",
                "phonetic": "ソンリュースー"
            },
            {
                "hex": "#647372",
                "name": "暗灰",
                "phonetic": "アンホイ"
            },
            {
                "hex": "#647370",
                "name": "卡其緑",
                "phonetic": "カーチリュー"
            },
            {
                "hex": "#7a988e",
                "name": "蟹青",
                "phonetic": "シエチン"
            },
            {
                "hex": "#7a988b",
                "name": "青蝦色",
                "phonetic": "チンシアスー"
            },
            {
                "hex": "#507883",
                "name": "玉石藍",
                "phonetic": "ユーシーラン"
            },
            {
                "hex": "#7c9283",
                "name": "橄欖灰",
                "phonetic": "カンランホイ"
            },
            {
                "hex": "#3d6e53",
                "name": "老緑",
                "phonetic": "ラオリュー"
            },
            {
                "hex": "#3f5b50",
                "name": "墨緑",
                "phonetic": "モーリュー"
            },
            {
                "hex": "#5c5a46",
                "name": "焦茶色",
                "phonetic": "チャオチャスー"
            },
            {
                "hex": "#5c614f",
                "name": "茶緑",
                "phonetic": "チャリュー"
            },
            {
                "hex": "#5e6042",
                "name": "鉄緑",
                "phonetic": "ティエリュー"
            },
            {
                "hex": "#45554a",
                "name": "油緑",
                "phonetic": "ユーリュー"
            },
            {
                "hex": "#675b46",
                "name": "草灰色",
                "phonetic": "ツァオホイスー"
            },
            {
                "hex": "#4a6f5d",
                "name": "暗苔緑",
                "phonetic": "アンタイリュー"
            },
            {
                "hex": "#155461",
                "name": "毛緑",
                "phonetic": "マオリュー"
            },
            {
                "hex": "#576768",
                "name": "深灰",
                "phonetic": "シェンホイ"
            },
            {
                "hex": "#455667",
                "name": "鵲灰",
                "phonetic": "チュエホイ"
            },
            {
                "hex": "#637179",
                "name": "深瓦灰",
                "phonetic": "シェンワーホイ"
            },
            {
                "hex": "#58665e",
                "name": "苔灰",
                "phonetic": "タイホイ"
            },
            {
                "hex": "#658a98",
                "name": "蟹藍",
                "phonetic": "シェラン"
            },
            {
                "hex": "#6d817d",
                "name": "冬灰色",
                "phonetic": "トンホイスー"
            },
            {
                "hex": "#aac2c4",
                "name": "雲灰",
                "phonetic": "ユンホイ"
            },
            {
                "hex": "#95b1ba",
                "name": "鴿灰",
                "phonetic": "クーホイ"
            },
            {
                "hex": "#8aa4a8",
                "name": "藍灰色",
                "phonetic": "ランホイスー"
            },
            {
                "hex": "#949c97",
                "name": "水貂灰",
                "phonetic": "シュイティアオホイ"
            },
            {
                "hex": "#7ba1a8",
                "name": "春藍",
                "phonetic": "チュンラン"
            },
            {
                "hex": "#5d828a",
                "name": "灰藍",
                "phonetic": "ホイラン"
            },
            {
                "hex": "#59808e",
                "name": "湖藍灰",
                "phonetic": "フーランホイ"
            },
            {
                "hex": "#5e90b8",
                "name": "竹月色",
                "phonetic": "チューユエスー"
            },
            {
                "hex": "#6493af",
                "name": "鈷藍",
                "phonetic": "クーラン"
            },
            {
                "hex": "#00828b",
                "name": "品緑",
                "phonetic": "ピンリュー"
            },
            {
                "hex": "#2578b5",
                "name": "深竹月",
                "phonetic": "シェンチューユエ"
            },
            {
                "hex": "#1a638a",
                "name": "琉璃藍",
                "phonetic": "リューリーラン"
            },
            {
                "hex": "#3a89b0",
                "name": "毛月色",
                "phonetic": "マオユエスー"
            },
            {
                "hex": "#4e1892",
                "name": "柏坊灰藍",
                "phonetic": "ポーファンホイラン"
            },
            {
                "hex": "#1f5574",
                "name": "浅土藍",
                "phonetic": "チェントウラン"
            },
            {
                "hex": "#276893",
                "name": "北京毛藍",
                "phonetic": "ペイチンマオラン"
            },
            {
                "hex": "#31678d",
                "name": "絨藍",
                "phonetic": "ロンラン"
            },
            {
                "hex": "#3c5e91",
                "name": "浅海昌藍",
                "phonetic": "チェンハイチァンラン"
            },
            {
                "hex": "#17507d",
                "name": "海藍",
                "phonetic": "ハイラン"
            },
            {
                "hex": "#2b5f8e",
                "name": "深毛月色",
                "phonetic": "シェンマオユエスー"
            },
            {
                "hex": "#244462",
                "name": "深毛藍",
                "phonetic": "シェンマオラン"
            },
            {
                "hex": "#213d62",
                "name": "深藍",
                "phonetic": "シェンラン"
            },
            {
                "hex": "#293150",
                "name": "靛藍",
                "phonetic": "ティエンラン"
            },
            {
                "hex": "#25446b",
                "name": "労働布色",
                "phonetic": "ラオトンプースー"
            },
            {
                "hex": "#304758",
                "name": "黛藍",
                "phonetic": "タイラン"
            },
            {
                "hex": "#25386b",
                "name": "蔵藍",
                "phonetic": "ツァンラン"
            },
            {
                "hex": "#004db5",
                "name": "鮮藍",
                "phonetic": "シェンラン"
            },
            {
                "hex": "#0041a5",
                "name": "孔雀藍",
                "phonetic": "コンチュエラン"
            },
            {
                "hex": "#084495",
                "name": "群青",
                "phonetic": "チュンチン"
            },
            {
                "hex": "#1f3696",
                "name": "宝石藍",
                "phonetic": "パオシーラン"
            },
            {
                "hex": "#3f486c",
                "name": "紺青",
                "phonetic": "カンチン"
            },
            {
                "hex": "#282e55",
                "name": "鈦鉄",
                "phonetic": "タイチン"
            },
            {
                "hex": "#37344c",
                "name": "蔵黒藍",
                "phonetic": "ツァンヘイラン"
            },
            {
                "hex": "#363532",
                "name": "灯草灰",
                "phonetic": "タンツァオホイ"
            },
            {
                "hex": "#3e3c3d",
                "name": "元青",
                "phonetic": "ユワンチン"
            },
            {
                "hex": "#43454a",
                "name": "粗晶皀",
                "phonetic": "ツーチンツァオ"
            },
            {
                "hex": "#4f5355",
                "name": "紅皀",
                "phonetic": "ホンツァオ"
            },
            {
                "hex": "#404a57",
                "name": "鉄青",
                "phonetic": "ティエチン"
            },
            {
                "hex": "#37444b",
                "name": "鉄灰",
                "phonetic": "ティエホイ"
            },
            {
                "hex": "#687fa5",
                "name": "青金色",
                "phonetic": "チンチンスー"
            },
            {
                "hex": "#b5c1cf",
                "name": "銀藍",
                "phonetic": "インラン"
            },
            {
                "hex": "#cad0d3",
                "name": "雪灰",
                "phonetic": "シュエホイ"
            },
            {
                "hex": "#d5ccd3",
                "name": "淡藕合",
                "phonetic": "タンオウフー"
            },
            {
                "hex": "#c4c3cb",
                "name": "浅藤紫",
                "phonetic": "チェントンツー"
            },
            {
                "hex": "#a8a6b9",
                "name": "蓮灰",
                "phonetic": "リェンホイ"
            },
            {
                "hex": "#9198ae",
                "name": "雪青灰",
                "phonetic": "シュエチンホイ"
            },
            {
                "hex": "#7991d1",
                "name": "雪藍",
                "phonetic": "シュエラン"
            },
            {
                "hex": "#857e95",
                "name": "紫藤灰",
                "phonetic": "ツートンホイ"
            },
            {
                "hex": "#8b658b",
                "name": "鳳仙紫",
                "phonetic": "フォンシェンツー"
            },
            {
                "hex": "#575a5d",
                "name": "青灰色",
                "phonetic": "チンホイスー"
            },
            {
                "hex": "#5a5c5b",
                "name": "承徳皀",
                "phonetic": "チョントーツァオ"
            },
            {
                "hex": "#757570",
                "name": "承徳灰",
                "phonetic": "チョントーホイ"
            },
            {
                "hex": "#817c6e",
                "name": "庭院瓦灰色",
                "phonetic": "ティンユワンワーホイスー"
            },
            {
                "hex": "#625c52",
                "name": "相思灰",
                "phonetic": "シァンスーホイ"
            },
            {
                "hex": "#71727a",
                "name": "銀鼠灰",
                "phonetic": "インシューホイ"
            },
            {
                "hex": "#546b83",
                "name": "花青",
                "phonetic": "ホワチン"
            },
            {
                "hex": "#93a2a9",
                "name": "正灰",
                "phonetic": "チョンホイ"
            },
            {
                "hex": "#748a8d",
                "name": "織綿灰",
                "phonetic": "チーチンホイ"
            },
            {
                "hex": "#6b7c87",
                "name": "石板灰",
                "phonetic": "シーパンホイ"
            },
            {
                "hex": "#ebe5d5",
                "name": "銀白色",
                "phonetic": "インパイスー"
            },
            {
                "hex": "#4f506d",
                "name": "羅藍灰",
                "phonetic": "ルオランホイ"
            },
            {
                "hex": "#695776",
                "name": "丁香紫",
                "phonetic": "ティンシァンツー"
            },
            {
                "hex": "#303030",
                "name": "百草霜",
                "phonetic": "パイツァオシュワン"
            },
            {
                "hex": "#3f3f3c",
                "name": "油煙墨",
                "phonetic": "ユーイェンモー"
            },
            {
                "hex": "#2b5e7d",
                "name": "沙青",
                "phonetic": "シァチン"
            },
            {
                "hex": "#005b5a",
                "name": "沙緑",
                "phonetic": "シァリュー"
            },
            {
                "hex": "#6d7358",
                "name": "大赤金",
                "phonetic": "ターチーチン"
            },
            {
                "hex": "#85794f",
                "name": "庫金",
                "phonetic": "クーチン"
            },
            {
                "hex": "#585a57",
                "name": "銀箔",
                "phonetic": "インポー"
            },
            {
                "hex": "#796f54",
                "name": "選金",
                "phonetic": "シュエンチン"
            },
            {
                "hex": "#b9986d",
                "name": "獣皮色",
                "phonetic": "ショーピースー"
            },
            {
                "hex": "#e67a2a",
                "name": "橙色",
                "phonetic": "チョンスー"
            },
            {
                "hex": "#f5c19b",
                "name": "蝶粉",
                "phonetic": "ティエフェン"
            },
            {
                "hex": "#f5cebe",
                "name": "果肉色",
                "phonetic": "クオロウスー"
            },
            {
                "hex": "#bca590",
                "name": "紙棕",
                "phonetic": "チーツォン"
            },
            {
                "hex": "#c1a299",
                "name": "奶棕",
                "phonetic": "ナイツォン"
            },
            {
                "hex": "#82878c",
                "name": "紅灰",
                "phonetic": "ホンホイ"
            },
            {
                "hex": "#8c90b9",
                "name": "閃蝶紫",
                "phonetic": "シァンティエツー"
            },
            {
                "hex": "#b0b7ac",
                "name": "黄灰",
                "phonetic": "ホワンホイ"
            },
            {
                "hex": "#afc8ba",
                "name": "奶緑",
                "phonetic": "ナイリュー"
            }
        ];  
    }

    /**
     * ヨーロッパの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getEuropianColors = () => {
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
     * フランスの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getFrenchColors = () => {
        return [
            {
                "hex": "#948147",
                "name": "havane",
                "phonetic": "アヴァーヌ"
            },
            {
                "hex": "#e90a79",
                "name": "azalee",
                "phonetic": "アザレ"
            },
            {
                "hex": "#f8af7e",
                "name": "atoll",
                "phonetic": "アトール"
            },
            {
                "hex": "#ab1498",
                "name": "anemone",
                "phonetic": "アネモヌ"
            },
            {
                "hex": "#eb8f07",
                "name": "apricot",
                "phonetic": "アプリコ"
            },
            {
                "hex": "#7d847b",
                "name": "aluminium",
                "phonetic": "アリュミニヨム"
            },
            {
                "hex": "#a82257",
                "name": "argile",
                "phonetic": "アルジル"
            },
            {
                "hex": "#f2f2f2",
                "name": "albatre",
                "phonetic": "アルバートル"
            },
            {
                "hex": "#390000",
                "name": "anthracite",
                "phonetic": "アントラシート"
            },
            {
                "hex": "#91714a",
                "name": "ambre",
                "phonetic": "アンプル"
            },
            {
                "hex": "#bfbfbf",
                "name": "acier",
                "phonetic": "アシエ"
            },
            {
                "hex": "#00406f",
                "name": "agate",
                "phonetic": "アガート"
            },
            {
                "hex": "#ebf293",
                "name": "anis",
                "phonetic": "アニ"
            },
            {
                "hex": "#cff894",
                "name": "absinthe",
                "phonetic": "アプサント"
            },
            {
                "hex": "#9e1870",
                "name": "amarante",
                "phonetic": "アマラント"
            },
            {
                "hex": "#e29e4b",
                "name": "alezan",
                "phonetic": "アルザン"
            },
            {
                "hex": "#2c2e58",
                "name": "ardoise",
                "phonetic": "アルドアーズ"
            },
            {
                "hex": "#882c17",
                "name": "armagnac",
                "phonetic": "アルマニャック"
            },
            {
                "hex": "#2d33ac",
                "name": "blue indigo sombre",
                "phonetic": "ブルー アンディゴ ソンブル"
            },
            {
                "hex": "#fff0b3",
                "name": "ivoire",
                "phonetic": "イヴォアール"
            },
            {
                "hex": "#5725cd",
                "name": "iris",
                "phonetic": "イリス"
            },
            {
                "hex": "#c9ba9e",
                "name": "vanille",
                "phonetic": "ヴァニーユ"
            },
            {
                "hex": "#a787a6",
                "name": "violace grise",
                "phonetic": "ヴィオラッセ グリーゼ"
            },
            {
                "hex": "#6501a0",
                "name": "violet",
                "phonetic": "ヴィオレ"
            },
            {
                "hex": "#ecc651",
                "name": "whisky",
                "phonetic": "ウイスキー"
            },
            {
                "hex": "#726b61",
                "name": "hirondelle",
                "phonetic": "イロンデル"
            },
            {
                "hex": "#80770d",
                "name": "varech",
                "phonetic": "ヴァレック"
            },
            {
                "hex": "#840084",
                "name": "violine",
                "phonetic": "ヴィオリーヌ"
            },
            {
                "hex": "#bf7939",
                "name": "vigogne",
                "phonetic": "ヴィゴーニュ"
            },
            {
                "hex": "#71cc44",
                "name": "vert",
                "phonetic": "ヴェール"
            },
            {
                "hex": "#9ad539",
                "name": "verr acide",
                "phonetic": "ヴェール アシード"
            },
            {
                "hex": "#6a7b06",
                "name": "vert anglais",
                "phonetic": "ヴェール アングレ"
            },
            {
                "hex": "#4a8745",
                "name": "vert ecossais",
                "phonetic": "ヴェール エコッセ"
            },
            {
                "hex": "#9b9f53",
                "name": "vert safari",
                "phonetic": "ヴェール サファリ"
            },
            {
                "hex": "#b9c525",
                "name": "vert chartreuse",
                "phonetic": "ヴェール シャルトルーズ"
            },
            {
                "hex": "#74915b",
                "name": "vert amande",
                "phonetic": "ヴェール アマンド"
            },
            {
                "hex": "#ceb66f",
                "name": "vert veronese",
                "phonetic": "ヴェール ヴェロネーズ"
            },
            {
                "hex": "#bfd028",
                "name": "vert clair",
                "phonetic": "ヴェール クレール"
            },
            {
                "hex": "#096438",
                "name": "vert cypres",
                "phonetic": "ヴェール シプレ"
            },
            {
                "hex": "#e1e465",
                "name": "vert jaune",
                "phonetic": "ヴェール ジョーヌ"
            },
            {
                "hex": "#1f8c8f",
                "name": "vert scarabee",
                "phonetic": "ヴェール スカラベ"
            },
            {
                "hex": "#c4d053",
                "name": "vert tisane",
                "phonetic": "ヴェール ティザーヌ"
            },
            {
                "hex": "#446c63",
                "name": "vert-de-gris",
                "phonetic": "ヴェール ドゥ グリー"
            },
            {
                "hex": "#244800",
                "name": "vert noir",
                "phonetic": "ヴェール ノアール"
            },
            {
                "hex": "#73762c",
                "name": "vert pabge",
                "phonetic": "ヴェール パプゲ"
            },
            {
                "hex": "#b4cc75",
                "name": "vert celadon",
                "phonetic": "ヴェール セラドン"
            },
            {
                "hex": "#a6d9ab",
                "name": "vert d\u0027eau",
                "phonetic": "ヴェール ドー"
            },
            {
                "hex": "#d1e4a0",
                "name": "vert nil",
                "phonetic": "ヴェール ニル"
            },
            {
                "hex": "#74a98a",
                "name": "vert pastille",
                "phonetic": "ヴェール パスティーユ"
            },
            {
                "hex": "#00917b",
                "name": "vert paon",
                "phonetic": "ヴェール パーン"
            },
            {
                "hex": "#005e0c",
                "name": "vert buis",
                "phonetic": "ヴェール ビュイ"
            },
            {
                "hex": "#315a1b",
                "name": "vert bouteille",
                "phonetic": "ヴェール ブーテイユ"
            },
            {
                "hex": "#645924",
                "name": "vert bronze",
                "phonetic": "ヴェール ブロンズ"
            },
            {
                "hex": "#99d650",
                "name": "vert pomme",
                "phonetic": "ヴェール ポンム"
            },
            {
                "hex": "#4f8c37",
                "name": "vert mousse",
                "phonetic": "ヴェール ムース"
            },
            {
                "hex": "#cf7366",
                "name": "vert fonce",
                "phonetic": "ヴェール フォンセ"
            },
            {
                "hex": "#91c43c",
                "name": "vert prairie",
                "phonetic": "ヴェール プレーリー"
            },
            {
                "hex": "#258b60",
                "name": "vert pois chiche",
                "phonetic": "ヴェール ポワ シシュ"
            },
            {
                "hex": "#ef2e3d",
                "name": "vermillon",
                "phonetic": "ヴェルミヨン"
            },
            {
                "hex": "#567517",
                "name": "vert laitue",
                "phonetic": "ヴェール レーテュ"
            },
            {
                "hex": "#b9ce64",
                "name": "vert roseau",
                "phonetic": "ヴェール ロゾー"
            },
            {
                "hex": "#32020a",
                "name": "outremer",
                "phonetic": "ウートルメール"
            },
            {
                "hex": "#eb0153",
                "name": "ecarlate",
                "phonetic": "エカルラート"
            },
            {
                "hex": "#ef36a5",
                "name": "eglantine",
                "phonetic": "エグランティーヌ"
            },
            {
                "hex": "#4b5029",
                "name": "epinard",
                "phonetic": "エピナール"
            },
            {
                "hex": "#567517",
                "name": "vert loden",
                "phonetic": "ヴェール ロデン"
            },
            {
                "hex": "#6f493c",
                "name": "ecaille",
                "phonetic": "エカイユ"
            },
            {
                "hex": "#f2f589",
                "name": "ecume",
                "phonetic": "エキューム"
            },
            {
                "hex": "#ffd0a1",
                "name": "e\u0027cru",
                "phonetic": "エクリュ"
            },
            {
                "hex": "#fef5b6",
                "name": "email",
                "phonetic": "エマイユ"
            },
            {
                "hex": "#24a279",
                "name": "emeraude",
                "phonetic": "エムロード"
            },
            {
                "hex": "#619139",
                "name": "herbe",
                "phonetic": "エルブ"
            },
            {
                "hex": "#9a751d",
                "name": "ocre",
                "phonetic": "オークル"
            },
            {
                "hex": "#696201",
                "name": "autrichien",
                "phonetic": "オートリシャン"
            },
            {
                "hex": "#64791a",
                "name": "olive",
                "phonetic": "オリーヴ"
            },
            {
                "hex": "#550953",
                "name": "aubergine",
                "phonetic": "オーベルジーヌ"
            },
            {
                "hex": "#5b096c",
                "name": "aubergine violacee",
                "phonetic": "オーベルジーヌ ヴィヨラセ"
            },
            {
                "hex": "#fe812e",
                "name": "orange",
                "phonetic": "オランジュ"
            },
            {
                "hex": "#e27227",
                "name": "orange roussi",
                "phonetic": "オランジュ ルーシー"
            },
            {
                "hex": "#897d12",
                "name": "kaki",
                "phonetic": "カキ"
            },
            {
                "hex": "#587955",
                "name": "cactus",
                "phonetic": "カクテュス"
            },
            {
                "hex": "#624f51",
                "name": "cachou",
                "phonetic": "カシュー"
            },
            {
                "hex": "#d0ba95",
                "name": "cachemire",
                "phonetic": "カシュミール"
            },
            {
                "hex": "#7b8e2f",
                "name": "gazon",
                "phonetic": "ガゾン"
            },
            {
                "hex": "#f7c92d",
                "name": "canari",
                "phonetic": "カナリ"
            },
            {
                "hex": "#8d5b36",
                "name": "cannelle",
                "phonetic": "カネル"
            },
            {
                "hex": "#d95c4f",
                "name": "capucine",
                "phonetic": "カピュシーヌ"
            },
            {
                "hex": "#705038",
                "name": "cafe",
                "phonetic": "カフェ"
            },
            {
                "hex": "#b7aa89",
                "name": "cafe au lait",
                "phonetic": "カフェ オ レ"
            },
            {
                "hex": "#b4713f",
                "name": "caramel",
                "phonetic": "カラメル"
            },
            {
                "hex": "#c40093",
                "name": "garance",
                "phonetic": "ガランス"
            },
            {
                "hex": "#8a0056",
                "name": "carmin",
                "phonetic": "カルマン"
            },
            {
                "hex": "#000000",
                "name": "cardinal",
                "phonetic": "カルディナル"
            },
            {
                "hex": "#bc5a45",
                "name": "cuivre",
                "phonetic": "キュイヴル"
            },
            {
                "hex": "#c0af98",
                "name": "cuisse de nymph",
                "phonetic": "キュイッス ド ナンフ"
            },
            {
                "hex": "#990045",
                "name": "goumier",
                "phonetic": "グーミエ"
            },
            {
                "hex": "#84004f",
                "name": "cramoisi",
                "phonetic": "クラモアジー"
            },
            {
                "hex": "#181818",
                "name": "graphite",
                "phonetic": "グラフィット"
            },
            {
                "hex": "#b5a3d0",
                "name": "curry",
                "phonetic": "キューリー"
            },
            {
                "hex": "#999999",
                "name": "gris acier",
                "phonetic": "グリー アシェ"
            },
            {
                "hex": "#c5b9b8",
                "name": "gris orage",
                "phonetic": "グリー オラージュ"
            },
            {
                "hex": "#057e70",
                "name": "clan",
                "phonetic": "クラン"
            },
            {
                "hex": "#a9a29a",
                "name": "gris clair",
                "phonetic": "グリー クレール"
            },
            {
                "hex": "#d5d2bf",
                "name": "gris ciel",
                "phonetic": "グリー シエル"
            },
            {
                "hex": "#7b705e",
                "name": "gris terreux",
                "phonetic": "グリー テルー"
            },
            {
                "hex": "#7186a6",
                "name": "gris argile",
                "phonetic": "グリー アルジル"
            },
            {
                "hex": "#bbb9a6",
                "name": "gris gres",
                "phonetic": "グリー グレ"
            },
            {
                "hex": "#664f44",
                "name": "gris cendre",
                "phonetic": "グリー サンドル"
            },
            {
                "hex": "#d084c5",
                "name": "glycine",
                "phonetic": "グリシーヌ"
            },
            {
                "hex": "#75746c",
                "name": "gris fer",
                "phonetic": "グリー フェール"
            },
            {
                "hex": "#5f5b58",
                "name": "gris fonce",
                "phonetic": "グリー フォンセ"
            },
            {
                "hex": "#a7a9a8",
                "name": "gris plomb",
                "phonetic": "グリー プロン"
            },
            {
                "hex": "#715940",
                "name": "clou de girofle",
                "phonetic": "クルー ドゥ ジロフル"
            },
            {
                "hex": "#b9babf",
                "name": "gris blue",
                "phonetic": "グリー ブルー"
            },
            {
                "hex": "#fe8594",
                "name": "crevette",
                "phonetic": "クルヴェット"
            },
            {
                "hex": "#68686a",
                "name": "gris flanelle",
                "phonetic": "グリー フラネル"
            },
            {
                "hex": "#aaaa9f",
                "name": "gris moyen",
                "phonetic": "グリー モアイヤン"
            },
            {
                "hex": "#b3aa97",
                "name": "gris poussiere",
                "phonetic": "グリー プシェール"
            },
            {
                "hex": "#b6b3a5",
                "name": "gris perle",
                "phonetic": "グリー ペルル"
            },
            {
                "hex": "#8b015b",
                "name": "grenat",
                "phonetic": "グルナ"
            },
            {
                "hex": "#bbb1a4",
                "name": "grege",
                "phonetic": "グレージュ"
            },
            {
                "hex": "#e3003f",
                "name": "coq de roche",
                "phonetic": "コック ドゥ ロシュ"
            },
            {
                "hex": "#077a58",
                "name": "sapin",
                "phonetic": "サパン"
            },
            {
                "hex": "#df0250",
                "name": "coquelicot",
                "phonetic": "コクリコー"
            },
            {
                "hex": "#c8b82b",
                "name": "sahara",
                "phonetic": "サアラ"
            },
            {
                "hex": "#dd0085",
                "name": "groseille",
                "phonetic": "グロゼイユ"
            },
            {
                "hex": "#ff4d67",
                "name": "corail",
                "phonetic": "コライユ"
            },
            {
                "hex": "#ead0a2",
                "name": "cremeux",
                "phonetic": "クレムー"
            },
            {
                "hex": "#a44506",
                "name": "cognac",
                "phonetic": "コニャック"
            },
            {
                "hex": "#cab69d",
                "name": "sable",
                "phonetic": "サーブル"
            },
            {
                "hex": "#b6a087",
                "name": "sable mouille",
                "phonetic": "サーブル ムイエ"
            },
            {
                "hex": "#c0af98",
                "name": "chere",
                "phonetic": "シェール"
            },
            {
                "hex": "#ee82c2",
                "name": "jacinthe",
                "phonetic": "ジャサント"
            },
            {
                "hex": "#f3236c",
                "name": "geranium",
                "phonetic": "ジェラニョム"
            },
            {
                "hex": "#8c8e8a",
                "name": "ciment",
                "phonetic": "シマン"
            },
            {
                "hex": "#483131",
                "name": "sanglier",
                "phonetic": "サングリエ"
            },
            {
                "hex": "#9da651",
                "name": "citronelle",
                "phonetic": "シトロネル"
            },
            {
                "hex": "#b5e366",
                "name": "salade",
                "phonetic": "サラド"
            },
            {
                "hex": "#da01ae",
                "name": "cyclamen",
                "phonetic": "シクラメン"
            },
            {
                "hex": "#856a3f",
                "name": "chatain",
                "phonetic": "シャータン"
            },
            {
                "hex": "#b6b4d3",
                "name": "chatoyant",
                "phonetic": "シャトアイヤン"
            },
            {
                "hex": "#5a58b6",
                "name": "gentiane",
                "phonetic": "ジャンシャーヌ"
            },
            {
                "hex": "#46463c",
                "name": "chaudron",
                "phonetic": "ショードロン"
            },
            {
                "hex": "#0a0a0a",
                "name": "charbonneux",
                "phonetic": "シャルボヌー"
            },
            {
                "hex": "#7b4400",
                "name": "chocolat",
                "phonetic": "ショコラ"
            },
            {
                "hex": "#c59927",
                "name": "chamois",
                "phonetic": "シャモア"
            },
            {
                "hex": "#ffd309",
                "name": "genet",
                "phonetic": "ジュネ"
            },
            {
                "hex": "#af8c58",
                "name": "chameau",
                "phonetic": "シャモー"
            },
            {
                "hex": "#b5a795",
                "name": "champagne",
                "phonetic": "シャンパーニュ"
            },
            {
                "hex": "#fae701",
                "name": "jaune",
                "phonetic": "ジョーヌ"
            },
            {
                "hex": "#fef810",
                "name": "jaune acide",
                "phonetic": "ジョーヌ アシード"
            },
            {
                "hex": "#e2c13d",
                "name": "jaune de naples",
                "phonetic": "ジョーヌ ドゥ ナーブル"
            },
            {
                "hex": "#cdbc94",
                "name": "jaune briand",
                "phonetic": "ジョーヌ ブリアン"
            },
            {
                "hex": "#feee2e",
                "name": "jaune jonquille",
                "phonetic": "ジョーヌ ジョンキーユ"
            },
            {
                "hex": "#fdf48e",
                "name": "jaune pale",
                "phonetic": "ジョーヌ パール"
            },
            {
                "hex": "#eef753",
                "name": "jaune citron",
                "phonetic": "ジョーヌ シトロン"
            },
            {
                "hex": "#fbfe87",
                "name": "jaune paille",
                "phonetic": "ジョーヌ パイユ"
            },
            {
                "hex": "#ccaf26",
                "name": "jaune safran",
                "phonetic": "ジョーヌ サフラン"
            },
            {
                "hex": "#fdf188",
                "name": "jaune narcisse",
                "phonetic": "ジョーヌ ナルシス"
            },
            {
                "hex": "#f5f814",
                "name": "jaune mimosa",
                "phonetic": "ジョーヌ ミモザ"
            },
            {
                "hex": "#dac50a",
                "name": "jaune moutarde",
                "phonetic": "ジョーヌ ムタールド"
            },
            {
                "hex": "#836301",
                "name": "sepia",
                "phonetic": "セピア"
            },
            {
                "hex": "#6a410f",
                "name": "tete-de-negre",
                "phonetic": "テート ドゥ ネーグル"
            },
            {
                "hex": "#835f01",
                "name": "seigle",
                "phonetic": "セーグル"
            },
            {
                "hex": "#8f5f54",
                "name": "tete de chene prulee",
                "phonetic": "テートドゥシェーヌプリュレ"
            },
            {
                "hex": "#bc0163",
                "name": "cerise",
                "phonetic": "スリーズ"
            },
            {
                "hex": "#c9e86c",
                "name": "tilleul",
                "phonetic": "ティユール"
            },
            {
                "hex": "#918d80",
                "name": "souris",
                "phonetic": "スーリー"
            },
            {
                "hex": "#6c4f00",
                "name": "tabac",
                "phonetic": "タバ"
            },
            {
                "hex": "#b0665e",
                "name": "tuile",
                "phonetic": "テュイル"
            },
            {
                "hex": "#a94e75",
                "name": "tulipe",
                "phonetic": "テュリップ"
            },
            {
                "hex": "#996142",
                "name": "terre donbull",
                "phonetic": "テール ドンブル"
            },
            {
                "hex": "#d3d8c2",
                "name": "nacre",
                "phonetic": "ナクレ"
            },
            {
                "hex": "#ab7d65",
                "name": "terre de sienne naturelle",
                "phonetic": "テール ドゥ シェーヌ ナテュレル"
            },
            {
                "hex": "#a57e1b",
                "name": "tons de chasse",
                "phonetic": "トン ドゥ シャス"
            },
            {
                "hex": "#b8783f",
                "name": "terre cuite",
                "phonetic": "テール キュイット"
            },
            {
                "hex": "#623826",
                "name": "terre de sienne brulee",
                "phonetic": "テール ドゥ シェーヌ ブリュレ"
            },
            {
                "hex": "#af3501",
                "name": "tomette",
                "phonetic": "トメット"
            },
            {
                "hex": "#512754",
                "name": "tulipe noire",
                "phonetic": "テュリップ ノアール"
            },
            {
                "hex": "#fb5959",
                "name": "tomate",
                "phonetic": "トマート"
            },
            {
                "hex": "#f7fe72",
                "name": "narcisse",
                "phonetic": "ナーシス"
            },
            {
                "hex": "#fefa5a",
                "name": "nymphea",
                "phonetic": "ナンフェア"
            },
            {
                "hex": "#000000",
                "name": "noir",
                "phonetic": "ノアール"
            },
            {
                "hex": "#9ea914",
                "name": "palme",
                "phonetic": "パルム"
            },
            {
                "hex": "#b37026",
                "name": "noisette",
                "phonetic": "ノアゼット"
            },
            {
                "hex": "#527351",
                "name": "para",
                "phonetic": "パラ"
            },
            {
                "hex": "#65363a",
                "name": "nefle",
                "phonetic": "ネーフル"
            },
            {
                "hex": "#604d00",
                "name": "noix du bresil",
                "phonetic": "ノワ デュブレジル"
            },
            {
                "hex": "#46a0d7",
                "name": "nigelle",
                "phonetic": "ニゼル"
            },
            {
                "hex": "#875fc1",
                "name": "noix",
                "phonetic": "ノワ"
            },
            {
                "hex": "#794ac6",
                "name": "palme",
                "phonetic": "パルム"
            },
            {
                "hex": "#006a68",
                "name": "pin",
                "phonetic": "パン"
            },
            {
                "hex": "#868379",
                "name": "pigeon",
                "phonetic": "ピジョン"
            },
            {
                "hex": "#c60059",
                "name": "piment",
                "phonetic": "ピマン"
            },
            {
                "hex": "#fcee3f",
                "name": "pamplemousse",
                "phonetic": "パンプルムース"
            },
            {
                "hex": "#5e3a00",
                "name": "bistre",
                "phonetic": "ビストル"
            },
            {
                "hex": "#a64f1a",
                "name": "pain brule",
                "phonetic": "パン ブリュレ"
            },
            {
                "hex": "#bac53a",
                "name": "pistache",
                "phonetic": "ピスタッシュ"
            },
            {
                "hex": "#5a01b5",
                "name": "pensee",
                "phonetic": "パンセ"
            },
            {
                "hex": "#d38245",
                "name": "biscuit",
                "phonetic": "ビスキュイ"
            },
            {
                "hex": "#02623e",
                "name": "billard",
                "phonetic": "ビーヤール"
            },
            {
                "hex": "#67664e",
                "name": "buisson",
                "phonetic": "ビュイソン"
            },
            {
                "hex": "#d6a458",
                "name": "fauve",
                "phonetic": "フォーヴ"
            },
            {
                "hex": "#bd00bd",
                "name": "fuchsia blue",
                "phonetic": "フュクシャ ブルー"
            },
            {
                "hex": "#d3ceb0",
                "name": "ficelle",
                "phonetic": "フィセル"
            },
            {
                "hex": "#aeb3a2",
                "name": "fenouil",
                "phonetic": "フヌイユ"
            },
            {
                "hex": "#ee432b",
                "name": "feu",
                "phonetic": "フー"
            },
            {
                "hex": "#fde301",
                "name": "poussin",
                "phonetic": "プーサン"
            },
            {
                "hex": "#6a1a2e",
                "name": "puce",
                "phonetic": "ピュース"
            },
            {
                "hex": "#d07896",
                "name": "bougainvillee",
                "phonetic": "ブーガンヴィレ"
            },
            {
                "hex": "#c400ab",
                "name": "fuchsia rose",
                "phonetic": "フュクシャ ローズ"
            },
            {
                "hex": "#f3aba0",
                "name": "flamant rose",
                "phonetic": "フラマン ローズ"
            },
            {
                "hex": "#fffefd",
                "name": "blanc casse",
                "phonetic": "ブラン カーセ"
            },
            {
                "hex": "#750f3a",
                "name": "brun rouge",
                "phonetic": "ブラン ルージュ"
            },
            {
                "hex": "#76565f",
                "name": "brun van dyck",
                "phonetic": "ブラン ヴァン ディック"
            },
            {
                "hex": "#df0287",
                "name": "framboise",
                "phonetic": "フランボアーズ"
            },
            {
                "hex": "#8f5836",
                "name": "brun",
                "phonetic": "ブラン"
            },
            {
                "hex": "#422b1e",
                "name": "brun fonce",
                "phonetic": "ブラン フォンセ"
            },
            {
                "hex": "#995100",
                "name": "praline",
                "phonetic": "プラリーヌ"
            },
            {
                "hex": "#ffffff",
                "name": "blanc neige",
                "phonetic": "ブラン ネージュ"
            },
            {
                "hex": "#af6241",
                "name": "brique",
                "phonetic": "ブリック"
            },
            {
                "hex": "#c08fbd",
                "name": "bruyere",
                "phonetic": "ブリュイエール"
            },
            {
                "hex": "#abbe7e",
                "name": "bourgeon",
                "phonetic": "ブールジョン"
            },
            {
                "hex": "#000099",
                "name": "blue adriatique",
                "phonetic": "ブルー アドリアティック"
            },
            {
                "hex": "#80006c",
                "name": "bourgogne",
                "phonetic": "ブールゴーニュ"
            },
            {
                "hex": "#74b4c9",
                "name": "blue azur",
                "phonetic": "ブルー アジュール"
            },
            {
                "hex": "#791367",
                "name": "prune",
                "phonetic": "プリューヌ"
            },
            {
                "hex": "#0a77b1",
                "name": "blue acide",
                "phonetic": "ブルー アシード"
            },
            {
                "hex": "#bc105e",
                "name": "brugnon",
                "phonetic": "ブリュニョン"
            },
            {
                "hex": "#8b0181",
                "name": "pourpre",
                "phonetic": "プールプル"
            },
            {
                "hex": "#000051",
                "name": "blue armee de l\u0027air",
                "phonetic": "ブルー アルメ ドゥ レール"
            },
            {
                "hex": "#22039e",
                "name": "blue anglais",
                "phonetic": "ブルー アングレー"
            },
            {
                "hex": "#819ca7",
                "name": "blue opalin",
                "phonetic": "ブルー オパラン"
            },
            {
                "hex": "#7c9ccd",
                "name": "blue grise",
                "phonetic": "ブルー グリーゼ"
            },
            {
                "hex": "#018989",
                "name": "blue vert dense",
                "phonetic": "ブルー ヴェール ダンス"
            },
            {
                "hex": "#037b85",
                "name": "blue canard",
                "phonetic": "ブルー カナール"
            },
            {
                "hex": "#52007d",
                "name": "blue violet",
                "phonetic": "ブルー ヴィヨレ"
            },
            {
                "hex": "#7572fe",
                "name": "blue hortensia",
                "phonetic": "ブルー オルタンシャ"
            },
            {
                "hex": "#043c78",
                "name": "indigo",
                "phonetic": "インディゴ"
            },
            {
                "hex": "#0c2b96",
                "name": "blue indigo sombre",
                "phonetic": "ブルーインディゴーソンブル"
            },
            {
                "hex": "#3191b0",
                "name": "blue orient",
                "phonetic": "ブルー オリヤン"
            },
            {
                "hex": "#85beba",
                "name": "blue clair",
                "phonetic": "ブルー クレール"
            },
            {
                "hex": "#82afd0",
                "name": "blue gauloise",
                "phonetic": "ブルー ゴーロアーズ"
            },
            {
                "hex": "#0000ae",
                "name": "blue dur",
                "phonetic": "ブルー デュール"
            },
            {
                "hex": "#91eee0",
                "name": "blue pale",
                "phonetic": "ブルー パール"
            },
            {
                "hex": "#28799b",
                "name": "blue turquoise",
                "phonetic": "ブルー テュルコアーズ"
            },
            {
                "hex": "#00376f",
                "name": "blue nuit",
                "phonetic": "ブルー ニュイ"
            },
            {
                "hex": "#0f52b7",
                "name": "blue gitane",
                "phonetic": "ブルー ジターヌ"
            },
            {
                "hex": "#488995",
                "name": "blue nattier",
                "phonetic": "ブルー ナティエ"
            },
            {
                "hex": "#02c4b5",
                "name": "blue ciel",
                "phonetic": "ブルー シェル"
            },
            {
                "hex": "#004080",
                "name": "blue de chine",
                "phonetic": "ブルー ドゥ シーヌ"
            },
            {
                "hex": "#420265",
                "name": "blue paon",
                "phonetic": "ブルー パン"
            },
            {
                "hex": "#81a4c4",
                "name": "blue faience",
                "phonetic": "ブルー ファイヤンス"
            },
            {
                "hex": "#1d9bb1",
                "name": "blue petrole",
                "phonetic": "ブルー ペトロル"
            },
            {
                "hex": "#0046ae",
                "name": "blue mediterranee",
                "phonetic": "ブルー メディテラネ"
            },
            {
                "hex": "#9aaaaf",
                "name": "blue brouillard",
                "phonetic": "ブルー ブルイヤール"
            },
            {
                "hex": "#283d82",
                "name": "blue myosotis",
                "phonetic": "ブルー ミヨゾティース"
            },
            {
                "hex": "#01529a",
                "name": "blue bleuet",
                "phonetic": "ブルー ブルーエ"
            },
            {
                "hex": "#283d82",
                "name": "blue marine",
                "phonetic": "ブルー マリーヌ"
            },
            {
                "hex": "#859ab1",
                "name": "blue fume",
                "phonetic": "ブルー フュメ"
            },
            {
                "hex": "#88c6d2",
                "name": "blue porcelaine",
                "phonetic": "ブルー ポルスレーヌ"
            },
            {
                "hex": "#aa99d0",
                "name": "blue lavande",
                "phonetic": "ブルー ラヴァンド"
            },
            {
                "hex": "#5260ad",
                "name": "blue roi",
                "phonetic": "ブルー ロワ"
            },
            {
                "hex": "#ffd955",
                "name": "blond",
                "phonetic": "ブロン"
            },
            {
                "hex": "#bebc94",
                "name": "beige froid",
                "phonetic": "ベージュ フロワ"
            },
            {
                "hex": "#979468",
                "name": "bouleau",
                "phonetic": "ブーロー"
            },
            {
                "hex": "#9b8160",
                "name": "beige grise",
                "phonetic": "ベージュ グリーゼ"
            },
            {
                "hex": "#bf4040",
                "name": "braise",
                "phonetic": "ブレーズ"
            },
            {
                "hex": "#cca775",
                "name": "beige",
                "phonetic": "ベージュ"
            },
            {
                "hex": "#564bb6",
                "name": "blue royal",
                "phonetic": "ブルー ロワイヤル"
            },
            {
                "hex": "#82724d",
                "name": "bronze",
                "phonetic": "ブロンズ"
            },
            {
                "hex": "#e3a577",
                "name": "beige rose",
                "phonetic": "ベージュ ローゼ"
            },
            {
                "hex": "#f1dbc7",
                "name": "peche",
                "phonetic": "ペッシュ"
            },
            {
                "hex": "#7d8053",
                "name": "poiver vert",
                "phonetic": "ポアーヴル ヴェール"
            },
            {
                "hex": "#b3849b",
                "name": "bois de rose",
                "phonetic": "ボワ ドゥ ローズ"
            },
            {
                "hex": "#f8ae34",
                "name": "berlingot",
                "phonetic": "ベルランゴー"
            },
            {
                "hex": "#8a6d4f",
                "name": "bois",
                "phonetic": "ボワ"
            },
            {
                "hex": "#3868a3",
                "name": "pervenche",
                "phonetic": "ペルヴァンシュ"
            },
            {
                "hex": "#680663",
                "name": "bordeaux fonce",
                "phonetic": "ボルドー フォンセ"
            },
            {
                "hex": "#fb00af",
                "name": "petunia",
                "phonetic": "ペテュニア"
            },
            {
                "hex": "#7c0364",
                "name": "bordeaux clair",
                "phonetic": "ボルドー クレール"
            },
            {
                "hex": "#cc7d5b",
                "name": "bois fruitier",
                "phonetic": "ボワ フリュイティエ"
            },
            {
                "hex": "#e8c431",
                "name": "mais",
                "phonetic": "マイース"
            },
            {
                "hex": "#844500",
                "name": "marron",
                "phonetic": "マロン"
            },
            {
                "hex": "#895043",
                "name": "marron chaud",
                "phonetic": "マロン ショー"
            },
            {
                "hex": "#612f14",
                "name": "marocan",
                "phonetic": "マロカン"
            },
            {
                "hex": "#bfa68a",
                "name": "marron glaces",
                "phonetic": "マロン グラッセ"
            },
            {
                "hex": "#a9a59a",
                "name": "mastic",
                "phonetic": "マスティック"
            },
            {
                "hex": "#785200",
                "name": "marron assourdi",
                "phonetic": "マロン アッスールディ"
            },
            {
                "hex": "#3e423c",
                "name": "macadam",
                "phonetic": "マカダム"
            },
            {
                "hex": "#6a2c26",
                "name": "marron acajou",
                "phonetic": "マロン アカジュ"
            },
            {
                "hex": "#ff5959",
                "name": "mandarine",
                "phonetic": "マンダリーヌ"
            },
            {
                "hex": "#00a265",
                "name": "menthe",
                "phonetic": "マント"
            },
            {
                "hex": "#c0bea9",
                "name": "mouette",
                "phonetic": "ムエット"
            },
            {
                "hex": "#006297",
                "name": "lapis-lazuli",
                "phonetic": "ラピス ラジュリ"
            },
            {
                "hex": "#5b7b8e",
                "name": "myosotis",
                "phonetic": "ミョゾティス"
            },
            {
                "hex": "#820551",
                "name": "laque",
                "phonetic": "ラック"
            },
            {
                "hex": "#40005b",
                "name": "mure",
                "phonetic": "ミュール"
            },
            {
                "hex": "#d8c9d7",
                "name": "mauve",
                "phonetic": "モーヴ"
            },
            {
                "hex": "#fbc50b",
                "name": "miel",
                "phonetic": "ミエル"
            },
            {
                "hex": "#bb6605",
                "name": "merisier",
                "phonetic": "ムリジエ"
            },
            {
                "hex": "#c4a577",
                "name": "lan",
                "phonetic": "ラン"
            },
            {
                "hex": "#a07149",
                "name": "liege",
                "phonetic": "リエージュ"
            },
            {
                "hex": "#89013f",
                "name": "lie-de-vin",
                "phonetic": "リー ドゥ ヴァン"
            },
            {
                "hex": "#f00042",
                "name": "rouge",
                "phonetic": "ルージュ"
            },
            {
                "hex": "#e482c2",
                "name": "liseron",
                "phonetic": "リズロン"
            },
            {
                "hex": "#d55c53",
                "name": "rouille",
                "phonetic": "ルイユ"
            },
            {
                "hex": "#9fbb97",
                "name": "lichen",
                "phonetic": "リケン"
            },
            {
                "hex": "#dd8c2b",
                "name": "roux",
                "phonetic": "ルー"
            },
            {
                "hex": "#1e6f5a",
                "name": "lierre",
                "phonetic": "リエール"
            },
            {
                "hex": "#cda7fc",
                "name": "lilas",
                "phonetic": "リラ"
            },
            {
                "hex": "#f00066",
                "name": "rouge ardent",
                "phonetic": "ルージュ アルダン"
            },
            {
                "hex": "#f00078",
                "name": "rouge vif",
                "phonetic": "ルージュ ヴィフ"
            },
            {
                "hex": "#bc5f3a",
                "name": "rouge dan guru tail",
                "phonetic": "ルージュ ダングルテール"
            },
            {
                "hex": "#cce193",
                "name": "reseda",
                "phonetic": "レゼダ"
            },
            {
                "hex": "#be5678",
                "name": "rouge terni",
                "phonetic": "ルージュ テルニ"
            },
            {
                "hex": "#e7c523",
                "name": "renoncule",
                "phonetic": "ルノンキュール"
            },
            {
                "hex": "#b0003e",
                "name": "rouge sang",
                "phonetic": "ルージュ サン"
            },
            {
                "hex": "#bf0060",
                "name": "rouge rubis",
                "phonetic": "ルージュ リュビ"
            },
            {
                "hex": "#ff522d",
                "name": "rouge orange",
                "phonetic": "ルージュ オランジェ"
            },
            {
                "hex": "#9b5033",
                "name": "rouge de fair",
                "phonetic": "ルージュ ド フェール"
            },
            {
                "hex": "#415976",
                "name": "royal air force",
                "phonetic": "ロワイヤルエールフォルス"
            },
            {
                "hex": "#df9fab",
                "name": "rose",
                "phonetic": "ローズ"
            },
            {
                "hex": "#ac4a6a",
                "name": "rose corail",
                "phonetic": "ローズ コライユ"
            },
            {
                "hex": "#f4c6a6",
                "name": "rose the",
                "phonetic": "ローズ テ"
            },
            {
                "hex": "#f374da",
                "name": "rose hortensia",
                "phonetic": "ローズ オルタンシャ"
            },
            {
                "hex": "#fab1d8",
                "name": "rose tendre",
                "phonetic": "ローズ タンドル"
            },
            {
                "hex": "#e46d94",
                "name": "rose ibis",
                "phonetic": "ローズ イビス"
            },
            {
                "hex": "#f8afa5",
                "name": "rose saumon",
                "phonetic": "ローズ ソーモン"
            },
            {
                "hex": "#f36186",
                "name": "rose indien",
                "phonetic": "ローズ アンディヤン"
            },
            {
                "hex": "#ff1a81",
                "name": "rose shocking",
                "phonetic": "ローズ ショッキング"
            },
            {
                "hex": "#eed0df",
                "name": "rose dragee",
                "phonetic": "ローズ ドラジェ"
            },
            {
                "hex": "#de87aa",
                "name": "rose pale",
                "phonetic": "ローズ パール"
            },
            {
                "hex": "#f1c2cd",
                "name": "rose poudre",
                "phonetic": "ローズ プードル"
            },
            {
                "hex": "#d8a5ad",
                "name": "rose buvard",
                "phonetic": "ローズ ビュヴァール"
            },
            {
                "hex": "#df669f",
                "name": "rose peche",
                "phonetic": "ローズ ペーシュ"
            },
            {
                "hex": "#1b6358",
                "name": "laurier",
                "phonetic": "ローリエ"
            }
        ];
    }

    /**
     * 日本の色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getJapaneseColors = () => {
        return [
            {
                "hex": "#fef4f4",
                "name": "桜色",
                "phonetic": "さくらいろ"
            },
            {
                "hex": "#fdeffb",
                "name": "薄桜",
                "phonetic": "うすざくら"
            },
            {
                "hex": "#e9dfea",
                "name": "桜鼠",
                "phonetic": "さくらねず"
            },
            {
                "hex": "#e4d2d3",
                "name": "鴇鼠",
                "phonetic": "ときねず"
            },
            {
                "hex": "#f6bfb5",
                "name": "虹色",
                "phonetic": "にじいろ"
            },
            {
                "hex": "#f5b1bb",
                "name": "珊瑚色",
                "phonetic": "さんごいろ"
            },
            {
                "hex": "#f5b1b4",
                "name": "一斤染",
                "phonetic": "いっこんぞめ"
            },
            {
                "hex": "#efab93",
                "name": "宍色",
                "phonetic": "ししいろ"
            },
            {
                "hex": "#f2a0a1",
                "name": "紅梅色",
                "phonetic": "こうばいいろ"
            },
            {
                "hex": "#f0908d",
                "name": "薄紅",
                "phonetic": "うすべに"
            },
            {
                "hex": "#ee827c",
                "name": "甚三紅",
                "phonetic": "じんざもみ"
            },
            {
                "hex": "#f09199",
                "name": "桃色",
                "phonetic": "ももいろ"
            },
            {
                "hex": "#f4b3c2",
                "name": "鴇色",
                "phonetic": "ときいろ"
            },
            {
                "hex": "#eebbcb",
                "name": "撫子色",
                "phonetic": "なでしこいろ"
            },
            {
                "hex": "#e8d3c7",
                "name": "灰梅",
                "phonetic": "はいうめ"
            },
            {
                "hex": "#e8d3d1",
                "name": "灰桜",
                "phonetic": "はいざくら"
            },
            {
                "hex": "#e6cde3",
                "name": "淡紅藤",
                "phonetic": "あわべにふじ"
            },
            {
                "hex": "#e5abbe",
                "name": "石竹色",
                "phonetic": "せきちくいろ"
            },
            {
                "hex": "#e597b2",
                "name": "薄紅梅",
                "phonetic": "うすこうばい"
            },
            {
                "hex": "#e198b4",
                "name": "桃花色",
                "phonetic": "ももはないろ"
            },
            {
                "hex": "#eba0a2",
                "name": "朱華",
                "phonetic": "はねず"
            },
            {
                "hex": "#e4ab9b",
                "name": "水柿",
                "phonetic": "みずがき"
            },
            {
                "hex": "#e09e87",
                "name": "ときがら茶",
                "phonetic": "ときがらちゃ"
            },
            {
                "hex": "#d69090",
                "name": "退紅",
                "phonetic": "あらぞめ"
            },
            {
                "hex": "#d4acad",
                "name": "薄柿",
                "phonetic": "うすがき"
            },
            {
                "hex": "#c97586",
                "name": "長春色",
                "phonetic": "ちょうしゅんいろ"
            },
            {
                "hex": "#c099a0",
                "name": "梅鼠",
                "phonetic": "うめねず"
            },
            {
                "hex": "#b88884",
                "name": "鴇浅葱",
                "phonetic": "ときあさぎ"
            },
            {
                "hex": "#b48a76",
                "name": "梅染",
                "phonetic": "うめぞめ"
            },
            {
                "hex": "#a86965",
                "name": "蘇芳香",
                "phonetic": "すおうこう"
            },
            {
                "hex": "#a25768",
                "name": "浅蘇芳",
                "phonetic": "あさすおう"
            },
            {
                "hex": "#ec6d71",
                "name": "真朱",
                "phonetic": "まそお"
            },
            {
                "hex": "#eb6ea5",
                "name": "赤紫",
                "phonetic": "あかむらさき"
            },
            {
                "hex": "#e95295",
                "name": "躑躅色",
                "phonetic": "つつじいろ"
            },
            {
                "hex": "#e7609e",
                "name": "牡丹色",
                "phonetic": "ぼたんいろ"
            },
            {
                "hex": "#d0576b",
                "name": "今様色",
                "phonetic": "いまよういろ"
            },
            {
                "hex": "#c85179",
                "name": "中紅",
                "phonetic": "なかべに"
            },
            {
                "hex": "#e9546b",
                "name": "薔薇色",
                "phonetic": "ばらいろ"
            },
            {
                "hex": "#e95464",
                "name": "韓紅",
                "phonetic": "からくれない"
            },
            {
                "hex": "#c85554",
                "name": "銀朱",
                "phonetic": "ぎんしゅ"
            },
            {
                "hex": "#c53d43",
                "name": "赤紅",
                "phonetic": "あかべに"
            },
            {
                "hex": "#e83929",
                "name": "紅緋",
                "phonetic": "べにひ"
            },
            {
                "hex": "#e60033",
                "name": "赤",
                "phonetic": "あか"
            },
            {
                "hex": "#e2041b",
                "name": "猩々緋",
                "phonetic": "しょうじょうひ"
            },
            {
                "hex": "#d7003a",
                "name": "紅",
                "phonetic": "くれない"
            },
            {
                "hex": "#c9171e",
                "name": "深緋",
                "phonetic": "こきひ"
            },
            {
                "hex": "#d3381c",
                "name": "緋色",
                "phonetic": "ひいろ"
            },
            {
                "hex": "#ce5242",
                "name": "赤丹",
                "phonetic": "あかに"
            },
            {
                "hex": "#d9333f",
                "name": "紅赤",
                "phonetic": "べにあか"
            },
            {
                "hex": "#b94047",
                "name": "臙脂",
                "phonetic": "えんじ"
            },
            {
                "hex": "#ba2636",
                "name": "朱 緋",
                "phonetic": "あけ"
            },
            {
                "hex": "#b7282e",
                "name": "茜色",
                "phonetic": "あかねいろ"
            },
            {
                "hex": "#a73836",
                "name": "紅海老茶",
                "phonetic": "べにえびちゃ"
            },
            {
                "hex": "#9e3d3f",
                "name": "蘇芳",
                "phonetic": "すおう"
            },
            {
                "hex": "#a22041",
                "name": "真紅",
                "phonetic": "しんく"
            },
            {
                "hex": "#a22041",
                "name": "濃紅",
                "phonetic": "こいくれない"
            },
            {
                "hex": "#a23a52",
                "name": "苺色",
                "phonetic": "いちごいろ"
            },
            {
                "hex": "#f8f4e6",
                "name": "象牙色",
                "phonetic": "ぞうげいろ"
            },
            {
                "hex": "#ede4cd",
                "name": "練色",
                "phonetic": "ねりいろ"
            },
            {
                "hex": "#e9e4d4",
                "name": "灰白色",
                "phonetic": "かいはくしょく"
            },
            {
                "hex": "#ebe1a9",
                "name": "蒸栗色",
                "phonetic": "むしぐりいろ"
            },
            {
                "hex": "#f2f2b0",
                "name": "女郎花",
                "phonetic": "おみなえし"
            },
            {
                "hex": "#e4dc8a",
                "name": "枯草色",
                "phonetic": "かれくさいろ"
            },
            {
                "hex": "#f8e58c",
                "name": "淡黄",
                "phonetic": "たんこう"
            },
            {
                "hex": "#ddbb99",
                "name": "白茶",
                "phonetic": "しらちゃ"
            },
            {
                "hex": "#d7a98c",
                "name": "赤白橡",
                "phonetic": "あかしろつるばみ"
            },
            {
                "hex": "#f2c9ac",
                "name": "洗柿",
                "phonetic": "あらいがき"
            },
            {
                "hex": "#fff1cf",
                "name": "鳥の子色",
                "phonetic": "とりのこいろ"
            },
            {
                "hex": "#fddea5",
                "name": "蜂蜜色",
                "phonetic": "はちみついろ"
            },
            {
                "hex": "#fce2c4",
                "name": "肌色",
                "phonetic": "はだいろ"
            },
            {
                "hex": "#fde8d0",
                "name": "薄卵色",
                "phonetic": "うすたまごいろ"
            },
            {
                "hex": "#f9c89b",
                "name": "雄黄",
                "phonetic": "ゆうおう"
            },
            {
                "hex": "#f7bd8f",
                "name": "洒落柿",
                "phonetic": "しゃれがき"
            },
            {
                "hex": "#f6b894",
                "name": "赤香",
                "phonetic": "あかこう"
            },
            {
                "hex": "#f4dda5",
                "name": "砥粉色",
                "phonetic": "とのこいろ"
            },
            {
                "hex": "#f1bf99",
                "name": "肉色",
                "phonetic": "にくいろ"
            },
            {
                "hex": "#f1bf99",
                "name": "人色",
                "phonetic": "ひといろ"
            },
            {
                "hex": "#efcd9a",
                "name": "丁子色",
                "phonetic": "ちょうじいろ"
            },
            {
                "hex": "#efcd9a",
                "name": "香色",
                "phonetic": "こういろ"
            },
            {
                "hex": "#f0cfa0",
                "name": "薄香",
                "phonetic": "うすこう"
            },
            {
                "hex": "#edd3a1",
                "name": "浅黄",
                "phonetic": "うすき"
            },
            {
                "hex": "#e0c38c",
                "name": "枯色",
                "phonetic": "かれいろ"
            },
            {
                "hex": "#f3bf88",
                "name": "淡香",
                "phonetic": "うすこう"
            },
            {
                "hex": "#f7b977",
                "name": "杏色",
                "phonetic": "あんずいろ"
            },
            {
                "hex": "#f19072",
                "name": "東雲色",
                "phonetic": "しののめいろ"
            },
            {
                "hex": "#f19072",
                "name": "曙色",
                "phonetic": "あけぼのいろ"
            },
            {
                "hex": "#ee836f",
                "name": "珊瑚朱色",
                "phonetic": "さんごしゅいろ"
            },
            {
                "hex": "#eb9b6f",
                "name": "深支子",
                "phonetic": "こきくちなし"
            },
            {
                "hex": "#df7163",
                "name": "浅緋",
                "phonetic": "うすきひ"
            },
            {
                "hex": "#d57c6b",
                "name": "真赭",
                "phonetic": "まそほ"
            },
            {
                "hex": "#d0826c",
                "name": "洗朱",
                "phonetic": "あらいしゅ"
            },
            {
                "hex": "#ca8269",
                "name": "遠州茶",
                "phonetic": "えんしゅうちゃ"
            },
            {
                "hex": "#bb5548",
                "name": "紅樺色",
                "phonetic": "べにかばいろ"
            },
            {
                "hex": "#ab6953",
                "name": "赭",
                "phonetic": "そほ"
            },
            {
                "hex": "#ce7b51",
                "name": "蘇飛",
                "phonetic": "そひ"
            },
            {
                "hex": "#96514e",
                "name": "小豆色",
                "phonetic": "あずきいろ"
            },
            {
                "hex": "#8d6445",
                "name": "枯茶",
                "phonetic": "からちゃ"
            },
            {
                "hex": "#deb064",
                "name": "飴色",
                "phonetic": "あめいろ"
            },
            {
                "hex": "#bf7945",
                "name": "駱駝色",
                "phonetic": "らくだいろ"
            },
            {
                "hex": "#bc7634",
                "name": "土色",
                "phonetic": "つちいろ"
            },
            {
                "hex": "#b98c44",
                "name": "黄唐茶",
                "phonetic": "きがらちゃ"
            },
            {
                "hex": "#b79b5b",
                "name": "桑染",
                "phonetic": "くわぞめ"
            },
            {
                "hex": "#b77b57",
                "name": "櫨色",
                "phonetic": "はじいろ"
            },
            {
                "hex": "#b68d4c",
                "name": "黄橡",
                "phonetic": "きつるばみ"
            },
            {
                "hex": "#ad7d4c",
                "name": "丁字染",
                "phonetic": "ちょうじぞめ"
            },
            {
                "hex": "#ad7d4c",
                "name": "香染",
                "phonetic": "こうぞめ"
            },
            {
                "hex": "#ae7c4f",
                "name": "枇杷茶",
                "phonetic": "びわちゃ"
            },
            {
                "hex": "#ad7e4e",
                "name": "芝翫茶",
                "phonetic": "しかんちゃ"
            },
            {
                "hex": "#ae7c58",
                "name": "焦香",
                "phonetic": "こがれこう"
            },
            {
                "hex": "#a86f4c",
                "name": "胡桃色",
                "phonetic": "くるみいろ"
            },
            {
                "hex": "#946243",
                "name": "渋紙色",
                "phonetic": "しぶかみいろ"
            },
            {
                "hex": "#917347",
                "name": "朽葉色",
                "phonetic": "くちばいろ"
            },
            {
                "hex": "#956f29",
                "name": "桑茶",
                "phonetic": "くわちゃ"
            },
            {
                "hex": "#8c7042",
                "name": "路考茶",
                "phonetic": "ろこうちゃ"
            },
            {
                "hex": "#7b6c3e",
                "name": "国防色",
                "phonetic": "こくぼうしょく"
            },
            {
                "hex": "#d8a373",
                "name": "伽羅色",
                "phonetic": "きゃらいろ"
            },
            {
                "hex": "#cd8c5c",
                "name": "江戸茶",
                "phonetic": "えどちゃ"
            },
            {
                "hex": "#cd5e3c",
                "name": "樺色",
                "phonetic": "かばいろ"
            },
            {
                "hex": "#cb8347",
                "name": "紅鬱金",
                "phonetic": "べにうこん"
            },
            {
                "hex": "#c37854",
                "name": "土器色",
                "phonetic": "かわらけいろ"
            },
            {
                "hex": "#c38743",
                "name": "狐色",
                "phonetic": "きつねいろ"
            },
            {
                "hex": "#c39143",
                "name": "黄土色",
                "phonetic": "おうどいろ"
            },
            {
                "hex": "#bf783a",
                "name": "琥珀色",
                "phonetic": "こはくいろ"
            },
            {
                "hex": "#bb5535",
                "name": "赤茶",
                "phonetic": "あかちゃ"
            },
            {
                "hex": "#bb5520",
                "name": "代赭",
                "phonetic": "たいしゃ"
            },
            {
                "hex": "#b55233",
                "name": "煉瓦色",
                "phonetic": "れんがいろ"
            },
            {
                "hex": "#aa4f37",
                "name": "雀茶",
                "phonetic": "すずめちゃ"
            },
            {
                "hex": "#9f563a",
                "name": "団十郎茶",
                "phonetic": "だんじゅうろうちゃ"
            },
            {
                "hex": "#9f563a",
                "name": "柿渋色",
                "phonetic": "かきしぶいろ"
            },
            {
                "hex": "#9a493f",
                "name": "紅鳶",
                "phonetic": "べにとび"
            },
            {
                "hex": "#98623c",
                "name": "灰茶",
                "phonetic": "はいちゃ"
            },
            {
                "hex": "#965042",
                "name": "茶色",
                "phonetic": "ちゃいろ"
            },
            {
                "hex": "#965036",
                "name": "檜皮色",
                "phonetic": "ひわだいろ"
            },
            {
                "hex": "#95483f",
                "name": "鳶色",
                "phonetic": "とびいろ"
            },
            {
                "hex": "#954e2a",
                "name": "柿茶",
                "phonetic": "かきちゃ"
            },
            {
                "hex": "#8f2e14",
                "name": "弁柄色",
                "phonetic": "べんがらいろ"
            },
            {
                "hex": "#8a3319",
                "name": "赤錆色",
                "phonetic": "あかさびいろ"
            },
            {
                "hex": "#8a3b00",
                "name": "褐色",
                "phonetic": "かっしょく"
            },
            {
                "hex": "#852e19",
                "name": "栗梅",
                "phonetic": "くりうめ"
            },
            {
                "hex": "#7b4741",
                "name": "紅檜皮",
                "phonetic": "べにひはだ"
            },
            {
                "hex": "#773c30",
                "name": "海老茶",
                "phonetic": "えびちゃ"
            },
            {
                "hex": "#783c1d",
                "name": "唐茶",
                "phonetic": "からちゃ"
            },
            {
                "hex": "#762f07",
                "name": "栗色",
                "phonetic": "くりいろ"
            },
            {
                "hex": "#752100",
                "name": "赤銅色",
                "phonetic": "しゃくどういろ"
            },
            {
                "hex": "#6c3524",
                "name": "錆色",
                "phonetic": "さびいろ"
            },
            {
                "hex": "#683f36",
                "name": "赤褐色",
                "phonetic": "せっかっしょく"
            },
            {
                "hex": "#664032",
                "name": "茶褐色",
                "phonetic": "ちゃかっしょく"
            },
            {
                "hex": "#6d3c32",
                "name": "栗皮茶",
                "phonetic": "くりかわちゃ"
            },
            {
                "hex": "#583822",
                "name": "黒茶",
                "phonetic": "くろちゃ"
            },
            {
                "hex": "#6c2c2f",
                "name": "葡萄茶",
                "phonetic": "えびちゃ"
            },
            {
                "hex": "#640125",
                "name": "葡萄色",
                "phonetic": "えびいろ"
            },
            {
                "hex": "#f8b862",
                "name": "萱草色",
                "phonetic": "かんぞういろ"
            },
            {
                "hex": "#f6ad49",
                "name": "柑子色",
                "phonetic": "こうじいろ"
            },
            {
                "hex": "#f39800",
                "name": "金茶",
                "phonetic": "きんちゃ"
            },
            {
                "hex": "#f08300",
                "name": "蜜柑色",
                "phonetic": "みかんいろ"
            },
            {
                "hex": "#ec6d51",
                "name": "鉛丹色",
                "phonetic": "えんたんいろ"
            },
            {
                "hex": "#ee7948",
                "name": "黄丹",
                "phonetic": "おうに"
            },
            {
                "hex": "#ed6d3d",
                "name": "柿色",
                "phonetic": "かきいろ"
            },
            {
                "hex": "#ec6800",
                "name": "黄赤",
                "phonetic": "きあか"
            },
            {
                "hex": "#ec6800",
                "name": "人参色",
                "phonetic": "にんじんいろ"
            },
            {
                "hex": "#ee7800",
                "name": "橙色",
                "phonetic": "だいだいいろ"
            },
            {
                "hex": "#eb6238",
                "name": "照柿",
                "phonetic": "てりがき"
            },
            {
                "hex": "#ea5506",
                "name": "赤橙",
                "phonetic": "あかだいだい"
            },
            {
                "hex": "#ea5506",
                "name": "金赤",
                "phonetic": "きんあか"
            },
            {
                "hex": "#eb6101",
                "name": "朱色",
                "phonetic": "しゅいろ"
            },
            {
                "hex": "#e49e61",
                "name": "小麦色",
                "phonetic": "こむぎいろ"
            },
            {
                "hex": "#e45e32",
                "name": "丹色",
                "phonetic": "にいろ"
            },
            {
                "hex": "#e17b34",
                "name": "黄茶",
                "phonetic": "きちゃ"
            },
            {
                "hex": "#dd7a56",
                "name": "肉桂色",
                "phonetic": "にっけいいろ"
            },
            {
                "hex": "#db8449",
                "name": "赤朽葉色",
                "phonetic": "あかくちばいろ"
            },
            {
                "hex": "#d66a35",
                "name": "黄櫨染",
                "phonetic": "こうろぜん"
            },
            {
                "hex": "#ffd900",
                "name": "蒲公英色",
                "phonetic": "たんぽぽいろ"
            },
            {
                "hex": "#ffd911",
                "name": "黄色",
                "phonetic": "きいろ"
            },
            {
                "hex": "#ffea00",
                "name": "中黄",
                "phonetic": "ちゅうき"
            },
            {
                "hex": "#ffec47",
                "name": "菜の花色",
                "phonetic": "なのはないろ"
            },
            {
                "hex": "#fef263",
                "name": "黄檗色",
                "phonetic": "きはだいろ"
            },
            {
                "hex": "#fcd575",
                "name": "卵色",
                "phonetic": "たまごいろ"
            },
            {
                "hex": "#fbd26b",
                "name": "花葉色",
                "phonetic": "はなばいろ"
            },
            {
                "hex": "#f5e56b",
                "name": "刈安色",
                "phonetic": "かりやすいろ"
            },
            {
                "hex": "#eec362",
                "name": "玉蜀黍色",
                "phonetic": "とうもろこしいろ"
            },
            {
                "hex": "#ebd842",
                "name": "金糸雀色",
                "phonetic": "かなりあいろ"
            },
            {
                "hex": "#ffdb4f",
                "name": "黄支子色",
                "phonetic": "きくちなしいろ"
            },
            {
                "hex": "#fbca4d",
                "name": "支子色",
                "phonetic": "くちなしいろ"
            },
            {
                "hex": "#fcc800",
                "name": "向日葵色",
                "phonetic": "ひまわりいろ"
            },
            {
                "hex": "#f8b500",
                "name": "山吹色",
                "phonetic": "やまぶきいろ"
            },
            {
                "hex": "#fabf14",
                "name": "鬱金色",
                "phonetic": "うこんいろ"
            },
            {
                "hex": "#f7c114",
                "name": "藤黄",
                "phonetic": "とうおう"
            },
            {
                "hex": "#e6b422",
                "name": "金色",
                "phonetic": "こんじき"
            },
            {
                "hex": "#e6b400",
                "name": "黄金",
                "phonetic": "こがね"
            },
            {
                "hex": "#d9a624",
                "name": "櫨染",
                "phonetic": "はじぞめ"
            },
            {
                "hex": "#d3a24f",
                "name": "黄朽葉色",
                "phonetic": "きくちばいろ"
            },
            {
                "hex": "#c89931",
                "name": "山吹茶",
                "phonetic": "やまぶきちゃ"
            },
            {
                "hex": "#d0af47",
                "name": "芥子色",
                "phonetic": "からしいろ"
            },
            {
                "hex": "#8b9683",
                "name": "豆がら茶",
                "phonetic": "まめがらちゃ"
            },
            {
                "hex": "#6e7955",
                "name": "麹塵",
                "phonetic": "きくじん"
            },
            {
                "hex": "#767c6b",
                "name": "山鳩色",
                "phonetic": "やまばといろ"
            },
            {
                "hex": "#888e7e",
                "name": "利休鼠",
                "phonetic": "りきゅうねずみ"
            },
            {
                "hex": "#5a544b",
                "name": "海松茶",
                "phonetic": "みるちゃ"
            },
            {
                "hex": "#56564b",
                "name": "藍海松茶",
                "phonetic": "あいみるちゃ"
            },
            {
                "hex": "#555647",
                "name": "藍媚茶",
                "phonetic": "あいこびちゃ"
            },
            {
                "hex": "#494a41",
                "name": "千歳茶",
                "phonetic": "せんさいちゃ"
            },
            {
                "hex": "#6b6f59",
                "name": "岩井茶",
                "phonetic": "いわいちゃ"
            },
            {
                "hex": "#474b42",
                "name": "仙斎茶",
                "phonetic": "せんさいちゃ"
            },
            {
                "hex": "#333631",
                "name": "黒緑",
                "phonetic": "くろみどり"
            },
            {
                "hex": "#5b6356",
                "name": "柳煤竹",
                "phonetic": "やなぎすすたけ"
            },
            {
                "hex": "#726250",
                "name": "樺茶色",
                "phonetic": "かばちゃいろ"
            },
            {
                "hex": "#9d896c",
                "name": "空五倍子色",
                "phonetic": "うつぶしいろ"
            },
            {
                "hex": "#94846a",
                "name": "生壁色",
                "phonetic": "なまかべいろ"
            },
            {
                "hex": "#897858",
                "name": "肥後煤竹",
                "phonetic": "ひごすすたけ"
            },
            {
                "hex": "#716246",
                "name": "媚茶",
                "phonetic": "こびちゃ"
            },
            {
                "hex": "#cbb994",
                "name": "白橡",
                "phonetic": "しろつるばみ"
            },
            {
                "hex": "#d6c6af",
                "name": "亜麻色",
                "phonetic": "あまいろ"
            },
            {
                "hex": "#bfa46f",
                "name": "榛色",
                "phonetic": "はしばみいろ"
            },
            {
                "hex": "#9e9478",
                "name": "灰汁色",
                "phonetic": "あくいろ"
            },
            {
                "hex": "#a59564",
                "name": "利休茶",
                "phonetic": "りきゅうちゃ"
            },
            {
                "hex": "#715c1f",
                "name": "鶯茶",
                "phonetic": "うぐいすちゃ"
            },
            {
                "hex": "#c7b370",
                "name": "木蘭色",
                "phonetic": "もくらんじき"
            },
            {
                "hex": "#dcd3b2",
                "name": "砂色",
                "phonetic": "すないろ"
            },
            {
                "hex": "#a19361",
                "name": "油色",
                "phonetic": "あぶらいろ"
            },
            {
                "hex": "#8f8667",
                "name": "利休色",
                "phonetic": "りきゅういろ"
            },
            {
                "hex": "#887938",
                "name": "梅幸茶",
                "phonetic": "ばいこうちゃ"
            },
            {
                "hex": "#6a5d21",
                "name": "璃寛茶",
                "phonetic": "りかんちゃ"
            },
            {
                "hex": "#918754",
                "name": "黄海松茶",
                "phonetic": "きみるちゃ"
            },
            {
                "hex": "#a69425",
                "name": "菜種油色",
                "phonetic": "なたねゆいろ"
            },
            {
                "hex": "#ada250",
                "name": "青朽葉",
                "phonetic": "あおくちば"
            },
            {
                "hex": "#938b4b",
                "name": "根岸色",
                "phonetic": "ねぎしいろ"
            },
            {
                "hex": "#8c8861",
                "name": "鶸茶",
                "phonetic": "ひわちゃ"
            },
            {
                "hex": "#a1a46d",
                "name": "柳茶",
                "phonetic": "やなぎちゃ"
            },
            {
                "hex": "#726d40",
                "name": "海松色",
                "phonetic": "みるいろ"
            },
            {
                "hex": "#928c36",
                "name": "鶯色",
                "phonetic": "うぐいすいろ"
            },
            {
                "hex": "#dccb18",
                "name": "緑黄色",
                "phonetic": "りょくおうしょく"
            },
            {
                "hex": "#d7cf3a",
                "name": "鶸色",
                "phonetic": "ひわいろ"
            },
            {
                "hex": "#c5c56a",
                "name": "抹茶色",
                "phonetic": "まっちゃいろ"
            },
            {
                "hex": "#c3d825",
                "name": "若草色",
                "phonetic": "わかくさいろ"
            },
            {
                "hex": "#b8d200",
                "name": "黄緑",
                "phonetic": "きみどり"
            },
            {
                "hex": "#e0ebaf",
                "name": "若芽色",
                "phonetic": "わかめいろ"
            },
            {
                "hex": "#d8e698",
                "name": "若菜色",
                "phonetic": "わかないろ"
            },
            {
                "hex": "#c7dc68",
                "name": "若苗色",
                "phonetic": "わかなえいろ"
            },
            {
                "hex": "#99ab4e",
                "name": "青丹",
                "phonetic": "あおに"
            },
            {
                "hex": "#7b8d42",
                "name": "草色",
                "phonetic": "くさいろ"
            },
            {
                "hex": "#69821b",
                "name": "苔色",
                "phonetic": "こけいろ"
            },
            {
                "hex": "#aacf53",
                "name": "萌黄",
                "phonetic": "もえぎ"
            },
            {
                "hex": "#b0ca71",
                "name": "苗色",
                "phonetic": "なえいろ"
            },
            {
                "hex": "#b9d08b",
                "name": "若葉色",
                "phonetic": "わかばいろ"
            },
            {
                "hex": "#839b5c",
                "name": "松葉色",
                "phonetic": "まつばいろ"
            },
            {
                "hex": "#cee4ae",
                "name": "夏虫色",
                "phonetic": "なつむしいろ"
            },
            {
                "hex": "#82ae46",
                "name": "鶸萌黄",
                "phonetic": "ひわもえぎ"
            },
            {
                "hex": "#a8c97f",
                "name": "柳色",
                "phonetic": "やなぎいろ"
            },
            {
                "hex": "#9ba88d",
                "name": "青白橡",
                "phonetic": "あおしろつるばみ"
            },
            {
                "hex": "#c8d5bb",
                "name": "柳鼠",
                "phonetic": "やなぎねず"
            },
            {
                "hex": "#c1d8ac",
                "name": "裏葉柳",
                "phonetic": "うらはやなぎ"
            },
            {
                "hex": "#a8bf93",
                "name": "山葵色",
                "phonetic": "わさびいろ"
            },
            {
                "hex": "#769164",
                "name": "老竹色",
                "phonetic": "おいたけいろ"
            },
            {
                "hex": "#d6e9ca",
                "name": "白緑",
                "phonetic": "びゃくろく"
            },
            {
                "hex": "#93ca76",
                "name": "淡萌黄",
                "phonetic": "うすもえぎ"
            },
            {
                "hex": "#93b881",
                "name": "柳染",
                "phonetic": "やなぎぞめ"
            },
            {
                "hex": "#badcad",
                "name": "薄萌葱",
                "phonetic": "うすもえぎ"
            },
            {
                "hex": "#97a791",
                "name": "深川鼠",
                "phonetic": "ふかがわねずみ"
            },
            {
                "hex": "#98d98e",
                "name": "若緑",
                "phonetic": "わかみどり"
            },
            {
                "hex": "#88cb7f",
                "name": "浅緑",
                "phonetic": "あさみどり"
            },
            {
                "hex": "#69b076",
                "name": "薄緑",
                "phonetic": "うすみどり"
            },
            {
                "hex": "#6b7b6e",
                "name": "青鈍",
                "phonetic": "あおにび"
            },
            {
                "hex": "#bed2c3",
                "name": "青磁鼠",
                "phonetic": "せいじねず"
            },
            {
                "hex": "#93b69c",
                "name": "薄青",
                "phonetic": "うすあお"
            },
            {
                "hex": "#a6c8b2",
                "name": "錆青磁",
                "phonetic": "さびせいじ"
            },
            {
                "hex": "#47885e",
                "name": "緑青色",
                "phonetic": "りょくしょういろ"
            },
            {
                "hex": "#316745",
                "name": "千歳緑",
                "phonetic": "ちとせみどり"
            },
            {
                "hex": "#68be8d",
                "name": "若竹色",
                "phonetic": "わかたけいろ"
            },
            {
                "hex": "#3eb370",
                "name": "緑",
                "phonetic": "みどり"
            },
            {
                "hex": "#007b43",
                "name": "常磐色",
                "phonetic": "ときわいろ"
            },
            {
                "hex": "#bed3ca",
                "name": "千草鼠",
                "phonetic": "ちぐさねず"
            },
            {
                "hex": "#92b5a9",
                "name": "千草色",
                "phonetic": "ちぐさいろ"
            },
            {
                "hex": "#7ebea5",
                "name": "青磁色",
                "phonetic": "せいじいろ"
            },
            {
                "hex": "#7ebeab",
                "name": "青竹色",
                "phonetic": "あおたけいろ"
            },
            {
                "hex": "#028760",
                "name": "常磐緑",
                "phonetic": "ときわみどり"
            },
            {
                "hex": "#3b7960",
                "name": "木賊色",
                "phonetic": "とくさいろ"
            },
            {
                "hex": "#2f5d50",
                "name": "天鵞絨",
                "phonetic": "びろうど"
            },
            {
                "hex": "#3a5b52",
                "name": "虫襖",
                "phonetic": "むしあお"
            },
            {
                "hex": "#475950",
                "name": "革色",
                "phonetic": "かわいろ"
            },
            {
                "hex": "#00552e",
                "name": "深緑",
                "phonetic": "ふかみどり"
            },
            {
                "hex": "#005243",
                "name": "鉄色",
                "phonetic": "てついろ"
            },
            {
                "hex": "#203700",
                "name": "平和色",
                "phonetic": "へいわいろ"
            },
            {
                "hex": "#006e50",
                "name": "萌葱色",
                "phonetic": "もえぎいろ"
            },
            {
                "hex": "#00a380",
                "name": "花緑青",
                "phonetic": "はなろくしょう"
            },
            {
                "hex": "#38b484",
                "name": "翡翠色",
                "phonetic": "ひすいいろ"
            },
            {
                "hex": "#00a498",
                "name": "青緑",
                "phonetic": "あおみどり"
            },
            {
                "hex": "#80aba0",
                "name": "水浅葱",
                "phonetic": "みずあさぎ"
            },
            {
                "hex": "#5c929a",
                "name": "錆浅葱",
                "phonetic": "さびあさぎ"
            },
            {
                "hex": "#478384",
                "name": "青碧",
                "phonetic": "せいへき"
            },
            {
                "hex": "#43676b",
                "name": "御召茶",
                "phonetic": "おめしちゃ"
            },
            {
                "hex": "#80989b",
                "name": "湊鼠",
                "phonetic": "みなとねずみ"
            },
            {
                "hex": "#2c4f54",
                "name": "高麗納戸",
                "phonetic": "こうらいなんど"
            },
            {
                "hex": "#1f3134",
                "name": "百入茶",
                "phonetic": "ももしおちゃ"
            },
            {
                "hex": "#47585c",
                "name": "錆鼠",
                "phonetic": "さびねず"
            },
            {
                "hex": "#485859",
                "name": "錆鉄御納戸",
                "phonetic": "さびてつおなんど"
            },
            {
                "hex": "#6c848d",
                "name": "藍鼠",
                "phonetic": "あいねず"
            },
            {
                "hex": "#53727d",
                "name": "錆御納戸",
                "phonetic": "さびおなんど"
            },
            {
                "hex": "#5b7e91",
                "name": "舛花色",
                "phonetic": "ますはないろ"
            },
            {
                "hex": "#426579",
                "name": "熨斗目花色",
                "phonetic": "のしめはないろ"
            },
            {
                "hex": "#4c6473",
                "name": "御召御納戸",
                "phonetic": "おめしおなんど"
            },
            {
                "hex": "#455765",
                "name": "鉄御納戸",
                "phonetic": "てつおなんど"
            },
            {
                "hex": "#44617b",
                "name": "紺鼠",
                "phonetic": "こんねず"
            },
            {
                "hex": "#393f4c",
                "name": "藍鉄",
                "phonetic": "あいてつ"
            },
            {
                "hex": "#393e4f",
                "name": "青褐",
                "phonetic": "あおかち"
            },
            {
                "hex": "#203744",
                "name": "褐返",
                "phonetic": "かちかえし"
            },
            {
                "hex": "#4d4c61",
                "name": "褐色",
                "phonetic": "かちいろ"
            },
            {
                "hex": "#eaf4fc",
                "name": "月白",
                "phonetic": "げっぱく"
            },
            {
                "hex": "#eaedf7",
                "name": "白菫色",
                "phonetic": "しろすみれいろ"
            },
            {
                "hex": "#e8ecef",
                "name": "白花色",
                "phonetic": "しらはないろ"
            },
            {
                "hex": "#ebf6f7",
                "name": "藍白",
                "phonetic": "あいじろ"
            },
            {
                "hex": "#c1e4e9",
                "name": "白藍",
                "phonetic": "しらあい"
            },
            {
                "hex": "#bce2e8",
                "name": "水色",
                "phonetic": "みずいろ"
            },
            {
                "hex": "#a2d7dd",
                "name": "瓶覗",
                "phonetic": "かめのぞき"
            },
            {
                "hex": "#abced8",
                "name": "秘色色",
                "phonetic": "ひそくいろ"
            },
            {
                "hex": "#a0d8ef",
                "name": "空色",
                "phonetic": "そらいろ"
            },
            {
                "hex": "#89c3eb",
                "name": "勿忘草色",
                "phonetic": "わすれなぐさいろ"
            },
            {
                "hex": "#84a2d4",
                "name": "青藤色",
                "phonetic": "あおふじいろ"
            },
            {
                "hex": "#83ccd2",
                "name": "白群",
                "phonetic": "びゃくぐん"
            },
            {
                "hex": "#84b9cb",
                "name": "浅縹",
                "phonetic": "あさはなだ"
            },
            {
                "hex": "#698aab",
                "name": "薄花色",
                "phonetic": "うすはないろ"
            },
            {
                "hex": "#008899",
                "name": "納戸色",
                "phonetic": "なんどいろ"
            },
            {
                "hex": "#00a3af",
                "name": "浅葱色",
                "phonetic": "あさぎいろ"
            },
            {
                "hex": "#2a83a2",
                "name": "花浅葱",
                "phonetic": "はなあさぎ"
            },
            {
                "hex": "#59b9c6",
                "name": "新橋色",
                "phonetic": "しんばしいろ"
            },
            {
                "hex": "#2ca9e1",
                "name": "天色",
                "phonetic": "あまいろ"
            },
            {
                "hex": "#38a1db",
                "name": "露草色",
                "phonetic": "つゆくさいろ"
            },
            {
                "hex": "#0095d9",
                "name": "青",
                "phonetic": "あお"
            },
            {
                "hex": "#0094c8",
                "name": "薄藍",
                "phonetic": "うすあい"
            },
            {
                "hex": "#2792c3",
                "name": "縹色",
                "phonetic": "はなだいろ"
            },
            {
                "hex": "#007bbb",
                "name": "紺碧",
                "phonetic": "こんぺき"
            },
            {
                "hex": "#5383c3",
                "name": "薄群青",
                "phonetic": "うすぐんじょう"
            },
            {
                "hex": "#5a79ba",
                "name": "薄花桜",
                "phonetic": "うすはなざくら"
            },
            {
                "hex": "#4c6cb3",
                "name": "群青色",
                "phonetic": "ぐんじょういろ"
            },
            {
                "hex": "#3e62ad",
                "name": "杜若色",
                "phonetic": "かきつばたいろ"
            },
            {
                "hex": "#1e50a2",
                "name": "瑠璃色",
                "phonetic": "るりいろ"
            },
            {
                "hex": "#507ea4",
                "name": "薄縹",
                "phonetic": "うすはなだ"
            },
            {
                "hex": "#19448e",
                "name": "瑠璃紺",
                "phonetic": "るりこん"
            },
            {
                "hex": "#164a84",
                "name": "紺瑠璃",
                "phonetic": "こんるり"
            },
            {
                "hex": "#165e83",
                "name": "藍色",
                "phonetic": "あいいろ"
            },
            {
                "hex": "#274a78",
                "name": "青藍",
                "phonetic": "せいらん"
            },
            {
                "hex": "#2a4073",
                "name": "深縹",
                "phonetic": "こきはなだ"
            },
            {
                "hex": "#223a70",
                "name": "紺色",
                "phonetic": "こんいろ"
            },
            {
                "hex": "#192f60",
                "name": "紺青",
                "phonetic": "こんじょう"
            },
            {
                "hex": "#1c305c",
                "name": "留紺",
                "phonetic": "とめこん"
            },
            {
                "hex": "#0f2350",
                "name": "濃藍",
                "phonetic": "こいあい"
            },
            {
                "hex": "#17184b",
                "name": "鉄紺",
                "phonetic": "てつこん"
            },
            {
                "hex": "#0d0015",
                "name": "漆黒",
                "phonetic": "しっこく"
            },
            {
                "hex": "#bbc8e6",
                "name": "淡藤色",
                "phonetic": "あわふじいろ"
            },
            {
                "hex": "#bbbcde",
                "name": "藤色",
                "phonetic": "ふじいろ"
            },
            {
                "hex": "#8491c3",
                "name": "紅掛空色",
                "phonetic": "べにかけそらいろ"
            },
            {
                "hex": "#8491c3",
                "name": "紅碧",
                "phonetic": "べにみどり"
            },
            {
                "hex": "#4d5aaf",
                "name": "紺桔梗",
                "phonetic": "こんききょう"
            },
            {
                "hex": "#4d5aaf",
                "name": "花色",
                "phonetic": "はないろ"
            },
            {
                "hex": "#4a488e",
                "name": "紺藍",
                "phonetic": "こんあい"
            },
            {
                "hex": "#4d4398",
                "name": "紅桔梗",
                "phonetic": "べにききょう"
            },
            {
                "hex": "#5654a2",
                "name": "桔梗色",
                "phonetic": "ききょういろ"
            },
            {
                "hex": "#706caa",
                "name": "藤納戸",
                "phonetic": "ふじなんど"
            },
            {
                "hex": "#68699b",
                "name": "紅掛花色",
                "phonetic": "べにかけはないろ"
            },
            {
                "hex": "#867ba9",
                "name": "紫苑色",
                "phonetic": "しおんいろ"
            },
            {
                "hex": "#dbd0e6",
                "name": "白藤色",
                "phonetic": "しらふじいろ"
            },
            {
                "hex": "#a59aca",
                "name": "藤紫",
                "phonetic": "ふじむらさき"
            },
            {
                "hex": "#7058a3",
                "name": "菫色",
                "phonetic": "すみれいろ"
            },
            {
                "hex": "#674598",
                "name": "青紫",
                "phonetic": "あおむらさき"
            },
            {
                "hex": "#674196",
                "name": "菖蒲色",
                "phonetic": "しょうぶいろ"
            },
            {
                "hex": "#9079ad",
                "name": "竜胆色",
                "phonetic": "りんどういろ"
            },
            {
                "hex": "#745399",
                "name": "江戸紫",
                "phonetic": "えどむらさき"
            },
            {
                "hex": "#65318e",
                "name": "本紫",
                "phonetic": "ほんむらさき"
            },
            {
                "hex": "#522f60",
                "name": "葡萄色",
                "phonetic": "ぶどういろ"
            },
            {
                "hex": "#493759",
                "name": "深紫",
                "phonetic": "ふかむらさき"
            },
            {
                "hex": "#2e2930",
                "name": "紫黒",
                "phonetic": "しこく"
            },
            {
                "hex": "#460e44",
                "name": "紫紺",
                "phonetic": "しこん"
            },
            {
                "hex": "#55295b",
                "name": "桑の実色",
                "phonetic": "くわのみいろ"
            },
            {
                "hex": "#74325c",
                "name": "暗紅色",
                "phonetic": "あんこうしょく"
            },
            {
                "hex": "#884898",
                "name": "紫",
                "phonetic": "むらさき"
            },
            {
                "hex": "#9985bb",
                "name": "楝色",
                "phonetic": "おうちいろ"
            },
            {
                "hex": "#c0a2c7",
                "name": "薄葡萄",
                "phonetic": "うすぶどう"
            },
            {
                "hex": "#895b8b",
                "name": "古代紫",
                "phonetic": "こだいむらさき"
            },
            {
                "hex": "#824883",
                "name": "茄子紺",
                "phonetic": "なすこん"
            },
            {
                "hex": "#915c84",
                "name": "二藍",
                "phonetic": "ふたあい"
            },
            {
                "hex": "#9d5b80",
                "name": "京紫",
                "phonetic": "きょうむらさき"
            },
            {
                "hex": "#7a4170",
                "name": "蒲葡",
                "phonetic": "えびぞめ"
            },
            {
                "hex": "#bc64a2",
                "name": "若紫",
                "phonetic": "わかむらさき"
            },
            {
                "hex": "#b44c97",
                "name": "紅紫",
                "phonetic": "べにむらさき"
            },
            {
                "hex": "#aa4c8f",
                "name": "梅紫",
                "phonetic": "うめむらさき"
            },
            {
                "hex": "#cc7eb1",
                "name": "菖蒲色",
                "phonetic": "あやめいろ"
            },
            {
                "hex": "#cca6bf",
                "name": "紅藤色",
                "phonetic": "べにふじいろ"
            },
            {
                "hex": "#c4a3bf",
                "name": "浅紫",
                "phonetic": "あさむらさき"
            },
            {
                "hex": "#e7e7eb",
                "name": "紫水晶",
                "phonetic": "むらさきすいしょう"
            },
            {
                "hex": "#dcd6d9",
                "name": "薄梅鼠",
                "phonetic": "うすうめねず"
            },
            {
                "hex": "#d3cfd9",
                "name": "暁鼠",
                "phonetic": "あかつきねず"
            },
            {
                "hex": "#d3ccd6",
                "name": "牡丹鼠",
                "phonetic": "ぼたんねず"
            },
            {
                "hex": "#c8c2c6",
                "name": "霞色",
                "phonetic": "かすみいろ"
            },
            {
                "hex": "#a6a5c4",
                "name": "藤鼠",
                "phonetic": "ふじねず"
            },
            {
                "hex": "#a69abd",
                "name": "半色",
                "phonetic": "はしたいろ"
            },
            {
                "hex": "#a89dac",
                "name": "薄色",
                "phonetic": "うすいろ"
            },
            {
                "hex": "#9790a4",
                "name": "薄鼠",
                "phonetic": "うすねず"
            },
            {
                "hex": "#9e8b8e",
                "name": "鳩羽鼠",
                "phonetic": "はとばねずみ"
            },
            {
                "hex": "#95859c",
                "name": "鳩羽色",
                "phonetic": "はとばいろ"
            },
            {
                "hex": "#95949a",
                "name": "桔梗鼠",
                "phonetic": "ききょうねず"
            },
            {
                "hex": "#71686c",
                "name": "紫鼠",
                "phonetic": "むらさきねず"
            },
            {
                "hex": "#705b67",
                "name": "葡萄鼠",
                "phonetic": "ぶどうねずみ"
            },
            {
                "hex": "#634950",
                "name": "濃色",
                "phonetic": "こきいろ"
            },
            {
                "hex": "#5f414b",
                "name": "紫鳶",
                "phonetic": "むらさきとび"
            },
            {
                "hex": "#4f455c",
                "name": "濃鼠",
                "phonetic": "こいねず"
            },
            {
                "hex": "#5a5359",
                "name": "藤煤竹",
                "phonetic": "ふじすすたけ"
            },
            {
                "hex": "#594255",
                "name": "滅紫",
                "phonetic": "けしむらさき"
            },
            {
                "hex": "#524748",
                "name": "紅消鼠",
                "phonetic": "べにけしねずみ"
            },
            {
                "hex": "#513743",
                "name": "似せ紫",
                "phonetic": "にせむらさき"
            },
            {
                "hex": "#e6eae3",
                "name": "灰黄緑",
                "phonetic": "はいきみどり"
            },
            {
                "hex": "#d4dcd6",
                "name": "蕎麦切色",
                "phonetic": "そばきりいろ"
            },
            {
                "hex": "#d4dcda",
                "name": "薄雲鼠",
                "phonetic": "うすくもねず"
            },
            {
                "hex": "#d3cbc6",
                "name": "枯野色",
                "phonetic": "かれのいろ"
            },
            {
                "hex": "#c8c2be",
                "name": "潤色",
                "phonetic": "うるみいろ"
            },
            {
                "hex": "#b3ada0",
                "name": "利休白茶",
                "phonetic": "りきゅうしろちゃ"
            },
            {
                "hex": "#a99e93",
                "name": "茶鼠",
                "phonetic": "ちゃねずみ"
            },
            {
                "hex": "#a58f86",
                "name": "胡桃染",
                "phonetic": "くるみぞめ"
            },
            {
                "hex": "#928178",
                "name": "江戸鼠",
                "phonetic": "えどねず"
            },
            {
                "hex": "#887f7a",
                "name": "煤色",
                "phonetic": "すすいろ"
            },
            {
                "hex": "#b4866b",
                "name": "丁子茶",
                "phonetic": "ちょうじちゃ"
            },
            {
                "hex": "#b28c6e",
                "name": "柴染",
                "phonetic": "ふしぞめ"
            },
            {
                "hex": "#a16d5d",
                "name": "宗伝唐茶",
                "phonetic": "そうでんからちゃ"
            },
            {
                "hex": "#9f6f55",
                "name": "砺茶",
                "phonetic": "とのちゃ"
            },
            {
                "hex": "#8c6450",
                "name": "煎茶色",
                "phonetic": "せんちゃいろ"
            },
            {
                "hex": "#856859",
                "name": "銀煤竹",
                "phonetic": "ぎんすすだけ"
            },
            {
                "hex": "#765c47",
                "name": "黄枯茶",
                "phonetic": "きがらちゃ"
            },
            {
                "hex": "#6f514c",
                "name": "煤竹色",
                "phonetic": "すすたけいろ"
            },
            {
                "hex": "#6f4b3e",
                "name": "焦茶",
                "phonetic": "こげちゃ"
            },
            {
                "hex": "#544a47",
                "name": "黒橡",
                "phonetic": "くろつるばみ"
            },
            {
                "hex": "#543f32",
                "name": "憲法色",
                "phonetic": "けんぽういろ"
            },
            {
                "hex": "#554738",
                "name": "涅色",
                "phonetic": "くりいろ"
            },
            {
                "hex": "#433d3c",
                "name": "檳榔子染",
                "phonetic": "びんろうじぞめ"
            },
            {
                "hex": "#432f2f",
                "name": "黒鳶",
                "phonetic": "くろとび"
            },
            {
                "hex": "#3f312b",
                "name": "赤墨",
                "phonetic": "あかすみ"
            },
            {
                "hex": "#302833",
                "name": "黒紅",
                "phonetic": "くろべに"
            },
            {
                "hex": "#ffffff",
                "name": "白",
                "phonetic": "しろ"
            },
            {
                "hex": "#fffffc",
                "name": "胡粉色",
                "phonetic": "ごふんいろ"
            },
            {
                "hex": "#f7fcfe",
                "name": "卯の花色",
                "phonetic": "うのはないろ"
            },
            {
                "hex": "#f8fbf8",
                "name": "白磁",
                "phonetic": "はくじ"
            },
            {
                "hex": "#fbfaf5",
                "name": "生成り色",
                "phonetic": "きなりいろ"
            },
            {
                "hex": "#f3f3f3",
                "name": "乳白色",
                "phonetic": "にゅうはくしょく"
            },
            {
                "hex": "#f3f3f2",
                "name": "白練",
                "phonetic": "しろねり"
            },
            {
                "hex": "#eae5e3",
                "name": "素色",
                "phonetic": "そしょく"
            },
            {
                "hex": "#e5e4e6",
                "name": "白梅鼠",
                "phonetic": "しらうめねず"
            },
            {
                "hex": "#dcdddd",
                "name": "白鼠",
                "phonetic": "しろねず"
            },
            {
                "hex": "#dddcd6",
                "name": "絹鼠",
                "phonetic": "きぬねず"
            },
            {
                "hex": "#c0c6c9",
                "name": "灰青",
                "phonetic": "はいあお"
            },
            {
                "hex": "#afafb0",
                "name": "銀鼠",
                "phonetic": "ぎんねず"
            },
            {
                "hex": "#adadad",
                "name": "薄鈍",
                "phonetic": "うすにび"
            },
            {
                "hex": "#a3a3a2",
                "name": "薄墨色",
                "phonetic": "うすずみいろ"
            },
            {
                "hex": "#9ea1a3",
                "name": "錫色",
                "phonetic": "すずいろ"
            },
            {
                "hex": "#9fa0a0",
                "name": "素鼠",
                "phonetic": "すねずみ"
            },
            {
                "hex": "#949495",
                "name": "鼠色",
                "phonetic": "ねずみいろ"
            },
            {
                "hex": "#888084",
                "name": "源氏鼠",
                "phonetic": "げんじねず"
            },
            {
                "hex": "#7d7d7d",
                "name": "灰色",
                "phonetic": "はいいろ"
            },
            {
                "hex": "#7b7c7d",
                "name": "鉛色",
                "phonetic": "なまりいろ"
            },
            {
                "hex": "#727171",
                "name": "鈍色",
                "phonetic": "にびいろ"
            },
            {
                "hex": "#595857",
                "name": "墨",
                "phonetic": "すみ"
            },
            {
                "hex": "#595455",
                "name": "丼鼠",
                "phonetic": "どぶねずみ"
            },
            {
                "hex": "#524e4d",
                "name": "消炭色",
                "phonetic": "けしずみいろ"
            },
            {
                "hex": "#474a4d",
                "name": "藍墨茶",
                "phonetic": "あいすみちゃ"
            },
            {
                "hex": "#383c3c",
                "name": "羊羹色",
                "phonetic": "ようかんいろ"
            },
            {
                "hex": "#2b2b2b",
                "name": "蝋色",
                "phonetic": "ろういろ"
            },
            {
                "hex": "#2b2b2b",
                "name": "黒",
                "phonetic": "くろ"
            },
            {
                "hex": "#180614",
                "name": "烏羽色",
                "phonetic": "からすばいろ"
            },
            {
                "hex": "#281a14",
                "name": "鉄黒",
                "phonetic": "てつぐろ"
            },
            {
                "hex": "#000b00",
                "name": "濡羽色",
                "phonetic": "ぬればいろ"
            },
            {
                "hex": "#250d00",
                "name": "黒壇",
                "phonetic": "こくたん"
            },
            {
                "hex": "#241a08",
                "name": "憲法黒茶",
                "phonetic": "けんぽうくろちゃ"
            },
            {
                "hex": "#16160e",
                "name": "暗黒色",
                "phonetic": "あんこくしょく"
            },
            {
                "hex": "#000000",
                "name": "武将色",
                "phonetic": "ぶしょういろ"
            }
        ];
    }

    /**
     * WEBカラーを取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getWebColors = () => {
        return [
            {
                "hex": "#000000",
                "name": "black",
                "phonetic": "ブラック"
            },
            {
                "hex": "#f0f8ff",
                "name": "aliceblue",
                "phonetic": "アリスブルー"
            },
            {
                "hex": "#008b8b",
                "name": "darkcyan",
                "phonetic": "ダークシアン"
            },
            {
                "hex": "#ffffe0",
                "name": "lightyellow",
                "phonetic": "ライトイエロー"
            },
            {
                "hex": "#ff7f50",
                "name": "coral",
                "phonetic": "コーラル"
            },
            {
                "hex": "#696969",
                "name": "dimgray",
                "phonetic": "ディムグレー"
            },
            {
                "hex": "#e6e6fa",
                "name": "lavender",
                "phonetic": "ラベンダー"
            },
            {
                "hex": "#008080",
                "name": "teal",
                "phonetic": "ティール"
            },
            {
                "hex": "#fafad2",
                "name": "lightgoldenrodyellow",
                "phonetic": "ライトゴールドロディイエロー"
            },
            {
                "hex": "#ff6347",
                "name": "tomato",
                "phonetic": "トマト"
            },
            {
                "hex": "#808080",
                "name": "gray",
                "phonetic": "グレー"
            },
            {
                "hex": "#b0c4de",
                "name": "lightsteelblue",
                "phonetic": "ライトスチールブルー"
            },
            {
                "hex": "#2f4f4f",
                "name": "darkslategray",
                "phonetic": "ダークスクラゲートグレー"
            },
            {
                "hex": "#fffacd",
                "name": "lemonchiffon",
                "phonetic": "レモンシフォン"
            },
            {
                "hex": "#ff4500",
                "name": "orangered",
                "phonetic": "オレンジレッド"
            },
            {
                "hex": "#a9a9a9",
                "name": "darkgray",
                "phonetic": "ダークグレー"
            },
            {
                "hex": "#778899",
                "name": "lightslategray",
                "phonetic": "ライトスラッググレー"
            },
            {
                "hex": "#006400",
                "name": "darkgreen",
                "phonetic": "ダークグリーン"
            },
            {
                "hex": "#f5deb3",
                "name": "wheat",
                "phonetic": "ウィート"
            },
            {
                "hex": "#ff0000",
                "name": "red",
                "phonetic": "レッド"
            },
            {
                "hex": "#c0c0c0",
                "name": "silver",
                "phonetic": "シルバー"
            },
            {
                "hex": "#708090",
                "name": "slategray",
                "phonetic": "スレイグレー"
            },
            {
                "hex": "#008000",
                "name": "green",
                "phonetic": "グリーン"
            },
            {
                "hex": "#deb887",
                "name": "burlywood",
                "phonetic": "バーリウッド"
            },
            {
                "hex": "#dc143c",
                "name": "crimson",
                "phonetic": "クリムゾン"
            },
            {
                "hex": "#d3d3d3",
                "name": "lightgray",
                "phonetic": "ライトグレー"
            },
            {
                "hex": "#4682b4",
                "name": "steelblue",
                "phonetic": "スチールブルー"
            },
            {
                "hex": "#228b22",
                "name": "forestgreen",
                "phonetic": "フォレストグリーン"
            },
            {
                "hex": "#d2b48c",
                "name": "tan",
                "phonetic": "タン"
            },
            {
                "hex": "#c71585",
                "name": "mediumvioletred",
                "phonetic": "ミディアムバイオレットレッド"
            },
            {
                "hex": "#dcdcdc",
                "name": "gainsboro",
                "phonetic": "ゲインボロ"
            },
            {
                "hex": "#4169e1",
                "name": "royalblue",
                "phonetic": "ロイヤルブルー"
            },
            {
                "hex": "#2e8b57",
                "name": "seagreen",
                "phonetic": "シーグリーン"
            },
            {
                "hex": "#f0e68c",
                "name": "khaki",
                "phonetic": "カーキ"
            },
            {
                "hex": "#ff1493",
                "name": "deeppink",
                "phonetic": "ディープピンク"
            },
            {
                "hex": "#f5f5f5",
                "name": "whitesmoke",
                "phonetic": "ホワイトスモーク"
            },
            {
                "hex": "#191970",
                "name": "midnightblue",
                "phonetic": "ミッドナイトブルー"
            },
            {
                "hex": "#3cb371",
                "name": "mediumseagreen",
                "phonetic": "ミディアムシアグリーン"
            },
            {
                "hex": "#ffff00",
                "name": "yellow",
                "phonetic": "イエロー"
            },
            {
                "hex": "#ff69b4",
                "name": "hotpink",
                "phonetic": "ホットピンク"
            },
            {
                "hex": "#ffffff",
                "name": "white",
                "phonetic": "ホワイト"
            },
            {
                "hex": "#000080",
                "name": "navy",
                "phonetic": "ネイビー"
            },
            {
                "hex": "#66cdaa",
                "name": "mediumaquamarine",
                "phonetic": "ミディアムアクアマリン"
            },
            {
                "hex": "#ffd700",
                "name": "gold",
                "phonetic": "ゴールド"
            },
            {
                "hex": "#db7093",
                "name": "palevioletred",
                "phonetic": "パールバイオレットレッド"
            },
            {
                "hex": "#fffafa",
                "name": "snow",
                "phonetic": "スノー"
            },
            {
                "hex": "#00008b",
                "name": "darkblue",
                "phonetic": "ダークブルー"
            },
            {
                "hex": "#8fbc8f",
                "name": "darkseagreen",
                "phonetic": "ダークグリーン"
            },
            {
                "hex": "#ffa500",
                "name": "orange",
                "phonetic": "オレンジ"
            },
            {
                "hex": "#ffc0cb",
                "name": "pink",
                "phonetic": "ピンク"
            },
            {
                "hex": "#f8f8ff",
                "name": "ghostwhite",
                "phonetic": "ゴーストホワイト"
            },
            {
                "hex": "#0000cd",
                "name": "mediumblue",
                "phonetic": "ミディアムブルー"
            },
            {
                "hex": "#7fffd4",
                "name": "aquamarine",
                "phonetic": "アクアマリン"
            },
            {
                "hex": "#f4a460",
                "name": "sandybrown",
                "phonetic": "サンディーブラウン"
            },
            {
                "hex": "#ffb6c1",
                "name": "lightpink",
                "phonetic": "ライトピンク"
            },
            {
                "hex": "#fffaf0",
                "name": "floralwhite",
                "phonetic": "フローラルホワイト"
            },
            {
                "hex": "#0000ff",
                "name": "blue",
                "phonetic": "ブルー"
            },
            {
                "hex": "#98fb98",
                "name": "palegreen",
                "phonetic": "ペールグリーン"
            },
            {
                "hex": "#ff8c00",
                "name": "darkorange",
                "phonetic": "ダークオレンジ"
            },
            {
                "hex": "#d8bfd8",
                "name": "thistle",
                "phonetic": "シッスル"
            },
            {
                "hex": "#faf0e6",
                "name": "linen",
                "phonetic": "リネン"
            },
            {
                "hex": "#1e90ff",
                "name": "dodgerblue",
                "phonetic": "ドジャーブルー"
            },
            {
                "hex": "#90ee90",
                "name": "lightgreen",
                "phonetic": "ライトグリーン"
            },
            {
                "hex": "#daa520",
                "name": "goldenrod",
                "phonetic": "ゴールデンロッド"
            },
            {
                "hex": "#ff00ff",
                "name": "magenta",
                "phonetic": "マゼンタ"
            },
            {
                "hex": "#faebd7",
                "name": "antiquewhite",
                "phonetic": "アンティークホワイト"
            },
            {
                "hex": "#6495ed",
                "name": "cornflowerblue",
                "phonetic": "コーンフラワーブルー"
            },
            {
                "hex": "#00ff7f",
                "name": "springgreen",
                "phonetic": "スプリンググリーン"
            },
            {
                "hex": "#cd853f",
                "name": "peru",
                "phonetic": "ペルー"
            },
            {
                "hex": "#ff00ff",
                "name": "fuchsia",
                "phonetic": "フクシア"
            },
            {
                "hex": "#ffefd5",
                "name": "papayawhip",
                "phonetic": "パパイヤヒップ"
            },
            {
                "hex": "#00bfff",
                "name": "deepskyblue",
                "phonetic": "ディープスカイブルー"
            },
            {
                "hex": "#00fa9a",
                "name": "mediumspringgreen",
                "phonetic": "ミディアムスプリンググリーン"
            },
            {
                "hex": "#b8860b",
                "name": "darkgoldenrod",
                "phonetic": "ダークゴールドロッド"
            },
            {
                "hex": "#ee82ee",
                "name": "violet",
                "phonetic": "バイオレット"
            },
            {
                "hex": "#ffebcd",
                "name": "blanchedalmond",
                "phonetic": "ブランシェッドアーモンド"
            },
            {
                "hex": "#87cefa",
                "name": "lightskyblue",
                "phonetic": "ライトスキーブルー"
            },
            {
                "hex": "#7cfc00",
                "name": "lawngreen",
                "phonetic": "ローグリーン"
            },
            {
                "hex": "#d2691e",
                "name": "chocolate",
                "phonetic": "チョコレート"
            },
            {
                "hex": "#dda0dd",
                "name": "plum",
                "phonetic": "プラム"
            },
            {
                "hex": "#ffe4c4",
                "name": "bisque",
                "phonetic": "ビスク"
            },
            {
                "hex": "#87ceeb",
                "name": "skyblue",
                "phonetic": "スカイブルー"
            },
            {
                "hex": "#7fff00",
                "name": "chartreuse",
                "phonetic": "シャルトルーズ"
            },
            {
                "hex": "#a0522d",
                "name": "sienna",
                "phonetic": "シエナ"
            },
            {
                "hex": "#da70d6",
                "name": "orchid",
                "phonetic": "オーキッド"
            },
            {
                "hex": "#ffe4b5",
                "name": "moccasin",
                "phonetic": "モカシン"
            },
            {
                "hex": "#add8e6",
                "name": "lightblue",
                "phonetic": "ライトブルー"
            },
            {
                "hex": "#adff2f",
                "name": "greenyellow",
                "phonetic": "グリーンイエロー"
            },
            {
                "hex": "#8b4513",
                "name": "saddlebrown",
                "phonetic": "サドルブラウン"
            },
            {
                "hex": "#ba55d3",
                "name": "mediumorchid",
                "phonetic": "ミディアムオーキッド"
            },
            {
                "hex": "#ffdead",
                "name": "navajowhite",
                "phonetic": "ナバホホワイト"
            },
            {
                "hex": "#b0e0e6",
                "name": "powderblue",
                "phonetic": "パウダーブルー"
            },
            {
                "hex": "#00ff00",
                "name": "lime",
                "phonetic": "ライム"
            },
            {
                "hex": "#800000",
                "name": "maroon",
                "phonetic": "マルーン"
            },
            {
                "hex": "#9932cc",
                "name": "darkorchid",
                "phonetic": "ダークオーキッド"
            },
            {
                "hex": "#ffdab9",
                "name": "peachpuff",
                "phonetic": "ピーチパフ"
            },
            {
                "hex": "#afeeee",
                "name": "paleturquoise",
                "phonetic": "パレットターコイズ"
            },
            {
                "hex": "#32cd32",
                "name": "limegreen",
                "phonetic": "ライムグリーン"
            },
            {
                "hex": "#8b0000",
                "name": "darkred",
                "phonetic": "ダークレッド"
            },
            {
                "hex": "#9400d3",
                "name": "darkviolet",
                "phonetic": "ダークバイオレット"
            },
            {
                "hex": "#ffe4e1",
                "name": "mistyrose",
                "phonetic": "ミスティローズ"
            },
            {
                "hex": "#e0ffff",
                "name": "lightcyan",
                "phonetic": "ライトシアン"
            },
            {
                "hex": "#9acd32",
                "name": "yellowgreen",
                "phonetic": "イエローグリーン"
            },
            {
                "hex": "#a52a2a",
                "name": "brown",
                "phonetic": "ブラウン"
            },
            {
                "hex": "#8b008b",
                "name": "darkmagenta",
                "phonetic": "ダークマゼンタ"
            },
            {
                "hex": "#fff0f5",
                "name": "lavenderblush",
                "phonetic": "ラベンダーブラッシュ"
            },
            {
                "hex": "#00ffff",
                "name": "cyan",
                "phonetic": "シアン"
            },
            {
                "hex": "#556b2f",
                "name": "darkolivegreen",
                "phonetic": "ダークオリーブグリーン"
            },
            {
                "hex": "#b22222",
                "name": "firebrick",
                "phonetic": "ファイヤーブリック"
            },
            {
                "hex": "#800080",
                "name": "purple",
                "phonetic": "パープル"
            },
            {
                "hex": "#fff5ee",
                "name": "seashell",
                "phonetic": "シーシェル"
            },
            {
                "hex": "#00ffff",
                "name": "aqua",
                "phonetic": "アクア"
            },
            {
                "hex": "#6b8e23",
                "name": "olivedrab",
                "phonetic": "オリベドラブ"
            },
            {
                "hex": "#cd5c5c",
                "name": "indianred",
                "phonetic": "インディアン"
            },
            {
                "hex": "#4b0082",
                "name": "indigo",
                "phonetic": "インディゴ"
            },
            {
                "hex": "#fdf5e6",
                "name": "oldlace",
                "phonetic": "オールドレース"
            },
            {
                "hex": "#40e0d0",
                "name": "turquoise",
                "phonetic": "ターコイズ"
            },
            {
                "hex": "#808000",
                "name": "olive",
                "phonetic": "オリーブ"
            },
            {
                "hex": "#bc8f8f",
                "name": "rosybrown",
                "phonetic": "ロージーブラウン"
            },
            {
                "hex": "#483d8b",
                "name": "darkslateblue",
                "phonetic": "ダークスレートブルー"
            },
            {
                "hex": "#fffff0",
                "name": "ivory",
                "phonetic": "アイボリー"
            },
            {
                "hex": "#48d1cc",
                "name": "mediumturquoise",
                "phonetic": "ミディアムターコイズ"
            },
            {
                "hex": "#bdb76b",
                "name": "darkkhaki",
                "phonetic": "ダークカーキ"
            },
            {
                "hex": "#e9967a",
                "name": "darksalmon",
                "phonetic": "ダークサーモン"
            },
            {
                "hex": "#8a2be2",
                "name": "blueviolet",
                "phonetic": "ブルーバイオレット"
            },
            {
                "hex": "#f0fff0",
                "name": "honeydew",
                "phonetic": "ハニーデュー"
            },
            {
                "hex": "#00ced1",
                "name": "darkturquoise",
                "phonetic": "ダークターコイズ"
            },
            {
                "hex": "#eee8aa",
                "name": "palegoldenrod",
                "phonetic": "ペールゴールデンロッド"
            },
            {
                "hex": "#f08080",
                "name": "lightcoral",
                "phonetic": "ライトコーラル"
            },
            {
                "hex": "#9370db",
                "name": "mediumpurple",
                "phonetic": "ミディアムパープル"
            },
            {
                "hex": "#f5fffa",
                "name": "mintcream",
                "phonetic": "ミントクリーム"
            },
            {
                "hex": "#20b2aa",
                "name": "lightseagreen",
                "phonetic": "ライトシーグリーン"
            },
            {
                "hex": "#fff8dc",
                "name": "cornsilk",
                "phonetic": "コルンシルク"
            },
            {
                "hex": "#fa8072",
                "name": "salmon",
                "phonetic": "サーモン"
            },
            {
                "hex": "#6a5acd",
                "name": "slateblue",
                "phonetic": "スレートブルー"
            },
            {
                "hex": "#f0ffff",
                "name": "azure",
                "phonetic": "アジュー"
            },
            {
                "hex": "#5f9ea0",
                "name": "cadetblue",
                "phonetic": "カデットブルー"
            },
            {
                "hex": "#f5f5dc",
                "name": "beige",
                "phonetic": "ベージュ"
            },
            {
                "hex": "#ffa07a",
                "name": "lightsalmon",
                "phonetic": "ライトサーモン"
            },
            {
                "hex": "#7b68ee",
                "name": "mediumslateblue",
                "phonetic": "ミディアムスレートブルー"
            }
        ];            
    }
}