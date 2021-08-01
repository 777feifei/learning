<template>
  <div class="main_container">
    <div class="breadcrumb">
      <i class="iconfont icon-zuozhedie" @click="handle_isCollapse"></i>
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        separator="/"
        class="m_b_5"
      >
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="item in navNameList" :key="item.path">
            <a :href="item.path" v-if="item.path == '/dashboard'">{{ item.meta.title }}</a>
            <span v-else>{{ item.meta.title }}</span>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
    <div class="tag" v-show="tabs && tabs.length > 0">
      <el-tag
        @click="handleClick(item)"
        @close="handleClose(index)"
        closable
        class="m_l_10"
         :effect="item.path == nav_Active? 'dark':'light'"
        :type="item.path == nav_Active ? 'success' : 'info'"
        size="small"
        v-for="(item, index) in tabs"
        :key="item.path"
      >{{ item.title}}</el-tag>
    </div>
    <transition name="fade-transform" mode="out-in">
      <router-view class="view" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { get_menu } from "../mixin/get_menu";
export default {
  mixins: [get_menu],
  data() {
    return {
      navNameList: [{ path: "/dashboard", meta: { title: "Dashboard" } }],
      // isCollapse: false,
    };
  },
  computed: {
    ...mapGetters(["navMenu",'tabs','nav_Active']),
  },
  created() {},
  mounted() {},
  watch: {
    $route: {
      handler(val) {
        this.matched();
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    matched() {
      this.navNameList = [{ path: "/dashboard", meta: { title: "Dashboard" } }];
      let list = this.$route.matched.filter((item) => {
        return item.meta && item.meta.title;
      });
      this.navNameList = this.navNameList.concat(list);

    },
    handleClose(index) {
      this.$store.commit("common/REMOVE_TABS", index);
    },
    handleClick(val) {
      this.path = val.path;
      this.$router.push({ path: val.path });
    },
    handle_isCollapse() {
      this.$store.commit('common/SET_COLLAPSE')
    },
  },
};
</script>

<style lang="scss" scoped>
.main_container {
  height: 100%;
  margin-left: 200px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.1);
  transition: margin-left .28s;
}
.breadcrumb {
  .iconfont {
    @include left(15px);
    margin-right: 20px;
    margin-top: 2px;
    color: #303133;
    font-size: 20px;
  }
}
.tag {
  height: 35px;
  line-height: 35px;
  background-color: #fff;
  margin-bottom: 5px;
  .el-tag {
    cursor: pointer;
  }
}
.view {
  height: calc(100% - 80px);
  margin: 0 10px;
  overflow: auto;
  padding: 10px 0;
  background-color: #fff;
}

</style>