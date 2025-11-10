<template>
  <div class="shijianchuancan">
    <hr>
    <h3>时间传参</h3>
    <button @click="count1">add 454</button>
    <p>count is {{ countNum }}</p>

    <button @click="newCount('hello syxy')">newCount 222</button>
  </div>
</template>

<script>
export default {
  name: 'Shijianchuancan',
  data() {
    return {
      countNum: 0,
      newCount:20,
    }
  },
  methods: {
    count1() {
      this.countNum += 454;
      console.log(e,'4545454545454545454');
      console.log(e.target,'e.targete.targete.targete.targete.target');
      console.log(e.currentTarget,'e.currentTarget,e.currentTarget,e.currentTarget,e.currentTarget,');
      console.log(e.target.innerHTML,'e.target.innerHTML,e.target.innerHTML,e.target.innerHTML,e.target.innerHTML,');
      e.target.innerHTML = "添加添加" + this.countNum;
      this.countNum += 454
      
      
      
    },
    newCount(){
      console.log(msg,'msgmsgmsg');
      

    }
    }
  }
</script>

<style>
.shijianchuancan {
  color: steelblue;
}
</style>