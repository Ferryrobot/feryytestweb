import {$post, $SetToken} from "@/utils/request";
import {message} from "ant-design-vue";
//登录api

export const $login = async (params) => {

    let data = await $post('users/login/', params)
    let {response,msg,result} =data
    let {token} = response
    if (result) {
        //将token信息保存
        sessionStorage.setItem('token', token)
        //在请求头中更新token
        $SetToken(token)
    } else {
        message.error(msg)
    }
    return data
}