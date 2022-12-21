<template>
  <div class="mian">
    <a-card class="card">
      <div slot="title" class="title">
        <span>注册</span>
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
        <a-form-item
            label="手机号"
            name="mobile">
          <a-input has-feedback v-model:value="form.mobile"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">注册</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>


<script setup>
import {reactive} from 'vue';
import {$register} from "@/utils/register";
import {useRouter} from 'vue-router';

const form = reactive(
    {
      username: "",
      password: "",
      mobile: ""
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
let checkMobile = async (_rule, value) => {
  let reg = /^1[35789]\d{9}$/
  if (value === '') {
    return Promise.reject("手机号不能为空")
  } else if (!reg.test(value)) {
    return Promise.reject("请输入正确的手机号")
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
  mobile: [
    {
      required: true,
      validator: checkMobile,
      trigger: 'change'
    },
  ],
};
let $router = useRouter();

const onFinish = async (value) => {
  let data = await $register(value)
  let {result, msg} = data
  if (result) {
    $router.push('login/')
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