<template>
    <div class="zuhexiangyingshi">
        <h3>组合式API---响应式</h3>
        <P>{{ msg }}</P>
        <P>{{ asas }}</P>
        <P>{{ state.ok ? "ok1" : "ok2"}}</P>
        <P>{{ msg.split('').reverse().join('') }}</P>
        <P>{{ state.rawHtml }}</P>
        <P v-html="state.rawHtml"></P>
        <hr>
    </div>

</template>


<script setup>
import { ref, reactive } from 'vue';



const msg = ref('hello world');
const asas = ref(122222222);
const state = reactive({
    ok: true,
    rawHtml: "<a href='https://www.baidu.com'>百度</a>"
})
    
</script>

<style scoped>
.zuhexiangyingshi {
    color: yellow;
}
</style>