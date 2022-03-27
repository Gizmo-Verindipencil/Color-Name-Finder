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
     * @returns {Array<Color>} 色情報を返します。
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
                "hex": "#fd0013",
                "name": "north africa",
                "phonetic": "ノース アフリカ"
            },
            {
                "hex": "#fd0013",
                "name": "western sahara",
                "phonetic": "ウェスタン サハラ"
            },
            {
                "hex": "#fd0013",
                "name": "swaziland",
                "phonetic": "スワジランド"
            },
            {
                "hex": "#fd0013",
                "name": "east africa",
                "phonetic": "イースト アフリカ"
            },
            {
                "hex": "#fd0013",
                "name": "libya",
                "phonetic": "リビア"
            },
            {
                "hex": "#fd0013",
                "name": "botswana",
                "phonetic": "ボツワナ"
            },
            {
                "hex": "#fd0013",
                "name": "west africa",
                "phonetic": "ウェスト アフリカ"
            },
            {
                "hex": "#fd0013",
                "name": "algeria",
                "phonetic": "アルジェリア"
            },
            {
                "hex": "#fd0013",
                "name": "zimbabwe",
                "phonetic": "ジンバブエ"
            },
            {
                "hex": "#fd0013",
                "name": "southern africa",
                "phonetic": "サザン アフリカ"
            },
            {
                "hex": "#fd0013",
                "name": "egypt",
                "phonetic": "エジプト"
            },
            {
                "hex": "#fd0013",
                "name": "south africa",
                "phonetic": "サファリ アフリカ"
            },
            {
                "hex": "#fd0013",
                "name": "morocco",
                "phonetic": "モロッコ"
            },
            {
                "hex": "#fd0013",
                "name": "namibia",
                "phonetic": "ナミビア"
            },
            {
                "hex": "#fd0013",
                "name": "saharan africa",
                "phonetic": "サハラ アフリカ"
            },
            {
                "hex": "#fd0013",
                "name": "touareg",
                "phonetic": "トゥアレグ"
            },
            {
                "hex": "#fd0013",
                "name": "african violet",
                "phonetic": "アフリカンバイオレット"
            },
            {
                "hex": "#fd0013",
                "name": "central africa",
                "phonetic": "セントラル アフリカ"
            },
            {
                "hex": "#fd0013",
                "name": "tunisia",
                "phonetic": "チュニジア"
            },
            {
                "hex": "#fd0013",
                "name": "lesotho",
                "phonetic": "レソト"
            },
            {
                "hex": "#fd0013",
                "name": "sahara",
                "phonetic": "サハラ"
            },
            {
                "hex": "#fd0013",
                "name": "sudan brown",
                "phonetic": "スーダン ブラウン"
            },
            {
                "hex": "#fd0013",
                "name": "african brown",
                "phonetic": "アフリカン ブラウン"
            },
            {
                "hex": "#fd0013",
                "name": "safari",
                "phonetic": "サファリ"
            },
            {
                "hex": "#fd0013",
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
                "hex": "#bf0a30",
                "name": "buckeye red",
                "phonetic": "バッカイ レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "lincoln red",
                "phonetic": "リンカーン レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "lincoln pink",
                "phonetic": "リンカーン ピンク"
            },
            {
                "hex": "#bf0a30",
                "name": "grand canyon pink",
                "phonetic": "グランドキャニオン ピンク"
            },
            {
                "hex": "#bf0a30",
                "name": "dixie red",
                "phonetic": "ディキシー レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "hawkeye red",
                "phonetic": "ホークアイ レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "natural red",
                "phonetic": "ナチュラル レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "empire red",
                "phonetic": "エンパイア レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "glory red",
                "phonetic": "グローリー レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "southern california",
                "phonetic": "カリフォルニア サザン"
            },
            {
                "hex": "#bf0a30",
                "name": "southwest",
                "phonetic": "サウスウエスト"
            },
            {
                "hex": "#bf0a30",
                "name": "golden red",
                "phonetic": "ゴールデン レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "grand canyon red",
                "phonetic": "グランドキャニオン レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "badger red",
                "phonetic": "バッドゲル レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "bay area california",
                "phonetic": "カリフォルニア ベイ エリア"
            },
            {
                "hex": "#bf0a30",
                "name": "shasta cascades",
                "phonetic": "シャスタ カスケード"
            },
            {
                "hex": "#bf0a30",
                "name": "american blue",
                "phonetic": "アメリカン ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "american green",
                "phonetic": "アメリカン グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "american yellow",
                "phonetic": "アメリカン イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "american light blue",
                "phonetic": "アメリカン ライトブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "american brown",
                "phonetic": "アメリカン ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "american gray",
                "phonetic": "アメリカン グレー"
            },
            {
                "hex": "#bf0a30",
                "name": "glory blue",
                "phonetic": "グローリー ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "glory white",
                "phonetic": "グローリー ホワイト"
            },
            {
                "hex": "#bf0a30",
                "name": "big apple red",
                "phonetic": "ビッグ アップル レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "big apple blue",
                "phonetic": "ビッグ アップル ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "empire blue",
                "phonetic": "エンパイア ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "empire cyan",
                "phonetic": "エンパイア シアン"
            },
            {
                "hex": "#bf0a30",
                "name": "empire yellow",
                "phonetic": "エンパイア イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "empire orange",
                "phonetic": "エンパイア オレンジ"
            },
            {
                "hex": "#bf0a30",
                "name": "empire green",
                "phonetic": "エンパイア グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "empire ebony",
                "phonetic": "エンパイア エボニー"
            },
            {
                "hex": "#bf0a30",
                "name": "natural blue",
                "phonetic": "ナチュラル ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "natural light blue",
                "phonetic": "ナチュラル ライトブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "natural green",
                "phonetic": "ナチュラル グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "natural orange",
                "phonetic": "ナチュラル オレンジ"
            },
            {
                "hex": "#bf0a30",
                "name": "natural brown",
                "phonetic": "ナチュラル ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "natural gray",
                "phonetic": "ナチュラル グレー"
            },
            {
                "hex": "#bf0a30",
                "name": "hawkeye blue",
                "phonetic": "ホークアイ ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "hawkeye yellow",
                "phonetic": "ホークアイ イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "hawkeye brown",
                "phonetic": "ホークアイ ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "frontier blue",
                "phonetic": "フロンティア ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "frontier light blue",
                "phonetic": "フロンティア ライトブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "frontier green",
                "phonetic": "フロンティア グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "frontier yellow",
                "phonetic": "フロンティア イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "frontier purple",
                "phonetic": "フロンティア パープル"
            },
            {
                "hex": "#bf0a30",
                "name": "dixie blue",
                "phonetic": "ディキシー ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "dixie green",
                "phonetic": "ディキシー グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "dixie yellow",
                "phonetic": "ディキシー イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "grand canyon blue",
                "phonetic": "グランドキャニオン ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "grand canyon brown",
                "phonetic": "グランドキャニオンブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "grand canyon yellow",
                "phonetic": "グランドキャニオンイエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "grand canyon green",
                "phonetic": "グランドキャニオングリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "lincoln light blue",
                "phonetic": "リンカーン ライトブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "lincoln blue",
                "phonetic": "リンカーン ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "lincoln green",
                "phonetic": "リンカーン グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "lincoln yellow",
                "phonetic": "リンカーン イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "lincoln orange",
                "phonetic": "リンカーン オレンジ"
            },
            {
                "hex": "#bf0a30",
                "name": "hoosier blue",
                "phonetic": "フージャース ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "hoosier yellow",
                "phonetic": "フージャース イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "hoosier green",
                "phonetic": "フージャース グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "hoosier brown",
                "phonetic": "フージャース ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "badger blue",
                "phonetic": "バッドゲル ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "badger light blue",
                "phonetic": "バッドゲル ライトブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "badger pink",
                "phonetic": "バッドゲル ピンク"
            },
            {
                "hex": "#bf0a30",
                "name": "badger green",
                "phonetic": "バッドゲル グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "badger yellow",
                "phonetic": "バッドゲル イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "badger brown",
                "phonetic": "バッドゲル ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "badger gray",
                "phonetic": "バッドゲル グレー"
            },
            {
                "hex": "#bf0a30",
                "name": "mountain red",
                "phonetic": "マウンテン レッド"
            },
            {
                "hex": "#bf0a30",
                "name": "mountain blue",
                "phonetic": "マウンテン ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "mountain green",
                "phonetic": "マウンテン グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "mountain yellow",
                "phonetic": "マウンテン イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "mountain brown",
                "phonetic": "マウンテン ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "mountain gray",
                "phonetic": "マウンテン グレー"
            },
            {
                "hex": "#bf0a30",
                "name": "sooner blue",
                "phonetic": "ソナー ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "sooner light blue",
                "phonetic": "ソナー ライトブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "sooner green",
                "phonetic": "ソナー グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "sooner opal",
                "phonetic": "ソナー オパール"
            },
            {
                "hex": "#bf0a30",
                "name": "sooner yellow",
                "phonetic": "ソナー イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "sooner brown",
                "phonetic": "ソナー ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "sooner beige",
                "phonetic": "ソナー ベージュ"
            },
            {
                "hex": "#bf0a30",
                "name": "sooner gray",
                "phonetic": "ソナー グレー"
            },
            {
                "hex": "#bf0a30",
                "name": "sooner black",
                "phonetic": "ソナー ブラック"
            },
            {
                "hex": "#bf0a30",
                "name": "buckeye blue",
                "phonetic": "バッカイ ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "buckeye green",
                "phonetic": "バッカイ グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "buckeye yellow",
                "phonetic": "バッカイ イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "buckeye brown",
                "phonetic": "バッカイ ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "buckeye light blue",
                "phonetic": "バッカイ ライトブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "beaver blue",
                "phonetic": "ビーバー ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "beaver yellow",
                "phonetic": "ビーバー イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "golden green",
                "phonetic": "ゴールデン グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "golden brown",
                "phonetic": "ゴールデン ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "golden yellow",
                "phonetic": "ゴールデン イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "golden cyan",
                "phonetic": "ゴールデン シアン"
            },
            {
                "hex": "#bf0a30",
                "name": "golden gray",
                "phonetic": "ゴールデン グレー"
            },
            {
                "hex": "#bf0a30",
                "name": "sunflower blue",
                "phonetic": "サンフラワー ブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "sunflower light blue",
                "phonetic": "サンフラワー ライトブルー"
            },
            {
                "hex": "#bf0a30",
                "name": "sunflower green",
                "phonetic": "サンフラワー グリーン"
            },
            {
                "hex": "#bf0a30",
                "name": "sunflower orange",
                "phonetic": "サンフラワー オレンジ"
            },
            {
                "hex": "#bf0a30",
                "name": "sunflower brown",
                "phonetic": "サンフラワー ブラウン"
            },
            {
                "hex": "#bf0a30",
                "name": "sunflower purple",
                "phonetic": "サンフラワー パープル"
            },
            {
                "hex": "#bf0a30",
                "name": "sunflower yellow",
                "phonetic": "サンフラワー イエロー"
            },
            {
                "hex": "#bf0a30",
                "name": "sunflower gray",
                "phonetic": "サンフラワー グレー"
            },
            {
                "hex": "#bf0a30",
                "name": "new england",
                "phonetic": "ニュー イングランド"
            },
            {
                "hex": "#bf0a30",
                "name": "mid atlantic",
                "phonetic": "ミッド アトランティック"
            },
            {
                "hex": "#bf0a30",
                "name": "south",
                "phonetic": "サーフ"
            },
            {
                "hex": "#bf0a30",
                "name": "florida",
                "phonetic": "フロリダ"
            },
            {
                "hex": "#bf0a30",
                "name": "midwest",
                "phonetic": "ミッドウェスト"
            },
            {
                "hex": "#bf0a30",
                "name": "texas",
                "phonetic": "テキサス"
            },
            {
                "hex": "#bf0a30",
                "name": "great plains",
                "phonetic": "グレート プレインズ"
            },
            {
                "hex": "#bf0a30",
                "name": "rocky mountain",
                "phonetic": "ロッキー マウンテン"
            },
            {
                "hex": "#bf0a30",
                "name": "california",
                "phonetic": "カリフォルニア"
            },
            {
                "hex": "#bf0a30",
                "name": "pacific northwest",
                "phonetic": "パシフィックノースウエスト"
            },
            {
                "hex": "#bf0a30",
                "name": "alaska",
                "phonetic": "アラスカ"
            },
            {
                "hex": "#bf0a30",
                "name": "hawaii",
                "phonetic": "ハワイ"
            },
            {
                "hex": "#bf0a30",
                "name": "mountains alabama",
                "phonetic": "アラバマ マウンテン"
            },
            {
                "hex": "#bf0a30",
                "name": "metropolitan alabama",
                "phonetic": "アラバマ メトロポリタン"
            },
            {
                "hex": "#bf0a30",
                "name": "river heritage alabama",
                "phonetic": "アラバマリバーヘリテイジ"
            },
            {
                "hex": "#bf0a30",
                "name": "gulf coast alabama",
                "phonetic": "ガルフ コースト アラバマ"
            },
            {
                "hex": "#bf0a30",
                "name": "california desert",
                "phonetic": "カリフォルニア デザート"
            },
            {
                "hex": "#bf0a30",
                "name": "california central coast",
                "phonetic": "カリフォルニア セントラル コースト"
            },
            {
                "hex": "#bf0a30",
                "name": "san joaquin valley",
                "phonetic": "サン ホアキン ヴァレイ"
            },
            {
                "hex": "#bf0a30",
                "name": "sacramento valley",
                "phonetic": "サクラメント ヴァレイ"
            },
            {
                "hex": "#bf0a30",
                "name": "sierra nevada",
                "phonetic": "シエラ ネバダ"
            },
            {
                "hex": "#bf0a30",
                "name": "gold country",
                "phonetic": "ゴールド カントリー"
            },
            {
                "hex": "#bf0a30",
                "name": "california north coast",
                "phonetic": "カリフォルニア ノース コースト"
            },
            {
                "hex": "#bf0a30",
                "name": "mississippi capital river",
                "phonetic": "ミシシッピキャピタルリバー"
            },
            {
                "hex": "#bf0a30",
                "name": "mississippi delta",
                "phonetic": "ミシシッピ デルタ"
            },
            {
                "hex": "#bf0a30",
                "name": "mississippi pines",
                "phonetic": "ミシシッピ パインズ"
            },
            {
                "hex": "#bf0a30",
                "name": "gulf coast mississippi",
                "phonetic": "ミシシッピガルフコースト"
            },
            {
                "hex": "#bf0a30",
                "name": "mississippi hills",
                "phonetic": "ミシシッピ ヒルズ"
            },
            {
                "hex": "#bf0a30",
                "name": "panhandle nebraska",
                "phonetic": "パンハンドル ネブラスカ"
            },
            {
                "hex": "#bf0a30",
                "name": "north central nebraska",
                "phonetic": "ノースセントラルネブラスカ"
            },
            {
                "hex": "#bf0a30",
                "name": "eastern nebraska",
                "phonetic": "イースタン ネブラスカ"
            },
            {
                "hex": "#bf0a30",
                "name": "western nevada",
                "phonetic": "ウェスタン ネバダ"
            },
            {
                "hex": "#bf0a30",
                "name": "northern nevada",
                "phonetic": "ノーザン ネバダ"
            },
            {
                "hex": "#bf0a30",
                "name": "central nevada",
                "phonetic": "セントラル ネバダ"
            },
            {
                "hex": "#bf0a30",
                "name": "southern nevada",
                "phonetic": "サザン ネバダ"
            },
            {
                "hex": "#bf0a30",
                "name": "central new mexico",
                "phonetic": "セントラル ニューメキシコ"
            },
            {
                "hex": "#bf0a30",
                "name": "north central new mexico",
                "phonetic": "ノース セントラル ニューメキシコ"
            },
            {
                "hex": "#bf0a30",
                "name": "northeast new mexico",
                "phonetic": "ノース イースト ニューメキシコ"
            },
            {
                "hex": "#bf0a30",
                "name": "northwest new mexico",
                "phonetic": "ノース ウエスト ニューメキシコ"
            },
            {
                "hex": "#bf0a30",
                "name": "southwest new mexico",
                "phonetic": "サウス ウエスト ニューメキシコ"
            },
            {
                "hex": "#bf0a30",
                "name": "southeast new mexico",
                "phonetic": "サウス イースト ニューメキシコ"
            },
            {
                "hex": "#bf0a30",
                "name": "northwest ohio",
                "phonetic": "ノース ウエスト オハイオ"
            },
            {
                "hex": "#bf0a30",
                "name": "northeast ohio",
                "phonetic": "ノース イースト オハイオ"
            },
            {
                "hex": "#bf0a30",
                "name": "mid ohio",
                "phonetic": "ミッド オハイオ"
            },
            {
                "hex": "#bf0a30",
                "name": "southwest ohio",
                "phonetic": "サウス ウエスト オハイオ"
            },
            {
                "hex": "#bf0a30",
                "name": "southeast ohio",
                "phonetic": "サウス イースト オハイオ"
            },
            {
                "hex": "#bf0a30",
                "name": "western tennessee",
                "phonetic": "ウエスタン テネシー"
            },
            {
                "hex": "#bf0a30",
                "name": "central tennessee",
                "phonetic": "セントラル テネシー"
            },
            {
                "hex": "#bf0a30",
                "name": "eastern tennessee",
                "phonetic": "イースタン テネシー"
            },
            {
                "hex": "#bf0a30",
                "name": "panhandle texas",
                "phonetic": "パンハンドルテキサス"
            },
            {
                "hex": "#bf0a30",
                "name": "prairies and lakes",
                "phonetic": "プレリーズアンドレイクス"
            },
            {
                "hex": "#bf0a30",
                "name": "piney woods",
                "phonetic": "ピニー ウッズ"
            },
            {
                "hex": "#bf0a30",
                "name": "gulf coast texas",
                "phonetic": "ガルフ コースト テキサス"
            },
            {
                "hex": "#bf0a30",
                "name": "south texas plains",
                "phonetic": "サウステキサスプレインズ"
            },
            {
                "hex": "#bf0a30",
                "name": "hill country",
                "phonetic": "ヒル カントリー"
            },
            {
                "hex": "#bf0a30",
                "name": "big bend country",
                "phonetic": "ビッグ ベンド カントリー"
            },
            {
                "hex": "#bf0a30",
                "name": "wasatch front",
                "phonetic": "ワサッチ フロント"
            },
            {
                "hex": "#bf0a30",
                "name": "canyon country",
                "phonetic": "キャニオン カントリー"
            },
            {
                "hex": "#bf0a30",
                "name": "northeastern utah",
                "phonetic": "ノース イースタン ユタ"
            },
            {
                "hex": "#bf0a30",
                "name": "dixie",
                "phonetic": "デキシー"
            },
            {
                "hex": "#bf0a30",
                "name": "central utah",
                "phonetic": "セントラル ユタ"
            },
            {
                "hex": "#bf0a30",
                "name": "western utah",
                "phonetic": "ウエスタン ユタ"
            },
            {
                "hex": "#bf0a30",
                "name": "northern virginia",
                "phonetic": "ノーザン バージニア"
            },
            {
                "hex": "#bf0a30",
                "name": "eastern virginia",
                "phonetic": "イースタン バージニア"
            },
            {
                "hex": "#bf0a30",
                "name": "central virginia",
                "phonetic": "セントラル バージニア"
            },
            {
                "hex": "#bf0a30",
                "name": "southwest virginia",
                "phonetic": "サザンウエストバージニア"
            },
            {
                "hex": "#bf0a30",
                "name": "shenandoah valley",
                "phonetic": "シェナンドー ヴァレイ"
            },
            {
                "hex": "#bf0a30",
                "name": "southeast wisconsin",
                "phonetic": "サウス イースト ウィスコンシン"
            },
            {
                "hex": "#bf0a30",
                "name": "southwest wisconsin",
                "phonetic": "サウス ウエスト ウィスコンシン"
            },
            {
                "hex": "#bf0a30",
                "name": "northeast wisconsin",
                "phonetic": "ノース イースト ウィスコンシン"
            },
            {
                "hex": "#bf0a30",
                "name": "north central wisconsin",
                "phonetic": "ノース セントラル ウィスコンシン"
            },
            {
                "hex": "#bf0a30",
                "name": "northwest wisconsin",
                "phonetic": "ノース ウエスト ウィスコンシン"
            }
        ];
    }

    /**
     * イギリスの色を取得します。
     * @returns {Array<Object>} 色情報を返します
     */
    #getBritishColors = () => {
        return [
            {
                "hex": "#ffc6d6",
                "name": "Baby Pink",
                "phonetic": "ベビー ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Shell Pink",
                "phonetic": "シェル ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Fresh Pink",
                "phonetic": "フレッシュ ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Pastel Pink",
                "phonetic": "パステル ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Rose Pink",
                "phonetic": "ローズ ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Pink",
                "phonetic": "ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "French Rose",
                "phonetic": "フレンチ ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "Peach Blossam",
                "phonetic": "ピーチ ブロッサム"
            },
            {
                "hex": "#ffc6d6",
                "name": "Lotus",
                "phonetic": "ロータス"
            },
            {
                "hex": "#ffc6d6",
                "name": "Tea Rose",
                "phonetic": "ティー ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "Salmon Pink",
                "phonetic": "サーモン ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Aurora",
                "phonetic": "オーロラ"
            },
            {
                "hex": "#ffc6d6",
                "name": "Vinous",
                "phonetic": "ヴァイナス"
            },
            {
                "hex": "#ffc6d6",
                "name": "Cosmos",
                "phonetic": "コスモス"
            },
            {
                "hex": "#ffc6d6",
                "name": "Corinthian Pink",
                "phonetic": "コーリンシアン ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Cherry Pink",
                "phonetic": "チェリー ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Fuchsia Pink",
                "phonetic": "フクシァ ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Daphne Pink",
                "phonetic": "ダフニー ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Carnation",
                "phonetic": "カーネーション"
            },
            {
                "hex": "#ffc6d6",
                "name": "Shrimp Pink",
                "phonetic": "シェリンプ ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Coral Pink",
                "phonetic": "コーラル ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "Rose Pompadour",
                "phonetic": "ローズ ポンパドウル"
            },
            {
                "hex": "#ffc6d6",
                "name": "Empire Rose",
                "phonetic": "エンパイア ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "Flamingo",
                "phonetic": "フラミンゴ"
            },
            {
                "hex": "#ffc6d6",
                "name": "Etruscan Rose",
                "phonetic": "エトラスカン ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "ashes of rose",
                "phonetic": "アッシズ オブ ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "rose red",
                "phonetic": "ローズ レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "camellia",
                "phonetic": "カメリア"
            },
            {
                "hex": "#ffc6d6",
                "name": "geranium",
                "phonetic": "ゼラニウム"
            },
            {
                "hex": "#ffc6d6",
                "name": "cherry",
                "phonetic": "チェリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "signal red",
                "phonetic": "シグナル レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "signal red",
                "phonetic": "ユニオンジャッグレッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "carmine",
                "phonetic": "カーマイン"
            },
            {
                "hex": "#ffc6d6",
                "name": "turkey red",
                "phonetic": "ターキー レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "poppy red",
                "phonetic": "ポピーレッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "cardinal",
                "phonetic": "カーディナル"
            },
            {
                "hex": "#ffc6d6",
                "name": "crimson rake",
                "phonetic": "クリムスン レーキ"
            },
            {
                "hex": "#ffc6d6",
                "name": "Pomegranate",
                "phonetic": "ポメグラネイト"
            },
            {
                "hex": "#ffc6d6",
                "name": "cinnabar",
                "phonetic": "シナバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "Cent Patrick cross",
                "phonetic": "セントパトリッククロス"
            },
            {
                "hex": "#ffc6d6",
                "name": "tomato red",
                "phonetic": "トマト レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "ruby",
                "phonetic": "ルビー"
            },
            {
                "hex": "#ffc6d6",
                "name": "english red",
                "phonetic": "イングリッシュ レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "oxide red",
                "phonetic": "オクサイドレッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "Oxblood Red",
                "phonetic": "オックスブラッド レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "Bole",
                "phonetic": "ボール"
            },
            {
                "hex": "#ffc6d6",
                "name": "burgundy",
                "phonetic": "バーガンディ"
            },
            {
                "hex": "#ffc6d6",
                "name": "mahogany",
                "phonetic": "マホガニー"
            },
            {
                "hex": "#ffc6d6",
                "name": "Flea",
                "phonetic": "フリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "opal peach",
                "phonetic": "オパール ピーチ"
            },
            {
                "hex": "#ffc6d6",
                "name": "flesh",
                "phonetic": "フレッシュ"
            },
            {
                "hex": "#ffc6d6",
                "name": "apricot",
                "phonetic": "アプリコット"
            },
            {
                "hex": "#ffc6d6",
                "name": "sunset",
                "phonetic": "サンセット"
            },
            {
                "hex": "#ffc6d6",
                "name": "sunburn",
                "phonetic": "サンバーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "fire red",
                "phonetic": "ファイアー レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "carrot orange",
                "phonetic": "キャロット オレンジ"
            },
            {
                "hex": "#ffc6d6",
                "name": "tangerine",
                "phonetic": "タンジェリン"
            },
            {
                "hex": "#ffc6d6",
                "name": "orange",
                "phonetic": "オレンジ"
            },
            {
                "hex": "#ffc6d6",
                "name": "maize",
                "phonetic": "メイズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "chrome orange",
                "phonetic": "クローム オレンジ"
            },
            {
                "hex": "#ffc6d6",
                "name": "amber",
                "phonetic": "アンバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "morocco red",
                "phonetic": "モロッコ レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "caramel",
                "phonetic": "キャラメル"
            },
            {
                "hex": "#ffc6d6",
                "name": "tan",
                "phonetic": "タン"
            },
            {
                "hex": "#ffc6d6",
                "name": "topaz",
                "phonetic": "トパーズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "moon light",
                "phonetic": "ムーンライト"
            },
            {
                "hex": "#ffc6d6",
                "name": "beige",
                "phonetic": "ベージュ"
            },
            {
                "hex": "#ffc6d6",
                "name": "flax",
                "phonetic": "フラックス"
            },
            {
                "hex": "#ffc6d6",
                "name": "blond",
                "phonetic": "ブロンド"
            },
            {
                "hex": "#ffc6d6",
                "name": "cafe au lait",
                "phonetic": "カフェ オ レ"
            },
            {
                "hex": "#ffc6d6",
                "name": "biscuit",
                "phonetic": "ビスケット"
            },
            {
                "hex": "#ffc6d6",
                "name": "parchment",
                "phonetic": "バーチメント"
            },
            {
                "hex": "#ffc6d6",
                "name": "champagne",
                "phonetic": "シャンパーニュ"
            },
            {
                "hex": "#ffc6d6",
                "name": "camel",
                "phonetic": "キャメル"
            },
            {
                "hex": "#ffc6d6",
                "name": "grege",
                "phonetic": "グレージュ"
            },
            {
                "hex": "#ffc6d6",
                "name": "fawn",
                "phonetic": "フォーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "chamois",
                "phonetic": "シャモア"
            },
            {
                "hex": "#ffc6d6",
                "name": "burnt sienna",
                "phonetic": "バーント シエンナ"
            },
            {
                "hex": "#ffc6d6",
                "name": "brick red",
                "phonetic": "ブリック レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "brown",
                "phonetic": "ブラウン"
            },
            {
                "hex": "#ffc6d6",
                "name": "raw sienna",
                "phonetic": "ローシェンナ"
            },
            {
                "hex": "#ffc6d6",
                "name": "raw umber",
                "phonetic": "ローアンバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "Caffee",
                "phonetic": "カフェ"
            },
            {
                "hex": "#ffc6d6",
                "name": "maroon",
                "phonetic": "マルーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "maroon",
                "phonetic": "メイフェイア ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "liver",
                "phonetic": "リバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "henna",
                "phonetic": "ヘンナ"
            },
            {
                "hex": "#ffc6d6",
                "name": "russet",
                "phonetic": "ラセット"
            },
            {
                "hex": "#ffc6d6",
                "name": "chestnut brown",
                "phonetic": "チェスナット ブラウン"
            },
            {
                "hex": "#ffc6d6",
                "name": "Brunette",
                "phonetic": "ブルネット"
            },
            {
                "hex": "#ffc6d6",
                "name": "chocolate",
                "phonetic": "チョコレート"
            },
            {
                "hex": "#ffc6d6",
                "name": "sepia",
                "phonetic": "セピア"
            },
            {
                "hex": "#ffc6d6",
                "name": "vandike brown",
                "phonetic": "ヴァンダイク ブラウン"
            },
            {
                "hex": "#ffc6d6",
                "name": "ivory",
                "phonetic": "アイボリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "vanilla",
                "phonetic": "ヴァニラ"
            },
            {
                "hex": "#ffc6d6",
                "name": "leghorn",
                "phonetic": "レグホーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "cream",
                "phonetic": "クリーム"
            },
            {
                "hex": "#ffc6d6",
                "name": "straw",
                "phonetic": "ストロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "massicot",
                "phonetic": "マシコット"
            },
            {
                "hex": "#ffc6d6",
                "name": "sulphar yellow",
                "phonetic": "サルファー イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "dyres broom",
                "phonetic": "ダイヤーズブルーム"
            },
            {
                "hex": "#ffc6d6",
                "name": "mimosa",
                "phonetic": "ミモザ"
            },
            {
                "hex": "#ffc6d6",
                "name": "naples yellow",
                "phonetic": "ネープルス イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "honey yellow",
                "phonetic": "ハニー イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "gamboge",
                "phonetic": "ガンボージ"
            },
            {
                "hex": "#ffc6d6",
                "name": "Orpiment",
                "phonetic": "オーピメント"
            },
            {
                "hex": "#ffc6d6",
                "name": "weld",
                "phonetic": "ウェルド"
            },
            {
                "hex": "#ffc6d6",
                "name": "indian yellow",
                "phonetic": "インディアン イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "daffodil yellow",
                "phonetic": "ダファディル イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "saffran yellow",
                "phonetic": "サフラン イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "chrome yellow",
                "phonetic": "クローム イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "yolk yellow",
                "phonetic": "ヨーク イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "canary",
                "phonetic": "カナリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "banana",
                "phonetic": "バナナ"
            },
            {
                "hex": "#ffc6d6",
                "name": "lemon yellow",
                "phonetic": "レモン イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "mustard",
                "phonetic": "マスタード"
            },
            {
                "hex": "#ffc6d6",
                "name": "mustard",
                "phonetic": "ロンドン ゴールド"
            },
            {
                "hex": "#ffc6d6",
                "name": "chartreuse yellow",
                "phonetic": "シャトルーズ イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "union jug",
                "phonetic": "ユニオン ジャッグ"
            },
            {
                "hex": "#ffc6d6",
                "name": "gold",
                "phonetic": "ゴールド"
            },
            {
                "hex": "#ffc6d6",
                "name": "grecian bronze",
                "phonetic": "グリーシァン ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "olive",
                "phonetic": "オリーブ"
            },
            {
                "hex": "#ffc6d6",
                "name": "lime green",
                "phonetic": "ライム グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "sea foam green",
                "phonetic": "シーフォーム グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "bistachio Green",
                "phonetic": "ピスタチオ グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "night green",
                "phonetic": "ナイト グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "night green",
                "phonetic": "グリニッジ"
            },
            {
                "hex": "#ffc6d6",
                "name": "eggshell green",
                "phonetic": "エッグシェル グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "grass green",
                "phonetic": "グラス グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "glaucas",
                "phonetic": "グローカス"
            },
            {
                "hex": "#ffc6d6",
                "name": "apple green",
                "phonetic": "アップル グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "gay green",
                "phonetic": "ゲイグリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "pea green",
                "phonetic": "ピーグリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "spring green",
                "phonetic": "スプリング グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "willow green",
                "phonetic": "ウィロー グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "Caudy Green",
                "phonetic": "サウディー グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "moth green",
                "phonetic": "モス グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "lincoln green",
                "phonetic": "リンカーン グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "olive green",
                "phonetic": "オリーブ グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "flower drew",
                "phonetic": "フラワードリュース"
            },
            {
                "hex": "#ffc6d6",
                "name": "schweinfurt",
                "phonetic": "シュヴァインフルト"
            },
            {
                "hex": "#ffc6d6",
                "name": "mint",
                "phonetic": "ミント"
            },
            {
                "hex": "#ffc6d6",
                "name": "chrome green",
                "phonetic": "クローム グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "malachite green",
                "phonetic": "マラカイト グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "verdigris",
                "phonetic": "ヴェルディグリ"
            },
            {
                "hex": "#ffc6d6",
                "name": "mistletoe",
                "phonetic": "ミスルトー"
            },
            {
                "hex": "#ffc6d6",
                "name": "hunter green",
                "phonetic": "ハンター グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "bottle green",
                "phonetic": "ボトル グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "myrtle green",
                "phonetic": "マートル グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "horizon blue",
                "phonetic": "ホリゾン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "nile blue",
                "phonetic": "ナイル ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "baby blue",
                "phonetic": "ベビー ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cambridge blue",
                "phonetic": "ケンブリッジ ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "sky blue",
                "phonetic": "スカイ ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "celestial blue",
                "phonetic": "シレスティアルブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "zenith blue",
                "phonetic": "ゼニスブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "Venet",
                "phonetic": "ヴェニット"
            },
            {
                "hex": "#ffc6d6",
                "name": "aqua marine",
                "phonetic": "アクア マリン"
            },
            {
                "hex": "#ffc6d6",
                "name": "turquoise",
                "phonetic": "ターコイズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "porcelain blue",
                "phonetic": "ポースリン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "forget me not",
                "phonetic": "フォーゲットミーノット"
            },
            {
                "hex": "#ffc6d6",
                "name": "powder blue",
                "phonetic": "パウダー ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "Peacock",
                "phonetic": "ピーコック"
            },
            {
                "hex": "#ffc6d6",
                "name": "egyptian blue",
                "phonetic": "エジプシアン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "vice",
                "phonetic": "バイス"
            },
            {
                "hex": "#ffc6d6",
                "name": "pompadour pink",
                "phonetic": "ポンパドール ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "wedgewood blue",
                "phonetic": "ウェッジウッド ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "bluette",
                "phonetic": "ブルーエット"
            },
            {
                "hex": "#ffc6d6",
                "name": "hydrangea blue",
                "phonetic": "ハイドレンジア ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cyan blue",
                "phonetic": "サイアン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cobalt blue",
                "phonetic": "コバルト ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "smalt",
                "phonetic": "スマルト"
            },
            {
                "hex": "#ffc6d6",
                "name": "sapphire blue",
                "phonetic": "サファイア ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "ultramarine",
                "phonetic": "ウルトラマリン"
            },
            {
                "hex": "#ffc6d6",
                "name": "prussian blue",
                "phonetic": "プルシアン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "union jack",
                "phonetic": "ユニオン ジャック"
            },
            {
                "hex": "#ffc6d6",
                "name": "royal blue",
                "phonetic": "ロイヤル ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "garter blue",
                "phonetic": "ガーター ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "delft blue",
                "phonetic": "デルフト ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "marine blue",
                "phonetic": "マリン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "navy blue",
                "phonetic": "ネイヴィブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "midnight blue",
                "phonetic": "ミッドナイト ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "midnight blue",
                "phonetic": "ロンドン トワイライト"
            },
            {
                "hex": "#ffc6d6",
                "name": "midnight blue",
                "phonetic": "ウェストミンスター"
            },
            {
                "hex": "#ffc6d6",
                "name": "lavender",
                "phonetic": "ラべンダー"
            },
            {
                "hex": "#ffc6d6",
                "name": "wisteria",
                "phonetic": "ウィスタリア"
            },
            {
                "hex": "#ffc6d6",
                "name": "lilac",
                "phonetic": "ライラック"
            },
            {
                "hex": "#ffc6d6",
                "name": "mallow",
                "phonetic": "マロウ"
            },
            {
                "hex": "#ffc6d6",
                "name": "mallow",
                "phonetic": "チェルシー ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "thistle",
                "phonetic": "シスル"
            },
            {
                "hex": "#ffc6d6",
                "name": "mineral violet",
                "phonetic": "ミネラル バイオレット"
            },
            {
                "hex": "#ffc6d6",
                "name": "cobalt violet",
                "phonetic": "コバルト バイオレット"
            },
            {
                "hex": "#ffc6d6",
                "name": "purple",
                "phonetic": "パープル"
            },
            {
                "hex": "#ffc6d6",
                "name": "amethyst",
                "phonetic": "アメジスト"
            },
            {
                "hex": "#ffc6d6",
                "name": "Amaranth Purple",
                "phonetic": "アメジスト パープル"
            },
            {
                "hex": "#ffc6d6",
                "name": "magenta",
                "phonetic": "マゼンタ"
            },
            {
                "hex": "#ffc6d6",
                "name": "pansy",
                "phonetic": "パンジー"
            },
            {
                "hex": "#ffc6d6",
                "name": "fuchsia",
                "phonetic": "フューシャ"
            },
            {
                "hex": "#ffc6d6",
                "name": "aconite violet",
                "phonetic": "アコナイトバイオレット"
            },
            {
                "hex": "#ffc6d6",
                "name": "mulberry",
                "phonetic": "マルベリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "heliotrope",
                "phonetic": "ヘリオトロープ"
            },
            {
                "hex": "#ffc6d6",
                "name": "plum purple",
                "phonetic": "プラム パープル"
            },
            {
                "hex": "#ffc6d6",
                "name": "raspberry",
                "phonetic": "ラズベリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "raisins",
                "phonetic": "レーズン"
            },
            {
                "hex": "#ffc6d6",
                "name": "wine",
                "phonetic": "ワイン"
            },
            {
                "hex": "#ffc6d6",
                "name": "White",
                "phonetic": "ホワイト"
            },
            {
                "hex": "#ffc6d6",
                "name": "alabaster",
                "phonetic": "アラバスター"
            },
            {
                "hex": "#ffc6d6",
                "name": "milk white",
                "phonetic": "ミルク ホワイト"
            },
            {
                "hex": "#ffc6d6",
                "name": "pale white lily",
                "phonetic": "ペールホワイトリリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "silver",
                "phonetic": "シルバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "sand",
                "phonetic": "サンド"
            },
            {
                "hex": "#ffc6d6",
                "name": "ash grey",
                "phonetic": "アッシュ グレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "Smoke Grey",
                "phonetic": "スモーク グレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "pearl green",
                "phonetic": "パール グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "mouse grey",
                "phonetic": "マウス グレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "dove gray",
                "phonetic": "ダブ グレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "mist",
                "phonetic": "ミスト"
            },
            {
                "hex": "#ffc6d6",
                "name": "graphite",
                "phonetic": "グラファイト"
            },
            {
                "hex": "#ffc6d6",
                "name": "goose gray",
                "phonetic": "グーズグレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "Black",
                "phonetic": "ブラック"
            },
            {
                "hex": "#ffc6d6",
                "name": "england",
                "phonetic": "イングランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "scotland",
                "phonetic": "スコットランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "wales",
                "phonetic": "ウェールズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "northern Ireland",
                "phonetic": "ノーザン アイルランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "channel Islands",
                "phonetic": "チャンネルアイスランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "isle of man",
                "phonetic": "アイル オブ マン"
            },
            {
                "hex": "#ffc6d6",
                "name": "london",
                "phonetic": "ロンドン"
            },
            {
                "hex": "#ffc6d6",
                "name": "south east",
                "phonetic": "サウス イースト"
            },
            {
                "hex": "#ffc6d6",
                "name": "west country",
                "phonetic": "ウエスト カントリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "east anglia",
                "phonetic": "イースト アングリア"
            },
            {
                "hex": "#ffc6d6",
                "name": "east midlands",
                "phonetic": "イースト ミッドランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "west midlands",
                "phonetic": "ウエスト ミッドランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "yorkshire",
                "phonetic": "ヨークシャイア"
            },
            {
                "hex": "#ffc6d6",
                "name": "north west",
                "phonetic": "ノース ウエスト"
            },
            {
                "hex": "#ffc6d6",
                "name": "north east",
                "phonetic": "ノース イースト"
            },
            {
                "hex": "#ffc6d6",
                "name": "borders",
                "phonetic": "ボーダーズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "south west",
                "phonetic": "サウス ウエスト"
            },
            {
                "hex": "#ffc6d6",
                "name": "central belt",
                "phonetic": "セントラル ベルト"
            },
            {
                "hex": "#ffc6d6",
                "name": "highlands",
                "phonetic": "ハイランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "north east scotland",
                "phonetic": "ノース イースト スコットランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "hebrides",
                "phonetic": "ヘブリデス"
            },
            {
                "hex": "#ffc6d6",
                "name": "orkney islands",
                "phonetic": "オークニー アイランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "shetland islands",
                "phonetic": "シェトランド アイランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "north wales",
                "phonetic": "ノース ウェールズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "mid wales",
                "phonetic": "ミド ウェールズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "south wales",
                "phonetic": "サウス ウェールズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "county antrim",
                "phonetic": "カウンティ アントリム"
            },
            {
                "hex": "#ffc6d6",
                "name": "county armagh",
                "phonetic": "カウンティ アーマー"
            },
            {
                "hex": "#ffc6d6",
                "name": "county londonderry",
                "phonetic": "カウンティ ロンドンデリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "county down",
                "phonetic": "カウンティ ダウン"
            },
            {
                "hex": "#ffc6d6",
                "name": "county fermanagh",
                "phonetic": "カウンティ ファーマナ"
            },
            {
                "hex": "#ffc6d6",
                "name": "county tyrone",
                "phonetic": "カウンティ ティロン"
            },
            {
                "hex": "#ffc6d6",
                "name": "oxfordshire",
                "phonetic": "オックスフォードシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "buckinghamshire",
                "phonetic": "バッキンガムシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "berkshire",
                "phonetic": "バークシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "hampshire",
                "phonetic": "ハンプシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "surrey",
                "phonetic": "サリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "west Sussex",
                "phonetic": "ウェスト サセックス"
            },
            {
                "hex": "#ffc6d6",
                "name": "east Sussex",
                "phonetic": "イースト サセックス"
            },
            {
                "hex": "#ffc6d6",
                "name": "kent",
                "phonetic": "ケント"
            },
            {
                "hex": "#ffc6d6",
                "name": "isle of wight",
                "phonetic": "アイル オブ ワイト"
            },
            {
                "hex": "#ffc6d6",
                "name": "gloucestershire",
                "phonetic": "グロスターシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cornwall",
                "phonetic": "コーンウォール"
            },
            {
                "hex": "#ffc6d6",
                "name": "wiltshire",
                "phonetic": "ウィルトシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "somerset",
                "phonetic": "サマーセット"
            },
            {
                "hex": "#ffc6d6",
                "name": "dorset",
                "phonetic": "ドーセット"
            },
            {
                "hex": "#ffc6d6",
                "name": "devon",
                "phonetic": "デボン"
            },
            {
                "hex": "#ffc6d6",
                "name": "isles of scilly",
                "phonetic": "アイルズ オブ シリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "hertfordshire",
                "phonetic": "ハートフォードシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "essex",
                "phonetic": "エセックス"
            },
            {
                "hex": "#ffc6d6",
                "name": "bedfordshire",
                "phonetic": "ベッドフォードシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cambridgeshire",
                "phonetic": "ケンブリッジシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "suffolk",
                "phonetic": "サフォーク"
            },
            {
                "hex": "#ffc6d6",
                "name": "norfolk",
                "phonetic": "ノーフォーク"
            },
            {
                "hex": "#ffc6d6",
                "name": "northamptonshire",
                "phonetic": "ノーサンプトンシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "leicestershire",
                "phonetic": "レスターシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "derbyshire",
                "phonetic": "ダービーシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "nottinghamshire",
                "phonetic": "ノッティンガムシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "lincolnshire",
                "phonetic": "リンカーンシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "rutland",
                "phonetic": "ラトランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "herefordshire",
                "phonetic": "ヘレフォードシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "worcestershire",
                "phonetic": "ウスターシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "warwickshire",
                "phonetic": "ウォーリックシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "west Midlands County",
                "phonetic": "ウェスト ミドランド カウンティ"
            },
            {
                "hex": "#ffc6d6",
                "name": "shropshire",
                "phonetic": "シュロップシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "staffordshire",
                "phonetic": "スタッフォードシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "north yorkshire",
                "phonetic": "ノース ヨークシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "east yorkshire",
                "phonetic": "イースト ヨークシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "south yorkshire",
                "phonetic": "サウス ヨークシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "west yorkshire",
                "phonetic": "ウェスト ヨークシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cheshire",
                "phonetic": "チェシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "merseyside",
                "phonetic": "マージーサイド"
            },
            {
                "hex": "#ffc6d6",
                "name": "greater manchester",
                "phonetic": "グレイター マンチェスター"
            },
            {
                "hex": "#ffc6d6",
                "name": "lancashire",
                "phonetic": "ランカシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cumbria",
                "phonetic": "カンブリア"
            },
            {
                "hex": "#ffc6d6",
                "name": "cleveland",
                "phonetic": "クリーブランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "county durham",
                "phonetic": "カウンティ ダーラム"
            },
            {
                "hex": "#ffc6d6",
                "name": "tyne and wear",
                "phonetic": "タイン アン ウィア"
            },
            {
                "hex": "#ffc6d6",
                "name": "northumberland",
                "phonetic": "ノーサンバーランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "ayrshire",
                "phonetic": "エアシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "clydesdale",
                "phonetic": "クライズデール"
            },
            {
                "hex": "#ffc6d6",
                "name": "dumfries and galloway",
                "phonetic": "ダンフリース アンド ギャロウェー"
            },
            {
                "hex": "#ffc6d6",
                "name": "isle of arran",
                "phonetic": "アイル オブ アラン"
            },
            {
                "hex": "#ffc6d6",
                "name": "clydeside",
                "phonetic": "クライドサイド"
            },
            {
                "hex": "#ffc6d6",
                "name": "the lothians",
                "phonetic": "ロジアン"
            },
            {
                "hex": "#ffc6d6",
                "name": "stirlingshire",
                "phonetic": "スターリングシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "clackmannanshire",
                "phonetic": "クラックマナンシャイア"
            },
            {
                "hex": "#ffc6d6",
                "name": "argyll and bute",
                "phonetic": "アーガイル アンド ビュート"
            },
            {
                "hex": "#ffc6d6",
                "name": "highland",
                "phonetic": "ハイランド"
            },
            {
                "hex": "#ffc6d6",
                "name": "moray",
                "phonetic": "モレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "aberdeenshire",
                "phonetic": "アバディーンシャイア"
            },
            {
                "hex": "#ffc6d6",
                "name": "angus",
                "phonetic": "アンガス"
            },
            {
                "hex": "#ffc6d6",
                "name": "perth and kinross",
                "phonetic": "パース アンド キンロス"
            },
            {
                "hex": "#ffc6d6",
                "name": "fife",
                "phonetic": "ファイフ"
            },
            {
                "hex": "#ffc6d6",
                "name": "inner hebrides",
                "phonetic": "インナー ヘブリディーズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "outer hebrides",
                "phonetic": "アウター ヘブリディーズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "anglesey",
                "phonetic": "アングルシー"
            },
            {
                "hex": "#ffc6d6",
                "name": "gwynedd",
                "phonetic": "グウィネズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "conwy",
                "phonetic": "コンウィ"
            },
            {
                "hex": "#ffc6d6",
                "name": "denbighshire",
                "phonetic": "デンビーシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "flintshire",
                "phonetic": "フリントシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "wrexham",
                "phonetic": "レクサム"
            },
            {
                "hex": "#ffc6d6",
                "name": "ceredigion",
                "phonetic": "ケレディジョン"
            },
            {
                "hex": "#ffc6d6",
                "name": "powys",
                "phonetic": "ポーイス"
            },
            {
                "hex": "#ffc6d6",
                "name": "pembrokeshire",
                "phonetic": "ペンブルックシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "carmarthenshire",
                "phonetic": "カーマーゼンシャー"
            },
            {
                "hex": "#ffc6d6",
                "name": "glamorgan",
                "phonetic": "グラモーガン"
            },
            {
                "hex": "#ffc6d6",
                "name": "monmouthshire",
                "phonetic": "モンマスシャー"
            }
        ];
    }

    /**
     * 中国の色を取得します。
     * @returns {Array<Object>} 色情報を返します
     */
    #getChineseColors = () => {
        [
            {
                "hex": "#eac0ce",
                "name": "粉鳳仙",
                "phonetic": "フェンフォンシェン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅粉",
                "phonetic": "チェンフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "淡粉",
                "phonetic": "タンフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "紫薇花",
                "phonetic": "ツーウェイホワ"
            },
            {
                "hex": "#eac0ce",
                "name": "暗粉",
                "phonetic": "アンフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "荷花紅",
                "phonetic": "フーホワホン"
            },
            {
                "hex": "#eac0ce",
                "name": "紫水晶",
                "phonetic": "ツーシュイチン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅石英紫",
                "phonetic": "チェンシーインツー"
            },
            {
                "hex": "#eac0ce",
                "name": "浅鳳仙紫",
                "phonetic": "チェンフォンシェンツー"
            },
            {
                "hex": "#eac0ce",
                "name": "木槿紫",
                "phonetic": "ムーチンツー"
            },
            {
                "hex": "#eac0ce",
                "name": "長春花色",
                "phonetic": "チァンチュンホワスー"
            },
            {
                "hex": "#eac0ce",
                "name": "洋葱紫",
                "phonetic": "ヤンツォンツー"
            },
            {
                "hex": "#eac0ce",
                "name": "紫羅藍",
                "phonetic": "ツールオラン"
            },
            {
                "hex": "#eac0ce",
                "name": "龍胆紫",
                "phonetic": "ロンタンツー"
            },
            {
                "hex": "#eac0ce",
                "name": "雪紫",
                "phonetic": "シュエツー"
            },
            {
                "hex": "#eac0ce",
                "name": "紅蓮灰",
                "phonetic": "ホンリェンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "艶粉",
                "phonetic": "イェンフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "紫粉",
                "phonetic": "ツーフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "鶏冠花紅",
                "phonetic": "チークワンホワホン"
            },
            {
                "hex": "#eac0ce",
                "name": "青蓮紫",
                "phonetic": "チンリェンツー"
            },
            {
                "hex": "#eac0ce",
                "name": "牽牛紫",
                "phonetic": "チェンニューツー"
            },
            {
                "hex": "#eac0ce",
                "name": "品紅",
                "phonetic": "ピンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "蘇木色",
                "phonetic": "スームースー"
            },
            {
                "hex": "#eac0ce",
                "name": "?瑰紅",
                "phonetic": "メイクイホン"
            },
            {
                "hex": "#eac0ce",
                "name": "?瑰灰",
                "phonetic": "メイクイホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "臙脂",
                "phonetic": "イェンチ"
            },
            {
                "hex": "#eac0ce",
                "name": "辰沙",
                "phonetic": "チェンシァ"
            },
            {
                "hex": "#eac0ce",
                "name": "磚紅",
                "phonetic": "チュワンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "殷紅",
                "phonetic": "イェンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "銀紅",
                "phonetic": "インホン"
            },
            {
                "hex": "#eac0ce",
                "name": "肉紅",
                "phonetic": "ロウホン"
            },
            {
                "hex": "#eac0ce",
                "name": "妃紅",
                "phonetic": "フェイホン"
            },
            {
                "hex": "#eac0ce",
                "name": "猩紅",
                "phonetic": "シンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "血紅",
                "phonetic": "シュエホン"
            },
            {
                "hex": "#eac0ce",
                "name": "月季紅",
                "phonetic": "ユエチーホン"
            },
            {
                "hex": "#eac0ce",
                "name": "茉莉花紅",
                "phonetic": "モーリーホワホン"
            },
            {
                "hex": "#eac0ce",
                "name": "烏羅松紅",
                "phonetic": "ウールオソンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "銀星海棠",
                "phonetic": "インシンハイタン"
            },
            {
                "hex": "#eac0ce",
                "name": "象牙紅",
                "phonetic": "シァンヤーホン"
            },
            {
                "hex": "#eac0ce",
                "name": "曙紅",
                "phonetic": "シューホン"
            },
            {
                "hex": "#eac0ce",
                "name": "牡丹紅",
                "phonetic": "ムータンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "艶紅",
                "phonetic": "イェンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "蕉紅色",
                "phonetic": "チャオホンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "銀朱",
                "phonetic": "インチュー"
            },
            {
                "hex": "#eac0ce",
                "name": "?砂",
                "phonetic": "チューシャ"
            },
            {
                "hex": "#eac0ce",
                "name": "二?",
                "phonetic": "アルチュー"
            },
            {
                "hex": "#eac0ce",
                "name": "??",
                "phonetic": "チューピャオ"
            },
            {
                "hex": "#eac0ce",
                "name": "章丹",
                "phonetic": "チァンタン"
            },
            {
                "hex": "#eac0ce",
                "name": "蕃茄紅",
                "phonetic": "ファンチェホン"
            },
            {
                "hex": "#eac0ce",
                "name": "榴花紅",
                "phonetic": "リューホワホン"
            },
            {
                "hex": "#eac0ce",
                "name": "柿子色",
                "phonetic": "シーツスー"
            },
            {
                "hex": "#eac0ce",
                "name": "桔紅",
                "phonetic": "チューホン"
            },
            {
                "hex": "#eac0ce",
                "name": "桔黄",
                "phonetic": "チューホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "紅扇貝色",
                "phonetic": "ホンシャンペイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "粉橙色",
                "phonetic": "フェンチョンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "金紅",
                "phonetic": "チンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "雄精",
                "phonetic": "ションチン"
            },
            {
                "hex": "#eac0ce",
                "name": "金黄",
                "phonetic": "チンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "雄黄",
                "phonetic": "ションホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "蝦黄",
                "phonetic": "シアホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "艶黄",
                "phonetic": "イェンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "鵝黄",
                "phonetic": "ウーホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "十様錦",
                "phonetic": "シーヤンチン"
            },
            {
                "hex": "#eac0ce",
                "name": "鳳仙粉",
                "phonetic": "フォンシェンフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "肉粉",
                "phonetic": "ロウフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "肉黄",
                "phonetic": "ロウホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "釉紅",
                "phonetic": "ユーホン"
            },
            {
                "hex": "#eac0ce",
                "name": "紅灰蓮",
                "phonetic": "ホンホイリェン"
            },
            {
                "hex": "#eac0ce",
                "name": "蛤蜊粉",
                "phonetic": "クーリーフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "銹紅",
                "phonetic": "シューホン"
            },
            {
                "hex": "#eac0ce",
                "name": "土紅",
                "phonetic": "トウホン"
            },
            {
                "hex": "#eac0ce",
                "name": "瑪瑙色",
                "phonetic": "マーナオスー"
            },
            {
                "hex": "#eac0ce",
                "name": "赭石色",
                "phonetic": "チョーシースー"
            },
            {
                "hex": "#eac0ce",
                "name": "赭紅",
                "phonetic": "チョーホン"
            },
            {
                "hex": "#eac0ce",
                "name": "紅狐色",
                "phonetic": "ホンフースー"
            },
            {
                "hex": "#eac0ce",
                "name": "黄棕色",
                "phonetic": "ホワンツォンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "棕茶",
                "phonetic": "ツォンチャ"
            },
            {
                "hex": "#eac0ce",
                "name": "中駝",
                "phonetic": "チョントゥオ"
            },
            {
                "hex": "#eac0ce",
                "name": "土黄",
                "phonetic": "トウホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "樹皮色",
                "phonetic": "シューピースー"
            },
            {
                "hex": "#eac0ce",
                "name": "桂皮色",
                "phonetic": "クイピースー"
            },
            {
                "hex": "#eac0ce",
                "name": "土布色",
                "phonetic": "トウプースー"
            },
            {
                "hex": "#eac0ce",
                "name": "黄琉璃",
                "phonetic": "ホワンリューリー"
            },
            {
                "hex": "#eac0ce",
                "name": "琉璃色",
                "phonetic": "リューリースー"
            },
            {
                "hex": "#eac0ce",
                "name": "檀香色",
                "phonetic": "タンシァンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "蒼黄",
                "phonetic": "ツァンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "米紅",
                "phonetic": "ミーホン"
            },
            {
                "hex": "#eac0ce",
                "name": "瑪瑙粉",
                "phonetic": "マーナオフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "向日黄",
                "phonetic": "シァンリーホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅黄棕",
                "phonetic": "チェンホワンツォン"
            },
            {
                "hex": "#eac0ce",
                "name": "南瓜黄",
                "phonetic": "ナンクワホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "駱駝色",
                "phonetic": "ルオトゥオスー"
            },
            {
                "hex": "#eac0ce",
                "name": "芦黄",
                "phonetic": "ルーホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅桔黄",
                "phonetic": "チェンチュホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "鹿皮色",
                "phonetic": "ルーピースー"
            },
            {
                "hex": "#eac0ce",
                "name": "鹿皮棕",
                "phonetic": "ルーピーツォン"
            },
            {
                "hex": "#eac0ce",
                "name": "真絲綢色",
                "phonetic": "チェンスーチョウスー"
            },
            {
                "hex": "#eac0ce",
                "name": "富春紡色",
                "phonetic": "フーチュンファンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "乳白色",
                "phonetic": "ルーパイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "乳黄色",
                "phonetic": "ルーホワンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "甘石粉",
                "phonetic": "カンシーフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅血牙",
                "phonetic": "チェンシュエヤー"
            },
            {
                "hex": "#eac0ce",
                "name": "浅棕灰",
                "phonetic": "チェンツォンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "粉棕",
                "phonetic": "フェンツォン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅肉粉",
                "phonetic": "チェンロウフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅駝色",
                "phonetic": "チェントゥオスー"
            },
            {
                "hex": "#eac0ce",
                "name": "浅棕茶",
                "phonetic": "タンツォンチャ"
            },
            {
                "hex": "#eac0ce",
                "name": "肉棕灰",
                "phonetic": "ロウツォンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "肉棕",
                "phonetic": "ロウツォン"
            },
            {
                "hex": "#eac0ce",
                "name": "珈琲棕",
                "phonetic": "カフェイツォン"
            },
            {
                "hex": "#eac0ce",
                "name": "黄鴨色",
                "phonetic": "ホワンヤースー"
            },
            {
                "hex": "#eac0ce",
                "name": "煙色",
                "phonetic": "イェンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "朱古力色",
                "phonetic": "チュークリースー"
            },
            {
                "hex": "#eac0ce",
                "name": "棗紅",
                "phonetic": "ツァオホン"
            },
            {
                "hex": "#eac0ce",
                "name": "葡萄灰",
                "phonetic": "プータオホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "紫絳色",
                "phonetic": "ツーチァンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "紫銅色",
                "phonetic": "ツートンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "棗紫",
                "phonetic": "ツァオツー"
            },
            {
                "hex": "#eac0ce",
                "name": "黒紫",
                "phonetic": "ヘイツー"
            },
            {
                "hex": "#eac0ce",
                "name": "棕紅",
                "phonetic": "ツォンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "深釉紅",
                "phonetic": "シェンユーホン"
            },
            {
                "hex": "#eac0ce",
                "name": "紫扇貝色",
                "phonetic": "ツーシャンペイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "深煙紅",
                "phonetic": "シェンイェンホン"
            },
            {
                "hex": "#eac0ce",
                "name": "珈琲色",
                "phonetic": "カフェイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "豆棕",
                "phonetic": "トウツォン"
            },
            {
                "hex": "#eac0ce",
                "name": "羅漢果色",
                "phonetic": "ルオハンクオスー"
            },
            {
                "hex": "#eac0ce",
                "name": "深栗色",
                "phonetic": "シェンリースー"
            },
            {
                "hex": "#eac0ce",
                "name": "醤色",
                "phonetic": "チァンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "深褐色",
                "phonetic": "シェンホースー"
            },
            {
                "hex": "#eac0ce",
                "name": "絳紫",
                "phonetic": "チァンツー"
            },
            {
                "hex": "#eac0ce",
                "name": "深煙",
                "phonetic": "シェンイェン"
            },
            {
                "hex": "#eac0ce",
                "name": "茄皮紫",
                "phonetic": "チェピーツー"
            },
            {
                "hex": "#eac0ce",
                "name": "煙栗色",
                "phonetic": "イェンリースー"
            },
            {
                "hex": "#eac0ce",
                "name": "将校?",
                "phonetic": "チェンシャオニー"
            },
            {
                "hex": "#eac0ce",
                "name": "将校?",
                "phonetic": "チャンシャオニー"
            },
            {
                "hex": "#eac0ce",
                "name": "中棕灰",
                "phonetic": "チョンツォンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "姜黄",
                "phonetic": "チァンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "新芽色",
                "phonetic": "シンヤースー"
            },
            {
                "hex": "#eac0ce",
                "name": "?其黄",
                "phonetic": "カーチーホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "石黄",
                "phonetic": "シーホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "乳棕",
                "phonetic": "ルーツォン"
            },
            {
                "hex": "#eac0ce",
                "name": "乳灰",
                "phonetic": "ルーホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "蝋黄",
                "phonetic": "ラーホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "深銀灰",
                "phonetic": "シェンインホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "米灰",
                "phonetic": "ミーホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "牙黄",
                "phonetic": "ヤーホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "枝黄",
                "phonetic": "チーホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "丹東石",
                "phonetic": "タントンシー"
            },
            {
                "hex": "#eac0ce",
                "name": "黄金色",
                "phonetic": "ホワンチンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "藤黄",
                "phonetic": "トンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "蛋黄",
                "phonetic": "タンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "槐黄",
                "phonetic": "ホワイホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "明黄",
                "phonetic": "ミンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "絲瓜花黄",
                "phonetic": "スークワホワホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "嫩姜黄",
                "phonetic": "ネンチァンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "甘草黄",
                "phonetic": "カンツァオホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "小鶏黄",
                "phonetic": "シャオチーホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "芽灰",
                "phonetic": "ヤーホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "檸檬黄",
                "phonetic": "ニンマンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "楊桃色",
                "phonetic": "ヤンタオスー"
            },
            {
                "hex": "#eac0ce",
                "name": "淡黄",
                "phonetic": "タンホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "淡米色",
                "phonetic": "タンミースー"
            },
            {
                "hex": "#eac0ce",
                "name": "胡粉",
                "phonetic": "フーフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "蛤粉",
                "phonetic": "クーフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "立徳粉",
                "phonetic": "リートーフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "牙緑",
                "phonetic": "ヤーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "苦瓜緑",
                "phonetic": "クークワリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "草黄",
                "phonetic": "ツァオホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "枯緑",
                "phonetic": "クーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "嫩草緑",
                "phonetic": "ネンツォンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "浅草緑",
                "phonetic": "チェンツァオリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "銅緑色",
                "phonetic": "トンリュースー"
            },
            {
                "hex": "#eac0ce",
                "name": "青豆色",
                "phonetic": "チントウスー"
            },
            {
                "hex": "#eac0ce",
                "name": "黄緑",
                "phonetic": "ホワンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "深芽緑",
                "phonetic": "シェンヤーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "葱緑",
                "phonetic": "ツォンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "夜緑色",
                "phonetic": "イエリュースー"
            },
            {
                "hex": "#eac0ce",
                "name": "軍緑",
                "phonetic": "チュンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "蒼緑",
                "phonetic": "ツァンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "橄欖緑",
                "phonetic": "カンランリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "冬瓜緑",
                "phonetic": "トンクワリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "荷茎緑",
                "phonetic": "フーチンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "緑琉璃色",
                "phonetic": "リューリューリースー"
            },
            {
                "hex": "#eac0ce",
                "name": "嫩葱緑",
                "phonetic": "ネンツォオリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "鸚鵡緑",
                "phonetic": "インウーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "翠緑",
                "phonetic": "ツイリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "湖緑",
                "phonetic": "フーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "粗孔雀緑",
                "phonetic": "ツーコンチュエリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "深緑宝石",
                "phonetic": "シェンリューパオシー"
            },
            {
                "hex": "#eac0ce",
                "name": "灰緑",
                "phonetic": "ホイリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "冬緑",
                "phonetic": "トンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "巴黎緑",
                "phonetic": "パリーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "果緑",
                "phonetic": "クオリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "玉緑",
                "phonetic": "ユーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "果灰",
                "phonetic": "クオホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "碧玉石",
                "phonetic": "ピーユーシー"
            },
            {
                "hex": "#eac0ce",
                "name": "浅松緑",
                "phonetic": "チェンソンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "深松緑",
                "phonetic": "シェンソンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "浅鮮緑",
                "phonetic": "チェンシェンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "三緑",
                "phonetic": "サンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "枝緑",
                "phonetic": "チーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "淡灰緑",
                "phonetic": "タンホイリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "水黄",
                "phonetic": "シュイホワン"
            },
            {
                "hex": "#eac0ce",
                "name": "淡緑",
                "phonetic": "タンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "鴨蛋青",
                "phonetic": "ヤータンチン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅水緑",
                "phonetic": "チェンシュイリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "浅青瓷釉色",
                "phonetic": "チェンチンツーユースー"
            },
            {
                "hex": "#eac0ce",
                "name": "龍泉青瓷釉色",
                "phonetic": "ロンチュエンチンツーユースー"
            },
            {
                "hex": "#eac0ce",
                "name": "春緑",
                "phonetic": "チュンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "月白色",
                "phonetic": "ユエパイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "銹緑",
                "phonetic": "シューリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "蝋白",
                "phonetic": "ラーパイ"
            },
            {
                "hex": "#eac0ce",
                "name": "芦灰",
                "phonetic": "ルーホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "蝦灰",
                "phonetic": "シアホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "大理石色",
                "phonetic": "ターリーシースー"
            },
            {
                "hex": "#eac0ce",
                "name": "法国梧桐皮色",
                "phonetic": "ファークオウトンピース"
            },
            {
                "hex": "#eac0ce",
                "name": "中条蝦緑",
                "phonetic": "チョンティアオシアリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "灰米",
                "phonetic": "ホイミー"
            },
            {
                "hex": "#eac0ce",
                "name": "松緑色",
                "phonetic": "ソンリュースー"
            },
            {
                "hex": "#eac0ce",
                "name": "暗灰",
                "phonetic": "アンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "?其緑",
                "phonetic": "カーチリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "蟹青",
                "phonetic": "シエチン"
            },
            {
                "hex": "#eac0ce",
                "name": "青蝦色",
                "phonetic": "チンシアスー"
            },
            {
                "hex": "#eac0ce",
                "name": "玉石藍",
                "phonetic": "ユーシーラン"
            },
            {
                "hex": "#eac0ce",
                "name": "橄欖灰",
                "phonetic": "カンランホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "老緑",
                "phonetic": "ラオリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "墨緑",
                "phonetic": "モーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "焦茶色",
                "phonetic": "チャオチャスー"
            },
            {
                "hex": "#eac0ce",
                "name": "茶緑",
                "phonetic": "チャリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "鉄緑",
                "phonetic": "ティエリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "油緑",
                "phonetic": "ユーリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "草灰色",
                "phonetic": "ツァオホイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "暗苔緑",
                "phonetic": "アンタイリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "毛緑",
                "phonetic": "マオリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "深灰",
                "phonetic": "シェンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "鵲灰",
                "phonetic": "チュエホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "深瓦灰",
                "phonetic": "シェンワーホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "苔灰",
                "phonetic": "タイホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "蟹藍",
                "phonetic": "シェラン"
            },
            {
                "hex": "#eac0ce",
                "name": "冬灰色",
                "phonetic": "トンホイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "雲灰",
                "phonetic": "ユンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "鴿灰",
                "phonetic": "クーホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "藍灰色",
                "phonetic": "ランホイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "水貂灰",
                "phonetic": "シュイティアオホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "春藍",
                "phonetic": "チュンラン"
            },
            {
                "hex": "#eac0ce",
                "name": "灰藍",
                "phonetic": "ホイラン"
            },
            {
                "hex": "#eac0ce",
                "name": "湖藍灰",
                "phonetic": "フーランホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "竹月色",
                "phonetic": "チューユエスー"
            },
            {
                "hex": "#eac0ce",
                "name": "鈷藍",
                "phonetic": "クーラン"
            },
            {
                "hex": "#eac0ce",
                "name": "品緑",
                "phonetic": "ピンリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "深竹月",
                "phonetic": "シェンチューユエ"
            },
            {
                "hex": "#eac0ce",
                "name": "琉璃藍",
                "phonetic": "リューリーラン"
            },
            {
                "hex": "#eac0ce",
                "name": "毛月色",
                "phonetic": "マオユエスー"
            },
            {
                "hex": "#eac0ce",
                "name": "柏坊灰藍",
                "phonetic": "ポーファンホイラン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅土藍",
                "phonetic": "チェントウラン"
            },
            {
                "hex": "#eac0ce",
                "name": "北京毛藍",
                "phonetic": "ペイチンマオラン"
            },
            {
                "hex": "#eac0ce",
                "name": "絨藍",
                "phonetic": "ロンラン"
            },
            {
                "hex": "#eac0ce",
                "name": "浅海昌藍",
                "phonetic": "チェンハイチァンラン"
            },
            {
                "hex": "#eac0ce",
                "name": "海藍",
                "phonetic": "ハイラン"
            },
            {
                "hex": "#eac0ce",
                "name": "深毛月色",
                "phonetic": "シェンマオユエスー"
            },
            {
                "hex": "#eac0ce",
                "name": "深毛藍",
                "phonetic": "シェンマオラン"
            },
            {
                "hex": "#eac0ce",
                "name": "深藍",
                "phonetic": "シェンラン"
            },
            {
                "hex": "#eac0ce",
                "name": "?藍",
                "phonetic": "ティエンラン"
            },
            {
                "hex": "#eac0ce",
                "name": "労働布色",
                "phonetic": "ラオトンプースー"
            },
            {
                "hex": "#eac0ce",
                "name": "黛藍",
                "phonetic": "タイラン"
            },
            {
                "hex": "#eac0ce",
                "name": "蔵藍",
                "phonetic": "ツァンラン"
            },
            {
                "hex": "#eac0ce",
                "name": "鮮藍",
                "phonetic": "シェンラン"
            },
            {
                "hex": "#eac0ce",
                "name": "孔雀藍",
                "phonetic": "コンチュエラン"
            },
            {
                "hex": "#eac0ce",
                "name": "群青",
                "phonetic": "チュンチン"
            },
            {
                "hex": "#eac0ce",
                "name": "宝石藍",
                "phonetic": "パオシーラン"
            },
            {
                "hex": "#eac0ce",
                "name": "紺青",
                "phonetic": "カンチン"
            },
            {
                "hex": "#eac0ce",
                "name": "?鉄",
                "phonetic": "タイチン"
            },
            {
                "hex": "#eac0ce",
                "name": "蔵黒藍",
                "phonetic": "ツァンヘイラン"
            },
            {
                "hex": "#eac0ce",
                "name": "灯草灰",
                "phonetic": "タンツァオホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "元青",
                "phonetic": "ユワンチン"
            },
            {
                "hex": "#eac0ce",
                "name": "粗晶皀",
                "phonetic": "ツーチンツァオ"
            },
            {
                "hex": "#eac0ce",
                "name": "紅皀",
                "phonetic": "ホンツァオ"
            },
            {
                "hex": "#eac0ce",
                "name": "鉄青",
                "phonetic": "ティエチン"
            },
            {
                "hex": "#eac0ce",
                "name": "鉄灰",
                "phonetic": "ティエホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "青金色",
                "phonetic": "チンチンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "銀藍",
                "phonetic": "インラン"
            },
            {
                "hex": "#eac0ce",
                "name": "雪灰",
                "phonetic": "シュエホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "淡藕合",
                "phonetic": "タンオウフー"
            },
            {
                "hex": "#eac0ce",
                "name": "浅藤紫",
                "phonetic": "チェントンツー"
            },
            {
                "hex": "#eac0ce",
                "name": "蓮灰",
                "phonetic": "リェンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "雪青灰",
                "phonetic": "シュエチンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "雪藍",
                "phonetic": "シュエラン"
            },
            {
                "hex": "#eac0ce",
                "name": "紫藤灰",
                "phonetic": "ツートンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "鳳仙紫",
                "phonetic": "フォンシェンツー"
            },
            {
                "hex": "#eac0ce",
                "name": "青灰色",
                "phonetic": "チンホイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "承徳皀",
                "phonetic": "チョントーツァオ"
            },
            {
                "hex": "#eac0ce",
                "name": "承徳灰",
                "phonetic": "チョントーホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "庭院瓦灰色",
                "phonetic": "ティンユワンワーホイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "相思灰",
                "phonetic": "シァンスーホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "銀鼠灰",
                "phonetic": "インシューホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "花青",
                "phonetic": "ホワチン"
            },
            {
                "hex": "#eac0ce",
                "name": "正灰",
                "phonetic": "チョンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "織綿灰",
                "phonetic": "チーチンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "石板灰",
                "phonetic": "シーパンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "銀白色",
                "phonetic": "インパイスー"
            },
            {
                "hex": "#eac0ce",
                "name": "羅藍灰",
                "phonetic": "ルオランホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "丁香紫",
                "phonetic": "ティンシァンツー"
            },
            {
                "hex": "#eac0ce",
                "name": "百草霜",
                "phonetic": "パイツァオシュワン"
            },
            {
                "hex": "#eac0ce",
                "name": "油煙墨",
                "phonetic": "ユーイェンモー"
            },
            {
                "hex": "#eac0ce",
                "name": "沙青",
                "phonetic": "シァチン"
            },
            {
                "hex": "#eac0ce",
                "name": "沙緑",
                "phonetic": "シァリュー"
            },
            {
                "hex": "#eac0ce",
                "name": "大赤金",
                "phonetic": "ターチーチン"
            },
            {
                "hex": "#eac0ce",
                "name": "庫金",
                "phonetic": "クーチン"
            },
            {
                "hex": "#eac0ce",
                "name": "銀箔",
                "phonetic": "インポー"
            },
            {
                "hex": "#eac0ce",
                "name": "選金",
                "phonetic": "シュエンチン"
            },
            {
                "hex": "#eac0ce",
                "name": "獣皮色",
                "phonetic": "ショーピースー"
            },
            {
                "hex": "#eac0ce",
                "name": "橙色",
                "phonetic": "チョンスー"
            },
            {
                "hex": "#eac0ce",
                "name": "蝶粉",
                "phonetic": "ティエフェン"
            },
            {
                "hex": "#eac0ce",
                "name": "果肉色",
                "phonetic": "クオロウスー"
            },
            {
                "hex": "#eac0ce",
                "name": "紙棕",
                "phonetic": "チーツォン"
            },
            {
                "hex": "#eac0ce",
                "name": "?棕",
                "phonetic": "ナイツォン"
            },
            {
                "hex": "#eac0ce",
                "name": "紅灰",
                "phonetic": "ホンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "閃蝶紫",
                "phonetic": "シァンティエツー"
            },
            {
                "hex": "#eac0ce",
                "name": "黄灰",
                "phonetic": "ホワンホイ"
            },
            {
                "hex": "#eac0ce",
                "name": "?緑",
                "phonetic": "ナイリュー"
            }
        ];
    }

    /**
     * ヨーロッパの色を取得します。
     * @returns {Array<Object>} 色情報を返します
     */
    #getEuropianColors = () => {
        return [
            {
                "hex": "#ffc6d6",
                "name": "baby pink",
                "phonetic": "ベビー ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "shell pink",
                "phonetic": "シェル ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "flesh pink",
                "phonetic": "フレッシュ ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "pastel pink",
                "phonetic": "パステル ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "rose pink",
                "phonetic": "ローズ ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "pink",
                "phonetic": "ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "french rose",
                "phonetic": "フレンチ ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "peach blossom",
                "phonetic": "ピーチ ブラッサム"
            },
            {
                "hex": "#ffc6d6",
                "name": "lotus",
                "phonetic": "ロータス"
            },
            {
                "hex": "#ffc6d6",
                "name": "tea rose",
                "phonetic": "ティー ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "salmon pink",
                "phonetic": "サーモン ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "aurora",
                "phonetic": "オーロラ"
            },
            {
                "hex": "#ffc6d6",
                "name": "vinous",
                "phonetic": "ヴァイナス"
            },
            {
                "hex": "#ffc6d6",
                "name": "cosmos",
                "phonetic": "コスモス"
            },
            {
                "hex": "#ffc6d6",
                "name": "corinthian pink",
                "phonetic": "コーリンシアン ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "cherry pink",
                "phonetic": "チェリー ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "fuchsia pink",
                "phonetic": "フクシァ ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "pompadour pink",
                "phonetic": "ポンパドール ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "daphne pink",
                "phonetic": "ダフニー ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "carnation",
                "phonetic": "カーネーション"
            },
            {
                "hex": "#ffc6d6",
                "name": "shrimp pink",
                "phonetic": "シェリンプ ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "coral pink",
                "phonetic": "コーラル ピンク"
            },
            {
                "hex": "#ffc6d6",
                "name": "rose pompadour",
                "phonetic": "ローズ ポンパドウル"
            },
            {
                "hex": "#ffc6d6",
                "name": "empire rose",
                "phonetic": "エンパイア ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "flamingo",
                "phonetic": "フラミンゴ"
            },
            {
                "hex": "#ffc6d6",
                "name": "etruscan rose",
                "phonetic": "エトラスカン ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "ashes of rose",
                "phonetic": "アッシズ オブ ローズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "rose red",
                "phonetic": "ローズ レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "camellia",
                "phonetic": "カメリア"
            },
            {
                "hex": "#ffc6d6",
                "name": "geranium",
                "phonetic": "ゼラニウム"
            },
            {
                "hex": "#ffc6d6",
                "name": "cherry",
                "phonetic": "チェリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "signal red",
                "phonetic": "シグナル レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "carmine",
                "phonetic": "カーマイン"
            },
            {
                "hex": "#ffc6d6",
                "name": "turkey red",
                "phonetic": "ターキー レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "poppy red",
                "phonetic": "ポピーレッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "cardinal",
                "phonetic": "カーディナル"
            },
            {
                "hex": "#ffc6d6",
                "name": "crimson rake",
                "phonetic": "クリムスン レーキ"
            },
            {
                "hex": "#ffc6d6",
                "name": "pomegranate",
                "phonetic": "ポメグラネイト"
            },
            {
                "hex": "#ffc6d6",
                "name": "cinnabar",
                "phonetic": "シナバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "tomato red",
                "phonetic": "トマト レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "ruby",
                "phonetic": "ルビー"
            },
            {
                "hex": "#ffc6d6",
                "name": "english red",
                "phonetic": "イングリッシュ レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "oxide red",
                "phonetic": "オクサイドレッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "oxblood red",
                "phonetic": "オックスブラッド レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "bole",
                "phonetic": "ボール"
            },
            {
                "hex": "#ffc6d6",
                "name": "burgundy",
                "phonetic": "バーガンディ"
            },
            {
                "hex": "#ffc6d6",
                "name": "mahogany",
                "phonetic": "マホガニー"
            },
            {
                "hex": "#ffc6d6",
                "name": "flea",
                "phonetic": "フリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "beach",
                "phonetic": "ピーチ"
            },
            {
                "hex": "#ffc6d6",
                "name": "flesh",
                "phonetic": "フレッシュ"
            },
            {
                "hex": "#ffc6d6",
                "name": "apricot",
                "phonetic": "アプリコット"
            },
            {
                "hex": "#ffc6d6",
                "name": "sunset",
                "phonetic": "サンセット"
            },
            {
                "hex": "#ffc6d6",
                "name": "sunburn",
                "phonetic": "サンバーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "fire red",
                "phonetic": "ファイアー レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "carrot orange",
                "phonetic": "キャロット オレンジ"
            },
            {
                "hex": "#ffc6d6",
                "name": "tangerine",
                "phonetic": "タンジェリン"
            },
            {
                "hex": "#ffc6d6",
                "name": "orange",
                "phonetic": "オレンジ"
            },
            {
                "hex": "#ffc6d6",
                "name": "maize",
                "phonetic": "メイズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "chrome orange",
                "phonetic": "クローム オレンジ"
            },
            {
                "hex": "#ffc6d6",
                "name": "amber",
                "phonetic": "アンバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "morocco",
                "phonetic": "モロッコ"
            },
            {
                "hex": "#ffc6d6",
                "name": "caramel",
                "phonetic": "キャラメル"
            },
            {
                "hex": "#ffc6d6",
                "name": "tan",
                "phonetic": "タン"
            },
            {
                "hex": "#ffc6d6",
                "name": "topaz",
                "phonetic": "トパーズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "moon light",
                "phonetic": "ムーンライト"
            },
            {
                "hex": "#ffc6d6",
                "name": "ecru",
                "phonetic": "エクリュ"
            },
            {
                "hex": "#ffc6d6",
                "name": "flax",
                "phonetic": "フラックス"
            },
            {
                "hex": "#ffc6d6",
                "name": "blond",
                "phonetic": "ブロンド"
            },
            {
                "hex": "#ffc6d6",
                "name": "cafe au lait",
                "phonetic": "カフェ オ レ"
            },
            {
                "hex": "#ffc6d6",
                "name": "biscuit",
                "phonetic": "ビスケット"
            },
            {
                "hex": "#ffc6d6",
                "name": "parchment",
                "phonetic": "バーチメント"
            },
            {
                "hex": "#ffc6d6",
                "name": "champagne",
                "phonetic": "シャンパーニュ"
            },
            {
                "hex": "#ffc6d6",
                "name": "camel",
                "phonetic": "キャメル"
            },
            {
                "hex": "#ffc6d6",
                "name": "grege",
                "phonetic": "グレージュ"
            },
            {
                "hex": "#ffc6d6",
                "name": "fawn",
                "phonetic": "フォーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "chamois",
                "phonetic": "シャモア"
            },
            {
                "hex": "#ffc6d6",
                "name": "burnt sienna",
                "phonetic": "バーント シエンナ"
            },
            {
                "hex": "#ffc6d6",
                "name": "brick red",
                "phonetic": "ブリック レッド"
            },
            {
                "hex": "#ffc6d6",
                "name": "brown",
                "phonetic": "ブラウン"
            },
            {
                "hex": "#ffc6d6",
                "name": "raw sienna",
                "phonetic": "ローシェンナ"
            },
            {
                "hex": "#ffc6d6",
                "name": "raw umber",
                "phonetic": "ローアンバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "caffee",
                "phonetic": "カフェ"
            },
            {
                "hex": "#ffc6d6",
                "name": "maroon",
                "phonetic": "マルーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "liver",
                "phonetic": "リバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "henna",
                "phonetic": "ヘンナ"
            },
            {
                "hex": "#ffc6d6",
                "name": "russet",
                "phonetic": "ラセット"
            },
            {
                "hex": "#ffc6d6",
                "name": "chestnut brown",
                "phonetic": "チェスナット ブラウン"
            },
            {
                "hex": "#ffc6d6",
                "name": "hair brown",
                "phonetic": "ヘア ブラウン"
            },
            {
                "hex": "#ffc6d6",
                "name": "chocolate",
                "phonetic": "チョコレート"
            },
            {
                "hex": "#ffc6d6",
                "name": "sepia",
                "phonetic": "セピア"
            },
            {
                "hex": "#ffc6d6",
                "name": "vandike brown",
                "phonetic": "ヴァンダイク ブラウン"
            },
            {
                "hex": "#ffc6d6",
                "name": "ivory",
                "phonetic": "アイボリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "vanilla",
                "phonetic": "ヴァニラ"
            },
            {
                "hex": "#ffc6d6",
                "name": "leghorn",
                "phonetic": "レグホーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "straw",
                "phonetic": "ストロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "massicot",
                "phonetic": "マシコット"
            },
            {
                "hex": "#ffc6d6",
                "name": "sulphar yellow",
                "phonetic": "サルファー イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "dyres broom",
                "phonetic": "ダイヤーズブルーム"
            },
            {
                "hex": "#ffc6d6",
                "name": "mimosa",
                "phonetic": "ミモザ"
            },
            {
                "hex": "#ffc6d6",
                "name": "naples yellow",
                "phonetic": "ネープルス イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "honey yellow",
                "phonetic": "ハニー イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "gamboge",
                "phonetic": "ガンボージ"
            },
            {
                "hex": "#ffc6d6",
                "name": "auripigment",
                "phonetic": "オーピメント"
            },
            {
                "hex": "#ffc6d6",
                "name": "indian yellow",
                "phonetic": "インディアン イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "daffodil yellow",
                "phonetic": "ダファディル イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "saffran yellow",
                "phonetic": "サフラン イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "chrome yellow",
                "phonetic": "クローム イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "yolk yellow",
                "phonetic": "ヨーク イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "canary",
                "phonetic": "カナリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "banana",
                "phonetic": "バナナ"
            },
            {
                "hex": "#ffc6d6",
                "name": "lemon yellow",
                "phonetic": "レモン イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "mustard",
                "phonetic": "マスタード"
            },
            {
                "hex": "#ffc6d6",
                "name": "chartreuse yellow",
                "phonetic": "シャトルーズ イエロー"
            },
            {
                "hex": "#ffc6d6",
                "name": "gold",
                "phonetic": "ゴールド"
            },
            {
                "hex": "#ffc6d6",
                "name": "bronze",
                "phonetic": "ブロンズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "olive",
                "phonetic": "オリーブ"
            },
            {
                "hex": "#ffc6d6",
                "name": "lime green",
                "phonetic": "ライム グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "sea foam green",
                "phonetic": "シーフォーム グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "pistache",
                "phonetic": "ピスターシュ"
            },
            {
                "hex": "#ffc6d6",
                "name": "night green",
                "phonetic": "ナイト グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "eggshell green",
                "phonetic": "エッグシェル グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "grass green",
                "phonetic": "グラス グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "glaucas",
                "phonetic": "グローカス"
            },
            {
                "hex": "#ffc6d6",
                "name": "apple green",
                "phonetic": "アップル グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "gay green",
                "phonetic": "ゲイグリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "pea green",
                "phonetic": "ピーグリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "spring green",
                "phonetic": "スプリング グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "willow green",
                "phonetic": "ウィロー グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "godey green",
                "phonetic": "ゴーディ グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "moth green",
                "phonetic": "モス グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "lincoln green",
                "phonetic": "リンカーン グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "olive green",
                "phonetic": "オリーブ グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "flower drew green",
                "phonetic": "フラワードリュースグリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "schweinfurt green",
                "phonetic": "シュヴァインフルトグリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "mint",
                "phonetic": "ミント"
            },
            {
                "hex": "#ffc6d6",
                "name": "chrome green",
                "phonetic": "クローム グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "malachite green",
                "phonetic": "マラカイト グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "verdigris",
                "phonetic": "ヴェルディグリ"
            },
            {
                "hex": "#ffc6d6",
                "name": "mistletoe",
                "phonetic": "ミスルトー"
            },
            {
                "hex": "#ffc6d6",
                "name": "hunter green",
                "phonetic": "ハンター グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "bottle green",
                "phonetic": "ボトル グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "myrtle green",
                "phonetic": "マートル グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "horizon blue",
                "phonetic": "ホリゾン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "nile blue",
                "phonetic": "ナイル ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "baby blue",
                "phonetic": "ベビー ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cambridge blue",
                "phonetic": "ケンブリッジ ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "sky blue",
                "phonetic": "スカイ ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "celestial blue",
                "phonetic": "シレスティアル ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "zenith blue",
                "phonetic": "ゼニスブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "vnet",
                "phonetic": "ヴェニット"
            },
            {
                "hex": "#ffc6d6",
                "name": "aqua marine",
                "phonetic": "アクア マリン"
            },
            {
                "hex": "#ffc6d6",
                "name": "turquoise",
                "phonetic": "ターコイズ"
            },
            {
                "hex": "#ffc6d6",
                "name": "porcelain blue",
                "phonetic": "ポースリン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "forget me not",
                "phonetic": "フォーゲット ミー ノット"
            },
            {
                "hex": "#ffc6d6",
                "name": "powder blue",
                "phonetic": "パウダー ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "peacock",
                "phonetic": "ピーコック"
            },
            {
                "hex": "#ffc6d6",
                "name": "egyptian blue",
                "phonetic": "エジプシアン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "vice",
                "phonetic": "バイス"
            },
            {
                "hex": "#ffc6d6",
                "name": "wedgewood blue",
                "phonetic": "ウェッジウッド ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "bluette",
                "phonetic": "ブルーエット"
            },
            {
                "hex": "#ffc6d6",
                "name": "hydrangea blue",
                "phonetic": "ハイドレンジア ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cyan blue",
                "phonetic": "サイアン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "cobalt blue",
                "phonetic": "コバルト ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "smalt",
                "phonetic": "スマルト"
            },
            {
                "hex": "#ffc6d6",
                "name": "sapphire blue",
                "phonetic": "サファイア ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "ultramarine",
                "phonetic": "ウルトラマリン"
            },
            {
                "hex": "#ffc6d6",
                "name": "prussian blue",
                "phonetic": "プルシアン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "royal blue",
                "phonetic": "ロイヤル ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "garter blue",
                "phonetic": "ガーター ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "delft blue",
                "phonetic": "デルフト ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "marine blue",
                "phonetic": "マリン ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "navy blue",
                "phonetic": "ネイヴィブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "midnight blue",
                "phonetic": "ミッドナイト ブルー"
            },
            {
                "hex": "#ffc6d6",
                "name": "lavender",
                "phonetic": "ラべンダー"
            },
            {
                "hex": "#ffc6d6",
                "name": "wisteria",
                "phonetic": "ウィスタリア"
            },
            {
                "hex": "#ffc6d6",
                "name": "lilac",
                "phonetic": "ライラック"
            },
            {
                "hex": "#ffc6d6",
                "name": "mallow",
                "phonetic": "マロウ"
            },
            {
                "hex": "#ffc6d6",
                "name": "thistle",
                "phonetic": "シスル"
            },
            {
                "hex": "#ffc6d6",
                "name": "mineral violet",
                "phonetic": "ミネラル バイオレット"
            },
            {
                "hex": "#ffc6d6",
                "name": "cobalt violet",
                "phonetic": "コバルト バイオレット"
            },
            {
                "hex": "#ffc6d6",
                "name": "purple",
                "phonetic": "パープル"
            },
            {
                "hex": "#ffc6d6",
                "name": "amethyst",
                "phonetic": "アメジスト"
            },
            {
                "hex": "#ffc6d6",
                "name": "amaranth purple",
                "phonetic": "アメジスト パープル"
            },
            {
                "hex": "#ffc6d6",
                "name": "magenta",
                "phonetic": "マゼンタ"
            },
            {
                "hex": "#ffc6d6",
                "name": "pansy",
                "phonetic": "パンジー"
            },
            {
                "hex": "#ffc6d6",
                "name": "fuchsia",
                "phonetic": "フューシャ"
            },
            {
                "hex": "#ffc6d6",
                "name": "aconite violet",
                "phonetic": "アコナイト バイオレット"
            },
            {
                "hex": "#ffc6d6",
                "name": "murray",
                "phonetic": "マーリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "heliotrope",
                "phonetic": "ヘリオトロープ"
            },
            {
                "hex": "#ffc6d6",
                "name": "plum purple",
                "phonetic": "プラム パープル"
            },
            {
                "hex": "#ffc6d6",
                "name": "raspberry",
                "phonetic": "ラズベリー"
            },
            {
                "hex": "#ffc6d6",
                "name": "raisins",
                "phonetic": "レーズン"
            },
            {
                "hex": "#ffc6d6",
                "name": "wine",
                "phonetic": "ワイン"
            },
            {
                "hex": "#ffc6d6",
                "name": "white lead",
                "phonetic": "ホワイト レド"
            },
            {
                "hex": "#ffc6d6",
                "name": "alabaster",
                "phonetic": "アラバスター"
            },
            {
                "hex": "#ffc6d6",
                "name": "milk white",
                "phonetic": "ミルク ホワイト"
            },
            {
                "hex": "#ffc6d6",
                "name": "silver",
                "phonetic": "シルバー"
            },
            {
                "hex": "#ffc6d6",
                "name": "sand",
                "phonetic": "サンド"
            },
            {
                "hex": "#ffc6d6",
                "name": "ash grey",
                "phonetic": "アッシュ グレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "smoke grey",
                "phonetic": "スモーク グレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "pearl green",
                "phonetic": "パール グリーン"
            },
            {
                "hex": "#ffc6d6",
                "name": "mouse grey",
                "phonetic": "マウス グレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "dove gray",
                "phonetic": "ダブ グレイ"
            },
            {
                "hex": "#ffc6d6",
                "name": "mist",
                "phonetic": "ミスト"
            },
            {
                "hex": "#ffc6d6",
                "name": "graphite",
                "phonetic": "グラファイト"
            },
            {
                "hex": "#ffc6d6",
                "name": "goose gray",
                "phonetic": "グーズグレイ"
            }
        ];
    }

    /**
     * フランスの色を取得します。
     * @returns {Array<Object>} 色情報を返します
     */
    #getFrenchColors = () => {
        return [
            {
                "hex": "#948147",
                "name": "havane",
                "phonetic": "アヴァーヌ"
            },
            {
                "hex": "#948147",
                "name": "azalee",
                "phonetic": "アザレ"
            },
            {
                "hex": "#948147",
                "name": "atoll",
                "phonetic": "アトール"
            },
            {
                "hex": "#948147",
                "name": "anemone",
                "phonetic": "アネモヌ"
            },
            {
                "hex": "#948147",
                "name": "apricot",
                "phonetic": "アプリコ"
            },
            {
                "hex": "#948147",
                "name": "aluminium",
                "phonetic": "アリュミニヨム"
            },
            {
                "hex": "#948147",
                "name": "argile",
                "phonetic": "アルジル"
            },
            {
                "hex": "#948147",
                "name": "albatre",
                "phonetic": "アルバートル"
            },
            {
                "hex": "#948147",
                "name": "anthracite",
                "phonetic": "アントラシート"
            },
            {
                "hex": "#948147",
                "name": "ambre",
                "phonetic": "アンプル"
            },
            {
                "hex": "#948147",
                "name": "acier",
                "phonetic": "アシエ"
            },
            {
                "hex": "#948147",
                "name": "agate",
                "phonetic": "アガート"
            },
            {
                "hex": "#948147",
                "name": "anis",
                "phonetic": "アニ"
            },
            {
                "hex": "#948147",
                "name": "absinthe",
                "phonetic": "アプサント"
            },
            {
                "hex": "#948147",
                "name": "amarante",
                "phonetic": "アマラント"
            },
            {
                "hex": "#948147",
                "name": "alezan",
                "phonetic": "アルザン"
            },
            {
                "hex": "#948147",
                "name": "ardoise",
                "phonetic": "アルドアーズ"
            },
            {
                "hex": "#948147",
                "name": "armagnac",
                "phonetic": "アルマニャック"
            },
            {
                "hex": "#948147",
                "name": "blue indigo sombre",
                "phonetic": "ブルー アンディゴ ソンブル"
            },
            {
                "hex": "#948147",
                "name": "ivoire",
                "phonetic": "イヴォアール"
            },
            {
                "hex": "#948147",
                "name": "iris",
                "phonetic": "イリス"
            },
            {
                "hex": "#948147",
                "name": "vanille",
                "phonetic": "ヴァニーユ"
            },
            {
                "hex": "#948147",
                "name": "violace grise",
                "phonetic": "ヴィオラッセ グリーゼ"
            },
            {
                "hex": "#948147",
                "name": "violet",
                "phonetic": "ヴィオレ"
            },
            {
                "hex": "#948147",
                "name": "whisky",
                "phonetic": "ウイスキー"
            },
            {
                "hex": "#948147",
                "name": "hirondelle",
                "phonetic": "イロンデル"
            },
            {
                "hex": "#948147",
                "name": "varech",
                "phonetic": "ヴァレック"
            },
            {
                "hex": "#948147",
                "name": "violine",
                "phonetic": "ヴィオリーヌ"
            },
            {
                "hex": "#948147",
                "name": "vigogne",
                "phonetic": "ヴィゴーニュ"
            },
            {
                "hex": "#948147",
                "name": "vert",
                "phonetic": "ヴェール"
            },
            {
                "hex": "#948147",
                "name": "verr acide",
                "phonetic": "ヴェール アシード"
            },
            {
                "hex": "#948147",
                "name": "vert anglais",
                "phonetic": "ヴェール アングレ"
            },
            {
                "hex": "#948147",
                "name": "vert ecossais",
                "phonetic": "ヴェール エコッセ"
            },
            {
                "hex": "#948147",
                "name": "vert safari",
                "phonetic": "ヴェール サファリ"
            },
            {
                "hex": "#948147",
                "name": "vert chartreuse",
                "phonetic": "ヴェール シャルトルーズ"
            },
            {
                "hex": "#948147",
                "name": "vert amande",
                "phonetic": "ヴェール アマンド"
            },
            {
                "hex": "#948147",
                "name": "vert veronese",
                "phonetic": "ヴェール ヴェロネーズ"
            },
            {
                "hex": "#948147",
                "name": "vert clair",
                "phonetic": "ヴェール クレール"
            },
            {
                "hex": "#948147",
                "name": "vert cypres",
                "phonetic": "ヴェール シプレ"
            },
            {
                "hex": "#948147",
                "name": "vert jaune",
                "phonetic": "ヴェール ジョーヌ"
            },
            {
                "hex": "#948147",
                "name": "vert scarabee",
                "phonetic": "ヴェール スカラベ"
            },
            {
                "hex": "#948147",
                "name": "vert tisane",
                "phonetic": "ヴェール ティザーヌ"
            },
            {
                "hex": "#948147",
                "name": "vert-de-gris",
                "phonetic": "ヴェール ドゥ グリー"
            },
            {
                "hex": "#948147",
                "name": "vert noir",
                "phonetic": "ヴェール ノアール"
            },
            {
                "hex": "#948147",
                "name": "vert pabge",
                "phonetic": "ヴェール パプゲ"
            },
            {
                "hex": "#948147",
                "name": "vert celadon",
                "phonetic": "ヴェール セラドン"
            },
            {
                "hex": "#948147",
                "name": "vert d\u0027eau",
                "phonetic": "ヴェール ドー"
            },
            {
                "hex": "#948147",
                "name": "vert nil",
                "phonetic": "ヴェール ニル"
            },
            {
                "hex": "#948147",
                "name": "vert pastille",
                "phonetic": "ヴェール パスティーユ"
            },
            {
                "hex": "#948147",
                "name": "vert paon",
                "phonetic": "ヴェール パーン"
            },
            {
                "hex": "#948147",
                "name": "vert buis",
                "phonetic": "ヴェール ビュイ"
            },
            {
                "hex": "#948147",
                "name": "vert bouteille",
                "phonetic": "ヴェール ブーテイユ"
            },
            {
                "hex": "#948147",
                "name": "vert bronze",
                "phonetic": "ヴェール ブロンズ"
            },
            {
                "hex": "#948147",
                "name": "vert pomme",
                "phonetic": "ヴェール ポンム"
            },
            {
                "hex": "#948147",
                "name": "vert mousse",
                "phonetic": "ヴェール ムース"
            },
            {
                "hex": "#948147",
                "name": "vert fonce",
                "phonetic": "ヴェール フォンセ"
            },
            {
                "hex": "#948147",
                "name": "vert prairie",
                "phonetic": "ヴェール プレーリー"
            },
            {
                "hex": "#948147",
                "name": "vert pois chiche",
                "phonetic": "ヴェール ポワ シシュ"
            },
            {
                "hex": "#948147",
                "name": "vermillon",
                "phonetic": "ヴェルミヨン"
            },
            {
                "hex": "#948147",
                "name": "vert laitue",
                "phonetic": "ヴェール レーテュ"
            },
            {
                "hex": "#948147",
                "name": "vert roseau",
                "phonetic": "ヴェール ロゾー"
            },
            {
                "hex": "#948147",
                "name": "outremer",
                "phonetic": "ウートルメール"
            },
            {
                "hex": "#948147",
                "name": "ecarlate",
                "phonetic": "エカルラート"
            },
            {
                "hex": "#948147",
                "name": "eglantine",
                "phonetic": "エグランティーヌ"
            },
            {
                "hex": "#948147",
                "name": "epinard",
                "phonetic": "エピナール"
            },
            {
                "hex": "#948147",
                "name": "vert loden",
                "phonetic": "ヴェール ロデン"
            },
            {
                "hex": "#948147",
                "name": "ecaille",
                "phonetic": "エカイユ"
            },
            {
                "hex": "#948147",
                "name": "ecume",
                "phonetic": "エキューム"
            },
            {
                "hex": "#948147",
                "name": "e\u0027cru",
                "phonetic": "エクリュ"
            },
            {
                "hex": "#948147",
                "name": "email",
                "phonetic": "エマイユ"
            },
            {
                "hex": "#948147",
                "name": "emeraude",
                "phonetic": "エムロード"
            },
            {
                "hex": "#948147",
                "name": "herbe",
                "phonetic": "エルブ"
            },
            {
                "hex": "#948147",
                "name": "ocre",
                "phonetic": "オークル"
            },
            {
                "hex": "#948147",
                "name": "autrichien",
                "phonetic": "オートリシャン"
            },
            {
                "hex": "#948147",
                "name": "olive",
                "phonetic": "オリーヴ"
            },
            {
                "hex": "#948147",
                "name": "aubergine",
                "phonetic": "オーベルジーヌ"
            },
            {
                "hex": "#948147",
                "name": "aubergine violacee",
                "phonetic": "オーベルジーヌ ヴィヨラセ"
            },
            {
                "hex": "#948147",
                "name": "orange",
                "phonetic": "オランジュ"
            },
            {
                "hex": "#948147",
                "name": "orange roussi",
                "phonetic": "オランジュ ルーシー"
            },
            {
                "hex": "#948147",
                "name": "kaki",
                "phonetic": "カキ"
            },
            {
                "hex": "#948147",
                "name": "cactus",
                "phonetic": "カクテュス"
            },
            {
                "hex": "#948147",
                "name": "cachou",
                "phonetic": "カシュー"
            },
            {
                "hex": "#948147",
                "name": "cachemire",
                "phonetic": "カシュミール"
            },
            {
                "hex": "#948147",
                "name": "gazon",
                "phonetic": "ガゾン"
            },
            {
                "hex": "#948147",
                "name": "canari",
                "phonetic": "カナリ"
            },
            {
                "hex": "#948147",
                "name": "cannelle",
                "phonetic": "カネル"
            },
            {
                "hex": "#948147",
                "name": "capucine",
                "phonetic": "カピュシーヌ"
            },
            {
                "hex": "#948147",
                "name": "cafe",
                "phonetic": "カフェ"
            },
            {
                "hex": "#948147",
                "name": "cafe au lait",
                "phonetic": "カフェ オ レ"
            },
            {
                "hex": "#948147",
                "name": "caramel",
                "phonetic": "カラメル"
            },
            {
                "hex": "#948147",
                "name": "garance",
                "phonetic": "ガランス"
            },
            {
                "hex": "#948147",
                "name": "carmin",
                "phonetic": "カルマン"
            },
            {
                "hex": "#948147",
                "name": "cardinal",
                "phonetic": "カルディナル"
            },
            {
                "hex": "#948147",
                "name": "cuivre",
                "phonetic": "キュイヴル"
            },
            {
                "hex": "#948147",
                "name": "cuisse de nymph",
                "phonetic": "キュイッス ド ナンフ"
            },
            {
                "hex": "#948147",
                "name": "goumier",
                "phonetic": "グーミエ"
            },
            {
                "hex": "#948147",
                "name": "cramoisi",
                "phonetic": "クラモアジー"
            },
            {
                "hex": "#948147",
                "name": "graphite",
                "phonetic": "グラフィット"
            },
            {
                "hex": "#948147",
                "name": "curry",
                "phonetic": "キューリー"
            },
            {
                "hex": "#948147",
                "name": "gris acier",
                "phonetic": "グリー アシェ"
            },
            {
                "hex": "#948147",
                "name": "gris orage",
                "phonetic": "グリー オラージュ"
            },
            {
                "hex": "#948147",
                "name": "clan",
                "phonetic": "クラン"
            },
            {
                "hex": "#948147",
                "name": "gris clair",
                "phonetic": "グリー クレール"
            },
            {
                "hex": "#948147",
                "name": "gris ciel",
                "phonetic": "グリー シエル"
            },
            {
                "hex": "#948147",
                "name": "gris terreux",
                "phonetic": "グリー テルー"
            },
            {
                "hex": "#948147",
                "name": "gris argile",
                "phonetic": "グリー アルジル"
            },
            {
                "hex": "#948147",
                "name": "gris gres",
                "phonetic": "グリー グレ"
            },
            {
                "hex": "#948147",
                "name": "gris cendre",
                "phonetic": "グリー サンドル"
            },
            {
                "hex": "#948147",
                "name": "glycine",
                "phonetic": "グリシーヌ"
            },
            {
                "hex": "#948147",
                "name": "gris fer",
                "phonetic": "グリー フェール"
            },
            {
                "hex": "#948147",
                "name": "gris fonce",
                "phonetic": "グリー フォンセ"
            },
            {
                "hex": "#948147",
                "name": "gris plomb",
                "phonetic": "グリー プロン"
            },
            {
                "hex": "#948147",
                "name": "clou de girofle",
                "phonetic": "クルー ドゥ ジロフル"
            },
            {
                "hex": "#948147",
                "name": "gris blue",
                "phonetic": "グリー ブルー"
            },
            {
                "hex": "#948147",
                "name": "crevette",
                "phonetic": "クルヴェット"
            },
            {
                "hex": "#948147",
                "name": "gris flanelle",
                "phonetic": "グリー フラネル"
            },
            {
                "hex": "#948147",
                "name": "gris moyen",
                "phonetic": "グリー モアイヤン"
            },
            {
                "hex": "#948147",
                "name": "gris poussiere",
                "phonetic": "グリー プシェール"
            },
            {
                "hex": "#948147",
                "name": "gris perle",
                "phonetic": "グリー ペルル"
            },
            {
                "hex": "#948147",
                "name": "grenat",
                "phonetic": "グルナ"
            },
            {
                "hex": "#948147",
                "name": "grege",
                "phonetic": "グレージュ"
            },
            {
                "hex": "#948147",
                "name": "coq de roche",
                "phonetic": "コック ドゥ ロシュ"
            },
            {
                "hex": "#948147",
                "name": "sapin",
                "phonetic": "サパン"
            },
            {
                "hex": "#948147",
                "name": "coquelicot",
                "phonetic": "コクリコー"
            },
            {
                "hex": "#948147",
                "name": "sahara",
                "phonetic": "サアラ"
            },
            {
                "hex": "#948147",
                "name": "groseille",
                "phonetic": "グロゼイユ"
            },
            {
                "hex": "#948147",
                "name": "corail",
                "phonetic": "コライユ"
            },
            {
                "hex": "#948147",
                "name": "cremeux",
                "phonetic": "クレムー"
            },
            {
                "hex": "#948147",
                "name": "cognac",
                "phonetic": "コニャック"
            },
            {
                "hex": "#948147",
                "name": "sable",
                "phonetic": "サーブル"
            },
            {
                "hex": "#948147",
                "name": "sable mouille",
                "phonetic": "サーブル ムイエ"
            },
            {
                "hex": "#948147",
                "name": "chere",
                "phonetic": "シェール"
            },
            {
                "hex": "#948147",
                "name": "jacinthe",
                "phonetic": "ジャサント"
            },
            {
                "hex": "#948147",
                "name": "geranium",
                "phonetic": "ジェラニョム"
            },
            {
                "hex": "#948147",
                "name": "ciment",
                "phonetic": "シマン"
            },
            {
                "hex": "#948147",
                "name": "sanglier",
                "phonetic": "サングリエ"
            },
            {
                "hex": "#948147",
                "name": "citronelle",
                "phonetic": "シトロネル"
            },
            {
                "hex": "#948147",
                "name": "salade",
                "phonetic": "サラド"
            },
            {
                "hex": "#948147",
                "name": "cyclamen",
                "phonetic": "シクラメン"
            },
            {
                "hex": "#948147",
                "name": "chatain",
                "phonetic": "シャータン"
            },
            {
                "hex": "#948147",
                "name": "chatoyant",
                "phonetic": "シャトアイヤン"
            },
            {
                "hex": "#948147",
                "name": "gentiane",
                "phonetic": "ジャンシャーヌ"
            },
            {
                "hex": "#948147",
                "name": "chaudron",
                "phonetic": "ショードロン"
            },
            {
                "hex": "#948147",
                "name": "charbonneux",
                "phonetic": "シャルボヌー"
            },
            {
                "hex": "#948147",
                "name": "chocolat",
                "phonetic": "ショコラ"
            },
            {
                "hex": "#948147",
                "name": "chamois",
                "phonetic": "シャモア"
            },
            {
                "hex": "#948147",
                "name": "genet",
                "phonetic": "ジュネ"
            },
            {
                "hex": "#948147",
                "name": "chameau",
                "phonetic": "シャモー"
            },
            {
                "hex": "#948147",
                "name": "champagne",
                "phonetic": "シャンパーニュ"
            },
            {
                "hex": "#948147",
                "name": "jaune",
                "phonetic": "ジョーヌ"
            },
            {
                "hex": "#948147",
                "name": "jaune acide",
                "phonetic": "ジョーヌ アシード"
            },
            {
                "hex": "#948147",
                "name": "jaune de naples",
                "phonetic": "ジョーヌ ドゥ ナーブル"
            },
            {
                "hex": "#948147",
                "name": "jaune briand",
                "phonetic": "ジョーヌ ブリアン"
            },
            {
                "hex": "#948147",
                "name": "jaune jonquille",
                "phonetic": "ジョーヌ ジョンキーユ"
            },
            {
                "hex": "#948147",
                "name": "jaune pale",
                "phonetic": "ジョーヌ パール"
            },
            {
                "hex": "#948147",
                "name": "jaune citron",
                "phonetic": "ジョーヌ シトロン"
            },
            {
                "hex": "#948147",
                "name": "jaune paille",
                "phonetic": "ジョーヌ パイユ"
            },
            {
                "hex": "#948147",
                "name": "jaune safran",
                "phonetic": "ジョーヌ サフラン"
            },
            {
                "hex": "#948147",
                "name": "jaune narcisse",
                "phonetic": "ジョーヌ ナルシス"
            },
            {
                "hex": "#948147",
                "name": "jaune mimosa",
                "phonetic": "ジョーヌ ミモザ"
            },
            {
                "hex": "#948147",
                "name": "jaune moutarde",
                "phonetic": "ジョーヌ ムタールド"
            },
            {
                "hex": "#948147",
                "name": "sepia",
                "phonetic": "セピア"
            },
            {
                "hex": "#948147",
                "name": "tete-de-negre",
                "phonetic": "テート ドゥ ネーグル"
            },
            {
                "hex": "#948147",
                "name": "seigle",
                "phonetic": "セーグル"
            },
            {
                "hex": "#948147",
                "name": "tete de chene prulee",
                "phonetic": "テートドゥシェーヌプリュレ"
            },
            {
                "hex": "#948147",
                "name": "cerise",
                "phonetic": "スリーズ"
            },
            {
                "hex": "#948147",
                "name": "tilleul",
                "phonetic": "ティユール"
            },
            {
                "hex": "#948147",
                "name": "souris",
                "phonetic": "スーリー"
            },
            {
                "hex": "#948147",
                "name": "tabac",
                "phonetic": "タバ"
            },
            {
                "hex": "#948147",
                "name": "tuile",
                "phonetic": "テュイル"
            },
            {
                "hex": "#948147",
                "name": "tulipe",
                "phonetic": "テュリップ"
            },
            {
                "hex": "#948147",
                "name": "terre donbull",
                "phonetic": "テール ドンブル"
            },
            {
                "hex": "#948147",
                "name": "nacre",
                "phonetic": "ナクレ"
            },
            {
                "hex": "#948147",
                "name": "terre de sienne naturelle",
                "phonetic": "テール ドゥ シェーヌ ナテュレル"
            },
            {
                "hex": "#948147",
                "name": "tons de chasse",
                "phonetic": "トン ドゥ シャス"
            },
            {
                "hex": "#948147",
                "name": "terre cuite",
                "phonetic": "テール キュイット"
            },
            {
                "hex": "#948147",
                "name": "terre de sienne brulee",
                "phonetic": "テール ドゥ シェーヌ ブリュレ"
            },
            {
                "hex": "#948147",
                "name": "tomette",
                "phonetic": "トメット"
            },
            {
                "hex": "#948147",
                "name": "tulipe noire",
                "phonetic": "テュリップ ノアール"
            },
            {
                "hex": "#948147",
                "name": "tomate",
                "phonetic": "トマート"
            },
            {
                "hex": "#948147",
                "name": "narcisse",
                "phonetic": "ナーシス"
            },
            {
                "hex": "#948147",
                "name": "nymphea",
                "phonetic": "ナンフェア"
            },
            {
                "hex": "#948147",
                "name": "noir",
                "phonetic": "ノアール"
            },
            {
                "hex": "#948147",
                "name": "palme",
                "phonetic": "パルム"
            },
            {
                "hex": "#948147",
                "name": "noisette",
                "phonetic": "ノアゼット"
            },
            {
                "hex": "#948147",
                "name": "para",
                "phonetic": "パラ"
            },
            {
                "hex": "#948147",
                "name": "nefle",
                "phonetic": "ネーフル"
            },
            {
                "hex": "#948147",
                "name": "noix du bresil",
                "phonetic": "ノワ デュブレジル"
            },
            {
                "hex": "#948147",
                "name": "nigelle",
                "phonetic": "ニゼル"
            },
            {
                "hex": "#948147",
                "name": "noix",
                "phonetic": "ノワ"
            },
            {
                "hex": "#948147",
                "name": "palme",
                "phonetic": "パルム"
            },
            {
                "hex": "#948147",
                "name": "pin",
                "phonetic": "パン"
            },
            {
                "hex": "#948147",
                "name": "pigeon",
                "phonetic": "ピジョン"
            },
            {
                "hex": "#948147",
                "name": "piment",
                "phonetic": "ピマン"
            },
            {
                "hex": "#948147",
                "name": "pamplemousse",
                "phonetic": "パンプルムース"
            },
            {
                "hex": "#948147",
                "name": "bistre",
                "phonetic": "ビストル"
            },
            {
                "hex": "#948147",
                "name": "pain brule",
                "phonetic": "パン ブリュレ"
            },
            {
                "hex": "#948147",
                "name": "pistache",
                "phonetic": "ピスタッシュ"
            },
            {
                "hex": "#948147",
                "name": "pensee",
                "phonetic": "パンセ"
            },
            {
                "hex": "#948147",
                "name": "biscuit",
                "phonetic": "ビスキュイ"
            },
            {
                "hex": "#948147",
                "name": "billard",
                "phonetic": "ビーヤール"
            },
            {
                "hex": "#948147",
                "name": "buisson",
                "phonetic": "ビュイソン"
            },
            {
                "hex": "#948147",
                "name": "fauve",
                "phonetic": "フォーヴ"
            },
            {
                "hex": "#948147",
                "name": "fuchsia blue",
                "phonetic": "フュクシャ ブルー"
            },
            {
                "hex": "#948147",
                "name": "ficelle",
                "phonetic": "フィセル"
            },
            {
                "hex": "#948147",
                "name": "fenouil",
                "phonetic": "フヌイユ"
            },
            {
                "hex": "#948147",
                "name": "feu",
                "phonetic": "フー"
            },
            {
                "hex": "#948147",
                "name": "poussin",
                "phonetic": "プーサン"
            },
            {
                "hex": "#948147",
                "name": "puce",
                "phonetic": "ピュース"
            },
            {
                "hex": "#948147",
                "name": "bougainvillee",
                "phonetic": "ブーガンヴィレ"
            },
            {
                "hex": "#948147",
                "name": "fuchsia rose",
                "phonetic": "フュクシャ ローズ"
            },
            {
                "hex": "#948147",
                "name": "flamant rose",
                "phonetic": "フラマン ローズ"
            },
            {
                "hex": "#948147",
                "name": "blanc casse",
                "phonetic": "ブラン カーセ"
            },
            {
                "hex": "#948147",
                "name": "brun rouge",
                "phonetic": "ブラン ルージュ"
            },
            {
                "hex": "#948147",
                "name": "brun van dyck",
                "phonetic": "ブラン ヴァン ディック"
            },
            {
                "hex": "#948147",
                "name": "framboise",
                "phonetic": "フランボアーズ"
            },
            {
                "hex": "#948147",
                "name": "brun",
                "phonetic": "ブラン"
            },
            {
                "hex": "#948147",
                "name": "brun fonce",
                "phonetic": "ブラン フォンセ"
            },
            {
                "hex": "#948147",
                "name": "praline",
                "phonetic": "プラリーヌ"
            },
            {
                "hex": "#948147",
                "name": "blanc neige",
                "phonetic": "ブラン ネージュ"
            },
            {
                "hex": "#948147",
                "name": "brique",
                "phonetic": "ブリック"
            },
            {
                "hex": "#948147",
                "name": "bruyere",
                "phonetic": "ブリュイエール"
            },
            {
                "hex": "#948147",
                "name": "bourgeon",
                "phonetic": "ブールジョン"
            },
            {
                "hex": "#948147",
                "name": "blue adriatique",
                "phonetic": "ブルー アドリアティック"
            },
            {
                "hex": "#948147",
                "name": "bourgogne",
                "phonetic": "ブールゴーニュ"
            },
            {
                "hex": "#948147",
                "name": "blue azur",
                "phonetic": "ブルー アジュール"
            },
            {
                "hex": "#948147",
                "name": "prune",
                "phonetic": "プリューヌ"
            },
            {
                "hex": "#948147",
                "name": "blue acide",
                "phonetic": "ブルー アシード"
            },
            {
                "hex": "#948147",
                "name": "brugnon",
                "phonetic": "ブリュニョン"
            },
            {
                "hex": "#948147",
                "name": "pourpre",
                "phonetic": "プールプル"
            },
            {
                "hex": "#948147",
                "name": "blue armee de l\u0027air",
                "phonetic": "ブルー アルメ ドゥ レール"
            },
            {
                "hex": "#948147",
                "name": "blue anglais",
                "phonetic": "ブルー アングレー"
            },
            {
                "hex": "#948147",
                "name": "blue opalin",
                "phonetic": "ブルー オパラン"
            },
            {
                "hex": "#948147",
                "name": "blue grise",
                "phonetic": "ブルー グリーゼ"
            },
            {
                "hex": "#948147",
                "name": "blue vert dense",
                "phonetic": "ブルー ヴェール ダンス"
            },
            {
                "hex": "#948147",
                "name": "blue canard",
                "phonetic": "ブルー カナール"
            },
            {
                "hex": "#948147",
                "name": "blue violet",
                "phonetic": "ブルー ヴィヨレ"
            },
            {
                "hex": "#948147",
                "name": "blue hortensia",
                "phonetic": "ブルー オルタンシャ"
            },
            {
                "hex": "#948147",
                "name": "indigo",
                "phonetic": "インディゴ"
            },
            {
                "hex": "#948147",
                "name": "blue indigo sombre",
                "phonetic": "ブルーインディゴーソンブル"
            },
            {
                "hex": "#948147",
                "name": "blue orient",
                "phonetic": "ブルー オリヤン"
            },
            {
                "hex": "#948147",
                "name": "blue clair",
                "phonetic": "ブルー クレール"
            },
            {
                "hex": "#948147",
                "name": "blue gauloise",
                "phonetic": "ブルー ゴーロアーズ"
            },
            {
                "hex": "#948147",
                "name": "blue dur",
                "phonetic": "ブルー デュール"
            },
            {
                "hex": "#948147",
                "name": "blue pale",
                "phonetic": "ブルー パール"
            },
            {
                "hex": "#948147",
                "name": "blue turquoise",
                "phonetic": "ブルー テュルコアーズ"
            },
            {
                "hex": "#948147",
                "name": "blue nuit",
                "phonetic": "ブルー ニュイ"
            },
            {
                "hex": "#948147",
                "name": "blue gitane",
                "phonetic": "ブルー ジターヌ"
            },
            {
                "hex": "#948147",
                "name": "blue nattier",
                "phonetic": "ブルー ナティエ"
            },
            {
                "hex": "#948147",
                "name": "blue ciel",
                "phonetic": "ブルー シェル"
            },
            {
                "hex": "#948147",
                "name": "blue de chine",
                "phonetic": "ブルー ドゥ シーヌ"
            },
            {
                "hex": "#948147",
                "name": "blue paon",
                "phonetic": "ブルー パン"
            },
            {
                "hex": "#948147",
                "name": "blue faience",
                "phonetic": "ブルー ファイヤンス"
            },
            {
                "hex": "#948147",
                "name": "blue petrole",
                "phonetic": "ブルー ペトロル"
            },
            {
                "hex": "#948147",
                "name": "blue mediterranee",
                "phonetic": "ブルー メディテラネ"
            },
            {
                "hex": "#948147",
                "name": "blue brouillard",
                "phonetic": "ブルー ブルイヤール"
            },
            {
                "hex": "#948147",
                "name": "blue myosotis",
                "phonetic": "ブルー ミヨゾティース"
            },
            {
                "hex": "#948147",
                "name": "blue bleuet",
                "phonetic": "ブルー ブルーエ"
            },
            {
                "hex": "#948147",
                "name": "blue marine",
                "phonetic": "ブルー マリーヌ"
            },
            {
                "hex": "#948147",
                "name": "blue fume",
                "phonetic": "ブルー フュメ"
            },
            {
                "hex": "#948147",
                "name": "blue porcelaine",
                "phonetic": "ブルー ポルスレーヌ"
            },
            {
                "hex": "#948147",
                "name": "blue lavande",
                "phonetic": "ブルー ラヴァンド"
            },
            {
                "hex": "#948147",
                "name": "blue roi",
                "phonetic": "ブルー ロワ"
            },
            {
                "hex": "#948147",
                "name": "blond",
                "phonetic": "ブロン"
            },
            {
                "hex": "#948147",
                "name": "beige froid",
                "phonetic": "ベージュ フロワ"
            },
            {
                "hex": "#948147",
                "name": "bouleau",
                "phonetic": "ブーロー"
            },
            {
                "hex": "#948147",
                "name": "beige grise",
                "phonetic": "ベージュ グリーゼ"
            },
            {
                "hex": "#948147",
                "name": "braise",
                "phonetic": "ブレーズ"
            },
            {
                "hex": "#948147",
                "name": "beige",
                "phonetic": "ベージュ"
            },
            {
                "hex": "#948147",
                "name": "blue royal",
                "phonetic": "ブルー ロワイヤル"
            },
            {
                "hex": "#948147",
                "name": "bronze",
                "phonetic": "ブロンズ"
            },
            {
                "hex": "#948147",
                "name": "beige rose",
                "phonetic": "ベージュ ローゼ"
            },
            {
                "hex": "#948147",
                "name": "peche",
                "phonetic": "ペッシュ"
            },
            {
                "hex": "#948147",
                "name": "poiver vert",
                "phonetic": "ポアーヴル ヴェール"
            },
            {
                "hex": "#948147",
                "name": "bois de rose",
                "phonetic": "ボワ ドゥ ローズ"
            },
            {
                "hex": "#948147",
                "name": "berlingot",
                "phonetic": "ベルランゴー"
            },
            {
                "hex": "#948147",
                "name": "bois",
                "phonetic": "ボワ"
            },
            {
                "hex": "#948147",
                "name": "pervenche",
                "phonetic": "ペルヴァンシュ"
            },
            {
                "hex": "#948147",
                "name": "bordeaux fonce",
                "phonetic": "ボルドー フォンセ"
            },
            {
                "hex": "#948147",
                "name": "petunia",
                "phonetic": "ペテュニア"
            },
            {
                "hex": "#948147",
                "name": "bordeaux clair",
                "phonetic": "ボルドー クレール"
            },
            {
                "hex": "#948147",
                "name": "bois fruitier",
                "phonetic": "ボワ フリュイティエ"
            },
            {
                "hex": "#948147",
                "name": "mais",
                "phonetic": "マイース"
            },
            {
                "hex": "#948147",
                "name": "marron",
                "phonetic": "マロン"
            },
            {
                "hex": "#948147",
                "name": "marron chaud",
                "phonetic": "マロン ショー"
            },
            {
                "hex": "#948147",
                "name": "marocan",
                "phonetic": "マロカン"
            },
            {
                "hex": "#948147",
                "name": "marron glaces",
                "phonetic": "マロン グラッセ"
            },
            {
                "hex": "#948147",
                "name": "mastic",
                "phonetic": "マスティック"
            },
            {
                "hex": "#948147",
                "name": "marron assourdi",
                "phonetic": "マロン アッスールディ"
            },
            {
                "hex": "#948147",
                "name": "macadam",
                "phonetic": "マカダム"
            },
            {
                "hex": "#948147",
                "name": "marron acajou",
                "phonetic": "マロン アカジュ"
            },
            {
                "hex": "#948147",
                "name": "mandarine",
                "phonetic": "マンダリーヌ"
            },
            {
                "hex": "#948147",
                "name": "menthe",
                "phonetic": "マント"
            },
            {
                "hex": "#948147",
                "name": "mouette",
                "phonetic": "ムエット"
            },
            {
                "hex": "#948147",
                "name": "lapis-lazuli",
                "phonetic": "ラピス ラジュリ"
            },
            {
                "hex": "#948147",
                "name": "myosotis",
                "phonetic": "ミョゾティス"
            },
            {
                "hex": "#948147",
                "name": "laque",
                "phonetic": "ラック"
            },
            {
                "hex": "#948147",
                "name": "mure",
                "phonetic": "ミュール"
            },
            {
                "hex": "#948147",
                "name": "mauve",
                "phonetic": "モーヴ"
            },
            {
                "hex": "#948147",
                "name": "miel",
                "phonetic": "ミエル"
            },
            {
                "hex": "#948147",
                "name": "merisier",
                "phonetic": "ムリジエ"
            },
            {
                "hex": "#948147",
                "name": "lan",
                "phonetic": "ラン"
            },
            {
                "hex": "#948147",
                "name": "liege",
                "phonetic": "リエージュ"
            },
            {
                "hex": "#948147",
                "name": "lie-de-vin",
                "phonetic": "リー ドゥ ヴァン"
            },
            {
                "hex": "#948147",
                "name": "rouge",
                "phonetic": "ルージュ"
            },
            {
                "hex": "#948147",
                "name": "liseron",
                "phonetic": "リズロン"
            },
            {
                "hex": "#948147",
                "name": "rouille",
                "phonetic": "ルイユ"
            },
            {
                "hex": "#948147",
                "name": "lichen",
                "phonetic": "リケン"
            },
            {
                "hex": "#948147",
                "name": "roux",
                "phonetic": "ルー"
            },
            {
                "hex": "#948147",
                "name": "lierre",
                "phonetic": "リエール"
            },
            {
                "hex": "#948147",
                "name": "lilas",
                "phonetic": "リラ"
            },
            {
                "hex": "#948147",
                "name": "rouge ardent",
                "phonetic": "ルージュ アルダン"
            },
            {
                "hex": "#948147",
                "name": "rouge vif",
                "phonetic": "ルージュ ヴィフ"
            },
            {
                "hex": "#948147",
                "name": "rouge dan guru tail",
                "phonetic": "ルージュ ダングルテール"
            },
            {
                "hex": "#948147",
                "name": "reseda",
                "phonetic": "レゼダ"
            },
            {
                "hex": "#948147",
                "name": "rouge terni",
                "phonetic": "ルージュ テルニ"
            },
            {
                "hex": "#948147",
                "name": "renoncule",
                "phonetic": "ルノンキュール"
            },
            {
                "hex": "#948147",
                "name": "rouge sang",
                "phonetic": "ルージュ サン"
            },
            {
                "hex": "#948147",
                "name": "rouge rubis",
                "phonetic": "ルージュ リュビ"
            },
            {
                "hex": "#948147",
                "name": "rouge orange",
                "phonetic": "ルージュ オランジェ"
            },
            {
                "hex": "#948147",
                "name": "rouge de fair",
                "phonetic": "ルージュ ド フェール"
            },
            {
                "hex": "#948147",
                "name": "royal air force",
                "phonetic": "ロワイヤルエールフォルス"
            },
            {
                "hex": "#948147",
                "name": "rose",
                "phonetic": "ローズ"
            },
            {
                "hex": "#948147",
                "name": "rose corail",
                "phonetic": "ローズ コライユ"
            },
            {
                "hex": "#948147",
                "name": "rose the",
                "phonetic": "ローズ テ"
            },
            {
                "hex": "#948147",
                "name": "rose hortensia",
                "phonetic": "ローズ オルタンシャ"
            },
            {
                "hex": "#948147",
                "name": "rose tendre",
                "phonetic": "ローズ タンドル"
            },
            {
                "hex": "#948147",
                "name": "rose ibis",
                "phonetic": "ローズ イビス"
            },
            {
                "hex": "#948147",
                "name": "rose saumon",
                "phonetic": "ローズ ソーモン"
            },
            {
                "hex": "#948147",
                "name": "rose indien",
                "phonetic": "ローズ アンディヤン"
            },
            {
                "hex": "#948147",
                "name": "rose shocking",
                "phonetic": "ローズ ショッキング"
            },
            {
                "hex": "#948147",
                "name": "rose dragee",
                "phonetic": "ローズ ドラジェ"
            },
            {
                "hex": "#948147",
                "name": "rose pale",
                "phonetic": "ローズ パール"
            },
            {
                "hex": "#948147",
                "name": "rose poudre",
                "phonetic": "ローズ プードル"
            },
            {
                "hex": "#948147",
                "name": "rose buvard",
                "phonetic": "ローズ ビュヴァール"
            },
            {
                "hex": "#948147",
                "name": "rose peche",
                "phonetic": "ローズ ペーシュ"
            },
            {
                "hex": "#948147",
                "name": "laurier",
                "phonetic": "ローリエ"
            }
        ];
    }

    /**
     * 日本の色を取得します。
     * @returns {Array<Object>} 色情報を返します
     */
    #getJapaneseColors = () => {
        return [
            {
                "hex": "#fef4f4",
                "name": "桜色",
                "phonetic": "さくらいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄桜",
                "phonetic": "うすざくら"
            },
            {
                "hex": "#fef4f4",
                "name": "桜鼠",
                "phonetic": "さくらねず"
            },
            {
                "hex": "#fef4f4",
                "name": "鴇鼠",
                "phonetic": "ときねず"
            },
            {
                "hex": "#fef4f4",
                "name": "虹色",
                "phonetic": "にじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "珊瑚色",
                "phonetic": "さんごいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "一斤染",
                "phonetic": "いっこんぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "宍色",
                "phonetic": "ししいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅梅色",
                "phonetic": "こうばいいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄紅",
                "phonetic": "うすべに"
            },
            {
                "hex": "#fef4f4",
                "name": "甚三紅",
                "phonetic": "じんざもみ"
            },
            {
                "hex": "#fef4f4",
                "name": "桃色",
                "phonetic": "ももいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鴇色",
                "phonetic": "ときいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "撫子色",
                "phonetic": "なでしこいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "灰梅",
                "phonetic": "はいうめ"
            },
            {
                "hex": "#fef4f4",
                "name": "灰桜",
                "phonetic": "はいざくら"
            },
            {
                "hex": "#fef4f4",
                "name": "淡紅藤",
                "phonetic": "あわべにふじ"
            },
            {
                "hex": "#fef4f4",
                "name": "石竹色",
                "phonetic": "せきちくいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄紅梅",
                "phonetic": "うすこうばい"
            },
            {
                "hex": "#fef4f4",
                "name": "桃花色",
                "phonetic": "ももはないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "朱華",
                "phonetic": "はねず"
            },
            {
                "hex": "#fef4f4",
                "name": "水柿",
                "phonetic": "みずがき"
            },
            {
                "hex": "#fef4f4",
                "name": "ときがら茶",
                "phonetic": "ときがらちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "退紅",
                "phonetic": "あらぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄柿",
                "phonetic": "うすがき"
            },
            {
                "hex": "#fef4f4",
                "name": "長春色",
                "phonetic": "ちょうしゅんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "梅鼠",
                "phonetic": "うめねず"
            },
            {
                "hex": "#fef4f4",
                "name": "鴇浅葱",
                "phonetic": "ときあさぎ"
            },
            {
                "hex": "#fef4f4",
                "name": "梅染",
                "phonetic": "うめぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "蘇芳香",
                "phonetic": "すおうこう"
            },
            {
                "hex": "#fef4f4",
                "name": "浅蘇芳",
                "phonetic": "あさすおう"
            },
            {
                "hex": "#fef4f4",
                "name": "真朱",
                "phonetic": "まそお"
            },
            {
                "hex": "#fef4f4",
                "name": "赤紫",
                "phonetic": "あかむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "躑躅色",
                "phonetic": "つつじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "牡丹色",
                "phonetic": "ぼたんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "今様色",
                "phonetic": "いまよういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "中紅",
                "phonetic": "なかべに"
            },
            {
                "hex": "#fef4f4",
                "name": "薔薇色",
                "phonetic": "ばらいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "韓紅",
                "phonetic": "からくれない"
            },
            {
                "hex": "#fef4f4",
                "name": "銀朱",
                "phonetic": "ぎんしゅ"
            },
            {
                "hex": "#fef4f4",
                "name": "赤紅",
                "phonetic": "あかべに"
            },
            {
                "hex": "#fef4f4",
                "name": "紅緋",
                "phonetic": "べにひ"
            },
            {
                "hex": "#fef4f4",
                "name": "赤",
                "phonetic": "あか"
            },
            {
                "hex": "#fef4f4",
                "name": "猩々緋",
                "phonetic": "しょうじょうひ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅",
                "phonetic": "くれない"
            },
            {
                "hex": "#fef4f4",
                "name": "深緋",
                "phonetic": "こきひ"
            },
            {
                "hex": "#fef4f4",
                "name": "緋色",
                "phonetic": "ひいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "赤丹",
                "phonetic": "あかに"
            },
            {
                "hex": "#fef4f4",
                "name": "紅赤",
                "phonetic": "べにあか"
            },
            {
                "hex": "#fef4f4",
                "name": "臙脂",
                "phonetic": "えんじ"
            },
            {
                "hex": "#fef4f4",
                "name": "朱 緋",
                "phonetic": "あけ"
            },
            {
                "hex": "#fef4f4",
                "name": "茜色",
                "phonetic": "あかねいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅海老茶",
                "phonetic": "べにえびちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "蘇芳",
                "phonetic": "すおう"
            },
            {
                "hex": "#fef4f4",
                "name": "真紅",
                "phonetic": "しんく"
            },
            {
                "hex": "#fef4f4",
                "name": "濃紅",
                "phonetic": "こいくれない"
            },
            {
                "hex": "#fef4f4",
                "name": "苺色",
                "phonetic": "いちごいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "象牙色",
                "phonetic": "ぞうげいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "練色",
                "phonetic": "ねりいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "灰白色",
                "phonetic": "かいはくしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "蒸栗色",
                "phonetic": "むしぐりいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "女郎花",
                "phonetic": "おみなえし"
            },
            {
                "hex": "#fef4f4",
                "name": "枯草色",
                "phonetic": "かれくさいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "淡黄",
                "phonetic": "たんこう"
            },
            {
                "hex": "#fef4f4",
                "name": "白茶",
                "phonetic": "しらちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "赤白橡",
                "phonetic": "あかしろつるばみ"
            },
            {
                "hex": "#fef4f4",
                "name": "洗柿",
                "phonetic": "あらいがき"
            },
            {
                "hex": "#fef4f4",
                "name": "鳥の子色",
                "phonetic": "とりのこいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "蜂蜜色",
                "phonetic": "はちみついろ"
            },
            {
                "hex": "#fef4f4",
                "name": "肌色",
                "phonetic": "はだいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄卵色",
                "phonetic": "うすたまごいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "雄黄",
                "phonetic": "ゆうおう"
            },
            {
                "hex": "#fef4f4",
                "name": "洒落柿",
                "phonetic": "しゃれがき"
            },
            {
                "hex": "#fef4f4",
                "name": "赤香",
                "phonetic": "あかこう"
            },
            {
                "hex": "#fef4f4",
                "name": "砥粉色",
                "phonetic": "とのこいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "肉色",
                "phonetic": "にくいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "人色",
                "phonetic": "ひといろ"
            },
            {
                "hex": "#fef4f4",
                "name": "丁子色",
                "phonetic": "ちょうじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "香色",
                "phonetic": "こういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄香",
                "phonetic": "うすこう"
            },
            {
                "hex": "#fef4f4",
                "name": "浅黄",
                "phonetic": "うすき"
            },
            {
                "hex": "#fef4f4",
                "name": "枯色",
                "phonetic": "かれいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "淡香",
                "phonetic": "うすこう"
            },
            {
                "hex": "#fef4f4",
                "name": "杏色",
                "phonetic": "あんずいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "東雲色",
                "phonetic": "しののめいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "曙色",
                "phonetic": "あけぼのいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "珊瑚朱色",
                "phonetic": "さんごしゅいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "深支子",
                "phonetic": "こきくちなし"
            },
            {
                "hex": "#fef4f4",
                "name": "浅緋",
                "phonetic": "うすきひ"
            },
            {
                "hex": "#fef4f4",
                "name": "真赭",
                "phonetic": "まそほ"
            },
            {
                "hex": "#fef4f4",
                "name": "洗朱",
                "phonetic": "あらいしゅ"
            },
            {
                "hex": "#fef4f4",
                "name": "遠州茶",
                "phonetic": "えんしゅうちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅樺色",
                "phonetic": "べにかばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "赭",
                "phonetic": "そほ"
            },
            {
                "hex": "#fef4f4",
                "name": "蘇飛",
                "phonetic": "そひ"
            },
            {
                "hex": "#fef4f4",
                "name": "小豆色",
                "phonetic": "あずきいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "枯茶",
                "phonetic": "からちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "飴色",
                "phonetic": "あめいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "駱駝色",
                "phonetic": "らくだいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "土色",
                "phonetic": "つちいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄唐茶",
                "phonetic": "きがらちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "桑染",
                "phonetic": "くわぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "櫨色",
                "phonetic": "はじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄橡",
                "phonetic": "きつるばみ"
            },
            {
                "hex": "#fef4f4",
                "name": "丁字染",
                "phonetic": "ちょうじぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "香染",
                "phonetic": "こうぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "枇杷茶",
                "phonetic": "びわちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "芝翫茶",
                "phonetic": "しかんちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "焦香",
                "phonetic": "こがれこう"
            },
            {
                "hex": "#fef4f4",
                "name": "胡桃色",
                "phonetic": "くるみいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "渋紙色",
                "phonetic": "しぶかみいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "朽葉色",
                "phonetic": "くちばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "桑茶",
                "phonetic": "くわちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "路考茶",
                "phonetic": "ろこうちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "国防色",
                "phonetic": "こくぼうしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "伽羅色",
                "phonetic": "きゃらいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "江戸茶",
                "phonetic": "えどちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "樺色",
                "phonetic": "かばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅鬱金",
                "phonetic": "べにうこん"
            },
            {
                "hex": "#fef4f4",
                "name": "土器色",
                "phonetic": "かわらけいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "狐色",
                "phonetic": "きつねいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄土色",
                "phonetic": "おうどいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "琥珀色",
                "phonetic": "こはくいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "赤茶",
                "phonetic": "あかちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "代赭",
                "phonetic": "たいしゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "煉瓦色",
                "phonetic": "れんがいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "雀茶",
                "phonetic": "すずめちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "団十郎茶",
                "phonetic": "だんじゅうろうちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "柿渋色",
                "phonetic": "かきしぶいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅鳶",
                "phonetic": "べにとび"
            },
            {
                "hex": "#fef4f4",
                "name": "灰茶",
                "phonetic": "はいちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "茶色",
                "phonetic": "ちゃいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "檜皮色",
                "phonetic": "ひわだいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鳶色",
                "phonetic": "とびいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "柿茶",
                "phonetic": "かきちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "弁柄色",
                "phonetic": "べんがらいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "赤錆色",
                "phonetic": "あかさびいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "褐色",
                "phonetic": "かっしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "栗梅",
                "phonetic": "くりうめ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅檜皮",
                "phonetic": "べにひはだ"
            },
            {
                "hex": "#fef4f4",
                "name": "海老茶",
                "phonetic": "えびちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "唐茶",
                "phonetic": "からちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "栗色",
                "phonetic": "くりいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "赤銅色",
                "phonetic": "しゃくどういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "錆色",
                "phonetic": "さびいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "赤褐色",
                "phonetic": "せっかっしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "茶褐色",
                "phonetic": "ちゃかっしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "栗皮茶",
                "phonetic": "くりかわちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "黒茶",
                "phonetic": "くろちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "葡萄茶",
                "phonetic": "えびちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "葡萄色",
                "phonetic": "えびいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "萱草色",
                "phonetic": "かんぞういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "柑子色",
                "phonetic": "こうじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "金茶",
                "phonetic": "きんちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "蜜柑色",
                "phonetic": "みかんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鉛丹色",
                "phonetic": "えんたんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄丹",
                "phonetic": "おうに"
            },
            {
                "hex": "#fef4f4",
                "name": "柿色",
                "phonetic": "かきいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄赤",
                "phonetic": "きあか"
            },
            {
                "hex": "#fef4f4",
                "name": "人参色",
                "phonetic": "にんじんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "橙色",
                "phonetic": "だいだいいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "照柿",
                "phonetic": "てりがき"
            },
            {
                "hex": "#fef4f4",
                "name": "赤橙",
                "phonetic": "あかだいだい"
            },
            {
                "hex": "#fef4f4",
                "name": "金赤",
                "phonetic": "きんあか"
            },
            {
                "hex": "#fef4f4",
                "name": "朱色",
                "phonetic": "しゅいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "小麦色",
                "phonetic": "こむぎいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "丹色",
                "phonetic": "にいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄茶",
                "phonetic": "きちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "肉桂色",
                "phonetic": "にっけいいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "赤朽葉色",
                "phonetic": "あかくちばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄櫨染",
                "phonetic": "こうろぜん"
            },
            {
                "hex": "#fef4f4",
                "name": "蒲公英色",
                "phonetic": "たんぽぽいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄色",
                "phonetic": "きいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "中黄",
                "phonetic": "ちゅうき"
            },
            {
                "hex": "#fef4f4",
                "name": "菜の花色",
                "phonetic": "なのはないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄檗色",
                "phonetic": "きはだいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "卵色",
                "phonetic": "たまごいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "花葉色",
                "phonetic": "はなばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "刈安色",
                "phonetic": "かりやすいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "玉蜀黍色",
                "phonetic": "とうもろこしいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "金糸雀色",
                "phonetic": "かなりあいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄支子色",
                "phonetic": "きくちなしいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "支子色",
                "phonetic": "くちなしいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "向日葵色",
                "phonetic": "ひまわりいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "山吹色",
                "phonetic": "やまぶきいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鬱金色",
                "phonetic": "うこんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "藤黄",
                "phonetic": "とうおう"
            },
            {
                "hex": "#fef4f4",
                "name": "金色",
                "phonetic": "こんじき"
            },
            {
                "hex": "#fef4f4",
                "name": "黄金",
                "phonetic": "こがね"
            },
            {
                "hex": "#fef4f4",
                "name": "櫨染",
                "phonetic": "はじぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄朽葉色",
                "phonetic": "きくちばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "山吹茶",
                "phonetic": "やまぶきちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "芥子色",
                "phonetic": "からしいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "豆がら茶",
                "phonetic": "まめがらちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "麹塵",
                "phonetic": "きくじん"
            },
            {
                "hex": "#fef4f4",
                "name": "山鳩色",
                "phonetic": "やまばといろ"
            },
            {
                "hex": "#fef4f4",
                "name": "利休鼠",
                "phonetic": "りきゅうねずみ"
            },
            {
                "hex": "#fef4f4",
                "name": "海松茶",
                "phonetic": "みるちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "藍海松茶",
                "phonetic": "あいみるちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "藍媚茶",
                "phonetic": "あいこびちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "千歳茶",
                "phonetic": "せんさいちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "岩井茶",
                "phonetic": "いわいちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "仙斎茶",
                "phonetic": "せんさいちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "黒緑",
                "phonetic": "くろみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "柳煤竹",
                "phonetic": "やなぎすすたけ"
            },
            {
                "hex": "#fef4f4",
                "name": "樺茶色",
                "phonetic": "かばちゃいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "空五倍子色",
                "phonetic": "うつぶしいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "生壁色",
                "phonetic": "なまかべいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "肥後煤竹",
                "phonetic": "ひごすすたけ"
            },
            {
                "hex": "#fef4f4",
                "name": "媚茶",
                "phonetic": "こびちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "白橡",
                "phonetic": "しろつるばみ"
            },
            {
                "hex": "#fef4f4",
                "name": "亜麻色",
                "phonetic": "あまいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "榛色",
                "phonetic": "はしばみいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "灰汁色",
                "phonetic": "あくいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "利休茶",
                "phonetic": "りきゅうちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "鶯茶",
                "phonetic": "うぐいすちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "木蘭色",
                "phonetic": "もくらんじき"
            },
            {
                "hex": "#fef4f4",
                "name": "砂色",
                "phonetic": "すないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "油色",
                "phonetic": "あぶらいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "利休色",
                "phonetic": "りきゅういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "梅幸茶",
                "phonetic": "ばいこうちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "璃寛茶",
                "phonetic": "りかんちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄海松茶",
                "phonetic": "きみるちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "菜種油色",
                "phonetic": "なたねゆいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青朽葉",
                "phonetic": "あおくちば"
            },
            {
                "hex": "#fef4f4",
                "name": "根岸色",
                "phonetic": "ねぎしいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鶸茶",
                "phonetic": "ひわちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "柳茶",
                "phonetic": "やなぎちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "海松色",
                "phonetic": "みるいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鶯色",
                "phonetic": "うぐいすいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "緑黄色",
                "phonetic": "りょくおうしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "鶸色",
                "phonetic": "ひわいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "抹茶色",
                "phonetic": "まっちゃいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "若草色",
                "phonetic": "わかくさいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄緑",
                "phonetic": "きみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "若芽色",
                "phonetic": "わかめいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "若菜色",
                "phonetic": "わかないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "若苗色",
                "phonetic": "わかなえいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青丹",
                "phonetic": "あおに"
            },
            {
                "hex": "#fef4f4",
                "name": "草色",
                "phonetic": "くさいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "苔色",
                "phonetic": "こけいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "萌黄",
                "phonetic": "もえぎ"
            },
            {
                "hex": "#fef4f4",
                "name": "苗色",
                "phonetic": "なえいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "若葉色",
                "phonetic": "わかばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "松葉色",
                "phonetic": "まつばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "夏虫色",
                "phonetic": "なつむしいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鶸萌黄",
                "phonetic": "ひわもえぎ"
            },
            {
                "hex": "#fef4f4",
                "name": "柳色",
                "phonetic": "やなぎいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青白橡",
                "phonetic": "あおしろつるばみ"
            },
            {
                "hex": "#fef4f4",
                "name": "柳鼠",
                "phonetic": "やなぎねず"
            },
            {
                "hex": "#fef4f4",
                "name": "裏葉柳",
                "phonetic": "うらはやなぎ"
            },
            {
                "hex": "#fef4f4",
                "name": "山葵色",
                "phonetic": "わさびいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "老竹色",
                "phonetic": "おいたけいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "白緑",
                "phonetic": "びゃくろく"
            },
            {
                "hex": "#fef4f4",
                "name": "淡萌黄",
                "phonetic": "うすもえぎ"
            },
            {
                "hex": "#fef4f4",
                "name": "柳染",
                "phonetic": "やなぎぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄萌葱",
                "phonetic": "うすもえぎ"
            },
            {
                "hex": "#fef4f4",
                "name": "深川鼠",
                "phonetic": "ふかがわねずみ"
            },
            {
                "hex": "#fef4f4",
                "name": "若緑",
                "phonetic": "わかみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "浅緑",
                "phonetic": "あさみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "薄緑",
                "phonetic": "うすみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "青鈍",
                "phonetic": "あおにび"
            },
            {
                "hex": "#fef4f4",
                "name": "青磁鼠",
                "phonetic": "せいじねず"
            },
            {
                "hex": "#fef4f4",
                "name": "薄青",
                "phonetic": "うすあお"
            },
            {
                "hex": "#fef4f4",
                "name": "錆青磁",
                "phonetic": "さびせいじ"
            },
            {
                "hex": "#fef4f4",
                "name": "緑青色",
                "phonetic": "りょくしょういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "千歳緑",
                "phonetic": "ちとせみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "若竹色",
                "phonetic": "わかたけいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "緑",
                "phonetic": "みどり"
            },
            {
                "hex": "#fef4f4",
                "name": "常磐色",
                "phonetic": "ときわいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "千草鼠",
                "phonetic": "ちぐさねず"
            },
            {
                "hex": "#fef4f4",
                "name": "千草色",
                "phonetic": "ちぐさいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青磁色",
                "phonetic": "せいじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青竹色",
                "phonetic": "あおたけいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "常磐緑",
                "phonetic": "ときわみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "木賊色",
                "phonetic": "とくさいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "天鵞絨",
                "phonetic": "びろうど"
            },
            {
                "hex": "#fef4f4",
                "name": "虫襖",
                "phonetic": "むしあお"
            },
            {
                "hex": "#fef4f4",
                "name": "革色",
                "phonetic": "かわいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "深緑",
                "phonetic": "ふかみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "鉄色",
                "phonetic": "てついろ"
            },
            {
                "hex": "#fef4f4",
                "name": "平和色",
                "phonetic": "へいわいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "萌葱色",
                "phonetic": "もえぎいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "花緑青",
                "phonetic": "はなろくしょう"
            },
            {
                "hex": "#fef4f4",
                "name": "翡翠色",
                "phonetic": "ひすいいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青緑",
                "phonetic": "あおみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "水浅葱",
                "phonetic": "みずあさぎ"
            },
            {
                "hex": "#fef4f4",
                "name": "錆浅葱",
                "phonetic": "さびあさぎ"
            },
            {
                "hex": "#fef4f4",
                "name": "青碧",
                "phonetic": "せいへき"
            },
            {
                "hex": "#fef4f4",
                "name": "御召茶",
                "phonetic": "おめしちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "湊鼠",
                "phonetic": "みなとねずみ"
            },
            {
                "hex": "#fef4f4",
                "name": "高麗納戸",
                "phonetic": "こうらいなんど"
            },
            {
                "hex": "#fef4f4",
                "name": "百入茶",
                "phonetic": "ももしおちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "錆鼠",
                "phonetic": "さびねず"
            },
            {
                "hex": "#fef4f4",
                "name": "錆鉄御納戸",
                "phonetic": "さびてつおなんど"
            },
            {
                "hex": "#fef4f4",
                "name": "藍鼠",
                "phonetic": "あいねず"
            },
            {
                "hex": "#fef4f4",
                "name": "錆御納戸",
                "phonetic": "さびおなんど"
            },
            {
                "hex": "#fef4f4",
                "name": "舛花色",
                "phonetic": "ますはないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "熨斗目花色",
                "phonetic": "のしめはないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "御召御納戸",
                "phonetic": "おめしおなんど"
            },
            {
                "hex": "#fef4f4",
                "name": "鉄御納戸",
                "phonetic": "てつおなんど"
            },
            {
                "hex": "#fef4f4",
                "name": "紺鼠",
                "phonetic": "こんねず"
            },
            {
                "hex": "#fef4f4",
                "name": "藍鉄",
                "phonetic": "あいてつ"
            },
            {
                "hex": "#fef4f4",
                "name": "青褐",
                "phonetic": "あおかち"
            },
            {
                "hex": "#fef4f4",
                "name": "褐返",
                "phonetic": "かちかえし"
            },
            {
                "hex": "#fef4f4",
                "name": "褐色",
                "phonetic": "かちいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "月白",
                "phonetic": "げっぱく"
            },
            {
                "hex": "#fef4f4",
                "name": "白菫色",
                "phonetic": "しろすみれいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "白花色",
                "phonetic": "しらはないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "藍白",
                "phonetic": "あいじろ"
            },
            {
                "hex": "#fef4f4",
                "name": "白藍",
                "phonetic": "しらあい"
            },
            {
                "hex": "#fef4f4",
                "name": "水色",
                "phonetic": "みずいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "瓶覗",
                "phonetic": "かめのぞき"
            },
            {
                "hex": "#fef4f4",
                "name": "秘色色",
                "phonetic": "ひそくいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "空色",
                "phonetic": "そらいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "勿忘草色",
                "phonetic": "わすれなぐさいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青藤色",
                "phonetic": "あおふじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "白群",
                "phonetic": "びゃくぐん"
            },
            {
                "hex": "#fef4f4",
                "name": "浅縹",
                "phonetic": "あさはなだ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄花色",
                "phonetic": "うすはないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "納戸色",
                "phonetic": "なんどいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "浅葱色",
                "phonetic": "あさぎいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "花浅葱",
                "phonetic": "はなあさぎ"
            },
            {
                "hex": "#fef4f4",
                "name": "新橋色",
                "phonetic": "しんばしいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "天色",
                "phonetic": "あまいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "露草色",
                "phonetic": "つゆくさいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青",
                "phonetic": "あお"
            },
            {
                "hex": "#fef4f4",
                "name": "薄藍",
                "phonetic": "うすあい"
            },
            {
                "hex": "#fef4f4",
                "name": "縹色",
                "phonetic": "はなだいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紺碧",
                "phonetic": "こんぺき"
            },
            {
                "hex": "#fef4f4",
                "name": "薄群青",
                "phonetic": "うすぐんじょう"
            },
            {
                "hex": "#fef4f4",
                "name": "薄花桜",
                "phonetic": "うすはなざくら"
            },
            {
                "hex": "#fef4f4",
                "name": "群青色",
                "phonetic": "ぐんじょういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "杜若色",
                "phonetic": "かきつばたいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "瑠璃色",
                "phonetic": "るりいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄縹",
                "phonetic": "うすはなだ"
            },
            {
                "hex": "#fef4f4",
                "name": "瑠璃紺",
                "phonetic": "るりこん"
            },
            {
                "hex": "#fef4f4",
                "name": "紺瑠璃",
                "phonetic": "こんるり"
            },
            {
                "hex": "#fef4f4",
                "name": "藍色",
                "phonetic": "あいいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青藍",
                "phonetic": "せいらん"
            },
            {
                "hex": "#fef4f4",
                "name": "深縹",
                "phonetic": "こきはなだ"
            },
            {
                "hex": "#fef4f4",
                "name": "紺色",
                "phonetic": "こんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紺青",
                "phonetic": "こんじょう"
            },
            {
                "hex": "#fef4f4",
                "name": "留紺",
                "phonetic": "とめこん"
            },
            {
                "hex": "#fef4f4",
                "name": "濃藍",
                "phonetic": "こいあい"
            },
            {
                "hex": "#fef4f4",
                "name": "鉄紺",
                "phonetic": "てつこん"
            },
            {
                "hex": "#fef4f4",
                "name": "漆黒",
                "phonetic": "しっこく"
            },
            {
                "hex": "#fef4f4",
                "name": "淡藤色",
                "phonetic": "あわふじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "藤色",
                "phonetic": "ふじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅掛空色",
                "phonetic": "べにかけそらいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅碧",
                "phonetic": "べにみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "紺桔梗",
                "phonetic": "こんききょう"
            },
            {
                "hex": "#fef4f4",
                "name": "花色",
                "phonetic": "はないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紺藍",
                "phonetic": "こんあい"
            },
            {
                "hex": "#fef4f4",
                "name": "紅桔梗",
                "phonetic": "べにききょう"
            },
            {
                "hex": "#fef4f4",
                "name": "桔梗色",
                "phonetic": "ききょういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "藤納戸",
                "phonetic": "ふじなんど"
            },
            {
                "hex": "#fef4f4",
                "name": "紅掛花色",
                "phonetic": "べにかけはないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紫苑色",
                "phonetic": "しおんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "白藤色",
                "phonetic": "しらふじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "藤紫",
                "phonetic": "ふじむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "菫色",
                "phonetic": "すみれいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "青紫",
                "phonetic": "あおむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "菖蒲色",
                "phonetic": "しょうぶいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "竜胆色",
                "phonetic": "りんどういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "江戸紫",
                "phonetic": "えどむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "本紫",
                "phonetic": "ほんむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "葡萄色",
                "phonetic": "ぶどういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "深紫",
                "phonetic": "ふかむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "紫黒",
                "phonetic": "しこく"
            },
            {
                "hex": "#fef4f4",
                "name": "紫紺",
                "phonetic": "しこん"
            },
            {
                "hex": "#fef4f4",
                "name": "桑の実色",
                "phonetic": "くわのみいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "暗紅色",
                "phonetic": "あんこうしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "紫",
                "phonetic": "むらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "楝色",
                "phonetic": "おうちいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄葡萄",
                "phonetic": "うすぶどう"
            },
            {
                "hex": "#fef4f4",
                "name": "古代紫",
                "phonetic": "こだいむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "茄子紺",
                "phonetic": "なすこん"
            },
            {
                "hex": "#fef4f4",
                "name": "二藍",
                "phonetic": "ふたあい"
            },
            {
                "hex": "#fef4f4",
                "name": "京紫",
                "phonetic": "きょうむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "蒲葡",
                "phonetic": "えびぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "若紫",
                "phonetic": "わかむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "紅紫",
                "phonetic": "べにむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "梅紫",
                "phonetic": "うめむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "菖蒲色",
                "phonetic": "あやめいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紅藤色",
                "phonetic": "べにふじいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "浅紫",
                "phonetic": "あさむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "紫水晶",
                "phonetic": "むらさきすいしょう"
            },
            {
                "hex": "#fef4f4",
                "name": "薄梅鼠",
                "phonetic": "うすうめねず"
            },
            {
                "hex": "#fef4f4",
                "name": "暁鼠",
                "phonetic": "あかつきねず"
            },
            {
                "hex": "#fef4f4",
                "name": "牡丹鼠",
                "phonetic": "ぼたんねず"
            },
            {
                "hex": "#fef4f4",
                "name": "霞色",
                "phonetic": "かすみいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "藤鼠",
                "phonetic": "ふじねず"
            },
            {
                "hex": "#fef4f4",
                "name": "半色",
                "phonetic": "はしたいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄色",
                "phonetic": "うすいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄鼠",
                "phonetic": "うすねず"
            },
            {
                "hex": "#fef4f4",
                "name": "鳩羽鼠",
                "phonetic": "はとばねずみ"
            },
            {
                "hex": "#fef4f4",
                "name": "鳩羽色",
                "phonetic": "はとばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "桔梗鼠",
                "phonetic": "ききょうねず"
            },
            {
                "hex": "#fef4f4",
                "name": "紫鼠",
                "phonetic": "むらさきねず"
            },
            {
                "hex": "#fef4f4",
                "name": "葡萄鼠",
                "phonetic": "ぶどうねずみ"
            },
            {
                "hex": "#fef4f4",
                "name": "濃色",
                "phonetic": "こきいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "紫鳶",
                "phonetic": "むらさきとび"
            },
            {
                "hex": "#fef4f4",
                "name": "濃鼠",
                "phonetic": "こいねず"
            },
            {
                "hex": "#fef4f4",
                "name": "藤煤竹",
                "phonetic": "ふじすすたけ"
            },
            {
                "hex": "#fef4f4",
                "name": "滅紫",
                "phonetic": "けしむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "紅消鼠",
                "phonetic": "べにけしねずみ"
            },
            {
                "hex": "#fef4f4",
                "name": "似せ紫",
                "phonetic": "にせむらさき"
            },
            {
                "hex": "#fef4f4",
                "name": "灰黄緑",
                "phonetic": "はいきみどり"
            },
            {
                "hex": "#fef4f4",
                "name": "蕎麦切色",
                "phonetic": "そばきりいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "薄雲鼠",
                "phonetic": "うすくもねず"
            },
            {
                "hex": "#fef4f4",
                "name": "枯野色",
                "phonetic": "かれのいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "潤色",
                "phonetic": "うるみいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "利休白茶",
                "phonetic": "りきゅうしろちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "茶鼠",
                "phonetic": "ちゃねずみ"
            },
            {
                "hex": "#fef4f4",
                "name": "胡桃染",
                "phonetic": "くるみぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "江戸鼠",
                "phonetic": "えどねず"
            },
            {
                "hex": "#fef4f4",
                "name": "煤色",
                "phonetic": "すすいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "丁子茶",
                "phonetic": "ちょうじちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "柴染",
                "phonetic": "ふしぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "宗伝唐茶",
                "phonetic": "そうでんからちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "砺茶",
                "phonetic": "とのちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "煎茶色",
                "phonetic": "せんちゃいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "銀煤竹",
                "phonetic": "ぎんすすだけ"
            },
            {
                "hex": "#fef4f4",
                "name": "黄枯茶",
                "phonetic": "きがらちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "煤竹色",
                "phonetic": "すすたけいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "焦茶",
                "phonetic": "こげちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "黒橡",
                "phonetic": "くろつるばみ"
            },
            {
                "hex": "#fef4f4",
                "name": "憲法色",
                "phonetic": "けんぽういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "涅色",
                "phonetic": "くりいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "檳榔子染",
                "phonetic": "びんろうじぞめ"
            },
            {
                "hex": "#fef4f4",
                "name": "黒鳶",
                "phonetic": "くろとび"
            },
            {
                "hex": "#fef4f4",
                "name": "赤墨",
                "phonetic": "あかすみ"
            },
            {
                "hex": "#fef4f4",
                "name": "黒紅",
                "phonetic": "くろべに"
            },
            {
                "hex": "#fef4f4",
                "name": "白",
                "phonetic": "しろ"
            },
            {
                "hex": "#fef4f4",
                "name": "胡粉色",
                "phonetic": "ごふんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "卯の花色",
                "phonetic": "うのはないろ"
            },
            {
                "hex": "#fef4f4",
                "name": "白磁",
                "phonetic": "はくじ"
            },
            {
                "hex": "#fef4f4",
                "name": "生成り色",
                "phonetic": "きなりいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "乳白色",
                "phonetic": "にゅうはくしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "白練",
                "phonetic": "しろねり"
            },
            {
                "hex": "#fef4f4",
                "name": "素色",
                "phonetic": "そしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "白梅鼠",
                "phonetic": "しらうめねず"
            },
            {
                "hex": "#fef4f4",
                "name": "白鼠",
                "phonetic": "しろねず"
            },
            {
                "hex": "#fef4f4",
                "name": "絹鼠",
                "phonetic": "きぬねず"
            },
            {
                "hex": "#fef4f4",
                "name": "灰青",
                "phonetic": "はいあお"
            },
            {
                "hex": "#fef4f4",
                "name": "銀鼠",
                "phonetic": "ぎんねず"
            },
            {
                "hex": "#fef4f4",
                "name": "薄鈍",
                "phonetic": "うすにび"
            },
            {
                "hex": "#fef4f4",
                "name": "薄墨色",
                "phonetic": "うすずみいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "錫色",
                "phonetic": "すずいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "素鼠",
                "phonetic": "すねずみ"
            },
            {
                "hex": "#fef4f4",
                "name": "鼠色",
                "phonetic": "ねずみいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "源氏鼠",
                "phonetic": "げんじねず"
            },
            {
                "hex": "#fef4f4",
                "name": "灰色",
                "phonetic": "はいいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鉛色",
                "phonetic": "なまりいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鈍色",
                "phonetic": "にびいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "墨",
                "phonetic": "すみ"
            },
            {
                "hex": "#fef4f4",
                "name": "丼鼠",
                "phonetic": "どぶねずみ"
            },
            {
                "hex": "#fef4f4",
                "name": "消炭色",
                "phonetic": "けしずみいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "藍墨茶",
                "phonetic": "あいすみちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "羊羹色",
                "phonetic": "ようかんいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "蝋色",
                "phonetic": "ろういろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黒",
                "phonetic": "くろ"
            },
            {
                "hex": "#fef4f4",
                "name": "烏羽色",
                "phonetic": "からすばいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "鉄黒",
                "phonetic": "てつぐろ"
            },
            {
                "hex": "#fef4f4",
                "name": "濡羽色",
                "phonetic": "ぬればいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "黒壇",
                "phonetic": "こくたん"
            },
            {
                "hex": "#fef4f4",
                "name": "憲法黒茶",
                "phonetic": "けんぽうくろちゃ"
            },
            {
                "hex": "#fef4f4",
                "name": "暗黒色",
                "phonetic": "あんこくしょく"
            },
            {
                "hex": "#fef4f4",
                "name": "武将色",
                "phonetic": "ぶしょういろ"
            }
        ];
    }
}