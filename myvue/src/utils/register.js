import {$post} from "@/utils/request";
import {message} from "ant-design-vue";

export const $register = async (params)=>{
    let data = await $post('user/register/',params)
    let {state,msg} =data
    console.log(data)
    if (state){
        message.success(msg)
    }else {
        message.error(msg)
    }
    return data
}