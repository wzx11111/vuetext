<!-- mobanyufa.vue -->
<template>
  <div class="mobanyufa">
    <h3>模板语法</h3>
    <p>{{ msg }}</p>
    <p>{{ number +100 }}</p>
    <div>{{ !ok ? "ok1" : "ok2" }}</div>
    
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>
  </div>
</template>

<script>
export default {
  name: "mobanyufa",
  data() {
    return {
      msg: "adadadadad",
      number : 1,
      ok: true,
      rawHtml: "<a href='https://www.baidu.com'>百度</a>"
    }
  },
}
</script>

<style scoped>
.mobanyufa {
    color: yellow;
}
</style>