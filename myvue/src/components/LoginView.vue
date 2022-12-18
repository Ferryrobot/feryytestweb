<template>
  <div class="mian">
    <a-card class="card">
      <div slot="title" class="title">
        <span>欢迎来到林间盏</span>
      </div>
      <a-form
          :label-col="{span: 4}"
          :wrapper-col="{offset: 16}"
          v-bind="layout"
          :model="form"
          :rules="rules"
          @finish="onFinish"
      >
        <a-form-item
            label="用户名"
            name="username">
          <a-input v-model:value="form.username"/>
        </a-form-item>

        <a-form-item
            label="密　码"
            name="password">
          <a-input-password v-model:value="form.password"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>


<script setup>
import {reactive} from 'vue';
import {useRouter} from 'vue-router';
import {$login} from "@/utils/login";

const form = reactive(
    {
      username: "",
      password: ""
    });
let checkUsername = async (_rule, value) => {
  let reg = /^[a-zA-Z0-9]{4,10}$/
  if (value === '') {
    return Promise.reject("用户名不能为空")
  } else if (!reg.test(value)) {
    return Promise.reject("用户名为4—10位的字母或数字")
  } else {
    return Promise.resolve()
  }
};
let checkPassword = async (_rule, value) => {
  let reg = /^[a-zA-Z0-9]{4,10}$/
  if (value === '') {
    return Promise.reject("密码不能为空")
  } else if (!reg.test(value)) {
    return Promise.reject("密码为4—10位的字母或数字")
  } else {
    return Promise.resolve()
  }
};
const rules = {
  username: [
    {
      required: true,
      validator: checkUsername,
      trigger: 'change'
    },
  ],
  password: [
    {
      required: true,
      validator: checkPassword,
      trigger: 'change'
    },
  ],

};
let $router = useRouter();

const onFinish = async (value) => {
  let data = await $login(value)
  let {token} = data
  if (token !== '') {
    $router.push('base/')
  } else {
    console.log(data)
  }
};

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 16
  }
}


</script>

<style lang="scss">
.mian {
  width: 100%;
  height: 100%;
  position: absolute;
  background: cornflowerblue;

  .card {
    width: 450px;
    margin: 200px auto;

    .title {
      font-size: 24px;
      margin-bottom: 10px;
      text-align: center;
    }

  }


}
</style>