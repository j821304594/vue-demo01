<template>
  <scroll-bar>
    <div class="logo">
      <img
        src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png"
        width="40" >
    </div>
    <a-menu
      :defaultSelectedKeys="selectItems"
      mode="inline"
      theme="dark"
    >
      <template v-for="(item) in asideMenuConfig">
         <a-menu-item v-if="!item.children" :key="item.id">
            <!-- <router-link
               :to="item.path"
               :key="item.name"
            >
               <a-icon :type="item.icon" />
               <span>{{item.name}}</span>
            </router-link> -->
            <a-icon :type="item.icon" />
            <span>{{item.name}}</span>
          </a-menu-item>
         <a-sub-menu v-else :key="item.id">
            <span slot="title">
               <a-icon :type="item.icon" />
               <span>{{item.name}}</span>
            </span>
            <template v-for="(item) in item.children">
               <a-menu-item  :key="item.id">
                  <router-link
                     :to="item.path"
                     :key="item.name"
                  >
                     <a-icon :type="item.icon" />
                     <span>{{item.name}}</span>
                  </router-link>
               </a-menu-item>
            </template>
         </a-sub-menu>
      </template>
    </a-menu>
  </scroll-bar>
</template>

<script>
import { asideMenuConfig } from '@/config/menu';
import ScrollBar from './ScrollBar';

export default {
   name: 'SideBar',
   components: { ScrollBar },
   props: {},
   data() {
      return {
         asideMenuConfig,
         selectItems: [asideMenuConfig[0].id]
      };
   },
   methods: {

   },
};
</script>

<style lang="scss" scoped>
   .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 64px;
      line-height: 64px;
      background: #002140;
      color: #fff;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      overflow: hidden;
   }
</style>
