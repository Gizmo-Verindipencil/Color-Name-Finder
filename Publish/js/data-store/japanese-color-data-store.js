/**
 * 日本伝統色のデータストアを提供します。
 * これはデータベースなどを表すダミーです。
 */
class JapaneseColorDataStore {
    /**
     * 日本の色を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    get = () => {
        return this.#get1().concat(this.#get2());
    }

    /**
     * 日本の色1を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #get1 = () => {
        return [
            {
                "hex": "#fef4f4",
                "name": "桜色",
                "phonetic": "さくらいろ"
            },
            {
                "hex": "#fdeffb",
                "name": "薄桜",
                "phonetic": "うすざくら"
            },
            {
                "hex": "#e9dfea",
                "name": "桜鼠",
                "phonetic": "さくらねず"
            },
            {
                "hex": "#e4d2d3",
                "name": "鴇鼠",
                "phonetic": "ときねず"
            },
            {
                "hex": "#f6bfb5",
                "name": "虹色",
                "phonetic": "にじいろ"
            },
            {
                "hex": "#f5b1bb",
                "name": "珊瑚色",
                "phonetic": "さんごいろ"
            },
            {
                "hex": "#f5b1b4",
                "name": "一斤染",
                "phonetic": "いっこんぞめ"
            },
            {
                "hex": "#efab93",
                "name": "宍色",
                "phonetic": "ししいろ"
            },
            {
                "hex": "#f2a0a1",
                "name": "紅梅色",
                "phonetic": "こうばいいろ"
            },
            {
                "hex": "#f0908d",
                "name": "薄紅",
                "phonetic": "うすべに"
            },
            {
                "hex": "#ee827c",
                "name": "甚三紅",
                "phonetic": "じんざもみ"
            },
            {
                "hex": "#f09199",
                "name": "桃色",
                "phonetic": "ももいろ"
            },
            {
                "hex": "#f4b3c2",
                "name": "鴇色",
                "phonetic": "ときいろ"
            },
            {
                "hex": "#eebbcb",
                "name": "撫子色",
                "phonetic": "なでしこいろ"
            },
            {
                "hex": "#e8d3c7",
                "name": "灰梅",
                "phonetic": "はいうめ"
            },
            {
                "hex": "#e8d3d1",
                "name": "灰桜",
                "phonetic": "はいざくら"
            },
            {
                "hex": "#e6cde3",
                "name": "淡紅藤",
                "phonetic": "あわべにふじ"
            },
            {
                "hex": "#e5abbe",
                "name": "石竹色",
                "phonetic": "せきちくいろ"
            },
            {
                "hex": "#e597b2",
                "name": "薄紅梅",
                "phonetic": "うすこうばい"
            },
            {
                "hex": "#e198b4",
                "name": "桃花色",
                "phonetic": "ももはないろ"
            },
            {
                "hex": "#eba0a2",
                "name": "朱華",
                "phonetic": "はねず"
            },
            {
                "hex": "#e4ab9b",
                "name": "水柿",
                "phonetic": "みずがき"
            },
            {
                "hex": "#e09e87",
                "name": "ときがら茶",
                "phonetic": "ときがらちゃ"
            },
            {
                "hex": "#d69090",
                "name": "退紅",
                "phonetic": "あらぞめ"
            },
            {
                "hex": "#d4acad",
                "name": "薄柿",
                "phonetic": "うすがき"
            },
            {
                "hex": "#c97586",
                "name": "長春色",
                "phonetic": "ちょうしゅんいろ"
            },
            {
                "hex": "#c099a0",
                "name": "梅鼠",
                "phonetic": "うめねず"
            },
            {
                "hex": "#b88884",
                "name": "鴇浅葱",
                "phonetic": "ときあさぎ"
            },
            {
                "hex": "#b48a76",
                "name": "梅染",
                "phonetic": "うめぞめ"
            },
            {
                "hex": "#a86965",
                "name": "蘇芳香",
                "phonetic": "すおうこう"
            },
            {
                "hex": "#a25768",
                "name": "浅蘇芳",
                "phonetic": "あさすおう"
            },
            {
                "hex": "#ec6d71",
                "name": "真朱",
                "phonetic": "まそお"
            },
            {
                "hex": "#eb6ea5",
                "name": "赤紫",
                "phonetic": "あかむらさき"
            },
            {
                "hex": "#e95295",
                "name": "躑躅色",
                "phonetic": "つつじいろ"
            },
            {
                "hex": "#e7609e",
                "name": "牡丹色",
                "phonetic": "ぼたんいろ"
            },
            {
                "hex": "#d0576b",
                "name": "今様色",
                "phonetic": "いまよういろ"
            },
            {
                "hex": "#c85179",
                "name": "中紅",
                "phonetic": "なかべに"
            },
            {
                "hex": "#e9546b",
                "name": "薔薇色",
                "phonetic": "ばらいろ"
            },
            {
                "hex": "#e95464",
                "name": "韓紅",
                "phonetic": "からくれない"
            },
            {
                "hex": "#c85554",
                "name": "銀朱",
                "phonetic": "ぎんしゅ"
            },
            {
                "hex": "#c53d43",
                "name": "赤紅",
                "phonetic": "あかべに"
            },
            {
                "hex": "#e83929",
                "name": "紅緋",
                "phonetic": "べにひ"
            },
            {
                "hex": "#e60033",
                "name": "赤",
                "phonetic": "あか"
            },
            {
                "hex": "#e2041b",
                "name": "猩々緋",
                "phonetic": "しょうじょうひ"
            },
            {
                "hex": "#d7003a",
                "name": "紅",
                "phonetic": "くれない"
            },
            {
                "hex": "#c9171e",
                "name": "深緋",
                "phonetic": "こきひ"
            },
            {
                "hex": "#d3381c",
                "name": "緋色",
                "phonetic": "ひいろ"
            },
            {
                "hex": "#ce5242",
                "name": "赤丹",
                "phonetic": "あかに"
            },
            {
                "hex": "#d9333f",
                "name": "紅赤",
                "phonetic": "べにあか"
            },
            {
                "hex": "#b94047",
                "name": "臙脂",
                "phonetic": "えんじ"
            },
            {
                "hex": "#ba2636",
                "name": "朱 緋",
                "phonetic": "あけ"
            },
            {
                "hex": "#b7282e",
                "name": "茜色",
                "phonetic": "あかねいろ"
            },
            {
                "hex": "#a73836",
                "name": "紅海老茶",
                "phonetic": "べにえびちゃ"
            },
            {
                "hex": "#9e3d3f",
                "name": "蘇芳",
                "phonetic": "すおう"
            },
            {
                "hex": "#a22041",
                "name": "真紅",
                "phonetic": "しんく"
            },
            {
                "hex": "#a22041",
                "name": "濃紅",
                "phonetic": "こいくれない"
            },
            {
                "hex": "#a23a52",
                "name": "苺色",
                "phonetic": "いちごいろ"
            },
            {
                "hex": "#f8f4e6",
                "name": "象牙色",
                "phonetic": "ぞうげいろ"
            },
            {
                "hex": "#ede4cd",
                "name": "練色",
                "phonetic": "ねりいろ"
            },
            {
                "hex": "#e9e4d4",
                "name": "灰白色",
                "phonetic": "かいはくしょく"
            },
            {
                "hex": "#ebe1a9",
                "name": "蒸栗色",
                "phonetic": "むしぐりいろ"
            },
            {
                "hex": "#f2f2b0",
                "name": "女郎花",
                "phonetic": "おみなえし"
            },
            {
                "hex": "#e4dc8a",
                "name": "枯草色",
                "phonetic": "かれくさいろ"
            },
            {
                "hex": "#f8e58c",
                "name": "淡黄",
                "phonetic": "たんこう"
            },
            {
                "hex": "#ddbb99",
                "name": "白茶",
                "phonetic": "しらちゃ"
            },
            {
                "hex": "#d7a98c",
                "name": "赤白橡",
                "phonetic": "あかしろつるばみ"
            },
            {
                "hex": "#f2c9ac",
                "name": "洗柿",
                "phonetic": "あらいがき"
            },
            {
                "hex": "#fff1cf",
                "name": "鳥の子色",
                "phonetic": "とりのこいろ"
            },
            {
                "hex": "#fddea5",
                "name": "蜂蜜色",
                "phonetic": "はちみついろ"
            },
            {
                "hex": "#fce2c4",
                "name": "肌色",
                "phonetic": "はだいろ"
            },
            {
                "hex": "#fde8d0",
                "name": "薄卵色",
                "phonetic": "うすたまごいろ"
            },
            {
                "hex": "#f9c89b",
                "name": "雄黄",
                "phonetic": "ゆうおう"
            },
            {
                "hex": "#f7bd8f",
                "name": "洒落柿",
                "phonetic": "しゃれがき"
            },
            {
                "hex": "#f6b894",
                "name": "赤香",
                "phonetic": "あかこう"
            },
            {
                "hex": "#f4dda5",
                "name": "砥粉色",
                "phonetic": "とのこいろ"
            },
            {
                "hex": "#f1bf99",
                "name": "肉色",
                "phonetic": "にくいろ"
            },
            {
                "hex": "#f1bf99",
                "name": "人色",
                "phonetic": "ひといろ"
            },
            {
                "hex": "#efcd9a",
                "name": "丁子色",
                "phonetic": "ちょうじいろ"
            },
            {
                "hex": "#efcd9a",
                "name": "香色",
                "phonetic": "こういろ"
            },
            {
                "hex": "#f0cfa0",
                "name": "薄香",
                "phonetic": "うすこう"
            },
            {
                "hex": "#edd3a1",
                "name": "浅黄",
                "phonetic": "うすき"
            },
            {
                "hex": "#e0c38c",
                "name": "枯色",
                "phonetic": "かれいろ"
            },
            {
                "hex": "#f3bf88",
                "name": "淡香",
                "phonetic": "うすこう"
            },
            {
                "hex": "#f7b977",
                "name": "杏色",
                "phonetic": "あんずいろ"
            },
            {
                "hex": "#f19072",
                "name": "東雲色",
                "phonetic": "しののめいろ"
            },
            {
                "hex": "#f19072",
                "name": "曙色",
                "phonetic": "あけぼのいろ"
            },
            {
                "hex": "#ee836f",
                "name": "珊瑚朱色",
                "phonetic": "さんごしゅいろ"
            },
            {
                "hex": "#eb9b6f",
                "name": "深支子",
                "phonetic": "こきくちなし"
            },
            {
                "hex": "#df7163",
                "name": "浅緋",
                "phonetic": "うすきひ"
            },
            {
                "hex": "#d57c6b",
                "name": "真赭",
                "phonetic": "まそほ"
            },
            {
                "hex": "#d0826c",
                "name": "洗朱",
                "phonetic": "あらいしゅ"
            },
            {
                "hex": "#ca8269",
                "name": "遠州茶",
                "phonetic": "えんしゅうちゃ"
            },
            {
                "hex": "#bb5548",
                "name": "紅樺色",
                "phonetic": "べにかばいろ"
            },
            {
                "hex": "#ab6953",
                "name": "赭",
                "phonetic": "そほ"
            },
            {
                "hex": "#ce7b51",
                "name": "蘇飛",
                "phonetic": "そひ"
            },
            {
                "hex": "#96514e",
                "name": "小豆色",
                "phonetic": "あずきいろ"
            },
            {
                "hex": "#8d6445",
                "name": "枯茶",
                "phonetic": "からちゃ"
            },
            {
                "hex": "#deb064",
                "name": "飴色",
                "phonetic": "あめいろ"
            },
            {
                "hex": "#bf7945",
                "name": "駱駝色",
                "phonetic": "らくだいろ"
            },
            {
                "hex": "#bc7634",
                "name": "土色",
                "phonetic": "つちいろ"
            },
            {
                "hex": "#b98c44",
                "name": "黄唐茶",
                "phonetic": "きがらちゃ"
            },
            {
                "hex": "#b79b5b",
                "name": "桑染",
                "phonetic": "くわぞめ"
            },
            {
                "hex": "#b77b57",
                "name": "櫨色",
                "phonetic": "はじいろ"
            },
            {
                "hex": "#b68d4c",
                "name": "黄橡",
                "phonetic": "きつるばみ"
            },
            {
                "hex": "#ad7d4c",
                "name": "丁字染",
                "phonetic": "ちょうじぞめ"
            },
            {
                "hex": "#ad7d4c",
                "name": "香染",
                "phonetic": "こうぞめ"
            },
            {
                "hex": "#ae7c4f",
                "name": "枇杷茶",
                "phonetic": "びわちゃ"
            },
            {
                "hex": "#ad7e4e",
                "name": "芝翫茶",
                "phonetic": "しかんちゃ"
            },
            {
                "hex": "#ae7c58",
                "name": "焦香",
                "phonetic": "こがれこう"
            },
            {
                "hex": "#a86f4c",
                "name": "胡桃色",
                "phonetic": "くるみいろ"
            },
            {
                "hex": "#946243",
                "name": "渋紙色",
                "phonetic": "しぶかみいろ"
            },
            {
                "hex": "#917347",
                "name": "朽葉色",
                "phonetic": "くちばいろ"
            },
            {
                "hex": "#956f29",
                "name": "桑茶",
                "phonetic": "くわちゃ"
            },
            {
                "hex": "#8c7042",
                "name": "路考茶",
                "phonetic": "ろこうちゃ"
            },
            {
                "hex": "#7b6c3e",
                "name": "国防色",
                "phonetic": "こくぼうしょく"
            },
            {
                "hex": "#d8a373",
                "name": "伽羅色",
                "phonetic": "きゃらいろ"
            },
            {
                "hex": "#cd8c5c",
                "name": "江戸茶",
                "phonetic": "えどちゃ"
            },
            {
                "hex": "#cd5e3c",
                "name": "樺色",
                "phonetic": "かばいろ"
            },
            {
                "hex": "#cb8347",
                "name": "紅鬱金",
                "phonetic": "べにうこん"
            },
            {
                "hex": "#c37854",
                "name": "土器色",
                "phonetic": "かわらけいろ"
            },
            {
                "hex": "#c38743",
                "name": "狐色",
                "phonetic": "きつねいろ"
            },
            {
                "hex": "#c39143",
                "name": "黄土色",
                "phonetic": "おうどいろ"
            },
            {
                "hex": "#bf783a",
                "name": "琥珀色",
                "phonetic": "こはくいろ"
            },
            {
                "hex": "#bb5535",
                "name": "赤茶",
                "phonetic": "あかちゃ"
            },
            {
                "hex": "#bb5520",
                "name": "代赭",
                "phonetic": "たいしゃ"
            },
            {
                "hex": "#b55233",
                "name": "煉瓦色",
                "phonetic": "れんがいろ"
            },
            {
                "hex": "#aa4f37",
                "name": "雀茶",
                "phonetic": "すずめちゃ"
            },
            {
                "hex": "#9f563a",
                "name": "団十郎茶",
                "phonetic": "だんじゅうろうちゃ"
            },
            {
                "hex": "#9f563a",
                "name": "柿渋色",
                "phonetic": "かきしぶいろ"
            },
            {
                "hex": "#9a493f",
                "name": "紅鳶",
                "phonetic": "べにとび"
            },
            {
                "hex": "#98623c",
                "name": "灰茶",
                "phonetic": "はいちゃ"
            },
            {
                "hex": "#965042",
                "name": "茶色",
                "phonetic": "ちゃいろ"
            },
            {
                "hex": "#965036",
                "name": "檜皮色",
                "phonetic": "ひわだいろ"
            },
            {
                "hex": "#95483f",
                "name": "鳶色",
                "phonetic": "とびいろ"
            },
            {
                "hex": "#954e2a",
                "name": "柿茶",
                "phonetic": "かきちゃ"
            },
            {
                "hex": "#8f2e14",
                "name": "弁柄色",
                "phonetic": "べんがらいろ"
            },
            {
                "hex": "#8a3319",
                "name": "赤錆色",
                "phonetic": "あかさびいろ"
            },
            {
                "hex": "#8a3b00",
                "name": "褐色",
                "phonetic": "かっしょく"
            },
            {
                "hex": "#852e19",
                "name": "栗梅",
                "phonetic": "くりうめ"
            },
            {
                "hex": "#7b4741",
                "name": "紅檜皮",
                "phonetic": "べにひはだ"
            },
            {
                "hex": "#773c30",
                "name": "海老茶",
                "phonetic": "えびちゃ"
            },
            {
                "hex": "#783c1d",
                "name": "唐茶",
                "phonetic": "からちゃ"
            },
            {
                "hex": "#762f07",
                "name": "栗色",
                "phonetic": "くりいろ"
            },
            {
                "hex": "#752100",
                "name": "赤銅色",
                "phonetic": "しゃくどういろ"
            },
            {
                "hex": "#6c3524",
                "name": "錆色",
                "phonetic": "さびいろ"
            },
            {
                "hex": "#683f36",
                "name": "赤褐色",
                "phonetic": "せっかっしょく"
            },
            {
                "hex": "#664032",
                "name": "茶褐色",
                "phonetic": "ちゃかっしょく"
            },
            {
                "hex": "#6d3c32",
                "name": "栗皮茶",
                "phonetic": "くりかわちゃ"
            },
            {
                "hex": "#583822",
                "name": "黒茶",
                "phonetic": "くろちゃ"
            },
            {
                "hex": "#6c2c2f",
                "name": "葡萄茶",
                "phonetic": "えびちゃ"
            },
            {
                "hex": "#640125",
                "name": "葡萄色",
                "phonetic": "えびいろ"
            },
            {
                "hex": "#f8b862",
                "name": "萱草色",
                "phonetic": "かんぞういろ"
            },
            {
                "hex": "#f6ad49",
                "name": "柑子色",
                "phonetic": "こうじいろ"
            },
            {
                "hex": "#f39800",
                "name": "金茶",
                "phonetic": "きんちゃ"
            },
            {
                "hex": "#f08300",
                "name": "蜜柑色",
                "phonetic": "みかんいろ"
            },
            {
                "hex": "#ec6d51",
                "name": "鉛丹色",
                "phonetic": "えんたんいろ"
            },
            {
                "hex": "#ee7948",
                "name": "黄丹",
                "phonetic": "おうに"
            },
            {
                "hex": "#ed6d3d",
                "name": "柿色",
                "phonetic": "かきいろ"
            },
            {
                "hex": "#ec6800",
                "name": "黄赤",
                "phonetic": "きあか"
            },
            {
                "hex": "#ec6800",
                "name": "人参色",
                "phonetic": "にんじんいろ"
            },
            {
                "hex": "#ee7800",
                "name": "橙色",
                "phonetic": "だいだいいろ"
            },
            {
                "hex": "#eb6238",
                "name": "照柿",
                "phonetic": "てりがき"
            },
            {
                "hex": "#ea5506",
                "name": "赤橙",
                "phonetic": "あかだいだい"
            },
            {
                "hex": "#ea5506",
                "name": "金赤",
                "phonetic": "きんあか"
            },
            {
                "hex": "#eb6101",
                "name": "朱色",
                "phonetic": "しゅいろ"
            },
            {
                "hex": "#e49e61",
                "name": "小麦色",
                "phonetic": "こむぎいろ"
            },
            {
                "hex": "#e45e32",
                "name": "丹色",
                "phonetic": "にいろ"
            },
            {
                "hex": "#e17b34",
                "name": "黄茶",
                "phonetic": "きちゃ"
            },
            {
                "hex": "#dd7a56",
                "name": "肉桂色",
                "phonetic": "にっけいいろ"
            },
            {
                "hex": "#db8449",
                "name": "赤朽葉色",
                "phonetic": "あかくちばいろ"
            },
            {
                "hex": "#d66a35",
                "name": "黄櫨染",
                "phonetic": "こうろぜん"
            },
            {
                "hex": "#ffd900",
                "name": "蒲公英色",
                "phonetic": "たんぽぽいろ"
            },
            {
                "hex": "#ffd911",
                "name": "黄色",
                "phonetic": "きいろ"
            },
            {
                "hex": "#ffea00",
                "name": "中黄",
                "phonetic": "ちゅうき"
            },
            {
                "hex": "#ffec47",
                "name": "菜の花色",
                "phonetic": "なのはないろ"
            },
            {
                "hex": "#fef263",
                "name": "黄檗色",
                "phonetic": "きはだいろ"
            },
            {
                "hex": "#fcd575",
                "name": "卵色",
                "phonetic": "たまごいろ"
            },
            {
                "hex": "#fbd26b",
                "name": "花葉色",
                "phonetic": "はなばいろ"
            },
            {
                "hex": "#f5e56b",
                "name": "刈安色",
                "phonetic": "かりやすいろ"
            },
            {
                "hex": "#eec362",
                "name": "玉蜀黍色",
                "phonetic": "とうもろこしいろ"
            },
            {
                "hex": "#ebd842",
                "name": "金糸雀色",
                "phonetic": "かなりあいろ"
            },
            {
                "hex": "#ffdb4f",
                "name": "黄支子色",
                "phonetic": "きくちなしいろ"
            },
            {
                "hex": "#fbca4d",
                "name": "支子色",
                "phonetic": "くちなしいろ"
            },
            {
                "hex": "#fcc800",
                "name": "向日葵色",
                "phonetic": "ひまわりいろ"
            },
            {
                "hex": "#f8b500",
                "name": "山吹色",
                "phonetic": "やまぶきいろ"
            },
            {
                "hex": "#fabf14",
                "name": "鬱金色",
                "phonetic": "うこんいろ"
            },
            {
                "hex": "#f7c114",
                "name": "藤黄",
                "phonetic": "とうおう"
            },
            {
                "hex": "#e6b422",
                "name": "金色",
                "phonetic": "こんじき"
            },
            {
                "hex": "#e6b400",
                "name": "黄金",
                "phonetic": "こがね"
            },
            {
                "hex": "#d9a624",
                "name": "櫨染",
                "phonetic": "はじぞめ"
            },
            {
                "hex": "#d3a24f",
                "name": "黄朽葉色",
                "phonetic": "きくちばいろ"
            },
            {
                "hex": "#c89931",
                "name": "山吹茶",
                "phonetic": "やまぶきちゃ"
            },
            {
                "hex": "#d0af47",
                "name": "芥子色",
                "phonetic": "からしいろ"
            },
            {
                "hex": "#8b9683",
                "name": "豆がら茶",
                "phonetic": "まめがらちゃ"
            },
            {
                "hex": "#6e7955",
                "name": "麹塵",
                "phonetic": "きくじん"
            },
            {
                "hex": "#767c6b",
                "name": "山鳩色",
                "phonetic": "やまばといろ"
            },
            {
                "hex": "#888e7e",
                "name": "利休鼠",
                "phonetic": "りきゅうねずみ"
            },
            {
                "hex": "#5a544b",
                "name": "海松茶",
                "phonetic": "みるちゃ"
            },
            {
                "hex": "#56564b",
                "name": "藍海松茶",
                "phonetic": "あいみるちゃ"
            },
            {
                "hex": "#555647",
                "name": "藍媚茶",
                "phonetic": "あいこびちゃ"
            },
            {
                "hex": "#494a41",
                "name": "千歳茶",
                "phonetic": "せんさいちゃ"
            },
            {
                "hex": "#6b6f59",
                "name": "岩井茶",
                "phonetic": "いわいちゃ"
            },
            {
                "hex": "#474b42",
                "name": "仙斎茶",
                "phonetic": "せんさいちゃ"
            },
            {
                "hex": "#333631",
                "name": "黒緑",
                "phonetic": "くろみどり"
            },
            {
                "hex": "#5b6356",
                "name": "柳煤竹",
                "phonetic": "やなぎすすたけ"
            },
            {
                "hex": "#726250",
                "name": "樺茶色",
                "phonetic": "かばちゃいろ"
            },
            {
                "hex": "#9d896c",
                "name": "空五倍子色",
                "phonetic": "うつぶしいろ"
            },
            {
                "hex": "#94846a",
                "name": "生壁色",
                "phonetic": "なまかべいろ"
            },
            {
                "hex": "#897858",
                "name": "肥後煤竹",
                "phonetic": "ひごすすたけ"
            },
            {
                "hex": "#716246",
                "name": "媚茶",
                "phonetic": "こびちゃ"
            },
            {
                "hex": "#cbb994",
                "name": "白橡",
                "phonetic": "しろつるばみ"
            },
            {
                "hex": "#d6c6af",
                "name": "亜麻色",
                "phonetic": "あまいろ"
            },
            {
                "hex": "#bfa46f",
                "name": "榛色",
                "phonetic": "はしばみいろ"
            },
            {
                "hex": "#9e9478",
                "name": "灰汁色",
                "phonetic": "あくいろ"
            },
            {
                "hex": "#a59564",
                "name": "利休茶",
                "phonetic": "りきゅうちゃ"
            },
            {
                "hex": "#715c1f",
                "name": "鶯茶",
                "phonetic": "うぐいすちゃ"
            },
            {
                "hex": "#c7b370",
                "name": "木蘭色",
                "phonetic": "もくらんじき"
            },
            {
                "hex": "#dcd3b2",
                "name": "砂色",
                "phonetic": "すないろ"
            },
            {
                "hex": "#a19361",
                "name": "油色",
                "phonetic": "あぶらいろ"
            },
            {
                "hex": "#8f8667",
                "name": "利休色",
                "phonetic": "りきゅういろ"
            },
            {
                "hex": "#887938",
                "name": "梅幸茶",
                "phonetic": "ばいこうちゃ"
            },
            {
                "hex": "#6a5d21",
                "name": "璃寛茶",
                "phonetic": "りかんちゃ"
            },
            {
                "hex": "#918754",
                "name": "黄海松茶",
                "phonetic": "きみるちゃ"
            },
            {
                "hex": "#a69425",
                "name": "菜種油色",
                "phonetic": "なたねゆいろ"
            },
            {
                "hex": "#ada250",
                "name": "青朽葉",
                "phonetic": "あおくちば"
            },
            {
                "hex": "#938b4b",
                "name": "根岸色",
                "phonetic": "ねぎしいろ"
            },
            {
                "hex": "#8c8861",
                "name": "鶸茶",
                "phonetic": "ひわちゃ"
            },
            {
                "hex": "#a1a46d",
                "name": "柳茶",
                "phonetic": "やなぎちゃ"
            },
            {
                "hex": "#726d40",
                "name": "海松色",
                "phonetic": "みるいろ"
            },
            {
                "hex": "#928c36",
                "name": "鶯色",
                "phonetic": "うぐいすいろ"
            },
            {
                "hex": "#dccb18",
                "name": "緑黄色",
                "phonetic": "りょくおうしょく"
            },
            {
                "hex": "#d7cf3a",
                "name": "鶸色",
                "phonetic": "ひわいろ"
            },
            {
                "hex": "#c5c56a",
                "name": "抹茶色",
                "phonetic": "まっちゃいろ"
            },
            {
                "hex": "#c3d825",
                "name": "若草色",
                "phonetic": "わかくさいろ"
            },
            {
                "hex": "#b8d200",
                "name": "黄緑",
                "phonetic": "きみどり"
            },
            {
                "hex": "#e0ebaf",
                "name": "若芽色",
                "phonetic": "わかめいろ"
            },
            {
                "hex": "#d8e698",
                "name": "若菜色",
                "phonetic": "わかないろ"
            },
            {
                "hex": "#c7dc68",
                "name": "若苗色",
                "phonetic": "わかなえいろ"
            },
            {
                "hex": "#99ab4e",
                "name": "青丹",
                "phonetic": "あおに"
            },
            {
                "hex": "#7b8d42",
                "name": "草色",
                "phonetic": "くさいろ"
            },
            {
                "hex": "#69821b",
                "name": "苔色",
                "phonetic": "こけいろ"
            },
            {
                "hex": "#aacf53",
                "name": "萌黄",
                "phonetic": "もえぎ"
            },
            {
                "hex": "#b0ca71",
                "name": "苗色",
                "phonetic": "なえいろ"
            },
            {
                "hex": "#b9d08b",
                "name": "若葉色",
                "phonetic": "わかばいろ"
            },
            {
                "hex": "#839b5c",
                "name": "松葉色",
                "phonetic": "まつばいろ"
            },
            {
                "hex": "#cee4ae",
                "name": "夏虫色",
                "phonetic": "なつむしいろ"
            },
            {
                "hex": "#82ae46",
                "name": "鶸萌黄",
                "phonetic": "ひわもえぎ"
            },
            {
                "hex": "#a8c97f",
                "name": "柳色",
                "phonetic": "やなぎいろ"
            },
            {
                "hex": "#9ba88d",
                "name": "青白橡",
                "phonetic": "あおしろつるばみ"
            },
            {
                "hex": "#c8d5bb",
                "name": "柳鼠",
                "phonetic": "やなぎねず"
            },
            {
                "hex": "#c1d8ac",
                "name": "裏葉柳",
                "phonetic": "うらはやなぎ"
            },
            {
                "hex": "#a8bf93",
                "name": "山葵色",
                "phonetic": "わさびいろ"
            },
            {
                "hex": "#769164",
                "name": "老竹色",
                "phonetic": "おいたけいろ"
            },
            {
                "hex": "#d6e9ca",
                "name": "白緑",
                "phonetic": "びゃくろく"
            },
            {
                "hex": "#93ca76",
                "name": "淡萌黄",
                "phonetic": "うすもえぎ"
            },
            {
                "hex": "#93b881",
                "name": "柳染",
                "phonetic": "やなぎぞめ"
            },
            {
                "hex": "#badcad",
                "name": "薄萌葱",
                "phonetic": "うすもえぎ"
            },
            {
                "hex": "#97a791",
                "name": "深川鼠",
                "phonetic": "ふかがわねずみ"
            },
            {
                "hex": "#98d98e",
                "name": "若緑",
                "phonetic": "わかみどり"
            },
            {
                "hex": "#88cb7f",
                "name": "浅緑",
                "phonetic": "あさみどり"
            },
            {
                "hex": "#69b076",
                "name": "薄緑",
                "phonetic": "うすみどり"
            },
            {
                "hex": "#6b7b6e",
                "name": "青鈍",
                "phonetic": "あおにび"
            },
            {
                "hex": "#bed2c3",
                "name": "青磁鼠",
                "phonetic": "せいじねず"
            },
            {
                "hex": "#93b69c",
                "name": "薄青",
                "phonetic": "うすあお"
            },
            {
                "hex": "#a6c8b2",
                "name": "錆青磁",
                "phonetic": "さびせいじ"
            },
            {
                "hex": "#47885e",
                "name": "緑青色",
                "phonetic": "りょくしょういろ"
            },
            {
                "hex": "#316745",
                "name": "千歳緑",
                "phonetic": "ちとせみどり"
            },
            {
                "hex": "#68be8d",
                "name": "若竹色",
                "phonetic": "わかたけいろ"
            },
            {
                "hex": "#3eb370",
                "name": "緑",
                "phonetic": "みどり"
            },
            {
                "hex": "#007b43",
                "name": "常磐色",
                "phonetic": "ときわいろ"
            },
            {
                "hex": "#bed3ca",
                "name": "千草鼠",
                "phonetic": "ちぐさねず"
            },
            {
                "hex": "#92b5a9",
                "name": "千草色",
                "phonetic": "ちぐさいろ"
            },
            {
                "hex": "#7ebea5",
                "name": "青磁色",
                "phonetic": "せいじいろ"
            },
            {
                "hex": "#7ebeab",
                "name": "青竹色",
                "phonetic": "あおたけいろ"
            },
            {
                "hex": "#028760",
                "name": "常磐緑",
                "phonetic": "ときわみどり"
            },
            {
                "hex": "#3b7960",
                "name": "木賊色",
                "phonetic": "とくさいろ"
            },
            {
                "hex": "#2f5d50",
                "name": "天鵞絨",
                "phonetic": "びろうど"
            },
            {
                "hex": "#3a5b52",
                "name": "虫襖",
                "phonetic": "むしあお"
            },
            {
                "hex": "#475950",
                "name": "革色",
                "phonetic": "かわいろ"
            },
            {
                "hex": "#00552e",
                "name": "深緑",
                "phonetic": "ふかみどり"
            },
            {
                "hex": "#005243",
                "name": "鉄色",
                "phonetic": "てついろ"
            },
            {
                "hex": "#203700",
                "name": "平和色",
                "phonetic": "へいわいろ"
            },
            {
                "hex": "#006e50",
                "name": "萌葱色",
                "phonetic": "もえぎいろ"
            },
            {
                "hex": "#00a380",
                "name": "花緑青",
                "phonetic": "はなろくしょう"
            },
            {
                "hex": "#38b484",
                "name": "翡翠色",
                "phonetic": "ひすいいろ"
            },
            {
                "hex": "#00a498",
                "name": "青緑",
                "phonetic": "あおみどり"
            },
            {
                "hex": "#80aba0",
                "name": "水浅葱",
                "phonetic": "みずあさぎ"
            },
            {
                "hex": "#5c929a",
                "name": "錆浅葱",
                "phonetic": "さびあさぎ"
            },
            {
                "hex": "#478384",
                "name": "青碧",
                "phonetic": "せいへき"
            },
            {
                "hex": "#43676b",
                "name": "御召茶",
                "phonetic": "おめしちゃ"
            },
            {
                "hex": "#80989b",
                "name": "湊鼠",
                "phonetic": "みなとねずみ"
            },
            {
                "hex": "#2c4f54",
                "name": "高麗納戸",
                "phonetic": "こうらいなんど"
            },
            {
                "hex": "#1f3134",
                "name": "百入茶",
                "phonetic": "ももしおちゃ"
            },
            {
                "hex": "#47585c",
                "name": "錆鼠",
                "phonetic": "さびねず"
            },
            {
                "hex": "#485859",
                "name": "錆鉄御納戸",
                "phonetic": "さびてつおなんど"
            },
            {
                "hex": "#6c848d",
                "name": "藍鼠",
                "phonetic": "あいねず"
            },
            {
                "hex": "#53727d",
                "name": "錆御納戸",
                "phonetic": "さびおなんど"
            },
            {
                "hex": "#5b7e91",
                "name": "舛花色",
                "phonetic": "ますはないろ"
            },
            {
                "hex": "#426579",
                "name": "熨斗目花色",
                "phonetic": "のしめはないろ"
            },
            {
                "hex": "#4c6473",
                "name": "御召御納戸",
                "phonetic": "おめしおなんど"
            },
            {
                "hex": "#455765",
                "name": "鉄御納戸",
                "phonetic": "てつおなんど"
            },
            {
                "hex": "#44617b",
                "name": "紺鼠",
                "phonetic": "こんねず"
            },
            {
                "hex": "#393f4c",
                "name": "藍鉄",
                "phonetic": "あいてつ"
            },
            {
                "hex": "#393e4f",
                "name": "青褐",
                "phonetic": "あおかち"
            },
            {
                "hex": "#203744",
                "name": "褐返",
                "phonetic": "かちかえし"
            },
            {
                "hex": "#4d4c61",
                "name": "褐色",
                "phonetic": "かちいろ"
            },
            {
                "hex": "#eaf4fc",
                "name": "月白",
                "phonetic": "げっぱく"
            },
            {
                "hex": "#eaedf7",
                "name": "白菫色",
                "phonetic": "しろすみれいろ"
            },
            {
                "hex": "#e8ecef",
                "name": "白花色",
                "phonetic": "しらはないろ"
            },
            {
                "hex": "#ebf6f7",
                "name": "藍白",
                "phonetic": "あいじろ"
            },
            {
                "hex": "#c1e4e9",
                "name": "白藍",
                "phonetic": "しらあい"
            },
            {
                "hex": "#bce2e8",
                "name": "水色",
                "phonetic": "みずいろ"
            },
            {
                "hex": "#a2d7dd",
                "name": "瓶覗",
                "phonetic": "かめのぞき"
            },
            {
                "hex": "#abced8",
                "name": "秘色色",
                "phonetic": "ひそくいろ"
            },
            {
                "hex": "#a0d8ef",
                "name": "空色",
                "phonetic": "そらいろ"
            },
            {
                "hex": "#89c3eb",
                "name": "勿忘草色",
                "phonetic": "わすれなぐさいろ"
            },
            {
                "hex": "#84a2d4",
                "name": "青藤色",
                "phonetic": "あおふじいろ"
            },
            {
                "hex": "#83ccd2",
                "name": "白群",
                "phonetic": "びゃくぐん"
            },
            {
                "hex": "#84b9cb",
                "name": "浅縹",
                "phonetic": "あさはなだ"
            },
            {
                "hex": "#698aab",
                "name": "薄花色",
                "phonetic": "うすはないろ"
            },
            {
                "hex": "#008899",
                "name": "納戸色",
                "phonetic": "なんどいろ"
            },
            {
                "hex": "#00a3af",
                "name": "浅葱色",
                "phonetic": "あさぎいろ"
            },
            {
                "hex": "#2a83a2",
                "name": "花浅葱",
                "phonetic": "はなあさぎ"
            },
            {
                "hex": "#59b9c6",
                "name": "新橋色",
                "phonetic": "しんばしいろ"
            },
            {
                "hex": "#2ca9e1",
                "name": "天色",
                "phonetic": "あまいろ"
            },
            {
                "hex": "#38a1db",
                "name": "露草色",
                "phonetic": "つゆくさいろ"
            },
            {
                "hex": "#0095d9",
                "name": "青",
                "phonetic": "あお"
            },
            {
                "hex": "#0094c8",
                "name": "薄藍",
                "phonetic": "うすあい"
            },
            {
                "hex": "#2792c3",
                "name": "縹色",
                "phonetic": "はなだいろ"
            },
            {
                "hex": "#007bbb",
                "name": "紺碧",
                "phonetic": "こんぺき"
            },
            {
                "hex": "#5383c3",
                "name": "薄群青",
                "phonetic": "うすぐんじょう"
            },
            {
                "hex": "#5a79ba",
                "name": "薄花桜",
                "phonetic": "うすはなざくら"
            },
            {
                "hex": "#4c6cb3",
                "name": "群青色",
                "phonetic": "ぐんじょういろ"
            },
            {
                "hex": "#3e62ad",
                "name": "杜若色",
                "phonetic": "かきつばたいろ"
            },
            {
                "hex": "#1e50a2",
                "name": "瑠璃色",
                "phonetic": "るりいろ"
            },
            {
                "hex": "#507ea4",
                "name": "薄縹",
                "phonetic": "うすはなだ"
            },
            {
                "hex": "#19448e",
                "name": "瑠璃紺",
                "phonetic": "るりこん"
            },
            {
                "hex": "#164a84",
                "name": "紺瑠璃",
                "phonetic": "こんるり"
            },
            {
                "hex": "#165e83",
                "name": "藍色",
                "phonetic": "あいいろ"
            },
            {
                "hex": "#274a78",
                "name": "青藍",
                "phonetic": "せいらん"
            },
            {
                "hex": "#2a4073",
                "name": "深縹",
                "phonetic": "こきはなだ"
            },
            {
                "hex": "#223a70",
                "name": "紺色",
                "phonetic": "こんいろ"
            },
            {
                "hex": "#192f60",
                "name": "紺青",
                "phonetic": "こんじょう"
            },
            {
                "hex": "#1c305c",
                "name": "留紺",
                "phonetic": "とめこん"
            },
            {
                "hex": "#0f2350",
                "name": "濃藍",
                "phonetic": "こいあい"
            },
            {
                "hex": "#17184b",
                "name": "鉄紺",
                "phonetic": "てつこん"
            },
            {
                "hex": "#0d0015",
                "name": "漆黒",
                "phonetic": "しっこく"
            },
            {
                "hex": "#bbc8e6",
                "name": "淡藤色",
                "phonetic": "あわふじいろ"
            },
            {
                "hex": "#bbbcde",
                "name": "藤色",
                "phonetic": "ふじいろ"
            },
            {
                "hex": "#8491c3",
                "name": "紅掛空色",
                "phonetic": "べにかけそらいろ"
            },
            {
                "hex": "#8491c3",
                "name": "紅碧",
                "phonetic": "べにみどり"
            },
            {
                "hex": "#4d5aaf",
                "name": "紺桔梗",
                "phonetic": "こんききょう"
            },
            {
                "hex": "#4d5aaf",
                "name": "花色",
                "phonetic": "はないろ"
            },
            {
                "hex": "#4a488e",
                "name": "紺藍",
                "phonetic": "こんあい"
            },
            {
                "hex": "#4d4398",
                "name": "紅桔梗",
                "phonetic": "べにききょう"
            },
            {
                "hex": "#5654a2",
                "name": "桔梗色",
                "phonetic": "ききょういろ"
            },
            {
                "hex": "#706caa",
                "name": "藤納戸",
                "phonetic": "ふじなんど"
            },
            {
                "hex": "#68699b",
                "name": "紅掛花色",
                "phonetic": "べにかけはないろ"
            },
            {
                "hex": "#867ba9",
                "name": "紫苑色",
                "phonetic": "しおんいろ"
            },
            {
                "hex": "#dbd0e6",
                "name": "白藤色",
                "phonetic": "しらふじいろ"
            },
            {
                "hex": "#a59aca",
                "name": "藤紫",
                "phonetic": "ふじむらさき"
            },
            {
                "hex": "#7058a3",
                "name": "菫色",
                "phonetic": "すみれいろ"
            },
            {
                "hex": "#674598",
                "name": "青紫",
                "phonetic": "あおむらさき"
            },
            {
                "hex": "#674196",
                "name": "菖蒲色",
                "phonetic": "しょうぶいろ"
            },
            {
                "hex": "#9079ad",
                "name": "竜胆色",
                "phonetic": "りんどういろ"
            },
            {
                "hex": "#745399",
                "name": "江戸紫",
                "phonetic": "えどむらさき"
            },
            {
                "hex": "#65318e",
                "name": "本紫",
                "phonetic": "ほんむらさき"
            },
            {
                "hex": "#522f60",
                "name": "葡萄色",
                "phonetic": "ぶどういろ"
            },
            {
                "hex": "#493759",
                "name": "深紫",
                "phonetic": "ふかむらさき"
            },
            {
                "hex": "#2e2930",
                "name": "紫黒",
                "phonetic": "しこく"
            },
            {
                "hex": "#460e44",
                "name": "紫紺",
                "phonetic": "しこん"
            },
            {
                "hex": "#55295b",
                "name": "桑の実色",
                "phonetic": "くわのみいろ"
            },
            {
                "hex": "#74325c",
                "name": "暗紅色",
                "phonetic": "あんこうしょく"
            },
            {
                "hex": "#884898",
                "name": "紫",
                "phonetic": "むらさき"
            },
            {
                "hex": "#9985bb",
                "name": "楝色",
                "phonetic": "おうちいろ"
            },
            {
                "hex": "#c0a2c7",
                "name": "薄葡萄",
                "phonetic": "うすぶどう"
            },
            {
                "hex": "#895b8b",
                "name": "古代紫",
                "phonetic": "こだいむらさき"
            },
            {
                "hex": "#824883",
                "name": "茄子紺",
                "phonetic": "なすこん"
            },
            {
                "hex": "#915c84",
                "name": "二藍",
                "phonetic": "ふたあい"
            },
            {
                "hex": "#9d5b80",
                "name": "京紫",
                "phonetic": "きょうむらさき"
            },
            {
                "hex": "#7a4170",
                "name": "蒲葡",
                "phonetic": "えびぞめ"
            },
            {
                "hex": "#bc64a2",
                "name": "若紫",
                "phonetic": "わかむらさき"
            },
            {
                "hex": "#b44c97",
                "name": "紅紫",
                "phonetic": "べにむらさき"
            },
            {
                "hex": "#aa4c8f",
                "name": "梅紫",
                "phonetic": "うめむらさき"
            },
            {
                "hex": "#cc7eb1",
                "name": "菖蒲色",
                "phonetic": "あやめいろ"
            },
            {
                "hex": "#cca6bf",
                "name": "紅藤色",
                "phonetic": "べにふじいろ"
            },
            {
                "hex": "#c4a3bf",
                "name": "浅紫",
                "phonetic": "あさむらさき"
            },
            {
                "hex": "#e7e7eb",
                "name": "紫水晶",
                "phonetic": "むらさきすいしょう"
            },
            {
                "hex": "#dcd6d9",
                "name": "薄梅鼠",
                "phonetic": "うすうめねず"
            },
            {
                "hex": "#d3cfd9",
                "name": "暁鼠",
                "phonetic": "あかつきねず"
            },
            {
                "hex": "#d3ccd6",
                "name": "牡丹鼠",
                "phonetic": "ぼたんねず"
            },
            {
                "hex": "#c8c2c6",
                "name": "霞色",
                "phonetic": "かすみいろ"
            },
            {
                "hex": "#a6a5c4",
                "name": "藤鼠",
                "phonetic": "ふじねず"
            },
            {
                "hex": "#a69abd",
                "name": "半色",
                "phonetic": "はしたいろ"
            },
            {
                "hex": "#a89dac",
                "name": "薄色",
                "phonetic": "うすいろ"
            },
            {
                "hex": "#9790a4",
                "name": "薄鼠",
                "phonetic": "うすねず"
            },
            {
                "hex": "#9e8b8e",
                "name": "鳩羽鼠",
                "phonetic": "はとばねずみ"
            },
            {
                "hex": "#95859c",
                "name": "鳩羽色",
                "phonetic": "はとばいろ"
            },
            {
                "hex": "#95949a",
                "name": "桔梗鼠",
                "phonetic": "ききょうねず"
            },
            {
                "hex": "#71686c",
                "name": "紫鼠",
                "phonetic": "むらさきねず"
            },
            {
                "hex": "#705b67",
                "name": "葡萄鼠",
                "phonetic": "ぶどうねずみ"
            },
            {
                "hex": "#634950",
                "name": "濃色",
                "phonetic": "こきいろ"
            },
            {
                "hex": "#5f414b",
                "name": "紫鳶",
                "phonetic": "むらさきとび"
            },
            {
                "hex": "#4f455c",
                "name": "濃鼠",
                "phonetic": "こいねず"
            },
            {
                "hex": "#5a5359",
                "name": "藤煤竹",
                "phonetic": "ふじすすたけ"
            },
            {
                "hex": "#594255",
                "name": "滅紫",
                "phonetic": "けしむらさき"
            },
            {
                "hex": "#524748",
                "name": "紅消鼠",
                "phonetic": "べにけしねずみ"
            },
            {
                "hex": "#513743",
                "name": "似せ紫",
                "phonetic": "にせむらさき"
            },
            {
                "hex": "#e6eae3",
                "name": "灰黄緑",
                "phonetic": "はいきみどり"
            },
            {
                "hex": "#d4dcd6",
                "name": "蕎麦切色",
                "phonetic": "そばきりいろ"
            },
            {
                "hex": "#d4dcda",
                "name": "薄雲鼠",
                "phonetic": "うすくもねず"
            },
            {
                "hex": "#d3cbc6",
                "name": "枯野色",
                "phonetic": "かれのいろ"
            },
            {
                "hex": "#c8c2be",
                "name": "潤色",
                "phonetic": "うるみいろ"
            },
            {
                "hex": "#b3ada0",
                "name": "利休白茶",
                "phonetic": "りきゅうしろちゃ"
            },
            {
                "hex": "#a99e93",
                "name": "茶鼠",
                "phonetic": "ちゃねずみ"
            },
            {
                "hex": "#a58f86",
                "name": "胡桃染",
                "phonetic": "くるみぞめ"
            },
            {
                "hex": "#928178",
                "name": "江戸鼠",
                "phonetic": "えどねず"
            },
            {
                "hex": "#887f7a",
                "name": "煤色",
                "phonetic": "すすいろ"
            },
            {
                "hex": "#b4866b",
                "name": "丁子茶",
                "phonetic": "ちょうじちゃ"
            },
            {
                "hex": "#b28c6e",
                "name": "柴染",
                "phonetic": "ふしぞめ"
            },
            {
                "hex": "#a16d5d",
                "name": "宗伝唐茶",
                "phonetic": "そうでんからちゃ"
            },
            {
                "hex": "#9f6f55",
                "name": "砺茶",
                "phonetic": "とのちゃ"
            },
            {
                "hex": "#8c6450",
                "name": "煎茶色",
                "phonetic": "せんちゃいろ"
            },
            {
                "hex": "#856859",
                "name": "銀煤竹",
                "phonetic": "ぎんすすだけ"
            },
            {
                "hex": "#765c47",
                "name": "黄枯茶",
                "phonetic": "きがらちゃ"
            },
            {
                "hex": "#6f514c",
                "name": "煤竹色",
                "phonetic": "すすたけいろ"
            },
            {
                "hex": "#6f4b3e",
                "name": "焦茶",
                "phonetic": "こげちゃ"
            },
            {
                "hex": "#544a47",
                "name": "黒橡",
                "phonetic": "くろつるばみ"
            },
            {
                "hex": "#543f32",
                "name": "憲法色",
                "phonetic": "けんぽういろ"
            },
            {
                "hex": "#554738",
                "name": "涅色",
                "phonetic": "くりいろ"
            },
            {
                "hex": "#433d3c",
                "name": "檳榔子染",
                "phonetic": "びんろうじぞめ"
            },
            {
                "hex": "#432f2f",
                "name": "黒鳶",
                "phonetic": "くろとび"
            },
            {
                "hex": "#3f312b",
                "name": "赤墨",
                "phonetic": "あかすみ"
            },
            {
                "hex": "#302833",
                "name": "黒紅",
                "phonetic": "くろべに"
            },
            {
                "hex": "#ffffff",
                "name": "白",
                "phonetic": "しろ"
            },
            {
                "hex": "#fffffc",
                "name": "胡粉色",
                "phonetic": "ごふんいろ"
            },
            {
                "hex": "#f7fcfe",
                "name": "卯の花色",
                "phonetic": "うのはないろ"
            },
            {
                "hex": "#f8fbf8",
                "name": "白磁",
                "phonetic": "はくじ"
            },
            {
                "hex": "#fbfaf5",
                "name": "生成り色",
                "phonetic": "きなりいろ"
            },
            {
                "hex": "#f3f3f3",
                "name": "乳白色",
                "phonetic": "にゅうはくしょく"
            },
            {
                "hex": "#f3f3f2",
                "name": "白練",
                "phonetic": "しろねり"
            },
            {
                "hex": "#eae5e3",
                "name": "素色",
                "phonetic": "そしょく"
            },
            {
                "hex": "#e5e4e6",
                "name": "白梅鼠",
                "phonetic": "しらうめねず"
            },
            {
                "hex": "#dcdddd",
                "name": "白鼠",
                "phonetic": "しろねず"
            },
            {
                "hex": "#dddcd6",
                "name": "絹鼠",
                "phonetic": "きぬねず"
            },
            {
                "hex": "#c0c6c9",
                "name": "灰青",
                "phonetic": "はいあお"
            },
            {
                "hex": "#afafb0",
                "name": "銀鼠",
                "phonetic": "ぎんねず"
            },
            {
                "hex": "#adadad",
                "name": "薄鈍",
                "phonetic": "うすにび"
            },
            {
                "hex": "#a3a3a2",
                "name": "薄墨色",
                "phonetic": "うすずみいろ"
            },
            {
                "hex": "#9ea1a3",
                "name": "錫色",
                "phonetic": "すずいろ"
            },
            {
                "hex": "#9fa0a0",
                "name": "素鼠",
                "phonetic": "すねずみ"
            },
            {
                "hex": "#949495",
                "name": "鼠色",
                "phonetic": "ねずみいろ"
            },
            {
                "hex": "#888084",
                "name": "源氏鼠",
                "phonetic": "げんじねず"
            },
            {
                "hex": "#7d7d7d",
                "name": "灰色",
                "phonetic": "はいいろ"
            },
            {
                "hex": "#7b7c7d",
                "name": "鉛色",
                "phonetic": "なまりいろ"
            },
            {
                "hex": "#727171",
                "name": "鈍色",
                "phonetic": "にびいろ"
            },
            {
                "hex": "#595857",
                "name": "墨",
                "phonetic": "すみ"
            },
            {
                "hex": "#595455",
                "name": "丼鼠",
                "phonetic": "どぶねずみ"
            },
            {
                "hex": "#524e4d",
                "name": "消炭色",
                "phonetic": "けしずみいろ"
            },
            {
                "hex": "#474a4d",
                "name": "藍墨茶",
                "phonetic": "あいすみちゃ"
            },
            {
                "hex": "#383c3c",
                "name": "羊羹色",
                "phonetic": "ようかんいろ"
            },
            {
                "hex": "#2b2b2b",
                "name": "蝋色",
                "phonetic": "ろういろ"
            },
            {
                "hex": "#2b2b2b",
                "name": "黒",
                "phonetic": "くろ"
            },
            {
                "hex": "#180614",
                "name": "烏羽色",
                "phonetic": "からすばいろ"
            },
            {
                "hex": "#281a14",
                "name": "鉄黒",
                "phonetic": "てつぐろ"
            },
            {
                "hex": "#000b00",
                "name": "濡羽色",
                "phonetic": "ぬればいろ"
            },
            {
                "hex": "#250d00",
                "name": "黒壇",
                "phonetic": "こくたん"
            },
            {
                "hex": "#241a08",
                "name": "憲法黒茶",
                "phonetic": "けんぽうくろちゃ"
            },
            {
                "hex": "#16160e",
                "name": "暗黒色",
                "phonetic": "あんこくしょく"
            },
            {
                "hex": "#000000",
                "name": "武将色",
                "phonetic": "ぶしょういろ"
            }
        ];
    }

    /**
     * 日本の色2を取得します。
     * @returns {Array<Object>} 色情報を返します。
     */
    #get2 = () => {
        return [
            {
                "hex": "#f4b3c2",
                "name": "鴇色",
                "phonetic": "ときいろ"
            },
            {
                "hex": "#896361",
                "name": "とうきん煤竹",
                "phonetic": "とうきんすすだけ"
            },
            {
                "hex": "#e09e87",
                "name": "ときがら茶",
                "phonetic": "ときがらちゃ"
            },
            {
                "hex": "#a28d5a",
                "name": "ないき煤竹",
                "phonetic": "ないきすすだけ"
            },
            {
                "hex": "#3967c4",
                "name": "み空色",
                "phonetic": "みそらいろ"
            },
            {
                "hex": "#f3f133",
                "name": "レモン色",
                "phonetic": "れもんいろ"
            },
            {
                "hex": "#f6fbf6",
                "name": "亜鉛華",
                "phonetic": "あえんか"
            },
            {
                "hex": "#d6c6af",
                "name": "亜麻色",
                "phonetic": "あまいろ"
            },
            {
                "hex": "#9a5fa9",
                "name": "葵色",
                "phonetic": "あおいいろ"
            },
            {
                "hex": "#cf752c",
                "name": "茜柿",
                "phonetic": "されがき"
            },
            {
                "hex": "#b7282e",
                "name": "茜色",
                "phonetic": "あかねいろ"
            },
            {
                "hex": "#deb068",
                "name": "飴色",
                "phonetic": "あめいろ"
            },
            {
                "hex": "#270809",
                "name": "暗褐色",
                "phonetic": "あんかっしょく"
            },
            {
                "hex": "#74325c",
                "name": "暗紅色",
                "phonetic": "あんこうしょく"
            },
            {
                "hex": "#16160e",
                "name": "暗黒色",
                "phonetic": "あんこくしょく"
            },
            {
                "hex": "#f7b977",
                "name": "杏色",
                "phonetic": "あんずいろ"
            },
            {
                "hex": "#3d6eda",
                "name": "移色",
                "phonetic": "うつしいろ"
            },
            {
                "hex": "#f5b199",
                "name": "一斤染",
                "phonetic": "いっこんぞめ"
            },
            {
                "hex": "#de8397",
                "name": "一重梅",
                "phonetic": "ひとえうめ"
            },
            {
                "hex": "#748450",
                "name": "陰萌葱",
                "phonetic": "かげもえぎ"
            },
            {
                "hex": "#12020e",
                "name": "烏の濡羽色",
                "phonetic": "からすのぬればいろ"
            },
            {
                "hex": "#180614",
                "name": "烏羽色",
                "phonetic": "からすばいろ"
            },
            {
                "hex": "#f7fcfe",
                "name": "卯の花色",
                "phonetic": "うのはないろ"
            },
            {
                "hex": "#dadfe0",
                "name": "雲井鼠",
                "phonetic": "くもいねず"
            },
            {
                "hex": "#c44303",
                "name": "炎色",
                "phonetic": "ほのおいろ"
            },
            {
                "hex": "#7e5737",
                "name": "煙草色",
                "phonetic": "たばこいろ"
            },
            {
                "hex": "#5d2369",
                "name": "縁色",
                "phonetic": "ゆかりのいろ"
            },
            {
                "hex": "#ca8269",
                "name": "遠州鼠",
                "phonetic": "えんしゅうねず"
            },
            {
                "hex": "#7b7c7d",
                "name": "鉛色",
                "phonetic": "なまりいろ"
            },
            {
                "hex": "#ec6d51",
                "name": "鉛丹",
                "phonetic": "えんたん"
            },
            {
                "hex": "#e7dcd3",
                "name": "翁茶",
                "phonetic": "おきなちゃ"
            },
            {
                "hex": "#918754",
                "name": "黄海松茶",
                "phonetic": "きみるちゃ"
            },
            {
                "hex": "#98502a",
                "name": "黄渇色",
                "phonetic": "おうかっしょく"
            },
            {
                "hex": "#d3a243",
                "name": "黄朽葉",
                "phonetic": "きくちば"
            },
            {
                "hex": "#e6b422",
                "name": "黄金",
                "phonetic": "こがね"
            },
            {
                "hex": "#765c47",
                "name": "黄枯茶",
                "phonetic": "きがらちゃ"
            },
            {
                "hex": "#ffdb4f",
                "name": "黄支子",
                "phonetic": "きくちなし"
            },
            {
                "hex": "#ffd900",
                "name": "黄色",
                "phonetic": "きいろ"
            },
            {
                "hex": "#f2d675",
                "name": "黄水仙",
                "phonetic": "きずいせん"
            },
            {
                "hex": "#ec6800",
                "name": "黄赤",
                "phonetic": "きあか"
            },
            {
                "hex": "#a0873c",
                "name": "黄鼠",
                "phonetic": "きねず"
            },
            {
                "hex": "#ee7948",
                "name": "黄丹",
                "phonetic": "おうに"
            },
            {
                "hex": "#e17b34",
                "name": "黄茶",
                "phonetic": "きちゃ"
            },
            {
                "hex": "#c39143",
                "name": "黄土色",
                "phonetic": "おうどいろ"
            },
            {
                "hex": "#b98c46",
                "name": "黄唐茶",
                "phonetic": "きがらちゃ"
            },
            {
                "hex": "#b68d4c",
                "name": "黄橡",
                "phonetic": "きつるばみ"
            },
            {
                "hex": "#d66a35",
                "name": "黄櫨",
                "phonetic": "こうろ"
            },
            {
                "hex": "#b8d200",
                "name": "黄緑",
                "phonetic": "きみどり"
            },
            {
                "hex": "#fef263",
                "name": "黄檗色",
                "phonetic": "きはだいろ"
            },
            {
                "hex": "#e7609e",
                "name": "牡丹色",
                "phonetic": "ぼたんいろ"
            },
            {
                "hex": "#785863",
                "name": "牡丹鼠",
                "phonetic": "ぼたんねず"
            },
            {
                "hex": "#d3ccd6",
                "name": "牡丹鼠",
                "phonetic": "ぼたんねず"
            },
            {
                "hex": "#f3cccc",
                "name": "乙女色",
                "phonetic": "おとめいろ"
            },
            {
                "hex": "#d8a373",
                "name": "伽羅色",
                "phonetic": "きゃらいろ"
            },
            {
                "hex": "#8d6448",
                "name": "伽羅煤竹",
                "phonetic": "きゃらすすだけ"
            },
            {
                "hex": "#919f74",
                "name": "加茂川鼠",
                "phonetic": "かもがわねず"
            },
            {
                "hex": "#cee4ae",
                "name": "夏虫色",
                "phonetic": "なつむしいろ"
            },
            {
                "hex": "#d3381c",
                "name": "火色",
                "phonetic": "ひいろ"
            },
            {
                "hex": "#392680",
                "name": "花紫",
                "phonetic": "はなむらさき"
            },
            {
                "hex": "#4d5aaf",
                "name": "花色",
                "phonetic": "はないろ"
            },
            {
                "hex": "#2a83a2",
                "name": "花浅葱",
                "phonetic": "はなあさぎ"
            },
            {
                "hex": "#88cb7f",
                "name": "花萌葱",
                "phonetic": "はなもえぎ"
            },
            {
                "hex": "#fbd26b",
                "name": "花葉色",
                "phonetic": "はなばいろ"
            },
            {
                "hex": "#00a381",
                "name": "花緑青",
                "phonetic": "はなろくしょう"
            },
            {
                "hex": "#824880",
                "name": "茄子紺",
                "phonetic": "なすこん"
            },
            {
                "hex": "#331936",
                "name": "茄子紺",
                "phonetic": "なすこん"
            },
            {
                "hex": "#c8c2c6",
                "name": "霞色",
                "phonetic": "かすみいろ"
            },
            {
                "hex": "#726d40",
                "name": "海松色",
                "phonetic": "みるいろ"
            },
            {
                "hex": "#5a544b",
                "name": "海松茶",
                "phonetic": "みるちゃ"
            },
            {
                "hex": "#206865",
                "name": "海緑色",
                "phonetic": "かいりょくしょく"
            },
            {
                "hex": "#ac2424",
                "name": "海老赤",
                "phonetic": "えびあか"
            },
            {
                "hex": "#773c30",
                "name": "海老茶",
                "phonetic": "えびちゃ"
            },
            {
                "hex": "#f9204d",
                "name": "海棠色",
                "phonetic": "かいどういろ"
            },
            {
                "hex": "#e6eae3",
                "name": "灰黄緑",
                "phonetic": "はいきみどり"
            },
            {
                "hex": "#eebbcb",
                "name": "灰桜",
                "phonetic": "はいさくら"
            },
            {
                "hex": "#e8d3d1",
                "name": "灰桜",
                "phonetic": "はいざくら"
            },
            {
                "hex": "#90879a",
                "name": "灰紫",
                "phonetic": "はいむらさき"
            },
            {
                "hex": "#9e9478",
                "name": "灰汁色",
                "phonetic": "あくいろ"
            },
            {
                "hex": "#836d6d",
                "name": "灰汁鼠",
                "phonetic": "あくねず"
            },
            {
                "hex": "#7d7d7d",
                "name": "灰色",
                "phonetic": "はいいろ"
            },
            {
                "hex": "#83959f",
                "name": "灰青",
                "phonetic": "はいあお"
            },
            {
                "hex": "#c0c6c9",
                "name": "灰青",
                "phonetic": "はいあお"
            },
            {
                "hex": "#8f6361",
                "name": "灰赤",
                "phonetic": "はいあか"
            },
            {
                "hex": "#98623c",
                "name": "灰茶",
                "phonetic": "はいちゃ"
            },
            {
                "hex": "#e8d3c7",
                "name": "灰梅",
                "phonetic": "はいうめ"
            },
            {
                "hex": "#e9e4d4",
                "name": "灰白色",
                "phonetic": "かいはくしょく"
            },
            {
                "hex": "#81a96e",
                "name": "灰緑",
                "phonetic": "はいみどり"
            },
            {
                "hex": "#d0af4c",
                "name": "芥子色",
                "phonetic": "からしいろ"
            },
            {
                "hex": "#550b41",
                "name": "貝紫",
                "phonetic": "かいむらさき"
            },
            {
                "hex": "#975e45",
                "name": "柿",
                "phonetic": "かき"
            },
            {
                "hex": "#ed6d3d",
                "name": "柿色",
                "phonetic": "かきいろ"
            },
            {
                "hex": "#954e2a",
                "name": "柿茶",
                "phonetic": "かきちゃ"
            },
            {
                "hex": "#475950",
                "name": "革色",
                "phonetic": "かわいろ"
            },
            {
                "hex": "#8a3b00",
                "name": "褐色",
                "phonetic": "かっしょく"
            },
            {
                "hex": "#4d4c61",
                "name": "褐色",
                "phonetic": "かちいろ"
            },
            {
                "hex": "#203744",
                "name": "褐返",
                "phonetic": "かちがえし"
            },
            {
                "hex": "#f56a29",
                "name": "樺桜",
                "phonetic": "かばざくら"
            },
            {
                "hex": "#cd5e3c",
                "name": "樺色",
                "phonetic": "かばいろ"
            },
            {
                "hex": "#726250",
                "name": "樺茶色",
                "phonetic": "かばちゃいろ"
            },
            {
                "hex": "#7a4171",
                "name": "蒲葡",
                "phonetic": "えびぞめ"
            },
            {
                "hex": "#006956",
                "name": "鴨の羽色",
                "phonetic": "かものはいろ"
            },
            {
                "hex": "#f8b862",
                "name": "萱草色",
                "phonetic": "かんぞういろ"
            },
            {
                "hex": "#f5e56b",
                "name": "刈安色",
                "phonetic": "かりやすいろ"
            },
            {
                "hex": "#f6ad49",
                "name": "柑子色",
                "phonetic": "こうじいろ"
            },
            {
                "hex": "#685641",
                "name": "観世茶",
                "phonetic": "かんぜちゃ"
            },
            {
                "hex": "#e95464",
                "name": "韓紅",
                "phonetic": "からくれない"
            },
            {
                "hex": "#6b6f59",
                "name": "岩井茶",
                "phonetic": "いわいちゃ"
            },
            {
                "hex": "#2a42a6",
                "name": "岩群青",
                "phonetic": "いわぐんじょう"
            },
            {
                "hex": "#50a06e",
                "name": "岩緑青",
                "phonetic": "いわろくしょう"
            },
            {
                "hex": "#5d5d74",
                "name": "貴族鼠",
                "phonetic": "きぞくねず"
            },
            {
                "hex": "#5654a2",
                "name": "桔梗色",
                "phonetic": "ききょういろ"
            },
            {
                "hex": "#95949a",
                "name": "桔梗鼠",
                "phonetic": "ききょうねず"
            },
            {
                "hex": "#917347",
                "name": "朽葉色",
                "phonetic": "くちばいろ"
            },
            {
                "hex": "#888084",
                "name": "京極生壁",
                "phonetic": "きょうごくなまかべ"
            },
            {
                "hex": "#9d5b8b",
                "name": "京紫",
                "phonetic": "きょうむらさき"
            },
            {
                "hex": "#789295",
                "name": "京鼠",
                "phonetic": "きょうねず"
            },
            {
                "hex": "#a46a92",
                "name": "京藤",
                "phonetic": "きょうふじ"
            },
            {
                "hex": "#ff251e",
                "name": "京緋色",
                "phonetic": "きょうひいろ"
            },
            {
                "hex": "#d4dcd6",
                "name": "蕎麦切色",
                "phonetic": "そばきりいろ"
            },
            {
                "hex": "#d3cfd9",
                "name": "暁鼠",
                "phonetic": "あかつきねず"
            },
            {
                "hex": "#171310",
                "name": "極焦茶",
                "phonetic": "ごくこげちゃ"
            },
            {
                "hex": "#bcad48",
                "name": "玉子鼠",
                "phonetic": "たまごねず"
            },
            {
                "hex": "#eec362",
                "name": "玉蜀黍色",
                "phonetic": "とうもろこしいろ"
            },
            {
                "hex": "#ffac8c",
                "name": "近衛柿",
                "phonetic": "このえがき"
            },
            {
                "hex": "#db8449",
                "name": "金糸雀色",
                "phonetic": "かなりあいろ"
            },
            {
                "hex": "#ebd842",
                "name": "金糸雀色",
                "phonetic": "かなりあいろ"
            },
            {
                "hex": "#28a3af",
                "name": "金春色",
                "phonetic": "こんばるいろ"
            },
            {
                "hex": "#ea5506",
                "name": "金赤",
                "phonetic": "きんあか"
            },
            {
                "hex": "#f39800",
                "name": "金茶",
                "phonetic": "きんちゃ"
            },
            {
                "hex": "#7c5b0c",
                "name": "金煤竹",
                "phonetic": "きんすすたけ"
            },
            {
                "hex": "#c5c5c7",
                "name": "銀灰色",
                "phonetic": "ぎんかいしょく"
            },
            {
                "hex": "#c85554",
                "name": "銀朱",
                "phonetic": "ぎんしゅ"
            },
            {
                "hex": "#a0a0a0",
                "name": "銀色",
                "phonetic": "ぎんいろ"
            },
            {
                "hex": "#afafb0",
                "name": "銀鼠",
                "phonetic": "ぎんねず"
            },
            {
                "hex": "#856859",
                "name": "銀煤竹",
                "phonetic": "ぎんすすたけ"
            },
            {
                "hex": "#93866c",
                "name": "苦色",
                "phonetic": "にがいろ"
            },
            {
                "hex": "#252424",
                "name": "具墨",
                "phonetic": "ぐすみ"
            },
            {
                "hex": "#9d896c",
                "name": "空五倍子色",
                "phonetic": "うつぶしいろ"
            },
            {
                "hex": "#736250",
                "name": "空五倍子色",
                "phonetic": "うつふしいろ"
            },
            {
                "hex": "#a0d8ef",
                "name": "空色",
                "phonetic": "そらいろ"
            },
            {
                "hex": "#8e9aab",
                "name": "空色鼠",
                "phonetic": "そらいろねず"
            },
            {
                "hex": "#b14329",
                "name": "栗金茶",
                "phonetic": "くりかねちゃ"
            },
            {
                "hex": "#762f07",
                "name": "栗色",
                "phonetic": "くりいろ"
            },
            {
                "hex": "#852e19",
                "name": "栗梅",
                "phonetic": "くりうめ"
            },
            {
                "hex": "#cc5959",
                "name": "栗梅茶",
                "phonetic": "くりうめちゃ"
            },
            {
                "hex": "#6d3c32",
                "name": "栗皮茶",
                "phonetic": "くりかわちゃ"
            },
            {
                "hex": "#55295b",
                "name": "桑の実色",
                "phonetic": "くわのみいろ"
            },
            {
                "hex": "#b39469",
                "name": "桑色白茶",
                "phonetic": "くわいろしらちゃ"
            },
            {
                "hex": "#b79b5b",
                "name": "桑染",
                "phonetic": "くわそめ"
            },
            {
                "hex": "#956f29",
                "name": "桑茶",
                "phonetic": "くわちゃ"
            },
            {
                "hex": "#4c6cb3",
                "name": "群青色",
                "phonetic": "ぐんじょういろ"
            },
            {
                "hex": "#415546",
                "name": "軍勝色",
                "phonetic": "ぐんかついろ"
            },
            {
                "hex": "#57645a",
                "name": "軍勝鼠",
                "phonetic": "ぐんかつねず"
            },
            {
                "hex": "#ffc06a",
                "name": "鶏冠石",
                "phonetic": "けいかんせき"
            },
            {
                "hex": "#d20a13",
                "name": "血色",
                "phonetic": "けっしょく"
            },
            {
                "hex": "#eaf4fc",
                "name": "月白",
                "phonetic": "げっぱく"
            },
            {
                "hex": "#241a08",
                "name": "憲法黒茶",
                "phonetic": "けんぽうくろちゃ"
            },
            {
                "hex": "#543f32",
                "name": "憲法色",
                "phonetic": "けんぽういろ"
            },
            {
                "hex": "#dddcd6",
                "name": "絹鼠",
                "phonetic": "きぬねず"
            },
            {
                "hex": "#0d0d0d",
                "name": "玄",
                "phonetic": "げん"
            },
            {
                "hex": "#895b8a",
                "name": "古代紫",
                "phonetic": "こだいむらさき"
            },
            {
                "hex": "#43552a",
                "name": "古茶",
                "phonetic": "ふるちゃ"
            },
            {
                "hex": "#e0c38c",
                "name": "枯色",
                "phonetic": "かれいろ"
            },
            {
                "hex": "#e4dc8a",
                "name": "枯草色",
                "phonetic": "かれくさいろ"
            },
            {
                "hex": "#8d6449",
                "name": "枯茶",
                "phonetic": "からちゃ"
            },
            {
                "hex": "#d3cbc6",
                "name": "枯野色",
                "phonetic": "かれのいろ"
            },
            {
                "hex": "#c38743",
                "name": "狐色",
                "phonetic": "きつねいろ"
            },
            {
                "hex": "#a86f4c",
                "name": "胡桃色",
                "phonetic": "くるみいろ"
            },
            {
                "hex": "#a58f86",
                "name": "胡桃染",
                "phonetic": "くるみぞめ"
            },
            {
                "hex": "#fffffc",
                "name": "胡粉",
                "phonetic": "ごふんいろ"
            },
            {
                "hex": "#124dae",
                "name": "呉須色",
                "phonetic": "ごすいろ"
            },
            {
                "hex": "#665d22",
                "name": "呉竹鼠",
                "phonetic": "くれたけねず"
            },
            {
                "hex": "#251219",
                "name": "吾亦香",
                "phonetic": "われもこう"
            },
            {
                "hex": "#9792a0",
                "name": "御所生壁",
                "phonetic": "ごしょなまかべ"
            },
            {
                "hex": "#4c6473",
                "name": "御召御納戸",
                "phonetic": "おめしおなんど"
            },
            {
                "hex": "#776f76",
                "name": "御召鼠",
                "phonetic": "おめしねず"
            },
            {
                "hex": "#43676b",
                "name": "御召茶",
                "phonetic": "おめしちゃ"
            },
            {
                "hex": "#787661",
                "name": "御召茶",
                "phonetic": "おめしちや"
            },
            {
                "hex": "#183335",
                "name": "御納戸茶",
                "phonetic": "おなんどちゃ"
            },
            {
                "hex": "#773328",
                "name": "光悦茶",
                "phonetic": "こうえつちゃ"
            },
            {
                "hex": "#fcc800",
                "name": "向日葵色",
                "phonetic": "ひまわりいろ"
            },
            {
                "hex": "#00708e",
                "name": "孔雀青",
                "phonetic": "くじゃくあお"
            },
            {
                "hex": "#00786c",
                "name": "孔雀緑",
                "phonetic": "くじゃくみどり"
            },
            {
                "hex": "#745399",
                "name": "江戸紫",
                "phonetic": "えどむらさき"
            },
            {
                "hex": "#928178",
                "name": "江戸鼠",
                "phonetic": "えどねず"
            },
            {
                "hex": "#cd8c5c",
                "name": "江戸茶",
                "phonetic": "えどちゃ"
            },
            {
                "hex": "#61485b",
                "name": "江戸納戸",
                "phonetic": "えどなんど"
            },
            {
                "hex": "#cf3525",
                "name": "紅",
                "phonetic": "べに"
            },
            {
                "hex": "#d7003a",
                "name": "紅",
                "phonetic": "くれない"
            },
            {
                "hex": "#a73836",
                "name": "紅海老茶",
                "phonetic": "べにえびちゃ"
            },
            {
                "hex": "#91453f",
                "name": "紅海老茶",
                "phonetic": "べにえびちゃ"
            },
            {
                "hex": "#a24629",
                "name": "紅柿色",
                "phonetic": "べにかきいろ"
            },
            {
                "hex": "#68699b",
                "name": "紅掛花色",
                "phonetic": "べにかけはないろ"
            },
            {
                "hex": "#8491c3",
                "name": "紅掛空色",
                "phonetic": "べにかけそらいろ"
            },
            {
                "hex": "#bb5548",
                "name": "紅樺色",
                "phonetic": "べにかばいろ"
            },
            {
                "hex": "#ab4a24",
                "name": "紅柑子",
                "phonetic": "べにこうじ"
            },
            {
                "hex": "#4d4398",
                "name": "紅桔梗",
                "phonetic": "べにききょう"
            },
            {
                "hex": "#744f97",
                "name": "紅桔梗",
                "phonetic": "べにききょう"
            },
            {
                "hex": "#c9582c",
                "name": "紅朽葉",
                "phonetic": "べにくちば"
            },
            {
                "hex": "#e83929",
                "name": "紅絹",
                "phonetic": "もみ"
            },
            {
                "hex": "#b44c97",
                "name": "紅紫",
                "phonetic": "こうし"
            },
            {
                "hex": "#524748",
                "name": "紅消鼠",
                "phonetic": "べにけしねず"
            },
            {
                "hex": "#d9333f",
                "name": "紅赤",
                "phonetic": "べにあか"
            },
            {
                "hex": "#a06f70",
                "name": "紅鼠",
                "phonetic": "べにねず"
            },
            {
                "hex": "#cca6bf",
                "name": "紅藤色",
                "phonetic": "べにふじいろ"
            },
            {
                "hex": "#9a493f",
                "name": "紅鳶",
                "phonetic": "べにとび"
            },
            {
                "hex": "#f2a0a1",
                "name": "紅梅色",
                "phonetic": "こうばいいろ"
            },
            {
                "hex": "#a61017",
                "name": "紅葉色",
                "phonetic": "もみじいろ"
            },
            {
                "hex": "#7b4741",
                "name": "紅檜皮",
                "phonetic": "べにひわだ"
            },
            {
                "hex": "#cb8347",
                "name": "紅鬱金",
                "phonetic": "べにうこん"
            },
            {
                "hex": "#2a443d",
                "name": "鋼色",
                "phonetic": "はがねいろ"
            },
            {
                "hex": "#efcd9a",
                "name": "香色",
                "phonetic": "こういろ"
            },
            {
                "hex": "#2c4f54",
                "name": "高麗納戸",
                "phonetic": "こうらいなんど"
            },
            {
                "hex": "#6e7955",
                "name": "麹塵",
                "phonetic": "きくじん"
            },
            {
                "hex": "#7b6c3e",
                "name": "国防色",
                "phonetic": "こくぼうしょく"
            },
            {
                "hex": "#15050a",
                "name": "黒柿色",
                "phonetic": "くろがきいろ"
            },
            {
                "hex": "#302833",
                "name": "黒紅",
                "phonetic": "くろべに"
            },
            {
                "hex": "#2e2930",
                "name": "黒紫",
                "phonetic": "くろむらさき"
            },
            {
                "hex": "#2d2d2d",
                "name": "黒鼠",
                "phonetic": "くろねず"
            },
            {
                "hex": "#250d00",
                "name": "黒檀",
                "phonetic": "こくたん"
            },
            {
                "hex": "#583822",
                "name": "黒茶",
                "phonetic": "くろちゃ"
            },
            {
                "hex": "#544a47",
                "name": "黒橡",
                "phonetic": "くろつるばみ"
            },
            {
                "hex": "#432f2f",
                "name": "黒鳶",
                "phonetic": "くろとび"
            },
            {
                "hex": "#643219",
                "name": "黒梅",
                "phonetic": "くろうめ"
            },
            {
                "hex": "#333631",
                "name": "黒緑",
                "phonetic": "くろみどり"
            },
            {
                "hex": "#5b2856",
                "name": "今紫",
                "phonetic": "いまむらさき"
            },
            {
                "hex": "#9d92a0",
                "name": "今鶴羽",
                "phonetic": "いまつるは"
            },
            {
                "hex": "#d0576b",
                "name": "今様色",
                "phonetic": "いまよういろ"
            },
            {
                "hex": "#938b4b",
                "name": "根岸色",
                "phonetic": "ねぎしいろ"
            },
            {
                "hex": "#223a70",
                "name": "紺色",
                "phonetic": "こんいろ"
            },
            {
                "hex": "#192f60",
                "name": "紺青",
                "phonetic": "こんじょう"
            },
            {
                "hex": "#44617b",
                "name": "紺鼠",
                "phonetic": "こんねず"
            },
            {
                "hex": "#034358",
                "name": "紺鉄",
                "phonetic": "こんてつ"
            },
            {
                "hex": "#223d5f",
                "name": "紺天鵞絨",
                "phonetic": "こんびろうど"
            },
            {
                "hex": "#007bbb",
                "name": "紺碧",
                "phonetic": "こんぺき"
            },
            {
                "hex": "#4a488e",
                "name": "紺藍",
                "phonetic": "こんあい"
            },
            {
                "hex": "#164a84",
                "name": "紺瑠璃",
                "phonetic": "こんるり"
            },
            {
                "hex": "#213380",
                "name": "紺瑠璃",
                "phonetic": "こんるり"
            },
            {
                "hex": "#8f6769",
                "name": "嵯峨鼠",
                "phonetic": "さがねず"
            },
            {
                "hex": "#dcd3b2",
                "name": "砂色",
                "phonetic": "すないろ"
            },
            {
                "hex": "#ffec47",
                "name": "菜の花色",
                "phonetic": "なのはないろ"
            },
            {
                "hex": "#a69425",
                "name": "菜種油色",
                "phonetic": "なたねゆいろ"
            },
            {
                "hex": "#fef4f4",
                "name": "桜色",
                "phonetic": "さくらいろ"
            },
            {
                "hex": "#e9dfe5",
                "name": "桜鼠",
                "phonetic": "さくらねず"
            },
            {
                "hex": "#ef9683",
                "name": "鮭色",
                "phonetic": "さけいろ"
            },
            {
                "hex": "#396122",
                "name": "笹色",
                "phonetic": "ささいろ"
            },
            {
                "hex": "#3e4346",
                "name": "薩摩御納戸",
                "phonetic": "さつまおなんど"
            },
            {
                "hex": "#9e875e",
                "name": "薩摩鼠",
                "phonetic": "さつまねず"
            },
            {
                "hex": "#53727d",
                "name": "錆御納戸",
                "phonetic": "さびおなんど"
            },
            {
                "hex": "#6c3524",
                "name": "錆色",
                "phonetic": "さびいろ"
            },
            {
                "hex": "#a6c8b2",
                "name": "錆青磁",
                "phonetic": "さびせいじ"
            },
            {
                "hex": "#5c9291",
                "name": "錆浅葱",
                "phonetic": "さびあさぎ"
            },
            {
                "hex": "#47585c",
                "name": "錆鼠",
                "phonetic": "さびねず"
            },
            {
                "hex": "#485859",
                "name": "錆鉄御納戸",
                "phonetic": "さびてつおなんど"
            },
            {
                "hex": "#a8bf93",
                "name": "山葵色",
                "phonetic": "わさびいろ"
            },
            {
                "hex": "#f8b500",
                "name": "山吹色",
                "phonetic": "やまぶきいろ"
            },
            {
                "hex": "#b19a00",
                "name": "山吹鼠",
                "phonetic": "やまぶきねず"
            },
            {
                "hex": "#c89932",
                "name": "山吹茶",
                "phonetic": "やまぶきちゃ"
            },
            {
                "hex": "#767c6b",
                "name": "山鳩色",
                "phonetic": "やまばといろ"
            },
            {
                "hex": "#38635d",
                "name": "山藍摺",
                "phonetic": "やまあいずり"
            },
            {
                "hex": "#ee836f",
                "name": "珊瑚朱色",
                "phonetic": "さんごしゅいろ"
            },
            {
                "hex": "#f5b1aa",
                "name": "珊瑚色",
                "phonetic": "さんごいろ"
            },
            {
                "hex": "#f8fbf8",
                "name": "酸化チタン",
                "phonetic": "さんかチタン"
            },
            {
                "hex": "#5c4f2c",
                "name": "市紅茶",
                "phonetic": "しこうちゃ"
            },
            {
                "hex": "#d91e10",
                "name": "思色",
                "phonetic": "おもいいろ"
            },
            {
                "hex": "#fbca4d",
                "name": "支子色",
                "phonetic": "くちなしいろ"
            },
            {
                "hex": "#884898",
                "name": "紫",
                "phonetic": "むらさき"
            },
            {
                "hex": "#2a2223",
                "name": "紫烏色",
                "phonetic": "しうしょく"
            },
            {
                "hex": "#867ba9",
                "name": "紫苑色",
                "phonetic": "しおんいろ"
            },
            {
                "hex": "#460e44",
                "name": "紫紺",
                "phonetic": "しこん"
            },
            {
                "hex": "#e7e7eb",
                "name": "紫水晶",
                "phonetic": "むらさきすいしょう"
            },
            {
                "hex": "#71686c",
                "name": "紫鼠",
                "phonetic": "むらさきねず"
            },
            {
                "hex": "#5c2d36",
                "name": "紫檀色",
                "phonetic": "したんいろ"
            },
            {
                "hex": "#753035",
                "name": "紫土",
                "phonetic": "しど"
            },
            {
                "hex": "#5f414b",
                "name": "紫鳶",
                "phonetic": "むらさきとび"
            },
            {
                "hex": "#9093e0",
                "name": "紫陽花青",
                "phonetic": "あじさいあお"
            },
            {
                "hex": "#351916",
                "name": "脂色",
                "phonetic": "やにいろ"
            },
            {
                "hex": "#513743",
                "name": "似せ紫",
                "phonetic": "にせむらさき"
            },
            {
                "hex": "#c62b0c",
                "name": "似紅",
                "phonetic": "にせべに"
            },
            {
                "hex": "#efab93",
                "name": "宍色",
                "phonetic": "ししいろ"
            },
            {
                "hex": "#c51c2f",
                "name": "七両染",
                "phonetic": "しちりょうそめ"
            },
            {
                "hex": "#0d0015",
                "name": "漆黒",
                "phonetic": "しっこく"
            },
            {
                "hex": "#b28c6e",
                "name": "柴染",
                "phonetic": "ふしぞめ"
            },
            {
                "hex": "#ad7e4e",
                "name": "芝翫茶",
                "phonetic": "しかんちゃ"
            },
            {
                "hex": "#b5c0c9",
                "name": "錫色",
                "phonetic": "すずいろ"
            },
            {
                "hex": "#9ea1a3",
                "name": "錫色",
                "phonetic": "すずいろ"
            },
            {
                "hex": "#e0ebaf",
                "name": "若芽色",
                "phonetic": "わかめいろ"
            },
            {
                "hex": "#d8e698",
                "name": "若菜色",
                "phonetic": "わかないろ"
            },
            {
                "hex": "#bc64a4",
                "name": "若紫",
                "phonetic": "わかむらさき"
            },
            {
                "hex": "#c3d825",
                "name": "若草色",
                "phonetic": "わかくさいろ"
            },
            {
                "hex": "#68be8d",
                "name": "若竹色",
                "phonetic": "わかたけいろ"
            },
            {
                "hex": "#c7dc68",
                "name": "若苗色",
                "phonetic": "わかなえいろ"
            },
            {
                "hex": "#b9d08b",
                "name": "若葉色",
                "phonetic": "わかばいろ"
            },
            {
                "hex": "#98d98e",
                "name": "若緑",
                "phonetic": "わかみどり"
            },
            {
                "hex": "#ba2636",
                "name": "朱",
                "phonetic": "あけ"
            },
            {
                "hex": "#df9d9f",
                "name": "朱華",
                "phonetic": "はねず"
            },
            {
                "hex": "#e73931",
                "name": "朱砂",
                "phonetic": "しゅしゃ"
            },
            {
                "hex": "#eb6101",
                "name": "朱色",
                "phonetic": "しゅいろ"
            },
            {
                "hex": "#915847",
                "name": "朱土生壁",
                "phonetic": "しゅどなまかべ"
            },
            {
                "hex": "#a16d5d",
                "name": "宗伝唐茶",
                "phonetic": "そうでんからちゃ"
            },
            {
                "hex": "#f85ca2",
                "name": "秋桜",
                "phonetic": "こすもす"
            },
            {
                "hex": "#946243",
                "name": "渋紙色",
                "phonetic": "しぶがみいろ"
            },
            {
                "hex": "#715c23",
                "name": "渋茶",
                "phonetic": "しぶちゃ"
            },
            {
                "hex": "#c8c2be",
                "name": "潤色",
                "phonetic": "うるみいろ"
            },
            {
                "hex": "#f19072",
                "name": "曙色",
                "phonetic": "あけぼのいろ"
            },
            {
                "hex": "#f2f2b0",
                "name": "女郎花",
                "phonetic": "おみなえし"
            },
            {
                "hex": "#c2bf00",
                "name": "女郎花",
                "phonetic": "おみなえし"
            },
            {
                "hex": "#5b634e",
                "name": "勝軍色",
                "phonetic": "かつぐんいろ"
            },
            {
                "hex": "#4d1a06",
                "name": "小紫",
                "phonetic": "こむらさき"
            },
            {
                "hex": "#7e6a4c",
                "name": "小鹿色",
                "phonetic": "こじかいろ"
            },
            {
                "hex": "#cbcdcd",
                "name": "小町鼠",
                "phonetic": "こまちねず"
            },
            {
                "hex": "#96514d",
                "name": "小豆色",
                "phonetic": "あずきいろ"
            },
            {
                "hex": "#6b3e3f",
                "name": "小豆茶",
                "phonetic": "あずきちゃ"
            },
            {
                "hex": "#e49e61",
                "name": "小麦色",
                "phonetic": "こむぎいろ"
            },
            {
                "hex": "#f3f47f",
                "name": "承和色",
                "phonetic": "そがいろ"
            },
            {
                "hex": "#a68868",
                "name": "松染",
                "phonetic": "まつそめ"
            },
            {
                "hex": "#839b5c",
                "name": "松葉色",
                "phonetic": "まつばいろ"
            },
            {
                "hex": "#2e382a",
                "name": "松葉鼠",
                "phonetic": "まつばねず"
            },
            {
                "hex": "#252020",
                "name": "消炭黒",
                "phonetic": "けしずみくろ"
            },
            {
                "hex": "#524e4d",
                "name": "消炭色",
                "phonetic": "けしずみいろ"
            },
            {
                "hex": "#ae7c58",
                "name": "焦香",
                "phonetic": "こがれこう"
            },
            {
                "hex": "#6f4b3e",
                "name": "焦茶",
                "phonetic": "こげちゃ"
            },
            {
                "hex": "#eb6238",
                "name": "照柿",
                "phonetic": "てりがき"
            },
            {
                "hex": "#674196",
                "name": "菖蒲色",
                "phonetic": "あやめいろ"
            },
            {
                "hex": "#cc7eb1",
                "name": "菖蒲色",
                "phonetic": "あやめいろ"
            },
            {
                "hex": "#f8f4e6",
                "name": "象牙色",
                "phonetic": "ぞうげいろ"
            },
            {
                "hex": "#331818",
                "name": "醤色",
                "phonetic": "ひしおいろ"
            },
            {
                "hex": "#007b43",
                "name": "常盤色",
                "phonetic": "ときわいろ"
            },
            {
                "hex": "#028760",
                "name": "常磐緑",
                "phonetic": "ときわみどり"
            },
            {
                "hex": "#ebe1a9",
                "name": "蒸栗色",
                "phonetic": "むしぐりいろ"
            },
            {
                "hex": "#b43219",
                "name": "埴",
                "phonetic": "はに"
            },
            {
                "hex": "#c18772",
                "name": "信楽茶",
                "phonetic": "しがらきちゃ"
            },
            {
                "hex": "#59b9c6",
                "name": "新橋色",
                "phonetic": "しんばしいろ"
            },
            {
                "hex": "#339933",
                "name": "新緑色",
                "phonetic": "しんりょくしょく"
            },
            {
                "hex": "#bfa46f",
                "name": "榛色",
                "phonetic": "はしばみいろ"
            },
            {
                "hex": "#2e2713",
                "name": "榛摺",
                "phonetic": "はりずり"
            },
            {
                "hex": "#ffb333",
                "name": "深黄",
                "phonetic": "こきき"
            },
            {
                "hex": "#eb9b6f",
                "name": "深支子",
                "phonetic": "こきくちなし"
            },
            {
                "hex": "#493759",
                "name": "深紫",
                "phonetic": "こきむらさき"
            },
            {
                "hex": "#97a791",
                "name": "深川鼠",
                "phonetic": "ふかがわねずみ"
            },
            {
                "hex": "#c9171e",
                "name": "深緋",
                "phonetic": "こきあけ"
            },
            {
                "hex": "#00552e",
                "name": "深緑",
                "phonetic": "ふかみどり"
            },
            {
                "hex": "#2a4073",
                "name": "深縹",
                "phonetic": "こきはなだ"
            },
            {
                "hex": "#ec6d71",
                "name": "真朱",
                "phonetic": "まそお"
            },
            {
                "hex": "#fffff1",
                "name": "真珠色",
                "phonetic": "しんじゅいろ"
            },
            {
                "hex": "#d57c6b",
                "name": "真赭",
                "phonetic": "まそほ"
            },
            {
                "hex": "#d7a98c",
                "name": "辛螺色",
                "phonetic": "にしいろ"
            },
            {
                "hex": "#f1bf99",
                "name": "人色",
                "phonetic": "ひといろ"
            },
            {
                "hex": "#ee827c",
                "name": "甚三紅",
                "phonetic": "じんざもみ"
            },
            {
                "hex": "#e4ab9b",
                "name": "水柿",
                "phonetic": "みずがき"
            },
            {
                "hex": "#bce2e8",
                "name": "水色",
                "phonetic": "みずいろ"
            },
            {
                "hex": "#98aec1",
                "name": "水色鼠",
                "phonetic": "みずいろねず"
            },
            {
                "hex": "#80aba9",
                "name": "水浅葱",
                "phonetic": "みずあさぎ"
            },
            {
                "hex": "#72c1c8",
                "name": "水縹",
                "phonetic": "みずはなだ"
            },
            {
                "hex": "#013224",
                "name": "翠色",
                "phonetic": "すいしょく"
            },
            {
                "hex": "#5f2c0d",
                "name": "杉染",
                "phonetic": "すぎぞめ"
            },
            {
                "hex": "#aa4f37",
                "name": "雀茶",
                "phonetic": "すずめちゃ"
            },
            {
                "hex": "#fbfaf5",
                "name": "生成",
                "phonetic": "きなり"
            },
            {
                "hex": "#94846a",
                "name": "生壁色",
                "phonetic": "なまかべいろ"
            },
            {
                "hex": "#836a5c",
                "name": "生壁鼠",
                "phonetic": "なまかべねず"
            },
            {
                "hex": "#0095d9",
                "name": "青",
                "phonetic": "あお"
            },
            {
                "hex": "#393e4f",
                "name": "青褐",
                "phonetic": "あおかち"
            },
            {
                "hex": "#ada250",
                "name": "青朽葉",
                "phonetic": "あおくちば"
            },
            {
                "hex": "#674598",
                "name": "青紫",
                "phonetic": "あおむらさき"
            },
            {
                "hex": "#7ebea5",
                "name": "青磁色",
                "phonetic": "せいじいろ"
            },
            {
                "hex": "#bed2c3",
                "name": "青磁鼠",
                "phonetic": "せいじねず"
            },
            {
                "hex": "#9ba88d",
                "name": "青色",
                "phonetic": "あおいろ"
            },
            {
                "hex": "#596a40",
                "name": "青苔",
                "phonetic": "あおごけ"
            },
            {
                "hex": "#929fa7",
                "name": "青袋鼠",
                "phonetic": "せいたいねず"
            },
            {
                "hex": "#013574",
                "name": "青黛",
                "phonetic": "せいたい"
            },
            {
                "hex": "#99ab4e",
                "name": "青丹",
                "phonetic": "あおに"
            },
            {
                "hex": "#7ebeab",
                "name": "青竹色",
                "phonetic": "あおたけいろ"
            },
            {
                "hex": "#4b4b31",
                "name": "青茶",
                "phonetic": "あおちゃ"
            },
            {
                "hex": "#84a2d4",
                "name": "青藤",
                "phonetic": "あおふじ"
            },
            {
                "hex": "#7bc496",
                "name": "青銅色",
                "phonetic": "せいどういろ"
            },
            {
                "hex": "#6b7b6e",
                "name": "青鈍",
                "phonetic": "あおにび"
            },
            {
                "hex": "#478384",
                "name": "青碧",
                "phonetic": "せいへき"
            },
            {
                "hex": "#28282e",
                "name": "青墨",
                "phonetic": "あおずみ"
            },
            {
                "hex": "#6f8566",
                "name": "青柳鼠",
                "phonetic": "あおやぎねず"
            },
            {
                "hex": "#274a78",
                "name": "青藍",
                "phonetic": "せいらん"
            },
            {
                "hex": "#00a497",
                "name": "青緑",
                "phonetic": "あおみどり"
            },
            {
                "hex": "#61462e",
                "name": "昔唐茶",
                "phonetic": "むかしからちゃ"
            },
            {
                "hex": "#e5abbe",
                "name": "石竹色",
                "phonetic": "せきちくいろ"
            },
            {
                "hex": "#e60033",
                "name": "赤",
                "phonetic": "あか"
            },
            {
                "hex": "#683f36",
                "name": "赤褐色",
                "phonetic": "せっかっしょく"
            },
            {
                "hex": "#c53d43",
                "name": "赤紅",
                "phonetic": "あかべに"
            },
            {
                "hex": "#f6b894",
                "name": "赤香",
                "phonetic": "あかこう"
            },
            {
                "hex": "#8a3319",
                "name": "赤錆色",
                "phonetic": "あかさびいろ"
            },
            {
                "hex": "#f08300",
                "name": "赤支子",
                "phonetic": "あかくちなし"
            },
            {
                "hex": "#eb6ea5",
                "name": "赤紫",
                "phonetic": "あかむらさき"
            },
            {
                "hex": "#b95054",
                "name": "赤蘇芳",
                "phonetic": "あかすおう"
            },
            {
                "hex": "#ce5242",
                "name": "赤丹",
                "phonetic": "あかに"
            },
            {
                "hex": "#bb5535",
                "name": "赤茶",
                "phonetic": "あかちゃ"
            },
            {
                "hex": "#752100",
                "name": "赤銅色",
                "phonetic": "しゃくどういろ"
            },
            {
                "hex": "#3f312b",
                "name": "赤墨",
                "phonetic": "あかすみ"
            },
            {
                "hex": "#e9eef3",
                "name": "雪色",
                "phonetic": "せっしょく"
            },
            {
                "hex": "#474b42",
                "name": "仙斎茶",
                "phonetic": "せんさいちゃ"
            },
            {
                "hex": "#494a41",
                "name": "千歳茶",
                "phonetic": "せんさいちゃ"
            },
            {
                "hex": "#316745",
                "name": "千歳緑",
                "phonetic": "せんざいみどり"
            },
            {
                "hex": "#92b5a9",
                "name": "千草色",
                "phonetic": "ちぐさいろ"
            },
            {
                "hex": "#bed3ca",
                "name": "千草鼠",
                "phonetic": "ちぐさねず"
            },
            {
                "hex": "#edd3a1",
                "name": "浅黄",
                "phonetic": "うすき"
            },
            {
                "hex": "#ebf3dc",
                "name": "浅支子",
                "phonetic": "あさくちなし"
            },
            {
                "hex": "#c4a3bf",
                "name": "浅紫",
                "phonetic": "うすむらさき"
            },
            {
                "hex": "#a25768",
                "name": "浅蘇芳",
                "phonetic": "あさすおう"
            },
            {
                "hex": "#00a3af",
                "name": "浅葱色",
                "phonetic": "あさぎいろ"
            },
            {
                "hex": "#97abac",
                "name": "浅葱鼠",
                "phonetic": "あさぎねず"
            },
            {
                "hex": "#df7163",
                "name": "浅緋",
                "phonetic": "うすきあけ"
            },
            {
                "hex": "#84b9cb",
                "name": "浅縹",
                "phonetic": "あさはなだ"
            },
            {
                "hex": "#f2c9ac",
                "name": "洗柿",
                "phonetic": "あらいがき"
            },
            {
                "hex": "#d0826c",
                "name": "洗朱",
                "phonetic": "あらいしゅ"
            },
            {
                "hex": "#8c6450",
                "name": "煎茶色",
                "phonetic": "せんちゃいろ"
            },
            {
                "hex": "#5b7e91",
                "name": "舛花色",
                "phonetic": "ますはないろ"
            },
            {
                "hex": "#eae5e3",
                "name": "素色",
                "phonetic": "そしょく"
            },
            {
                "hex": "#ede9d8",
                "name": "素色",
                "phonetic": "しろいろ"
            },
            {
                "hex": "#9fa0a0",
                "name": "素鼠",
                "phonetic": "すねず"
            },
            {
                "hex": "#9e3d3f",
                "name": "蘇芳",
                "phonetic": "すおう"
            },
            {
                "hex": "#a86965",
                "name": "蘇芳香",
                "phonetic": "すおうこう"
            },
            {
                "hex": "#949495",
                "name": "鼠",
                "phonetic": "ねずみ"
            },
            {
                "hex": "#9b7877",
                "name": "鼠茶",
                "phonetic": "ねずちゃ"
            },
            {
                "hex": "#6d93b9",
                "name": "想思鼠",
                "phonetic": "そうしねず"
            },
            {
                "hex": "#ffeece",
                "name": "掻練",
                "phonetic": "かいねり"
            },
            {
                "hex": "#67a70c",
                "name": "早苗色",
                "phonetic": "さなえいろ"
            },
            {
                "hex": "#7b8d42",
                "name": "草色",
                "phonetic": "くさいろ"
            },
            {
                "hex": "#6e8252",
                "name": "草柳",
                "phonetic": "くさやなぎ"
            },
            {
                "hex": "#2e7e16",
                "name": "草緑色",
                "phonetic": "そうりょくしょく"
            },
            {
                "hex": "#69821b",
                "name": "苔色",
                "phonetic": "こけいろ"
            },
            {
                "hex": "#d69090",
                "name": "退紅",
                "phonetic": "あらそめ"
            },
            {
                "hex": "#bb5520",
                "name": "代赭",
                "phonetic": "たいしゃ"
            },
            {
                "hex": "#fe9c41",
                "name": "大和柿",
                "phonetic": "やまとがき"
            },
            {
                "hex": "#e45e32",
                "name": "丹",
                "phonetic": "に"
            },
            {
                "hex": "#76413c",
                "name": "丹柄茶",
                "phonetic": "たんがらちゃ"
            },
            {
                "hex": "#f8e58c",
                "name": "淡黄",
                "phonetic": "たんこう"
            },
            {
                "hex": "#ff9740",
                "name": "淡朽葉",
                "phonetic": "うすくちば"
            },
            {
                "hex": "#e6cde3",
                "name": "淡紅藤",
                "phonetic": "あわべにふじ"
            },
            {
                "hex": "#f3bf88",
                "name": "淡香",
                "phonetic": "うすこう"
            },
            {
                "hex": "#9ed1d3",
                "name": "淡水色",
                "phonetic": "うすみずいろ"
            },
            {
                "hex": "#bbc8e6",
                "name": "淡藤色",
                "phonetic": "あわふじいろ"
            },
            {
                "hex": "#93ca76",
                "name": "淡萌黄",
                "phonetic": "うすもえぎ"
            },
            {
                "hex": "#9f563a",
                "name": "団十郎茶",
                "phonetic": "だんじゅうろうちゃ"
            },
            {
                "hex": "#664032",
                "name": "茶褐色",
                "phonetic": "ちゃかっしょく"
            },
            {
                "hex": "#746b6b",
                "name": "茶気鼠",
                "phonetic": "ちゃけねず"
            },
            {
                "hex": "#965042",
                "name": "茶色",
                "phonetic": "ちゃいろ"
            },
            {
                "hex": "#a99e93",
                "name": "茶鼠",
                "phonetic": "ちゃねず"
            },
            {
                "hex": "#29221d",
                "name": "茶微塵茶",
                "phonetic": "ちゃみじんちゃ"
            },
            {
                "hex": "#ffea00",
                "name": "中黄",
                "phonetic": "ちゅうき"
            },
            {
                "hex": "#c85179",
                "name": "中紅",
                "phonetic": "なかべに"
            },
            {
                "hex": "#e891a3",
                "name": "中紅花",
                "phonetic": "なかのくれない"
            },
            {
                "hex": "#573e6d",
                "name": "中紫",
                "phonetic": "なかのむらさき"
            },
            {
                "hex": "#57696d",
                "name": "中鼠",
                "phonetic": "なかねず"
            },
            {
                "hex": "#3a5b52",
                "name": "虫襖",
                "phonetic": "むしあお"
            },
            {
                "hex": "#746d4e",
                "name": "丁子鼠",
                "phonetic": "ちょうじねず"
            },
            {
                "hex": "#b4866b",
                "name": "丁子茶",
                "phonetic": "ちょうじちゃ"
            },
            {
                "hex": "#807050",
                "name": "丁子煤竹",
                "phonetic": "ちょうじすすだけ"
            },
            {
                "hex": "#ad7d4c",
                "name": "丁字染",
                "phonetic": "ちょうじぞめ"
            },
            {
                "hex": "#e1a9ab",
                "name": "聴色",
                "phonetic": "ゆるしいろ"
            },
            {
                "hex": "#c97586",
                "name": "長春色",
                "phonetic": "ちょうしゅんいろ"
            },
            {
                "hex": "#fff1cf",
                "name": "鳥の子色",
                "phonetic": "とりのこいろ"
            },
            {
                "hex": "#815731",
                "name": "沈香色",
                "phonetic": "じんこういろ"
            },
            {
                "hex": "#526f55",
                "name": "沈香茶",
                "phonetic": "とのちゃ"
            },
            {
                "hex": "#836364",
                "name": "椎鈍色",
                "phonetic": "しいにびいろ"
            },
            {
                "hex": "#762034",
                "name": "柘榴",
                "phonetic": "ざくろ"
            },
            {
                "hex": "#61065e",
                "name": "帝王紫",
                "phonetic": "ていおうむらさき"
            },
            {
                "hex": "#455765",
                "name": "鉄御納戸",
                "phonetic": "てつおなんど"
            },
            {
                "hex": "#281a14",
                "name": "鉄黒",
                "phonetic": "てつぐろ"
            },
            {
                "hex": "#17184b",
                "name": "鉄紺",
                "phonetic": "てつこん"
            },
            {
                "hex": "#8e3809",
                "name": "鉄錆色",
                "phonetic": "てつさびいろ"
            },
            {
                "hex": "#005243",
                "name": "鉄色",
                "phonetic": "てついろ"
            },
            {
                "hex": "#3e5c54",
                "name": "鉄鼠",
                "phonetic": "てつねず"
            },
            {
                "hex": "#2ca9e1",
                "name": "天色",
                "phonetic": "あまいろ"
            },
            {
                "hex": "#2f5d50",
                "name": "天鵞絨",
                "phonetic": "びろうど"
            },
            {
                "hex": "#0d270d",
                "name": "天鵞絨",
                "phonetic": "びろうど"
            },
            {
                "hex": "#3e62ad",
                "name": "杜若色",
                "phonetic": "かきつばたいろ"
            },
            {
                "hex": "#8e655f",
                "name": "都鼠",
                "phonetic": "みやこねず"
            },
            {
                "hex": "#f4dda5",
                "name": "砥粉色",
                "phonetic": "とのこいろ"
            },
            {
                "hex": "#9f6f55",
                "name": "砺茶",
                "phonetic": "とのちゃ"
            },
            {
                "hex": "#c37854",
                "name": "土器色",
                "phonetic": "かわらけいろ"
            },
            {
                "hex": "#bc763c",
                "name": "土色",
                "phonetic": "つちいろ"
            },
            {
                "hex": "#32875c",
                "name": "唐金色",
                "phonetic": "からかねいろ"
            },
            {
                "hex": "#783c1d",
                "name": "唐茶",
                "phonetic": "からちゃ"
            },
            {
                "hex": "#e198b4",
                "name": "桃花色",
                "phonetic": "ももはないろ"
            },
            {
                "hex": "#e0a37e",
                "name": "桃花染",
                "phonetic": "つきそめ"
            },
            {
                "hex": "#875b4e",
                "name": "桃山茶",
                "phonetic": "ももやまちゃ"
            },
            {
                "hex": "#f09199",
                "name": "桃色",
                "phonetic": "ももいろ"
            },
            {
                "hex": "#f7c114",
                "name": "藤黄",
                "phonetic": "とうおう"
            },
            {
                "hex": "#a59aca",
                "name": "藤紫",
                "phonetic": "ふじむらさき"
            },
            {
                "hex": "#bbbcde",
                "name": "藤色",
                "phonetic": "ふじいろ"
            },
            {
                "hex": "#a6a5c4",
                "name": "藤鼠",
                "phonetic": "ふじねず"
            },
            {
                "hex": "#706caa",
                "name": "藤納戸",
                "phonetic": "ふじなんど"
            },
            {
                "hex": "#5a5359",
                "name": "藤煤竹",
                "phonetic": "ふじすすだけ"
            },
            {
                "hex": "#8b968d",
                "name": "豆がら茶",
                "phonetic": "まめがらちゃ"
            },
            {
                "hex": "#a78465",
                "name": "豆殻茶",
                "phonetic": "まめがらちゃ"
            },
            {
                "hex": "#8c4841",
                "name": "銅色",
                "phonetic": "あかがねいろ"
            },
            {
                "hex": "#b88884",
                "name": "鴇浅葱",
                "phonetic": "ときあさぎ"
            },
            {
                "hex": "#e4d2d8",
                "name": "鴇鼠",
                "phonetic": "ときねず"
            },
            {
                "hex": "#49492b",
                "name": "橡鼠",
                "phonetic": "つるばみねず"
            },
            {
                "hex": "#95483f",
                "name": "鳶色",
                "phonetic": "とびいろ"
            },
            {
                "hex": "#727171",
                "name": "鈍色",
                "phonetic": "にびいろ"
            },
            {
                "hex": "#a15dc4",
                "name": "南京藤",
                "phonetic": "なんきんふじ"
            },
            {
                "hex": "#915c8b",
                "name": "二藍",
                "phonetic": "ふたあい"
            },
            {
                "hex": "#dd7a56",
                "name": "肉桂色",
                "phonetic": "にっけいろ"
            },
            {
                "hex": "#f6bfbc",
                "name": "虹色",
                "phonetic": "にじいろ"
            },
            {
                "hex": "#f3f3f3",
                "name": "乳白色",
                "phonetic": "にゅうはくしょく"
            },
            {
                "hex": "#000b00",
                "name": "濡羽色",
                "phonetic": "ぬればいろ"
            },
            {
                "hex": "#ff5234",
                "name": "濃朽葉",
                "phonetic": "こいくちば"
            },
            {
                "hex": "#a22041",
                "name": "濃紅",
                "phonetic": "こいくれない"
            },
            {
                "hex": "#1f2f54",
                "name": "濃紺",
                "phonetic": "のうこん"
            },
            {
                "hex": "#634950",
                "name": "濃色",
                "phonetic": "こきいろ"
            },
            {
                "hex": "#4f455c",
                "name": "濃鼠",
                "phonetic": "こいねず"
            },
            {
                "hex": "#3f3f3f",
                "name": "濃鼠",
                "phonetic": "こいねず"
            },
            {
                "hex": "#1f1f19",
                "name": "濃墨",
                "phonetic": "こずみ"
            },
            {
                "hex": "#0f2350",
                "name": "濃藍",
                "phonetic": "こいあい"
            },
            {
                "hex": "#008899",
                "name": "納戸色",
                "phonetic": "なんどいろ"
            },
            {
                "hex": "#354d4b",
                "name": "納戸鼠",
                "phonetic": "なんどねず"
            },
            {
                "hex": "#384d31",
                "name": "納戸茶",
                "phonetic": "なんどちや"
            },
            {
                "hex": "#887938",
                "name": "梅幸茶",
                "phonetic": "ばいこうちゃ"
            },
            {
                "hex": "#aa4c8f",
                "name": "梅紫",
                "phonetic": "うめむらさき"
            },
            {
                "hex": "#f73b70",
                "name": "梅重",
                "phonetic": "うめかさね"
            },
            {
                "hex": "#b48a76",
                "name": "梅染",
                "phonetic": "うめぞめ"
            },
            {
                "hex": "#c099a0",
                "name": "梅鼠",
                "phonetic": "うめねず"
            },
            {
                "hex": "#9b7853",
                "name": "梅茶",
                "phonetic": "うめちゃ"
            },
            {
                "hex": "#887f7a",
                "name": "煤色",
                "phonetic": "すすいろ"
            },
            {
                "hex": "#6f514c",
                "name": "煤竹色",
                "phonetic": "すすたけいろ"
            },
            {
                "hex": "#cf747b",
                "name": "萩色",
                "phonetic": "はぎいろ"
            },
            {
                "hex": "#081941",
                "name": "伯林青",
                "phonetic": "べれんす"
            },
            {
                "hex": "#ffffff",
                "name": "白",
                "phonetic": "しろ"
            },
            {
                "hex": "#e8ecef",
                "name": "白花色",
                "phonetic": "しらはないろ"
            },
            {
                "hex": "#83ccd2",
                "name": "白群",
                "phonetic": "びゃくぐん"
            },
            {
                "hex": "#dcdddd",
                "name": "白鼠",
                "phonetic": "しろねず"
            },
            {
                "hex": "#ddbb99",
                "name": "白茶",
                "phonetic": "しらちゃ"
            },
            {
                "hex": "#dbd0e6",
                "name": "白藤色",
                "phonetic": "しらふじいろ"
            },
            {
                "hex": "#cbb994",
                "name": "白橡",
                "phonetic": "しろつるばみ"
            },
            {
                "hex": "#efe0e8",
                "name": "白梅",
                "phonetic": "しらうめいろ"
            },
            {
                "hex": "#e5e4e6",
                "name": "白梅鼠",
                "phonetic": "しらうめねず"
            },
            {
                "hex": "#def3de",
                "name": "白百合色",
                "phonetic": "しらゆりいろ"
            },
            {
                "hex": "#c1e4e9",
                "name": "白藍",
                "phonetic": "しらあい"
            },
            {
                "hex": "#d6e9ca",
                "name": "白緑",
                "phonetic": "びゃくろく"
            },
            {
                "hex": "#f3f3f2",
                "name": "白練",
                "phonetic": "しろねり"
            },
            {
                "hex": "#eaedf7",
                "name": "白菫色",
                "phonetic": "しろすみれいろ"
            },
            {
                "hex": "#d4dcda",
                "name": "薄雲鼠",
                "phonetic": "うすくもねず"
            },
            {
                "hex": "#f0cfa0",
                "name": "薄黄",
                "phonetic": "うすき"
            },
            {
                "hex": "#5a79ba",
                "name": "薄花桜",
                "phonetic": "うすはなざくら"
            },
            {
                "hex": "#698aab",
                "name": "薄花色",
                "phonetic": "うすはないろ"
            },
            {
                "hex": "#d4acad",
                "name": "薄柿",
                "phonetic": "うすがき"
            },
            {
                "hex": "#0094c8",
                "name": "薄群青",
                "phonetic": "うすぐんじょう"
            },
            {
                "hex": "#5383c3",
                "name": "薄群青",
                "phonetic": "うすぐんじょう"
            },
            {
                "hex": "#f0908d",
                "name": "薄紅",
                "phonetic": "うすべに"
            },
            {
                "hex": "#e597b2",
                "name": "薄紅梅",
                "phonetic": "うすこうばい"
            },
            {
                "hex": "#fdeff2",
                "name": "薄桜",
                "phonetic": "うすざくら"
            },
            {
                "hex": "#a89dac",
                "name": "薄色",
                "phonetic": "うすいろ"
            },
            {
                "hex": "#93b69c",
                "name": "薄青",
                "phonetic": "うすあお"
            },
            {
                "hex": "#69c2c7",
                "name": "薄浅葱",
                "phonetic": "うすあさぎ"
            },
            {
                "hex": "#9790a4",
                "name": "薄鼠",
                "phonetic": "うすねず"
            },
            {
                "hex": "#b78161",
                "name": "薄茶",
                "phonetic": "うすちゃ"
            },
            {
                "hex": "#adadad",
                "name": "薄鈍",
                "phonetic": "うすにび"
            },
            {
                "hex": "#dcd6d9",
                "name": "薄梅鼠",
                "phonetic": "うめねず"
            },
            {
                "hex": "#c0a2c7",
                "name": "薄葡萄",
                "phonetic": "うすぶどう"
            },
            {
                "hex": "#badcad",
                "name": "薄萌葱",
                "phonetic": "うすもえぎ"
            },
            {
                "hex": "#a3a3a2",
                "name": "薄墨色",
                "phonetic": "うすずみいろ"
            },
            {
                "hex": "#fde8d0",
                "name": "薄卵色",
                "phonetic": "うすたまごいろ"
            },
            {
                "hex": "#69b076",
                "name": "薄緑",
                "phonetic": "うすみどり"
            },
            {
                "hex": "#507ea4",
                "name": "薄縹",
                "phonetic": "うすばなだ"
            },
            {
                "hex": "#e5db97",
                "name": "麦藁色",
                "phonetic": "むぎわらいろ"
            },
            {
                "hex": "#b77b57",
                "name": "櫨色",
                "phonetic": "はじいろ"
            },
            {
                "hex": "#d9a62e",
                "name": "櫨染",
                "phonetic": "はじぞめ"
            },
            {
                "hex": "#fce2c4",
                "name": "肌色",
                "phonetic": "はだいろ"
            },
            {
                "hex": "#95859c",
                "name": "鳩羽色",
                "phonetic": "はとばいろ"
            },
            {
                "hex": "#9e8b8e",
                "name": "鳩羽鼠",
                "phonetic": "はとばねず"
            },
            {
                "hex": "#a69abd",
                "name": "半色",
                "phonetic": "はしたいろ"
            },
            {
                "hex": "#5f7058",
                "name": "比金襖",
                "phonetic": "ひこんのう"
            },
            {
                "hex": "#cfa85c",
                "name": "比佐宜染",
                "phonetic": "ひさぎぞめ"
            },
            {
                "hex": "#abced8",
                "name": "秘色",
                "phonetic": "ひそく"
            },
            {
                "hex": "#e09285",
                "name": "緋褪色",
                "phonetic": "ひさめいろ"
            },
            {
                "hex": "#897858",
                "name": "肥後煤竹",
                "phonetic": "ひごすすだけ"
            },
            {
                "hex": "#ae7c4f",
                "name": "枇杷茶",
                "phonetic": "びわちゃ"
            },
            {
                "hex": "#1f3134",
                "name": "百入茶",
                "phonetic": "ももしおちゃ"
            },
            {
                "hex": "#b0ca71",
                "name": "苗色",
                "phonetic": "なえいろ"
            },
            {
                "hex": "#a2d7dd",
                "name": "瓶覗",
                "phonetic": "かめのぞき"
            },
            {
                "hex": "#ffb02a",
                "name": "不言色",
                "phonetic": "いわぬいろ"
            },
            {
                "hex": "#716f68",
                "name": "浮草鼠",
                "phonetic": "うきくさねず"
            },
            {
                "hex": "#6b1349",
                "name": "葡萄酒色",
                "phonetic": "ぶどうしゅいろ"
            },
            {
                "hex": "#522f60",
                "name": "葡萄色",
                "phonetic": "ぶどういろ"
            },
            {
                "hex": "#640125",
                "name": "葡萄色",
                "phonetic": "えびいろ"
            },
            {
                "hex": "#705b67",
                "name": "葡萄鼠",
                "phonetic": "ぶどうねずみ"
            },
            {
                "hex": "#6c2c2f",
                "name": "葡萄茶",
                "phonetic": "えびちゃ"
            },
            {
                "hex": "#fb3c02",
                "name": "粉紅",
                "phonetic": "まがいべに"
            },
            {
                "hex": "#9d8682",
                "name": "壁鼠",
                "phonetic": "かべねず"
            },
            {
                "hex": "#184458",
                "name": "碧色",
                "phonetic": "へきしょく"
            },
            {
                "hex": "#02533b",
                "name": "碧緑",
                "phonetic": "へきりょく"
            },
            {
                "hex": "#1853b5",
                "name": "碧瑠璃",
                "phonetic": "へきるり"
            },
            {
                "hex": "#8f2e14",
                "name": "弁柄色",
                "phonetic": "べんがらいろ"
            },
            {
                "hex": "#aacf53",
                "name": "萌黄",
                "phonetic": "もえぎ"
            },
            {
                "hex": "#006e54",
                "name": "萌葱色",
                "phonetic": "もえぎいろ"
            },
            {
                "hex": "#fddea5",
                "name": "蜂蜜色",
                "phonetic": "はちみついろ"
            },
            {
                "hex": "#595857",
                "name": "墨",
                "phonetic": "すみ"
            },
            {
                "hex": "#171917",
                "name": "墨",
                "phonetic": "すみ"
            },
            {
                "hex": "#65318e",
                "name": "本紫",
                "phonetic": "ほんむらさき"
            },
            {
                "hex": "#c5c56a",
                "name": "抹茶色",
                "phonetic": "まっちゃいろ"
            },
            {
                "hex": "#f1cb66",
                "name": "密陀僧",
                "phonetic": "みつだそう"
            },
            {
                "hex": "#cf6a38",
                "name": "蜜柑茶",
                "phonetic": "みかんちゃ"
            },
            {
                "hex": "#80989b",
                "name": "湊鼠",
                "phonetic": "みなとねずみ"
            },
            {
                "hex": "#3f4d41",
                "name": "湊煤竹",
                "phonetic": "みなとすすだけ"
            },
            {
                "hex": "#1e1222",
                "name": "椋実色",
                "phonetic": "むくのみいろ"
            },
            {
                "hex": "#594255",
                "name": "滅紫",
                "phonetic": "けしむらさき"
            },
            {
                "hex": "#725b63",
                "name": "滅色",
                "phonetic": "けしいろ"
            },
            {
                "hex": "#735642",
                "name": "木枯茶",
                "phonetic": "こがらしちゃ"
            },
            {
                "hex": "#3b7960",
                "name": "木賊色",
                "phonetic": "とくさいろ"
            },
            {
                "hex": "#c7b370",
                "name": "木蘭色",
                "phonetic": "もくらんじき"
            },
            {
                "hex": "#89c3eb",
                "name": "勿忘草",
                "phonetic": "わすれなぐさ"
            },
            {
                "hex": "#a03731",
                "name": "薬色",
                "phonetic": "くすりいろ"
            },
            {
                "hex": "#a8c97f",
                "name": "柳色",
                "phonetic": "やなぎいろ"
            },
            {
                "hex": "#93b881",
                "name": "柳染",
                "phonetic": "やなぎぞめ"
            },
            {
                "hex": "#c8d5bb",
                "name": "柳鼠",
                "phonetic": "やなぎねず"
            },
            {
                "hex": "#a1a46d",
                "name": "柳茶",
                "phonetic": "やなぎちゃ"
            },
            {
                "hex": "#5b6356",
                "name": "柳煤竹",
                "phonetic": "やなぎすすだけ"
            },
            {
                "hex": "#635b44",
                "name": "柳煤竹茶",
                "phonetic": "やなぎすすだけちゃ"
            },
            {
                "hex": "#a7b446",
                "name": "柳葉色",
                "phonetic": "やなぎは-ば-いろ"
            },
            {
                "hex": "#a19361",
                "name": "油色",
                "phonetic": "あぶらいろ"
            },
            {
                "hex": "#083a28",
                "name": "柚葉色",
                "phonetic": "ゆずはいろ"
            },
            {
                "hex": "#f9c89b",
                "name": "雄黄",
                "phonetic": "ゆうおう"
            },
            {
                "hex": "#b38000",
                "name": "楊梅色",
                "phonetic": "やまももいろ"
            },
            {
                "hex": "#cc2f3a",
                "name": "洋紅色",
                "phonetic": "ようこうしょく"
            },
            {
                "hex": "#48922f",
                "name": "洋緑色",
                "phonetic": "ようりょくしょく"
            },
            {
                "hex": "#383c3c",
                "name": "羊羹色",
                "phonetic": "ようかんいろ"
            },
            {
                "hex": "#2d252d",
                "name": "羅紗染色",
                "phonetic": "らしゃぞめいろ"
            },
            {
                "hex": "#7d4b28",
                "name": "落葉色",
                "phonetic": "おちばいろ"
            },
            {
                "hex": "#f69e22",
                "name": "卵黄色",
                "phonetic": "らんおういろ"
            },
            {
                "hex": "#fcd575",
                "name": "卵色",
                "phonetic": "たまごいろ"
            },
            {
                "hex": "#56564b",
                "name": "藍海松茶",
                "phonetic": "あいみるちゃ"
            },
            {
                "hex": "#b1a733",
                "name": "藍玉子",
                "phonetic": "あいたまご"
            },
            {
                "hex": "#37413d",
                "name": "藍銀煤竹",
                "phonetic": "あいぎんすすだけ"
            },
            {
                "hex": "#2d3446",
                "name": "藍御納戸",
                "phonetic": "あいおなんど"
            },
            {
                "hex": "#165e83",
                "name": "藍色",
                "phonetic": "あいいろ"
            },
            {
                "hex": "#492741",
                "name": "藍色鳩羽",
                "phonetic": "あいいろはとば"
            },
            {
                "hex": "#3c5245",
                "name": "藍摺",
                "phonetic": "あいずり"
            },
            {
                "hex": "#454550",
                "name": "藍生壁",
                "phonetic": "あいなまかべ"
            },
            {
                "hex": "#6c848d",
                "name": "藍鼠",
                "phonetic": "あいねず"
            },
            {
                "hex": "#393f4c",
                "name": "藍鉄",
                "phonetic": "あいてつ"
            },
            {
                "hex": "#1e3859",
                "name": "藍天鵞絨",
                "phonetic": "あいびろうど"
            },
            {
                "hex": "#5f984d",
                "name": "藍砥茶",
                "phonetic": "あいとのちゃ"
            },
            {
                "hex": "#ebf6f7",
                "name": "藍白",
                "phonetic": "あいじろ"
            },
            {
                "hex": "#474a4d",
                "name": "藍墨茶",
                "phonetic": "あいすみちゃ"
            },
            {
                "hex": "#555647",
                "name": "藍媚茶",
                "phonetic": "あいこびちゃ"
            },
            {
                "hex": "#d9912d",
                "name": "蘭茶",
                "phonetic": "らんちゃ"
            },
            {
                "hex": "#8f8667",
                "name": "利休色・利久色",
                "phonetic": "りきゅういろ"
            },
            {
                "hex": "#888e7e",
                "name": "利休鼠",
                "phonetic": "りきゅうねずみ"
            },
            {
                "hex": "#a59564",
                "name": "利休茶",
                "phonetic": "りきゅうちゃ"
            },
            {
                "hex": "#b3ada0",
                "name": "利休白茶",
                "phonetic": "りきゅうしらちゃ"
            },
            {
                "hex": "#6a5d21",
                "name": "璃寛茶",
                "phonetic": "りかんちゃ"
            },
            {
                "hex": "#94b090",
                "name": "裏葉色",
                "phonetic": "うらはいろ"
            },
            {
                "hex": "#c1d8ac",
                "name": "裏葉柳",
                "phonetic": "うらはやなぎ"
            },
            {
                "hex": "#1c305c",
                "name": "留紺",
                "phonetic": "とめこん"
            },
            {
                "hex": "#f1e266",
                "name": "硫黄色",
                "phonetic": "いおういろ"
            },
            {
                "hex": "#9079ad",
                "name": "竜胆色",
                "phonetic": "りんどういろ"
            },
            {
                "hex": "#635c48",
                "name": "猟虎色",
                "phonetic": "らっこいろ"
            },
            {
                "hex": "#685643",
                "name": "猟虎茶",
                "phonetic": "らっこちゃ"
            },
            {
                "hex": "#3eb370",
                "name": "緑",
                "phonetic": "みどり"
            },
            {
                "hex": "#dccb18",
                "name": "緑黄色",
                "phonetic": "りょくおうしょく"
            },
            {
                "hex": "#47885e",
                "name": "緑青色",
                "phonetic": "ろくしょういろ"
            },
            {
                "hex": "#26610f",
                "name": "緑茶色",
                "phonetic": "りょくちゃいろ"
            },
            {
                "hex": "#19448e",
                "name": "瑠璃紺",
                "phonetic": "るりこん"
            },
            {
                "hex": "#1e50a2",
                "name": "瑠璃色",
                "phonetic": "るりいろ"
            },
            {
                "hex": "#b55233",
                "name": "煉瓦色",
                "phonetic": "れんがいろ"
            },
            {
                "hex": "#ede4cd",
                "name": "練色",
                "phonetic": "ねりいろ"
            },
            {
                "hex": "#8c7042",
                "name": "路考茶",
                "phonetic": "ろこうちゃ"
            },
            {
                "hex": "#38a1db",
                "name": "露草色",
                "phonetic": "つゆくさいろ"
            },
            {
                "hex": "#8c6278",
                "name": "浪花鼠",
                "phonetic": "なにわねず"
            },
            {
                "hex": "#769164",
                "name": "老竹",
                "phonetic": "おいたけ"
            },
            {
                "hex": "#787a59",
                "name": "老緑",
                "phonetic": "おいみどり"
            },
            {
                "hex": "#9b9969",
                "name": "蝋色",
                "phonetic": "ろういろ"
            },
            {
                "hex": "#2b2b2b",
                "name": "蝋色",
                "phonetic": "ろういろ"
            },
            {
                "hex": "#d5c752",
                "name": "藁色",
                "phonetic": "わらいろ"
            },
            {
                "hex": "#595455",
                "name": "丼鼠",
                "phonetic": "どぶねずみ"
            },
            {
                "hex": "#716246",
                "name": "媚茶",
                "phonetic": "こびちゃ"
            },
            {
                "hex": "#e8eaa8",
                "name": "嫩黄色",
                "phonetic": "どんこうしょく"
            },
            {
                "hex": "#965036",
                "name": "檜皮色",
                "phonetic": "ひわだいろ"
            },
            {
                "hex": "#7a71a2",
                "name": "楝色",
                "phonetic": "おうちいろ"
            },
            {
                "hex": "#775580",
                "name": "槿色",
                "phonetic": "むくげいろ"
            },
            {
                "hex": "#72672e",
                "name": "橄欖色",
                "phonetic": "かんらんしょく"
            },
            {
                "hex": "#ee7800",
                "name": "橙色",
                "phonetic": "だいだいいろ"
            },
            {
                "hex": "#433d3c",
                "name": "檳榔子染",
                "phonetic": "びんろうじぞめ"
            },
            {
                "hex": "#20231f",
                "name": "檳椰子黒",
                "phonetic": "びんろうじくろ"
            },
            {
                "hex": "#fabf14",
                "name": "鬱金色",
                "phonetic": "うこんいろ"
            },
            {
                "hex": "#f7bd8f",
                "name": "洒落柿",
                "phonetic": "しゃれがき"
            },
            {
                "hex": "#ecd4c2",
                "name": "洒落柿",
                "phonetic": "しゃれがき"
            },
            {
                "hex": "#554738",
                "name": "涅色",
                "phonetic": "くりいろ"
            },
            {
                "hex": "#426579",
                "name": "熨斗目花色",
                "phonetic": "のしめはないろ"
            },
            {
                "hex": "#175b66",
                "name": "熨斗目色",
                "phonetic": "のしめいろ"
            },
            {
                "hex": "#c04d21",
                "name": "猩々茶",
                "phonetic": "しょうじょうちゃ"
            },
            {
                "hex": "#e2041b",
                "name": "猩々緋",
                "phonetic": "しょうじょうひ"
            },
            {
                "hex": "#bf783a",
                "name": "琥珀色",
                "phonetic": "こはくいろ"
            },
            {
                "hex": "#1a1a19",
                "name": "皀色",
                "phonetic": "くりいろ"
            },
            {
                "hex": "#2792c3",
                "name": "縹色",
                "phonetic": "はなだいろ"
            },
            {
                "hex": "#38b48b",
                "name": "翡翠色",
                "phonetic": "ひすいいろ"
            },
            {
                "hex": "#b94047",
                "name": "臙脂",
                "phonetic": "えんじ"
            },
            {
                "hex": "#8b2f45",
                "name": "苺色",
                "phonetic": "いちごいろ"
            },
            {
                "hex": "#7058a3",
                "name": "菫色",
                "phonetic": "すみれいろ"
            },
            {
                "hex": "#e9546b",
                "name": "薔薇色",
                "phonetic": "ばらいろ"
            },
            {
                "hex": "#ab6953",
                "name": "赭",
                "phonetic": "そお"
            },
            {
                "hex": "#d25e2c",
                "name": "赭",
                "phonetic": "しゃ"
            },
            {
                "hex": "#d1561b",
                "name": "赭黄",
                "phonetic": "しゃおう"
            },
            {
                "hex": "#e95295",
                "name": "躑躅色",
                "phonetic": "つつじいろ"
            },
            {
                "hex": "#988f86",
                "name": "雉鳩色",
                "phonetic": "きじばといろ"
            },
            {
                "hex": "#bf794e",
                "name": "駱駝色",
                "phonetic": "らくだいろ"
            },
            {
                "hex": "#928c36",
                "name": "鶯色",
                "phonetic": "うぐいすいろ"
            },
            {
                "hex": "#715c1f",
                "name": "鶯茶",
                "phonetic": "うぐいすちゃ"
            },
            {
                "hex": "#d7cf3a",
                "name": "鶸色",
                "phonetic": "ひわいろ"
            },
            {
                "hex": "#8c8861",
                "name": "鶸茶",
                "phonetic": "ひわちゃ"
            },
            {
                "hex": "#82ae46",
                "name": "鶸萌黄",
                "phonetic": "ひわもえぎ"
            },
            {
                "hex": "#404048",
                "name": "黝色",
                "phonetic": "ゆうしょく"
            },
            {
                "hex": "#de9a41",
                "name": "鼈甲色",
                "phonetic": "べっこういろ"
            },
            {
                "hex": "#e0815e",
                "name": "纁",
                "phonetic": "そひ"
            },
            {
                "hex": "#7c6c66",
                "name": "鼯鼠色",
                "phonetic": "むささびいろ"
            }
        ];  
    }
}

export { JapaneseColorDataStore };