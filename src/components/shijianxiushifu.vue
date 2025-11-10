<template>
  <div class="shijianxiushifu">
    <hr>
    <h3>时间修饰符</h3>
    <a @click.prevent="click11" href="https://www.baidu.com">百度</a>

    <div @click="clickdiv">
      <p @click.stop="clickp">冒泡测试</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shijianxiushifu',
  data() {
    return {

    }
  },
  methods: {
    click11(e) {
      console.log('点击了百度');

    },

    clickdiv() {
      console.log('点击了div');

    },
    clickp() {
      console.log('点击了p');

    }
  }
}
</script>

<style>
.shijianxiushifu {
  color: red;
}
</style>