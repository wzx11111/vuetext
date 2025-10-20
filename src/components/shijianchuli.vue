<template>
    <div class="shijianchuli">
        <hr>
        <h3>事件处理</h3>
        <h4>内联事件处理器</h4>
        <button @click="count++">ADD 1</button>
        <p>Conut is : {{ conut }}</p>
        <h4>方法事件处理器</h4>
        <button @click="addCount">add 2</button>
        <p>isis : {{ countNum }}</p>
    </div>
</template>


<script> 
export default {
    data() {
        return {
            count: 0,
            countNum: 0
        }
    },
    methods: {
        addCount() {
            this.countNum += 2;
        },
    }
}

</script>


<style scoped>
.shijianchuli{
color: yellow;
}
</style>