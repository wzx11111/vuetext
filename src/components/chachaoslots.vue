<template>
    <div class="chachaoslots"> 
        <hr>
        <h3>插槽1</h3>
        <slotsBase>
            <div>
                <h4>插槽1标题</h4>
                <p>插槽1内容</p>
            </div>
        </slotsBase>
        <hr>
        <h3>插槽2</h3>
        <slotsxu>
            <template #header>
                <h5>插槽2标题</h5>
            </template>
            <template #content>
                <p>{{ msg }}</p>
            </template>
        </slotsxu>
        <hr>
        <h3>插槽3</h3>
        <slotszaixu>
            <template v-slot:headerer = "slotProps">
                <h3>{{ current }} -- {{ slotProps.msg }}</h3>
            </template>
            <template #mainin = "slotProps">
                <p>{{ slotProps.msg }}</p>
            </template>
        </slotszaixu>
    </div>
</template>



<script>
import slotszaixu from "../pages/slotszaixu.vue";
import slotsBase from "../pages/slotsBase.vue";
import slotsxu from "../pages/slotsxu.vue";

export default {
  name: "chachaoslots",
  data() {
    return {
        msg: 'hello world'
    }
  },
  components: {
    slotsBase,
    slotsxu,
    slotszaixu
  },
}
</script>


<style scoped>
.chachaoslots {
  color: red;
}
</style>