<template>
  <div class="container">
    <van-tabs swipeable v-model="activeIndex">
      <van-tab v-for="item in 6" :key="item" title="tab">内容</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'NationalCapital',
  data () {
    return {
      activeIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
