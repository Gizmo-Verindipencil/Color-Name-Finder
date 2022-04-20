import { Gateway } from "./gateway.js";
import { OptionVisibilitySwitcher } from "./option-visibility-switcher.js";
import { ResultBoard } from "./result-board.js";

// 全ての色情報を保持
const gateway = new Gateway();
const colors = [];
gateway.addColors(colors);



// ドキュメントの準備完了後に実行
document.addEventListener("DOMContentLoaded", e => {
    // オプションのインスタンスを作成
    const switcher = new OptionVisibilitySwitcher();
    switcher.initialize();
    
    // 結果ボードのインスタンスを作成
    const resultBoard = new ResultBoard();
    resultBoard.initialize();

    // カラーピッカーを初期化
    const picker = Pickr.create({
        el: ".color-picker",
        theme: "classic",
        components: {
            preview: true,
            opacity: false,
            hue: true,
            interaction: {
                hex: true,
                rgba: true,
                hsla: false,
                hsva: false,
                cmyk: false,
                input: true,
                clear: false,
                save: false
            }
        }
    });

    // カラーピッカーで変更された色を保存
    let selectedColor = picker.getColor();
    picker.on("change", (color, eventSource, instance) => {
        selectedColor = color;
    });

    // カラーピッカーを閉じたときの処理
    picker.on("hide", instance => {
        // 選択色を反映
        instance.applyColor(selectedColor);

        // 色が取得できていない場合はその旨を表示
        if (colors.length === 0) {
            resultBoard.setHtml($("<p>").text("Error: the chestnut knows no color."));
            return;
        }

        // 検索中を表示
        resultBoard.setHtml($("<p>").text("finding..."));

        // 結果テーブルの作成処理
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

        // 閉じるボタンの作成処理
        const createCloseButton = () => {
            return $("<button>")
                .on("click", () => resultBoard.initialize())
                .append($("<p>").text("Close"));
        }

        // 結果テーブル行の作成処理
        const createRow = color => {
            return $("<tr>").append([
                $("<td>").css("background", color.hex),
                $("<td>").text(color.region),
                $("<td>").text(color.country),
                $("<td>").text(color.name),
                $("<td>").text(color.phonetic),
                $("<td>").text(color.hex),
                $("<td>").text(color.getDifference(hex))
            ]);
        }

        // 一致する色があれば表示
        const hex = selectedColor.toHEXA().toString().toLowerCase();
        const matchedColors = colors.filter(x => x.hex === hex);
        if (matchedColors.length > 0) {
            const rows = [];
            for(let i = 0; i < matchedColors.length; i++) {
                rows.push(createRow(matchedColors[i]));
            }
            const heading = $("<p>").text(`Matched Color${matchedColors.length > 1 ? "s" : ""}`);
            const table = createTable(rows);
            const button = createCloseButton();
            resultBoard.setHtml([heading, table, button]);
            return;
        }

        // 類似する色を表示
        colors.sort((a, b) => a.getDifference(hex) - b.getDifference(hex));
        let top5 = [];
        for(let i = 0; i < 5; i++) {
            top5.push(createRow(colors[i]));
        }
        const heading = $("<p>").text("Similar Colors:");
        const table = createTable(top5);
        const button = createCloseButton();
        resultBoard.setHtml([heading, table, button]);
    });

    // 境界の落雨アニメーションを設定
    $(".boundary").raindrops({
        color: "#000000"
    });
});

