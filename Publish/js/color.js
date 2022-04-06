/**
 * Colorクラスのプロパティとそれに対応する順番を提供します。
 */
class PropertyOrder {
    /**
     * プロパティの順番を取得します。
     * @returns {Array<Array<any>>} プロパティの順番を返します。
     */
    static get = () => [
        [ "category" , 0 ],
        [ "region"   , 1 ],
        [ "country"  , 2 ],
        [ "name"     , 3 ],
        [ "phonetic" , 4 ],
        [ "hex"      , 5 ]
    ];
}

/**
 * 色を表します。
 */
class Color {
    /**
     * インスタンスを初期化します。
     * @param {String} category カテゴリー名。
     * @param {String} region 地方。
     * @param {String} country 国。
     * @param {Object} color 色情報。
     */
    constructor(category, region, country, color) {
        this.category = category;
        this.region = region;
        this.country = country;
        this.name = color.name;
        this.phonetic = color.phonetic;
        this.hex = color.hex;
    }

    /**
     * 文字列からインスタンスを作成します。
     * @param {String} expression インスタンスを表す文字列。
     * @returns {Color} 新しいインスタンスを返します。
     */
    static createFromString = expression => {
        // プロパティに対応する内容の取得処理
        const orders = PropertyOrder.get();
        const values = expression.split("|");
        const getValue = name => {
            const matched = orders.filter(x => x[0] === name);
            if (matched.length === 0) return null;
            const index = matched[0][1];
            return index ? values[index] : null;
        }

        // インスタンスを構築して返す
        return new Color(
            getValue("category"),
            getValue("region"),
            getValue("country"),
            {
                name: getValue("name"),
                phonetic: getValue("phonetic"),
                hex: getValue("hex")
            }
        );
    }

    /**
     * このインスタンスを表す文字列を取得します。
     * @param {Array<String>} ignore 無視するプロパティ。
     * @returns {String} このインスタンスを表す文字列を返します。
     */
    toString = (ignore=[]) => {
        // プロパティの順番を取得
        const orders = PropertyOrder.get();
        
        // プロパティ順に情報を結合した文字列を返す
        orders.sort((a, b) => a[1] > b[1]);
        const values = orders.map(x => ignore.includes(x[0]) ? "" : this[x[0]]);
        return values.join("|");
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

export { Color };