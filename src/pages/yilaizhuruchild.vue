<template>
    <div class="yilaizhuruchild"></div>
    <h3>依赖组件子组件</h3>
    <p>我从父组件接收的财产是：{{fuqin}}</p>
    <yilaizhurusun :title ="fuqin" :msg="msgggggg"></yilaizhurusun>
</template>

<script>
import yilaizhurusun from './yilaizhurusun.vue';

export default {
    name: 'yilaizhuruchild',
    data() {
        return {
            msgggggg:  'english'
        }
    },
    components: {
        yilaizhurusun,
    },
    props: {
        fuqin: {
            type: String,
            default: '1000000',
        }
    },
    // props: ['fuqin']
}
</script>

<style scoped>
.yilaizhuruchild{
    color: yellow
}
</style>