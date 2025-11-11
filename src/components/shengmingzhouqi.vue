<template>
    <div class="shengmingzhouqi">
        <hr>
        <h3>组成生明周期</h3>
        <p>{{ msg }}</p>
        <button @click="upadteMsg" >更新数据</button>
        <hr>
    </div>
</template>

<script> 
export default { 
    name: "shengmingzhouqi",
    data() { 
        return { 
            msg: "更新之前"
        }
    },
    beforeCreate() { 
        console.log("组成创建之前");
    },
    created() { 
        console.log("组成创建之后");
    },
    beforeMount() { 
        console.log("组成渲染之前");
    },
    mounted() { 
        console.log("组成渲染之后");
    },
    beforeUpdate() { 
        console.log("组成更新之前");
    },
    updated() { 
        console.log("组成更新之后");
    },
    beforeUnmount() { 
        console.log("组成销毁之前");
    },
    unmounted() { 
        console.log("组成销毁之后");
    },
    
}
</script>
<style scoped>
.shengmingzhouqi {

    color: aqua;

}
</style>