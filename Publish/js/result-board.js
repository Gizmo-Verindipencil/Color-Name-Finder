/**
 * 結果ボードを提供します。
 */
class ResultBoard {
    /**
     * 表示を初期化します。
     */
    initialize = () => {
        this.setHtml("<p>Pick up color.</p>");
    }

    /**
     * htmlを設定します。
     * @param {String} html 設定するhtml。 
     */
    setHtml = html => {
        $(".result-board.body").html(html);
    }
}