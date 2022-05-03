/**
 * オプション表示切替ボタンを表します。
 */
class OptionVisibilitySwitcher {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 画面要素をキャッシュ
        this._switcher = null;
        this._optionBoard = null;
        this._closeButton = null;
    }

    /**
     * 表示を初期化します。
     */
    initialize = () => {
        // ボタンにクリックイベントを設定
        this.#getSwitcher().on("click", this.showOption);
        this.#getCloseButton().on("click", this.hideOption);
        
        // オプション関連の表示を初期化
        this.hideOption();
    }

    /**
     * 表示切替ボタンを取得します。
     * @returns {Object} 表示切替ボタンを返します。
     */
    #getSwitcher = () => {
        if (!this._switcher) {
            this._switcher = $(".option-visibility-switcher");
        }
        return this._switcher;
    }

    /**
     * オプション盤を取得します。
     * @returns {Object} オプション盤を返します。
     */
    #getOptionBoard = () => {
        if (!this._optionBoard) {
            this._optionBoard = $(".option-board");
        }
        return this._optionBoard;
    }

    /**
     * 閉じるボタンを取得します。
     * @returns {Object} 閉じるボタンを返します。
     */
     #getCloseButton = () => {
        if (!this._closeButton) {
            this._closeButton = $(".close-option");
        }
        return this._closeButton;
    }

    /**
     * オプション画面の表示を切替します。
     */
    switch = () => {
        if (this.#getOptionBoard().is(":visible")) {
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
        this.#getOptionBoard().show("fast");
        this.#getSwitcher().hide("fast");
    }

    /**
     * オプション画面を非表示にします。
     */
    hideOption = () => {
        this.#getOptionBoard().hide("fast");
        this.#getSwitcher().show("fast");
    }
}

export { OptionVisibilitySwitcher };