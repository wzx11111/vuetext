<template>
    <div class="home-container">
        <h1>VUE3教学</h1>
        <hr>
        <Mobanyufa></Mobanyufa>
        <Shuxingbangding></Shuxingbangding>
        <Tiaojianxuanran></Tiaojianxuanran>
        <Liebiaoxuanran></Liebiaoxuanran>
        <Keyguanlizhuangtai></Keyguanlizhuangtai>
        <Shijianchuli></Shijianchuli>
        <Shijianchuancan></Shijianchuancan>
    </div>
</template>

<script>
import Mobanyufa from '../components/mobanyufa.vue';
import Shuxingbangding from '../components/shuxingbangding.vue';
import Tiaojianxuanran from '../components/tiaojianxuanran.vue';
import Liebiaoxuanran from '../components/liebiaoxuanran.vue';
import Keyguanlizhuangtai from '../components/keyguanlizhuangtai.vue';
import Shijianchuli from '../components/shijianchuli.vue';
import Shijianchuancan from '../components/shijianchuancan.vue';

export default {
    name: 'Home',
    components: {
        Mobanyufa,
        Shuxingbangding,
        Tiaojianxuanran,
        Liebiaoxuanran,
        Keyguanlizhuangtai,
        Shijianchuli,
        Shijianchuancan
    },

}
</script>

<style scoped>
.home-container{
    position: relative;
    z-index: 10;
}
h1{
    z-index: 11;
    color: aqua;
}
</style>