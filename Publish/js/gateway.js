import { Color } from "./color.js";

/**
 * JSONファイルの名称を定義します。
 */
class JsonFile {
    /**
     * アフリカの色ファイルを取得します。
     * @returns {String} ファイル名を返します。
     */
    static get africanColors() {
        return "africa.json";
    }

    /**
     * アメリカの色ファイルを取得します。
     * @returns {String} ファイル名を返します。
     */
    static get americanColors() {
        return "america.json";
    }

    /**
     * イギリスの色ファイルを取得します。
     * @returns {String} ファイル名を返します。
     */
    static get unitedKingdomColors() {
        return "united-kingdom.json";
    }

    /**
     * 中国の色ファイルを取得します。
     * @returns {String} ファイル名を返します。
     */
    static get chineseColors() {
        return "china.json";
    }

    /**
     * ヨーロッパの色ファイル1を取得します。
     * @returns {String} ファイル名を返します。
     */
    static get europeanColors1() {
        return "europe.json";
    }

    /**
     * ヨーロッパの色ファイル2を取得します。
     * @returns {String} ファイル名を返します。
     */
    static get europeanColors2() {
        return "europe2.json";
    }

    /**
     * フランスの色ファイルを取得します。
     * @returns {String} ファイル名を返します。
     */
    static get frenchColors() {
        return "france.json";
    }

    /**
     * 日本の色ファイル1を取得します。
     * @returns {String} ファイル名を返します。
     */
    static get japaneseColors1() {
        return "japan.json";
    }

    /**
     * 日本の色ファイル2を取得します。
     * @returns {String} ファイル名を返します。
     */
    static get japaneseColors2() {
        return "japan2.json";
    }

    /**
     * WEB色ファイルを取得します。
     * @returns {String} ファイル名を返します。
     */
    static get webColors() {
        return "web.json";
    }

    /**
     * 全ての色ファイルを取得します。
     * @returns {Array<String>} ファイル名を返します。
     */
    static get all() {
        return Object.getOwnPropertyNames(JsonFile).filter(x => !["length", "name", "prototype", "all"].includes(x)).map(x => JsonFile[x]);
    }
}

/**
 * データとの仲介を示すダミークラス。
 */
class Gateway {
    /**
     * 色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    addColors = array => {
        // ファイル読込状況を管理するオブジェクトを作成
        const holder = this.#createLoadingStatusHolder();
        
        // 全てのファイル読込後に実行するコールバック関数
        const callback = () => {
            const ignore = [ "category" ];
            const unique = [...new Set(array.map(x => x.toString(ignore)))];
            array.splice(0, array.length);
            for (const color of unique.map(x => Color.createFromString(x))) {
                array.push(color);
            }
        }

        // 色を追加
        const params = [array, holder, callback];
        this.#appendAfricanColors(...params);
        this.#appendAmericanColors(...params);
        this.#appendUnitedKingdomColors(...params);
        this.#appendChineseColors(...params);
        this.#appendEuropeanColors(...params);
        this.#appendFrenchColors(...params);
        this.#appendJapaneseColors(...params);
        this.#appendWebColors(...params);
    }

    /**
     * ファイル読込状況管理を作成します。
     * @returns {Object} 状況管理(key : ファイル名、value : 読込完了)を返します。
     *                   読込完了は true : 完了、false : 未完了 を意味します。
     */
    #createLoadingStatusHolder = () => {
        const status = {};
        for (const file of JsonFile.all) {
            status[file] = false;
        }
        return status;
    }
    
    /**
     * 配列に色情報を追加します。
     * @param {Array<Color>} array 追加先の配列。
     * @param {String} region 地方。
     * @param {String} country 国。
     * @param {String} category カテゴリー名。
     * @param {String} fileName jsonファイル名。
     * @param {Object} holder 全体のファイル読込状況。
     * @param {Function} allComplete 全てのファイルを読込完了した際に実行されるコールバック。
     */
    #append = (array, category, region, country, fileName, holder, allComplete) => {
        $.getJSON(`../Data/json/${fileName}`, data => {
            // 色を配列に追加
            for (const i in data) {
                const color = data[i];
                array.push(new Color(category, region, country, color));
            }

            // ファイルの読込完了を記録
            holder[fileName] = true;
            
            // 全てのファイル読込が完了していればコールバックを実行
            if (allComplete && JsonFile.all.every(x => holder[x])) {
                allComplete();
            }
        });
    }

    /**
     * アフリカの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendAfricanColors = (array, holder, allComplete) => {
        this.#append(array, "tradition", "africa", null, JsonFile.africanColors, holder, allComplete);
    }

    /**
     * アメリカの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendAmericanColors = (array, holder, allComplete) => {
        this.#append(array, "tradition", "na", "us", JsonFile.americanColors, holder, allComplete);
    }

    /**
     * イギリスの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendUnitedKingdomColors = (array, holder, allComplete) => {
        this.#append(array, "tradition", "europe", "uk", JsonFile.unitedKingdomColors, holder, allComplete);
    }

    /**
     * 中国の色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendChineseColors = (array, holder, allComplete) => {
        this.#append(array, "tradition", "asia", "cn", JsonFile.chineseColors, holder, allComplete);
    }

    /**
     * ヨーロッパの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendEuropeanColors = (array, holder, allComplete) => {
        this.#append(array, "tradition", "europe", null, JsonFile.europeanColors1, holder, allComplete);
        this.#append(array, "tradition", "europe", null, JsonFile.europeanColors2, holder, allComplete);
    }

    /**
     * フランスの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendFrenchColors = (array, holder, allComplete) => {
        this.#append(array, "tradition", "europe", "fr", JsonFile.frenchColors, holder, allComplete);
    }

    /**
     * 日本の色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendJapaneseColors = (array, holder, allComplete) => {
        this.#append(array, "tradition", "asia", "jp", JsonFile.japaneseColors1, holder, allComplete);
        this.#append(array, "tradition", "asia", "jp", JsonFile.japaneseColors2, holder, allComplete);
    }

    /**
     * WEBカラーを追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendWebColors = (array, holder, allComplete) => {
        this.#append(array, "web", null, null, JsonFile.webColors, holder, allComplete);
    }
}

export { Gateway };