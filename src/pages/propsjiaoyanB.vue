<template>
    <div class="propsjiaoyanB">
        <h3>propsjiaoyanB</h3>
        <p>{{ title }}</p>
        <p>{{ age }}</p>
        <p v-for="(item, index) in names" :key="index">{{ item }}</p >
    </div>
</template>

<script>
export default {
    name: "propsjiaoyanB",
    data() {
        return {
            name: "张三",
        };
    },
    props: {
        title: {
            type: [String, Number,Array,Object,Boolean],
            required: true,
        },
        age: {
            type: Number,
            default: 185,
        },
        names: {
            type: Array,
            default() {
                return ["+++++++++++++++++++++"];
            },
        },
    },
};
</script>

<style scoped>
.propsjiaoyanB {
    color: red;
}
</style>