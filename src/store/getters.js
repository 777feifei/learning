const getters = {
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    userID: state => state.user.userID,
    nav_list: state => state.menu.nav_list,
    btn_list: state => state.menu.btn_list,
    tabs: state => state.common.tabs,
    nav_Active: state => state.common.nav_Active,
    isCollapse: state => state.common.isCollapse,
}

export default getters