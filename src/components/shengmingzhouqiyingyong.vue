<template>
    <div class="shengmingzhouqiyingyong">
        <h2>生明周期的应用</h2>
        <p>通过ref获取元素的dom</p>
        <p ref="name">前端开发</p>
        <p>模拟网络请求渲染数据</p>
        <ul>
            <li v-for="(value, index) in results" :key="index">
                <h3>{{ value.title }}</h3>
                <P>{{ value.gkey }}</P>
                <img :src="value.img" :alt="value.title">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "shengmingzhouqiyingyong",
    data() {
        return {
            results: [],
        };
    },
    beforeCreate() {
        console.log(this.$refs.name, "beforeCreate");
    },
    created() {
        console.log(this.$refs.name, "created");
        
    },
    beforeMount() {
        console.log(this.$refs.name, "beforeMount");
    },
    mounted() {
        console.log(this.$refs.name, "mounted");
        this.results = [
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
            },
        ];
    },


};
</script>

<style scoped>
.shengmingzhouqiyingyong {
    color: green
}
</style>