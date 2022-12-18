<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu   v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1" >
          <router-link to="/base/train">火车查询</router-link>
        </a-menu-item>
        <a-menu-item key="2"  >
       <router-link to="/base/weather">天气查询</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>

              歌单
            </span>
          </template>
          <a-menu-item key="3">新建歌单</a-menu-item>
          <a-menu-item key="4">我的收藏</a-menu-item>
          <a-menu-item key="5">我的歌单</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <span>歌曲类型</span>
            </span>
          </template>
          <a-menu-item key="6">流行</a-menu-item>
          <a-menu-item key="8">乡村</a-menu-item>
          <a-menu-item key="15">摇滚</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <span>关于</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>

      <a-layout-header style="background-color: #FFFFFF">

      <h3 style="text-align: center">Ferry</h3>


      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item style="text-align: left" v-model:value="user"></a-breadcrumb-item>
          <a-breadcrumb-item v-model:value="bill"></a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '550px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2022 Created by Ferry
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import Train from "@/components/TrainView";
import Weather from "@/components/Weather";

export default defineComponent({
  components: {
    Weather,
    Train,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  data() {

    return {
      collapsed: ref(false),
      selectedKeys: ref(['']),
    };
  },




});



</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
#app{
  text-align: left;
}


</style>