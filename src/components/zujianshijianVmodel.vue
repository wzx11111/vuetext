<template>
    <div class="zujianshiJianVmodel">
        <hr>
        <p>组件自定义v-model</p>
        <p>搜索内容：{{ search }}</p>
        <zujianshijianVmodelSearch @searchText="getSearch"></zujianShiJianVmodelSearch>
    </div>
</template>

<script>
import zujianshijianVmodelSearch from '../pages/zujianshijianVmodelSearch.vue';
export default {
    name: "zujianshijianVmodel",
    data() {
        return {
            search: ''
        }
    },
    components: {
        zujianshijianVmodelSearch
    },
    methods: {
        getSearch(data) {
            this.search = data;
            console.log(data, '++++++++++++++');
        }
    }
}
</script>

<style scoped>
.zujianshiJianVmodel {
    color: green;
}
</style>