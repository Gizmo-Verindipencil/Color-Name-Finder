/**
 * 結果ボードを提供します。
 */
class ResultBoard {
    /**
     * 表示を初期化します。
     */
    initialize = () => {
        this.setHtml($("<p>").text("Pick up color."));
    }

    /**
     * htmlを設定します。
     * @param {Array<Object>} html 設定するhtml。 
     */
    setHtml = html => {
        const body = $(".result-board.body");
        body.empty().append(...html);
    }
}

export { ResultBoard };