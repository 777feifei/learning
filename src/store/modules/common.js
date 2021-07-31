import router from '@/router'
const state = {
    tabs:[],
    nav_Active:'',
    isCollapse: false,
}
const mutations = {
    // 修改 tabs
    SET_TABS(state, change) {
        if(state.tabs.every(e => e.path != change.path)) {
            state.tabs.push(change)
        }
        
    },
    // 修改 nav_Active
    SET_ACTIVE(state, change) {
        state.nav_Active = change
    },
    // 删除 tabs
    REMOVE_TABS(state,change) {
   
        let item = state.tabs[change];
        if(change == 0) {
        if(item.path == state.nav_Active &&  state.tabs.length > 1 ) {
            state.nav_Active = state.tabs[change+1].path
            router.push(state.nav_Active)
        } else {
            state.nav_Active = '/dashboard'
            router.push('/')
        }
        } else if(change == (state.tabs.length-1)) { 
            if(item.path == state.nav_Active ) {
                state.nav_Active = state.tabs[change-1].path
                router.push(state.nav_Active)
            } 
        } 
        state.tabs.splice(change,1)
    },
    SET_COLLAPSE(state) {
        state.isCollapse = !state.isCollapse
    },
}

export default {
    namespaced: true, // 命名空间
    state,
    mutations,

}