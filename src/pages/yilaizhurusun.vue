<template>
    <div class="yilaizhurusun">
        <h3>依赖组件孙组件</h3>
        <p>我从子组件接收的值：{{title}}</p>
        <p>我从子组件接收的消息：{{msg}}</p>
        <P>{{ mess }}</P>
        <P>+++++++{{ fullMess }}</P>
    </div>
</template>

<script>
export default {
    name: 'yilaizhurusun',
    data() {
        return {
            fullMess: this.mess2
        }
    },
    props: {
        title: {
            type: String,
            default: '默认值'
        },
        msg: {
            type: String,
            default: '默认值'
        }
    },
    // inject:['mess']
    inject:['mess2'],
}
</script>

<style scoped>


</style>