export const get_menu = {
    data() {
        return {} 
    },
    methods: {
        // // 存菜单名字方法
        // find_Name(arr) {
        //     for (let k of arr) {
        //         // 一级 
        //         if (k.path == this.nav_Active) {
        //             // 进入此判断代表path有值了:  清空面包屑数组
        //             this.$store.commit("menu/SET_NAVNAME", '');
        //             this.$store.commit("menu/SET_TABS", k);
        //             // 判断此子菜单是否已经被点击过了
        //             let is_Exist = false;
        //             if (this.navName.length > 0) {
        //                 is_Exist =
        //                     this.navName &&
        //                     this.navName.every(e => {
        //                         return e != k.name;
        //                     });
        //             } else {
        //                 is_Exist = true;
        //             }
        //             // 添加菜单
        //             if (is_Exist) {
        //                 // .name
        //                 this.$store.commit("menu/SET_NAVNAME", this.find_parent_Name(this.navMenu, k.parentId));
        //                 this.$store.commit("menu/SET_NAVNAME", k);
        //             }
        //             return;
        //         } else {
        //             // 二级
        //             if (k.children && k.children.length > 0) {
        //                 this.find_Name(k.children);
        //             }
        //         }
        //     }
        // },
        // find_parent_Name(arr, id) {
        //     for (let k of arr) {
        //         if (k.id == id) {
        //             // return k.name;
        //             return k;
        //         }
        //     }
        // },
  

    }
}

 