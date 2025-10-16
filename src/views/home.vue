<template>
    <div class="home-container">
        <h1>VUE3教学</h1>
        <hr>
        <Mobanyufa></Mobanyufa>
        <Shuxingbangding></Shuxingbangding>
        <Tiaojianxuanran></Tiaojianxuanran>
    </div>
</template>

<script>
import Mobanyufa from '../components/mobanyufa.vue';
import Shuxingbangding from '../components/shuxingbangding.vue';
import Tiaojianxuanran from '../components/tiaojianxuanran.vue';

export default {
    name: 'Home',
    components: {
        Mobanyufa,
        Shuxingbangding,
        Tiaojianxuanran
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