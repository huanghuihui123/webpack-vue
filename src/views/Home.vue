<template>
  <div>
    <h2 :class="$style.text">Home page</h2>
  </div>
</template>

<script>
export default {
  created () {
    console.log('this', this)
  }
}
</script>

<style  lang="less" module>
.text {
  color: red;
}
</style>
