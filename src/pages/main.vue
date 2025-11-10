<template>
  <div class="main">
    <h3></h3>
    <Article></Article>
    <Article></Article>
  </div>
</template>

<script>
import Article from '../pages/article.vue';

export default {
  name: 'main',
  components: {
    Article
  }
}
</script>

<style scoped>
.main {
  float: left;
  width: 70%;
  height: 400px;
  border: 5px solid #999;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 30px;
}
</style>