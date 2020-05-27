<template>
  <div class="container">
    <van-nav-bar class="navbar" @click-right="onClickRight" v-if="showNavBar" title="今日国资">
      <template #right>
    <van-icon name="chat-o" size="18" />
  </template>
    </van-nav-bar>
    <div class="my-wrapper" :class="{ noTop: !showNavBar }">
      <router-view></router-view>
    </div>
    <van-tabbar active-color="#d30d0d" route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/news" icon="newspaper-o">国资大事</van-tabbar-item>
      <van-tabbar-item to="/data" icon="notes-o">国资数据</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    showNavBar () {
      return this.$route.path !== '/user'
    }
  },
  methods: {
    onClickRight () {
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  .van-hairline--bottom::after{
    border-bottom-width:0
  }
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>
