import {$post, $SetToken} from "@/utils/request";
import {message} from "ant-design-vue";
//登录api

export const $login = async (params) => {

    let data = await $post('users/login/', params)
    let {response,msg,result} =data
    let {username,token} = response
    if (result) {
        //将token信息保存
        sessionStorage.setItem('token', token)
        // 将用户信息缓存
        sessionStorage.setItem('username',username)
        //判断是否保存用户信息，remember=true,将信息保存在localStorage中
        if (params.remember){
            localStorage.setItem('remember',params.remember)
            localStorage.setItem('username',params.username)
            localStorage.setItem('password',params.password)
        }

        //在请求头中更新token
        $SetToken(token)
    } else {
        message.error(msg)
    }
    return result
}
// 设置自动登录api
export const $autologin=async ()=>{
    let username = localStorage.getItem('username')
    let password = localStorage.getItem('password')
    let res =await $login({username,password})
    console.log(res)
    return res
}