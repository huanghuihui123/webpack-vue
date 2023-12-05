<template>
  <div :class="$style.page">
    <h2 :class="$style.header">Home page</h2>
    <div :class="$style.content">
      <img :class="$style.img" src="@/assets/image/avatar.jpeg" />
      <video
        :class="$style.video"
        src="@/assets/video/GTA6.mp4"
        controls="controls"
        autoplay="autoplay"
        loop="loop"
        muted="muted"
        preload="auto"
      ></video>
      <div :class="$style.like">
        <span class="iconfont icon-dianzan"></span>
        <span :class="$style.likeNum">10</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('this', this)
  }
}
</script>

<style lang="less" module>
.page {
  background-color: #f5f5f5;
}

.content {
  padding: 0 1.25rem;
}

.header {
  color: red;
  font-size: 1.25rem;
  text-align: center;
  line-height: 2.5rem;
}

.img {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1.25rem;
}

.video {
  display: block;
  width: 100%;
  height: auto;
}

.like {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 2.5rem;
}

.likeNum {
  margin-left: 0.5rem;
  color: #999;
}
</style>
