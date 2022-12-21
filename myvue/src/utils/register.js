import {$post} from "@/utils/request";
import {message} from "ant-design-vue";

export const $register = async (params)=>{
    let data = await $post('users/register/',params)
    let {result,msg} =data
    if (result){
        message.success(msg)
    }else {
        message.error(msg)
    }
    return data
}