import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import {getToken,getRefreshToken} from '@/utils/auth.js'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

const service = axios.create({
    // 请求超时时长
    timeout: 5000,
    // 基地址 /admin
    baseURL: process.env.VUE_APP_BASE_API,
  });

service.interceptors.request.use(
  
  config => {
    // NProgress.start();
    let token  = store.getters.token || JSON.parse(getToken())
    if (token) {
      config.headers['Authorization'] = 'Bearer' + " " + token
  }
    return config;
  },
  error => {
    // NProgress.done();
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
  // 错误拦截
    // NProgress.done();
    if(!response.data.success) {
      Message({
        message: response.data.msg,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return response.data;
  },
  error => {
    console.log('error',error);
    Message({
      message: '身份验证失败！',
      type: 'error',
      duration: 5 * 1000
    })
    // NProgress.done();
    return Promise.reject(error)
  }
)

export default service