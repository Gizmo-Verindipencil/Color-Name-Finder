/**
 * オプションボードを表します。
 */
class OptionBoard {
    constructor() {
        // 画面要素をキャッシュ
        this._maxNumber = null;
    }

    /**
     * 最大数テキストボックスを取得します。
     * @returns {Object} 最大数テキストボックスを返します。
     */
    #getMaxNumber = () => {
        if (!this._maxNumber) {
            this._maxNumber = $("#maxNumber");
        }
        return this._maxNumber;
    }

    /**
     * 表示を初期化します。
     */
    initialize = () => {
        this.#getMaxNumber().val(5);
    }

    /**
     * 最大数を取得します。
     * @returns {String} 最大数を返します。
     */
    get maxNumber() {
        return this.#getMaxNumber().val() ?? "5";
    }
}

export { OptionBoard };