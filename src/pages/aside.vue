<template>
  <div class="aside">
    <!-- <h3>aside</h3> -->
    <Item></Item>
    <Item></Item>
    <Item></Item>
  </div>
</template>

<script>
import Item from '../pages/item.vue';

export default {
  name: "aside",
  components: {
    Item
  }
};
</script>

<style scoped>
.aside {
  float: right;
  width: 30%;
  height: 400px;
  border: 5px solid #999;
  box-sizing: border-box;
  margin-bottom: 30px;
}
</style>