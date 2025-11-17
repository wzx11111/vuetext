<template>
    <div class="home-container">
        <h1>VUE3教学</h1>
        <nav class="navigation">
            <router-link to="/new" class="nav-link">新组建集合</router-link>
        </nav>

        <hr>
        <Mobanyufa></Mobanyufa>
        <Shuxingbangding></Shuxingbangding>
        <Tiaojianxuanran></Tiaojianxuanran>
        <Liebiaoxuanran></Liebiaoxuanran>
        <Keyguanlizhuangtai></Keyguanlizhuangtai>
        <Shijianchuli></Shijianchuli>
        <Shijianchuancan></Shijianchuancan>
        <Shijianxiushifu></Shijianxiushifu>
        <Shuzubianhuazhence></Shuzubianhuazhence>
        <Jisuanshuxing></Jisuanshuxing>
        <Classbangding></Classbangding>
        <Stylebangding></Stylebangding>
        <Watchzhenting></Watchzhenting>
        <Biaodanshujvbangding></Biaodanshujvbangding>
        <Mobanyinyong></Mobanyinyong>
        <Zujianzucheng></Zujianzucheng>
        <Zujianqiantao></Zujianqiantao>
        <Zujianchuanzhiprops></Zujianchuanzhiprops>
        <PropsjiaoyanA></PropsjiaoyanA>
        <Zujianshijian></Zujianshijian>
        <ZujianshijianVmodel></ZujianshijianVmodel>
        <Chachaoslots></Chachaoslots>
        <Shengmingzhouqi></Shengmingzhouqi>
        <Shengmingzhouqiyingyong></Shengmingzhouqiyingyong>
        <Dongtaizujian></Dongtaizujian>
        <Yibuzujian></Yibuzujian>
        <Yilaizhuruparent></Yilaizhuruparent>
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
import Shijianxiushifu from '../components/shijianxiushifu.vue';
import Shuzubianhuazhence from '../components/shuzubianhuazhence.vue';
import Jisuanshuxing from '../components/jisuanshuxing.vue';
import Classbangding from '../components/classbangding.vue';
import Stylebangding from '../components/stylebangding.vue';
import Watchzhenting from '../components/watchzhenting.vue';
import Biaodanshujvbangding from '../components/biaodanshujvbangding.vue';
import Mobanyinyong from '../components/mobanyinyong.vue';
import Zujianzucheng from '../components/zujianzucheng.vue';
import Zujianqiantao from '../components/zujianqiantao.vue';
import Zujianchuanzhiprops from '../components/zujianchuanzhiprops.vue';
import PropsjiaoyanA from '../components/propsjiaoyanA.vue';
import Zujianshijian from '../components/zujianshijian.vue';
import ZujianshijianVmodel from '../components/zujianshijianVmodel.vue';
import Chachaoslots from '../components/chachaoslots.vue';
import Shengmingzhouqi from '../components/shengmingzhouqi.vue';
import Shengmingzhouqiyingyong from '../components/shengmingzhouqiyingyong.vue';
import Dongtaizujian from '../components/dongtaizujian.vue';
import Yibuzujian from '../components/yibuzujian.vue';
import Yilaizhuruparent from '../components/yilaizhuruparent.vue';
export default {
    name: 'Home',
    components: {
        Mobanyufa,
        Shuxingbangding,
        Tiaojianxuanran,
        Liebiaoxuanran,
        Keyguanlizhuangtai,
        Shijianchuli,
        Shijianchuancan,
        Shijianxiushifu,
        Shuzubianhuazhence,
        Jisuanshuxing,
        Classbangding,
        Stylebangding,
        Watchzhenting,
        Biaodanshujvbangding,
        Mobanyinyong,
        Zujianzucheng,
        Zujianqiantao,
        Zujianchuanzhiprops,
        PropsjiaoyanA,
        Zujianshijian,
        ZujianshijianVmodel,
        Chachaoslots,
        Shengmingzhouqi,
        Shengmingzhouqiyingyong,
        Dongtaizujian,
        Yibuzujian,
        Yilaizhuruparent
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
.navigation{
    margin: 20px 0;
    z-index: 11;
}
.nav-link{
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}
.nav-link:hover{
    background-color: #555;
}
</style>