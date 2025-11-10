<template>
    <div class="propsjiaoyanA">
        <hr>
        <h3>props校验</h3>
        <propsjiaoyanB :title="title" :age="age" :names="names"></propsjiaoyanB>
        <hr>
    </div>
</template>

<script>
import propsjiaoyanB from '../pages/propsjiaoyanB.vue';
export default {
    name: 'propsjiaoyanA',
    data() {
        return {
            title: 'propsjiaoyanA',
            age: 1800,
            names: ['张三', '李四', '王五']
        }
    },
    components: {
        propsjiaoyanB
    }
}
</script>

<style scoped>
.propsjiaoyanA {
    color: palevioletred;
}
</style>