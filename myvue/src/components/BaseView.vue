<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <span v-if="collapsed"><customer-service-outlined/></span>
        <span v-else>我的歌单</span>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <send-outlined/>
          <!--          <span><a style="color: rgba(255, 255, 255, 0.65);;-->
          <!--    background-color: transparent;" key="1-1" href="/base/train">火车查询</a></span>-->
          <span @click="clicktrain">火车查询</span>
        </a-menu-item>
        <a-menu-item key="2">

          <cloud-outlined/>

          <!--          <span key="2-1"><a style="color: rgba(255, 255, 255, 0.65);-->
          <!--    background-color: transparent;" href="/base/weather">天气查询</a></span>-->
          <span @click="clickweather">天气查询</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <play-circle-outlined/>
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
            <menu-unfold-outlined/>
            <span>
              <span>歌曲类型</span>
            </span>
          </template>
          <a-menu-item key="6">流行</a-menu-item>
          <a-menu-item key="8">乡村</a-menu-item>
          <a-menu-item key="15">摇滚</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <question-outlined/>
          <span>关于</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>

      <a-layout-header class="header">

        <a-menu class="nav" v-model:selectedKeys="current" mode="horizontal" theme="dark">
          <a-menu-item key="h1">
            <template #icon>
              <bell-outlined />
            </template>
            消息
          </a-menu-item>
          <a-menu-item key="h2">
            <template #icon>
              <question-circle-outlined />
            </template>
            帮助
          </a-menu-item>
          <a-sub-menu key="h3">
            <template #icon>
              <user-outlined />
            </template>
            <template #title>{{username}}</template>
            <a-menu-item-group >
              <a-menu-item key="setting:1">个人中心</a-menu-item>
              <a-menu-item key="setting:2">安全登录</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group >
              <a-menu-item key="setting:4" @click="logout">注销</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
        </a-menu>


      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item style="text-align: left" v-model:value="user"></a-breadcrumb-item>
          <a-breadcrumb-item v-model:value="bill"></a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '580px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center ">
        MY MUSIC ©2022 Created by Ferry
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup>
import {
  UserOutlined,
  CloudOutlined,
  SendOutlined,
  PlayCircleOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  CustomerServiceOutlined,
    BellOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons-vue';
import {ref} from 'vue';
import {useRouter} from "vue-router";

let $router = useRouter()
let username = sessionStorage.getItem('username')
let current = ref([''])
let collapsed = ref(false)
let selectedKeys = ref([''])
let clickweather = () => {
  $router.push('/base/weather')
}
let clicktrain = () => {
  $router.push('/base/train')
}


let logout = async ()=>{
  $router.push('/')
  sessionStorage.clear()
  localStorage.clear()
}
</script>

<style lang="scss">
.layout {
  height: 100vh;

  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;

    span {
      text-align: center;
      font-size: 20px;
      color: #FFFFFFA6;
      margin-left: 5px;
    }
  }

  .header{
    background: #001529;
    display: flex;
    justify-content: right;
    .nav{

    }
  }
}

</style>