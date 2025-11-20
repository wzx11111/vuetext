<template>
    <div class="use-pinia"> 
        <h3>pinia简单使用</h3>
        <p>当前计数: {{ counterStore.count }}</p>
        <button @click="counterStore.increment">增加</button>
        <p>双倍计数: {{ counterStore.doubleCount }}</p>
        <ul>
            <li v-for="(value ,index) in counterStore.list.slice(0,5)" :key="index">
                <p>{{ value.name }}</p>
                <img :src="value.img" :alt="value.name">
            </li>
        </ul>
        <nav class="navigation">
      <router-link to="/geleizujian" class="nav-link">跳转给类组件</router-link>
    </nav>
    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
import { onMounted } from 'vue';
const counterStore = useCounterStore();

console.log(counterStore, '55555555555555555');

onMounted(() => {
    counterStore.getList();
});
</script>


<style scoped>
.use-pinia {
    color: aquamarine;
}
.divdiv {
  position: relative;
  z-index: 11;
}
.title {
  color: red;
  margin-bottom: 20px;
}
.navigation {
  margin: 20px 0;
  z-index: 11;
}
.nav-link {
  display: inline-block;
  padding: 10px 30px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>