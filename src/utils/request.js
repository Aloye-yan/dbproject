import axios from "axios";

const server = axios.create({
    timeout:5000,
    // baseUrl:"",
    withCreadentials:true,
})

// 请求拦截器
server.interceptors.requst.use((config)=>{
    if(config.method = "get"){
        config.params = {...config.data};
        return config;
    }
},(err)=>{
    return Promise.reject(err);
})

// 响应拦截
server . interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})
export default server;