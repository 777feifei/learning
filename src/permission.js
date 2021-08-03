import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken,getRefreshToken} from '@/utils/auth.js'
const whiteList = ['/login']


router.beforeEach(async (to,form,next) => {
    NProgress.start()
    let token = store.getters.token || getToken() ||  getRefreshToken()
  //  console.log('pppppp', getToken());
    if(token) {
        // 已经登录过了的跳登录页 直接条装到后台主页
        if(to.path == '/login') {
            next('/')
            NProgress.done()
        } else {
          // 去的不是登录页就 看有没有拉去过用户信息
          if(!store.getters.userID){      
            await store.dispatch('user/getUserInfos')
            NProgress.done()
            next(to.path)
            
          } else {
            NProgress.done()
            next()
          }
        }
    } else {
      // 白名单免登录
      if(whiteList.includes(to.path)){
        NProgress.done();
        next()
      } else {
        // 去登录页
        next('/login')
        NProgress.done();
       
      }
    }

    
  })
