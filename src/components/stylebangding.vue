<template>
    <div class="stylebangding">
        <hr>
        <h3>样式绑定</h3>
        <p :style="{ color: activeColor, fontSize: fontSizeNum + 'px' }">
            1. 行内样式绑定
        </p>
        <p :style="objecStyle">
            2. 行内样式绑定-对象语法
        </p>
    </div>

</template>

<script>
export default {
    name: 'stylebangding',
    data() {
        return {
            activeColor: 'red',
            fontSizeNum: 30,
            objecStyle: {
                color: 'blue',
                fontSize: '20px'
            }
        }
    }
}
</script>


<style scoped>
.stylebangding {
    color: green;
}
</style>
