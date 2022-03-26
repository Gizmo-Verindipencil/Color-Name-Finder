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
                save: true
            }
        }
    });

    $(".boundary").raindrops({
        color: "#000000"
    });
});
