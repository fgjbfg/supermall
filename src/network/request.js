import axios from "axios";

export function request(config) {
    //创建axios实例对象
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 5000
    })

    //axios拦截器
    //请求
    instance.interceptors.request.use(config => {
        return config;
    })

    //响应
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
    })


    //发送真正的网络请求
    return instance(config);
}