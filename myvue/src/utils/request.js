import axios, {Axios} from "axios";

axios.defaults.baseURL = "/api";
// 初始化axios实例
const instance = axios.create({
  baseURL: 'http://api.myvue.cn:8000/',
});

//将token信息添加到请求头
export const $SetToken = (token) =>{
    instance.defaults.headers.common['token'] = token;
}
//get方法
export const $get=async (url,params)=>{
    let {data} =await instance.get(url,{
        params
        })
    return data
}

// post方法
export const $post = async (url,params) => {
        let {data} =await instance.post(url,params)
        return data
}