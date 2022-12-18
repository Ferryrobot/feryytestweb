<template>


  <span> 出发地：<a-input style="width: 80px" v-model:value="startcity" placeholder="深圳"/></span>
  <span style="margin-left: 50px">目的地：<a-input style="width: 80px;" v-model:value="endcity" placeholder="西安"/></span>
  <a-button style="margin-left: 50px" type="primary" @click="Search">查询</a-button>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>
</template>

<script>
import axios from "axios"
import {defineComponent, ref} from 'vue';

export default {
  name: "train",
  data() {
    return {
      startcity: "深圳",
      endcity: "西安",
      "train_list": [],
      columns:[
            {
          title: '列车 ID',
          dataIndex: 'train_id',
          key: 'train_id',
          width: 80,
        },
        {
          title: '车次',
          dataIndex: 'station_train_code',
          key: 'station_train_code',
          width: 60,
        },
           {
          title: '出发站',
          dataIndex: 'from_station',
          key: 'from_station',
          width: 80,
        },
          {
          title: '目的站',
          dataIndex: 'to_station',
          key: 'to_station',
          width: 80,
        },
           {
          title: '出发时间',
          dataIndex: 'start_time',
          key: 'start_time',
          width: 80,
        },
           {
          title: '到达时间',
          dataIndex: 'stop_time',
          key: 'stop_time',
          width: 80,
        },
           {
          title: '是否跨日（0：否；1：是）',
          dataIndex: 'day_diff',
          key: 'day_diff',
          width: 150,
        },
      ],
      data:[]

    }
  },

  methods: {
    Search() {
      axios.get(
          "http://apia.yikeapi.com/train/?start_station=&stop_station=&appid=33256769&appsecret=b5ppAfJl",
          {
            params: {
              start_station: this.startcity,
              stop_station: this.endcity

            }
          }
      ).then((res) => {

           this.data = res.data.list,
            this.startcity = "",
            this.endcity = ""
          }
      )
    }
  },
  mounted() {
    this.Search()
  }


}
</script>


<style>

.a {
  margin-top: 10px;
}
</style>