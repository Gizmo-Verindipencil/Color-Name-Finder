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

export { Color };