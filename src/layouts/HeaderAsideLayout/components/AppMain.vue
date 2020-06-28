<template>
  <section class="app-main">
    <transition
      name="fade"
      mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
   name: 'AppMain'
};
</script>
<style lang="less" scoped>
  .app-main {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex: 1;
  }
</style>