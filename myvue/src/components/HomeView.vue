<template>
  <a-menu style="background-color: #8fd3f4;height: 50px" v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="a">
      <template #icon>
      </template>
      <img style="width: 100px;height: 30px" src="../assets/a.jpg" alt="">
    </a-menu-item>
    <a-menu-item key="b">
      <template #icon>
      </template>
      发现音乐
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
      </template>
      <template #title>我的音乐</template>
      <a-menu-item-group title="睡觉">
        <a-menu-item key="setting:1">轻音乐</a-menu-item>
        <a-menu-item key="setting:2">ASMR</a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="收藏">
        <a-menu-item key="setting:3">收藏</a-menu-item>
        <a-menu-item key="setting:4">歌单</a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
     <a-menu-item key="P">
      <template #icon>
      </template>
       <a href="/base/weather">天气</a>

    </a-menu-item>
    <a-menu-item key="d">
      <input style="height: 30px" type="text" placeholder="歌曲名称">
      搜索
    </a-menu-item>

    <a-menu-item style="margin-left: 750px" key="e">
      <a href="/login">登录</a>

    </a-menu-item>
    <a-menu-item href="/register/" key="g">
      <a href="/register">注册</a>
    </a-menu-item>
  </a-menu>
<div style="margin-top: 15px">
  <a-row>
    <a-col :span="16" :offset="4">
      <img style="height: 650px;width: 1000px" src="../assets/b.jpg" alt="">
      </a-col>
    </a-row>
</div>
  <div>
  <a-space direction="vertical" :size="12">
    <a-date-picker show-time placeholder="Select Time" @change="onChange" @ok="onOk" />
    <a-range-picker
      :show-time="{ format: 'HH:mm' }"
      format="YYYY-MM-DD HH:mm"
      :placeholder="['Start Time', 'End Time']"
      @change="onRangeChange"
      @ok="onRangeOk"
    />
  </a-space>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onChange = (value, dateString) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    };
    const onOk = value => {
      console.log('onOk: ', value);
    };
    const onRangeChange = (value, dateString) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    };
    const onRangeOk = value => {
      console.log('onOk: ', value);
    };
    return {
      onChange,
      onOk,
      onRangeChange,
      onRangeOk,
    };
  },
});
</script>




