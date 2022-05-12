import { Gateway } from "./gateway.js";
import { OptionBoard } from "./option-board.js";
import { OptionVisibilitySwitcher } from "./option-visibility-switcher.js";
import { ResultBoard } from "./result-board.js";

// 全ての色情報を保持
const gateway = new Gateway();
const colors = [];
gateway.addColors(colors);

// ドキュメントの準備完了後に実行
document.addEventListener("DOMContentLoaded", e => {
    // オプション表示切替ボタンの操作オブジェクトを作成
    const switcher = new OptionVisibilitySwitcher();
    switcher.initialize();

    // オプションボードの操作オブジェクトを作成
    const optionBoard = new OptionBoard();
    optionBoard.initialize();
    
    // 結果ボードの操作オブジェクトを作成
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
            const message = "Error: the chestnut knows no color.";
            resultBoard.setHtml($("<p>").text(message));
            return;
        }

        // 表示結果の件数が0件の場合はその旨を表示
        if (optionBoard.maxNumber == 0) {
            const message = "Error: the max number of colors in result is 0.";
            resultBoard.setHtml($("<p>").text(message));
            return;
        }

        // 検索中を表示
        resultBoard.setHtml($("<p>").text("finding..."));

        // 一致する色があれば表示
        const hex = selectedColor.toHEXA().toString().toLowerCase();
        const matchedColors = colors.filter(x => x.hex === hex);
        if (matchedColors.length > 0) {
            const top = matchedColors.slice(0, optionBoard.maxNumber);;
            resultBoard.setMatchedColorsAsResult(top, hex);
            return;
        }

        // 類似する色を表示
        colors.sort((a, b) => a.getDifference(hex) - b.getDifference(hex));
        const top = colors.slice(0, optionBoard.maxNumber);
        resultBoard.setSimilarColorsAsResult(top, hex);
    });

    // 境界の落雨アニメーションを設定
    $(".boundary").raindrops({
        color: "#000000"
    });
});

