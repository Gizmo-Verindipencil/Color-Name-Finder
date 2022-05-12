import { Cache } from "./cache.js";

/**
 * オプションボードを表します。
 */
class OptionBoard {
    constructor() {
        const cache = new Cache();
        cache.set("max-number", () => $("#max-number"));
        this._cache = cache;
    }

    /**
     * 表示を初期化します。
     */
    initialize = () => {
        this._cache.get("max-number").val(5);
    }

    /**
     * 最大数を取得します。
     * @returns {String} 最大数を返します。
     */
    get maxNumber() {
        return this._cache.get("max-number").val() ?? "0";
    }
}

export { OptionBoard };