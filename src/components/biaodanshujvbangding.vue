<template>
  <div class="biaodanshujvbangding">
    <hr>
    <h2>表单绑定数据</h2>
    <form>
      <input type="text" v-model.lazy="lazya"></input>
      <p>{{ lazya }}</p>
      <p>Message is: {{ message }}</p>
      <input v-model="message" placeholder="edit me" />
      <br>
      <input type="checkbox" id="checkbox" v-model="checked"></input>
      <label for="checkbox">{{ checked }}</label>
    </form>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'biaodanshujvbangding',
  data() {
    return {
      lazya: '5555555555',
      message: '',
      checked: true
    }
  }
}
</script>

<style scoped>
.biaodanshujvbangding {
  color: white;
}
</style>