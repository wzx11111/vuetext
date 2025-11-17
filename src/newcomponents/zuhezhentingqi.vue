<template>
    <div class="zuhezhentingqi">
        <h3>组合式----watch侦听</h3>
        <p>{{ count }}</p>
        <button @click="addCount">增加</button>
        <hr>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import { watchCount } from '../utils/watchUtils.js';



const count = ref(0);
const addCount = (e) => {
    console.log(e, '888888888888888');
    count.value++;
};
// watch(count, (newValue, oldValue) => {
//     console.log("new:", newValue, "old:", oldValue,);
// });
watchCount(count);

</script>



<style scoped>
.zuhezhentingqi {
    color: aqua
}
</style>