import { defineStore } from 'pinia';
import { ref,computed } from 'vue';
import axios from 'axios';


export const useCounterStore = defineStore('counter', () => { 
    const count = ref(0);
    const increment = () => {
      count.value++;
    }
    const doubleCount = computed(() => {
        return count.value * 2;
    });
    const list = ref([]);

    const getList = async () => {
        const res = await axios.get(
        "https://s5.360game.360.cn/to5/mini/v21/category.html?cver=1.0.0.0000"
        );
        list.value = res.data.data;
    };
    return {
        count,
        increment,
        doubleCount,
        list,
        getList 
    };
});