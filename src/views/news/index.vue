<template>
  <div class="scroll-wrapper">
    <div class="center">
    <van-pull-refresh v-model="downLoading" @refresh="onRefresh" :success-text="refreshSuccessText">
      <van-list v-model="upLoading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <!-- list组件支持上拉加载 -->
        <!-- <van-cell v-for="item in news" :key="item" :title="item"></van-cell> -->
        <div class="news_item">
          <div class="left"> <van-image class="img" fit="cover" src="https://cms-bucket.ws.126.net/2020/0227/b5ddc43dj00q6cxoh0051c0007s00c4c.jpg?imageView&thumbnail=280y436&type=webp" /></div>
          <div class="right"><h3>2018年度工作总结</h3><span>10分钟前</span></div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      upLoading: false, // 是否开启上拉加载
      finished: false, // 是否已经完成全部的数据加载
      news: [],
      refreshSuccessText: '更新成功', //  文本
      downLoading: false // 是否开启下拉刷新
    }
  },
  methods: {
    onLoad () {
      console.log('上拉加载')
    },
    onRefresh () {
      // 触发下拉刷新
      console.log('下拉刷新')
    }
  }
}
</script>

<style lang="scss" scoped>
.center{
  margin-left: 5%;
  width: 90%;
  height: 100%;
  background-color: #fff;
.scroll-wrapper {
  height: 100%;
  overflow-y: auto;
}
.news_item{
  width: 100%;
  height: 100px;
  margin-top: 10px;
  overflow: hidden;
  .left{
    float: left;
    width: 80px;
    height: 88px;
    .img{
      width: 100%;
      height: 100%;
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    float: left;
    h3{

    }
    span{
    }
  }
}
}
</style>
