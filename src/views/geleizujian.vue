<template>
    <div class="divdiv" v-if="showContent">
        <div class="title">各类组件+++++</div>
        <nav class="navigation">
            <router-link to="/" class="nav-link">跳转new</router-link>
        </nav>
        <hr>
        <Swiper></Swiper>
    </div>
</template>

<script>
import Swiper from '../newnewcomponents/swiper.vue'
export default {
    name: 'geleizujian',
    components: {
        Swiper,
    },
    data() {
        return {
            showContent: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showContent = true;
        }, 0);
    }
}
</script>

<style scoped>
.divdiv {
    position: relative;
    z-index: 11;
}

.title {
    color: red;
    margin-bottom: 20px;
}

.navigation {
    margin: 20px 0;
    z-index: 11;
}

.nav-link {
    display: inline-block;
    padding: 10px 30px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.3);
}
</style>