<template>
    <div class="new-container" v-if="showContent">
        <h1>NEW新组建集合11.13</h1>
        <nav class="navigation">
            <router-link to="/" class="nav-link">返回首页</router-link>
        </nav>
        <hr>
        <Zuhexiangyingshi></Zuhexiangyingshi>
        <Zuhejisuanshuxing></Zuhejisuanshuxing>
        <Zuheshijianchuli></Zuheshijianchuli>
        <Zuhezhentingqi></Zuhezhentingqi>
        <Zuhemobanyingyong></Zuhemobanyingyong>
        <Zusheshengmingzhouqi></Zusheshengmingzhouqi>
        <ZuheProps></ZuheProps>
        <UsePinia></UsePinia>
    </div>
    
</template>


<script>
import Zuhexiangyingshi from '../newcomponents/zuhexiangyingshi.vue'
import Zuhejisuanshuxing from '../newcomponents/zuhejisuanshuxing.vue';
import Zuheshijianchuli from '../newcomponents/zuheshijianchuli.vue';
import Zuhezhentingqi from '../newcomponents/zuhezhentingqi.vue';
import Zuhemobanyingyong from '../newcomponents/zuhemobanyingyong.vue';
import Zusheshengmingzhouqi from '../newcomponents/zuheshengmingzhouqi.vue';
import ZuheProps from '../newcomponents/zuheProps.vue';
import UsePinia from '../newcomponents/usepinia.vue';
export default {
    name: 'new',
    data() {
        return {
            showContent: false,
        };
    },
    components: {
        Zuhexiangyingshi,
        Zuhejisuanshuxing,
        Zuheshijianchuli,
        Zuhezhentingqi,
        Zuhemobanyingyong,
        Zusheshengmingzhouqi,
        ZuheProps,
        UsePinia,
    },
    mounted() {
        setTimeout(() => {
            this.showContent = true;
        }, 0);
    }
}


</script>


<style scoped>
.new-container {
    position: relative;
    z-index: 10;
}

h1 {
    z-index: 11;
    color: aqua;
}

.navigation {
    margin: 20px 0;
    z-index: 11;
}

.nav-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.nav-link:hover {
    background-color: #555;
}
</style>