<template>
  <a-row>
    <a-col :span="8" :offset="8">
      <a-input-search
          v-model:value="city"
          placeholder="城市名称"
          enter-button
          @search="onSearch"
      />
    </a-col>
  </a-row>
  <a-row class="a">
    <a-col :span="12" :offset="6">
      <a-table :columns="columns" :data-source="data">
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
            <a>{{ text }}</a>
          </template>
        </template>
      </a-table>
    </a-col>
  </a-row>
</template>


<script>
import axios from "axios"
import {defineComponent} from 'vue';

export default {
  name: "weather",
  data() {
    return {
      "weather_list": [],
      city: "东莞",
      columns: [
        {
          title: '日期',
          dataIndex: 'date',
          key: 'date',
          width: 140,
        },
        {
          title: '天气',
          dataIndex: 'wea',
          key: 'wea ',
          width: 100,
        },
        {
          title: '低温',
          dataIndex: 'tem2',
          key: 'tem2',
          ellipsis: true,
        },
        {
          title: '高温',
          dataIndex: 'tem1',
          key: 'tem1',
          ellipsis: true,
        },
        {
          title: '星期',
          dataIndex: 'week',
          key: 'week',
          ellipsis: true,

        },
        {
          title: '风力',
          dataIndex: 'win_speed',
          key: 'win_speed',
          ellipsis: true,
        },
        {
          title: '湿度',
          dataIndex: 'humidity',
          key: 'humidity',
          ellipsis: true,
        },
      ],
      data: []


    }
  },
  methods: {
    onSearch() {
      axios.get("https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=33256769&appsecret=b5ppAfJl&city=",
          {
            params: {
              city: this.city
            }
          }).then((res) => {
        // this.weather_list = res.data.data
        this.data = res.data.data
        this.city = ""
      })
    }

  },
  mounted() {
    this.onSearch()

  }

}
</script>


<style>

.a{
  margin-top: 10px;
}
</style>