<template>
    <div class="zuchuanfu">
        <h3>child</h3>
        <button @click="clickmsg">click me</button>
    </div>
</template>

<script>
export default {
    name: 'zichuanfu',
    data() {
        return {
            msg: '这是子组件'
        }
    },
    methods: {
        clickmsg() {
            this.$emit('someEvent', this.msg);
        }
    }
}
</script>

<style scoped>

</style>