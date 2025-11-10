<template>
    <div class="jisuanshuxing">
        <hr>
        <h3>计算属性</h3>
        <p>{{ content.name }}</p>
        <p>{{ content.text.length > 0 ? "yes" : "no" }}</p>
        <p>{{ content.results.length > 0 ? (content.text.length > 0 ? "yes" : "555555555555") : "22222222" }}</p>
        <p>{{ isResults }}</p>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'jisuanshuxing',
    data() {
        return {
            content: {
                name: 'abcccccccccccccccccccccccccc',
                text: ["1", "2", "3"],
                text1: ["1", "2", "3"],
                arr: [{ name: '张三', id: 1 }, { name: '李四', id: 2 }, { name: '王五', id: 3 }],
                results: [
                    {
                        "gkey": "102094960",
                        "qcmsint1": "0",
                        "w64": -1,
                        "gtype": "3",
                        "title": "双人游戏大全",
                        "url": "http://360game.360.cn/flash/102094960.html",
                        "gdata": "{\"type\":\"flashgame\",\"appid\":\"102094960\"}",
                        "name": "双人游戏大全",
                        "img": "//p0.qhimg.com/d/appstorage/74fcbb1da492f34b5ba49d99549afba0.png"
                    },
                    {
                        "gkey": "102144745",
                        "qcmsint1": "0",
                        "w64": -1,
                        "gtype": "3",
                        "title": "餐厅游戏大全",
                        "url": "http://360game.360.cn/flash/102144745.html",
                        "gdata": "{\"type\":\"flashgame\",\"appid\":\"102144745\"}",
                        "name": "餐厅游戏大全",
                        "img": "//p2.qhimg.com/t01c4a2f17a198def57.png"
                    },
                    {
                        "gkey": "102144642",
                        "qcmsint1": "0",
                        "w64": -1,
                        "gtype": "3",
                        "title": "火柴人游戏合集",
                        "url": "http://360game.360.cn/flash/102144642.html",
                        "gdata": "{\"type\":\"flashgame\",\"appid\":\"102144642\"}",
                        "name": "火柴人游戏合集",
                        "img": "//p1.qhimg.com/t0147f6ec029fefe8d7.png"
                    }
                ]
            }
        };
    },
    computed: {
        isResults() {
            return this.content.results.length > 0 ? (this.content.text.length > 0 ? "yes" : "89898989") : "22222222";
        },
        methods: {
            isData() {
                return this.content.results.length > 0 ? (this.content.text.length > 0 ? "yes" : "777777777") : "22222222";
            }
        }
    }
};
</script>


<style scoped>
.jisuanshuxing {
    color: red;
}
</style>