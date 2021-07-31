
import router, { resetRouter } from '@/router'
const state = {
  nav_list:[],
  btn_list: []
}
const mutations = {
   SET_NAVLIST(state,change){
    state.nav_list = change
   },
   SET_BTNLIST(state,change){
    state.btn_list = change
   },

}

const actions = {
 async rendererMenu({commit},menulist){
  const asyncRoutes = filterAsyncMenu(menulist)
   commit('SET_NAVLIST',asyncRoutes)
     // 添加之前要重置一下路由
     resetRouter()
     asyncRoutes.forEach(e => {
      router.addRoute('/',e)
    })
  }
}
/*
* @params permission 后台返回的列表
* @params $pid 父级id 
*/ 
function filterAsyncMenu(permission,$pid = 0){
  const routes = [] // 渲染后的菜单
  permission.forEach(route => {
    if(route.parent_id == $pid) {
      const p = {
        path:route.route,
        name:route.permission_mark,
        redirect:route.redirect? route.redirect:'',
        component:view(route.component),
        hidden:route.hidden ==1? false: true,
        meta:{
          icon: route.icon,
          title: route.permission_name,
        },
      }
      let children = filterAsyncMenu(permission,route.id )
      let childNum =  notHiddenMenusNumber(children)
      // ??????
      if(childNum) {
        p.children = children
        if (childNum >= 1) {
          p.alwaysShow = true
        }
      } 
      routes.push(p)
    }
    
    
  })
  return routes;
}
function view(route){
  if(route == 'layout') {
    return (resolve) => require(['@/layout/Admin'], resolve)
  } else {
    return (resolve) => require([`@/views/${route}`], resolve) 
  }
}
function notHiddenMenusNumber(menus) {
  return menus.filter(menu => {
    return menu.hidden === false
  }).length
}
export default {
    namespaced: true, // 命名空间
    state,
    mutations,
    actions 
}