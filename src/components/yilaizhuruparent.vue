<template>
    <div class="yilaizhuruparent">
        <h3>依赖组件父组件</h3>
        <P>{{ msg }}</P>
        <yilaizhuruchild fuqin="父亲的财产"></yilaizhuruchild>
    </div>
</template>

<script>
import yilaizhuruchild from '../pages/yilaizhuruchild.vue';
export default {
    name: '27yilaizhuruparent',
    data() {
        return {
            msg: '我是父组件',
        }
    },
    components: {
        yilaizhuruchild,
    },
    provide() {
        return {
            mess2: this.msg
        }
    },


}
</script>
<style scoped>

</style>