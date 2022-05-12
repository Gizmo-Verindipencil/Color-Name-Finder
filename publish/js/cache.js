/**
 * キャッシュ管理を提供します。
 */
class Cache {
    constructor() {
        this._cache = {};
        this._creation = {};
    }

    /**
     * オブジェクトを設定します。
     * @param {String} key 識別子。
     * @param {Function} creation オブジェクトを返す関数。
     */
    set = (key, creation) => {
        this._creation[key] = creation;
    }

    /**
     * オブジェクトを取得します。
     * @param {String} key 識別子。
     * @returns {*} オブジェクトを返します。
     */
    get = key => {
        // 作成用の関数が未設定ならばエラーで終了
        if (this._creation[key] == null) {
            throw `There is no creation function for ${key}.`;
        }

        // キャッシュがなければオブジェクトを作成
        if (this._cache[key] == null) {
            this._cache[key] = this._creation[key].apply(null);
        }
        return this._cache[key];
    }
}

export { Cache };