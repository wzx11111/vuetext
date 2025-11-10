<template>
  <div class="child">
    <h3>child</h3>
    <p>{{ message }}</p>
    <p>{{ age }}</p>
    <p v-for="(item, index) in names" :key="index">{{ item }}</p>
    <p>{{ userInfo.title }}</p>
    <p>{{ userInfo.id }}</p>
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {};
  },
  props: ["message", "age", "names", "userInfo"],
};
</script>

<style scoped>
.child {
  color: blue;
}
</style>