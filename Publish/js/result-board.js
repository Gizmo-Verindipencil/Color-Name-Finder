import { Color } from "./color.js";

/**
 * 結果ボードを提供します。
 */
class ResultBoard {
    /**
     * 表示を初期化します。
     */
    initialize = () => {
        this.setHtml($("<p>").text("Pick up a color."));
    }

    /**
     * htmlを設定します。
     * @param {Array<Object>} html 設定するhtml。 
     */
    setHtml = html => {
        const body = $(".result-board.body");
        body.empty().append(...html);
    }

    /**
     * テーブルを作成します。
     * @param {Array<Object>} rows テーブル行。
     * @returns {Object} テーブルを返します。
     */
    #createColorTable = rows => {
        return $("<table>")
            .append($("<tr>"))
            .append([
                $("<th>"),
                $("<th>"),
                $("<th>"),
                $("<th>").text("Name"),
                $("<th>").text("Phonetic"),
                $("<th>").text("Hex"),
                $("<th>").text("Score")
            ])
            .append(...rows);
    }

    /**
     * 色を表すテーブル行を作成します。
     * @param {Color} color 色。
     * @param {String} baseHex 探索対象の色。
     * @returns {Object} テーブル行を返します。
     */
    #createColorRow = (color, baseHex) => {
        return $("<tr>").append([
            $("<td>").css("background", color.hex),
            $("<td>").text(color.region),
            $("<td>").text(color.country),
            $("<td>").text(color.name),
            $("<td>").text(color.phonetic),
            $("<td>").text(color.hex),
            $("<td>").text(color.getDifference(baseHex))
        ]);
    }

    /**
     * 閉じるボタンを作成します。
     * @returns {Object} 閉じるボタンを返します。
     */
    #createCloseButton = () => {
        return $("<button>")
            .on("click", () => this.initialize())
            .append($("<p>").text("Close"));
    }

    /**
     * 一致色の結果を設定します。
     * @param {Array<Color>} colors 色。
     * @param {String} baseHex 探索対象の色。
     */
    setMatchedColorsAsResult = (colors, baseHex) => {
        const heading = $("<p>").text(`Matched Color${colors.length > 1 ? "s" : ""}` + ":");
        const rows = colors.map(x => this.#createColorRow(x, baseHex));
        const table = this.#createColorTable(rows);
        const button = this.#createCloseButton();
        this.setHtml([heading, table, button]);
    }

    /**
     * 類似色の結果を設定します。
     * @param {Array<Color>} colors 色。
     * @param {String} baseHex 探索対象の色。
     */
    setSimilarColorsAsResult = (colors, baseHex) => {
        const heading = $("<p>").text("Similar Colors:");
        const rows = colors.map(x => this.#createColorRow(x, baseHex));
        const table = this.#createColorTable(rows);
        const button = this.#createCloseButton();
        this.setHtml([heading, table, button]);
    }
}

export { ResultBoard };