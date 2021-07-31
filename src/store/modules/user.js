import { go, getUserinfo } from '@/api/user.js'
import { Message } from 'element-ui'
import {setToken,removeToken} from '@/utils/auth.js'
const state = {
    token: '',
    userInfo: {},
    userID: '',
    
}
const mutations = {
    // 添加token
    SET_TOKEN(state, change) {
        state.token = change
    },
    // 添加 用户信息
    SET_USERINFO(state, change) {
        state.userInfo = change
        state.userID = change.id
    },

}

const actions = {
    async login({ commit }, data) {
        const res = await go(data);
        let { data: { token, refresh_token}, msg, success } = res
        if (success) {
            Message({
                message: msg,
                type: 'success',
                duration: 3 * 1000
            })
            commit('SET_TOKEN', token)
            setToken(token, refresh_token)

        }

    },
    async getUserInfos({ commit,dispatch  }) {
        const res = await getUserinfo();
        const {data:{permission_btn_list,permission_menu_list,userinfo},msg,success,} = res
        if(success) {
           commit('SET_USERINFO', userinfo)
           await dispatch('menu/rendererMenu', permission_menu_list, { root: true })
        }


    }
}

export default {
    namespaced: true, // 命名空间
    state,
    mutations,
    actions
}