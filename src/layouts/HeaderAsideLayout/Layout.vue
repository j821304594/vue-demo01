<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <nav-bar />
      <app-main />
    </div>
  </div>
</template>

<script>
import { NavBar, SideBar, AppMain } from './components';

export default {
   name: 'Layout',
   components: {
      NavBar,
      SideBar,
      AppMain,
   },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.sidebar-container {
  width: 240px;
  background-color: #001529;
}

.main-container {
  flex: 1;
  min-height: 100vh;
  transition: margin-left 0.28s;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
}
</style>
