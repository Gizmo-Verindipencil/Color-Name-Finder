import { Cache } from "./cache.js";

/**
 * オプション表示切替ボタンを表します。
 */
class OptionVisibilitySwitcher {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        const cache = new Cache();
        cache.set("switcher", () => $(".option-visibility-switcher"));
        cache.set("option-board", () => $(".option-board"));
        cache.set("close-button", () => $(".close-option"));
        this._cache = cache;
    }

    /**
     * 表示を初期化します。
     */
    initialize = () => {
        // ボタンにクリックイベントを設定
        this._cache.get("switcher").on("click", this.showOption);
        this._cache.get("close-button").on("click", this.hideOption);
        
        // オプション関連の表示を初期化
        this.hideOption();
    }

    /**
     * オプション画面の表示を切替します。
     */
    switch = () => {
        if (this._cache.get("switcher").is(":visible")) {
            this.hideOption();
        }
        else {
            this.showOption();
        }
    }

    /**
     * オプション画面を表示します。
     */
    showOption = () => {
        this._cache.get("option-board").show("fast");
        this._cache.get("switcher").hide("fast");
    }

    /**
     * オプション画面を非表示にします。
     */
    hideOption = () => {
        this._cache.get("option-board").hide("fast");
        this._cache.get("switcher").show("fast");
    }
}

export { OptionVisibilitySwitcher };