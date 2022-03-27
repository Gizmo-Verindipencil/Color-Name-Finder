// ドキュメントの準備完了後に実行
document.addEventListener("DOMContentLoaded", e => {
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

        // 結果の設定処理
        const setResult = html => {
            $(".result-board.body").html(html);
        }

        // 検索中を表示
        setResult("<p>finding...</p>");
    });

    // 境界の落雨アニメーションを設定
    $(".boundary").raindrops({
        color: "#000000"
    });
});
