import {$post, $SetToken} from "@/utils/request";
import {message} from "ant-design-vue";
//登录api

export const $login = async (params) => {
    //对密码加密
    // params.password = md5(md5(params.password).split('').reverse().join(''))
    let data = await $post('api-token-auth/', params)
    let {token} = data
    // console.log(data)
    if (token !== '') {
        let {token} = data
        //将token信息保存
        sessionStorage.setItem('token', token)
        //在请求头中更新token
        $SetToken(token)


    } else {
        message.error("登录失败")
    }
    return data
}