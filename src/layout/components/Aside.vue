<template>
  <div class="menu">
    <el-menu
      class="el-menu-vertical-demo"
      :class="{ hedder_Nav: isCollapse }"
      :default-active="nav_Active"
      text-color="#fff"
      :collapse="isCollapse"
      unique-opened
      router
    >
      <div v-for="item in nav_list" :key="item.path">
        <template v-if="item.children && item.children.length > 0">
          <el-submenu :index="item.path">
            <template slot="title">
              <i class="el-icon-document"></i>
              <!-- <i
                :class="['iconfont', `icon-` + item.meta.icon]"
                id="iconfont"
              ></i> -->
              {{ item.meta.title }}
            </template>
            <el-menu-item
              class="menu-item"
              v-for="son in item.children"
              :key="son.path"
              :index="son.path"
            >
              
              <i
                :class="['iconfont', `icon-` + son.meta.icon]"
                id="iconfont"
              ></i>
              {{ son.meta.title }}
            </el-menu-item>
          </el-submenu>
        </template>

        <template v-else>
          <el-menu-item :index="item.path">
             <i class="el-icon-document"></i>
            <span slot="title">
              {{ item.meta.title }}
            </span>
          </el-menu-item>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { get_menu } from "../mixin/get_menu";

export default {
  mixins: [get_menu],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["nav_list", "nav_Active", "isCollapse"]),
  },
  mounted() {
    this.matched();
  },
  watch: {
    $route: {
      handler(val) {
        let list = {
          path: this.$route.matched[this.$route.matched.length - 1].path,
          title: this.$route.meta.title,
        };
        this.$route.meta.title && this.$store.commit("common/SET_TABS", list);
        this.$store.commit("common/SET_ACTIVE", list.path);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleSelect(key, keyPath) {},
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  position: fixed;
  left: 0;
  top: 40px;
  overflow: auto;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;

}
.hedder_Nav {
  ::v-deep .el-submenu__icon-arrow {
    display: none;
  }
}

.iconfont {
  color: #fff;
}
</style>