import { Color } from "./color.js";

/**
 * データとの仲介を示すダミークラス。
 */
class Gateway {
    /**
     * 色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    addColors = array => {
        this.#appendAfricanColors(array);
        this.#appendAmericanColors(array);
        this.#appendBritishColors(array);
        this.#appendChineseColors(array);
        this.#appendEuropeanColors(array);
        this.#appendFrenchColors(array);
        this.#appendJapaneseColors(array);
        this.#appendWebColors(array);
    }
    
    /**
     * 配列に色情報を追加します。
     * @param {Array<Color>} array 追加先の配列。
     * @param {String} category カテゴリー名。
     * @param {String} url 色を示す
     */
    #append = (array, category, fileName) => {
        $.getJSON(`../Data/json/${fileName}`, data => {
            for (const i in data) {
                const color = data[i];
                array.push(new Color(category, color));
            }
        });
    }

    /**
     * アフリカの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendAfricanColors = array => {
        this.#append(array, "africa", "africa.json");
    }

    /**
     * アメリカの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendAmericanColors = array => {
        this.#append(array, "america", "america.json");
    }

    /**
     * イギリスの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendBritishColors = array => {
        this.#append(array, "united-kingdom", "united-kingdom.json");
    }

    /**
     * 中国の色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendChineseColors = array => {
        this.#append(array, "china", "china.json");
    }

    /**
     * ヨーロッパの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendEuropeanColors = array => {
        this.#append(array, "europe", "europe.json");
        this.#append(array, "europe", "europe2.json");
    }

    /**
     * フランスの色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendFrenchColors = array => {
        this.#append(array, "france", "france.json");
    }

    /**
     * 日本の色を追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendJapaneseColors = array => {
        this.#append(array, "japan", "japan.json");
        this.#append(array, "japan", "japan2.json");
    }

    /**
     * WEBカラーを追加します。
     * @param {Array<Color>} array 追加先の配列。
     */
    #appendWebColors = array => {
        this.#append(array, "web", "web.json");
    }
}

export { Gateway };