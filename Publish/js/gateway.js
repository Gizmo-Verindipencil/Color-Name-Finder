import { Color } from "./color.js";
import { AfricanColorDataStore } from "./data-store/african-color-data-store.js";
import { AmericanColorDataStore } from "./data-store/american-color-data-store.js";
import { BritishColorDataStore } from "./data-store/british-color-data-store.js";
import { ChineseColorDataStore } from "./data-store/chinese-color-data-store.js";
import { EuropianColorDataStore } from "./data-store/europian-color-data-store.js";
import { FrenchColorDataStore } from "./data-store/french-color-data-store.js";
import { JapaneseColorDataStore } from "./data-store/japanese-color-data-store.js";
import { WebColorDataStore } from "./data-store/web-color-data-store.js";

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
        const dataStore = new AfricanColorDataStore();
        return dataStore.get();
    }

    /**
     * アメリカの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getAmericanColors = () => {
        const dataStore = new AmericanColorDataStore();
        return dataStore.get();
    }

    /**
     * イギリスの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getBritishColors = () => {
        const dataStore = new BritishColorDataStore();
        return dataStore.get();
    }

    /**
     * 中国の色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getChineseColors = () => {
        const dataStore = new ChineseColorDataStore();
        return dataStore.get();
    }

    /**
     * ヨーロッパの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getEuropianColors = () => {
        const dataStore = new EuropianColorDataStore();
        return dataStore.get();
    }

    /**
     * フランスの色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getFrenchColors = () => {
        const dataStore = new FrenchColorDataStore();
        return dataStore.get();
    }

    /**
     * 日本の色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getJapaneseColors = () => {
        const dataStore = new JapaneseColorDataStore();
        return dataStore.get();
    }

    /**
     * WEBカラーを取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #getWebColors = () => {
        const dataStore = new WebColorDataStore();
        return dataStore.get();
    }
}

export { Gateway };