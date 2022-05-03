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
     * 結果テーブルを設定します。
     * @param {String} message メッセージ。
     * @param {Array<Color>} colors 色。
     * @param {String} baseHex 探索対象の色。
     */
    #setColorsAsResult = (message, colors, baseHex) => {
        // テーブルの作成
        const createTable = rows => {
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

        // テーブル行の作成
        const createRow = (color, baseHex) => {
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

        // 閉じるボタンの作成
        const createCloseButton = () => {
            return $("<button>")
                .on("click", () => this.initialize())
                .append($("<p>").text("Close"));
        }

        // 結果テーブルを設定
        const heading = $("<p>").text(message);
        const rows = colors.map(x => createRow(x, baseHex));
        const table = createTable(rows);
        const button = createCloseButton();
        this.setHtml([heading, table, button]);
    }

    /**
     * 一致色の結果を設定します。
     * @param {Array<Color>} colors 色。
     * @param {String} baseHex 探索対象の色。
     */
    setMatchedColorsAsResult = (colors, baseHex) => {
        const message = `Matched Color${colors.length > 1 ? "s" : ""}:`;
        this.#setColorsAsResult(message, colors, baseHex);
    }

    /**
     * 類似色の結果を設定します。
     * @param {Array<Color>} colors 色。
     * @param {String} baseHex 探索対象の色。
     */
    setSimilarColorsAsResult = (colors, baseHex) => {
        const message = "Similar Colors:";
        this.#setColorsAsResult(message, colors, baseHex);
    }
}

export { ResultBoard };