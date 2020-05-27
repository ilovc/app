<template>
  <div class="container">
    <div class="top"></div>
    <div class="center">
      <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image class="img" fit="cover" src="http://i2.chinanews.com/simg/cmshd/2018/09/28/908f9fa232f241299ba3576fa81ce731.jpg" />
        </van-swipe-item>
          <van-swipe-item>
             <van-image class="img" fit="cover" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590572798394&di=998800f492d66f222fd5e90f8c27d5ec&imgtype=0&src=http%3A%2F%2Fchina.cnr.cn%2Fnews%2F20181027%2FW020181027309432881348.jpg" />
          </van-swipe-item>
      </van-swipe>
    </div>
    <div class="news">News</div>
    </div>
    <div class="unknow">Tableau应该是</div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.container{
  background-color: #f8f8f8;
.top{
  position: absolute;
  left: 0;
  top: 0;
  height: 20%;
  width: 100%;
  background-color: #ea1505;
  margin-top: -5px;
}
.center{
  margin-left: 5%;
  width: 90%;
.swiper{
  border-radius: 10px;
  overflow: hidden;
.my-swipe .van-swipe-item {
  width: 100%;
  height: 150px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    .img{
      width: 100%;
      height: 100%;
    }
  }
  }
  .news{
    width: 100%;
    height: 100px;
    border-radius: 10px;
    margin: 20px 0;
    background-color: #ee1b0c;
  }
}
.unknow{
  width: 100%;
  height: 280px;
  background-color: rgb(204, 164, 189);
}
}
</style>
