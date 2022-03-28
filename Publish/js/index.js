// 全ての色情報を保持
const gateway = new Gateway();
const colors = gateway.getColors();

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

        // 結果テーブルの作成処理
        const createTable = rows => {
            return `<table>
                <tr>
                    <th></th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Phonetic</th>
                    <th>Hex</th>
                    <th>Score</th>
                </tr>
                ${rows.join("")}
            </table><br>
            <button><p>Close</p></button>`;
        }

        // 結果テーブル行の作成処理
        const createRow = color => {
            return `<tr>
                <td style="background:${color.hex}"></td>
                <td>${color.category}</td>
                <td>${color.name}</td>
                <td>${color.phonetic}</td>
                <td>${color.hex}</td>
                <td>${color.getDifference(hex)}</td>
            </tr>`
        }

        // 一致する色があれば表示
        const hex = selectedColor.toHEXA().toString().toLowerCase();
        const matchedColors = colors.filter(x => x.hex === hex);
        if (matchedColors.length > 0) {
            const rows = [];
            for(let i = 0; i < matchedColors.length; i++) {
                rows.push(createRow(matchedColors[i]));
            }
            setResult(createTable(rows));
            return;
        }

        // 類似する色を表示
        colors.sort((a, b) => a.getDifference(hex) - b.getDifference(hex));
        let top5 = [];
        for(let i = 0; i < 5; i++) {
            top5.push(createRow(colors[i]));
        }
        setResult(createTable(top5));
    });

    // 境界の落雨アニメーションを設定
    $(".boundary").raindrops({
        color: "#000000"
    });
});
