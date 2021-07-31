<template>
  <div class="header">
    <div class="title">
      <i class="iconfont icon-ziyuan"></i>
      {{ userInfo && userInfo.username }}
    </div>
    <ul>
      <li @click="fullScreenFun()">
        <i class="iconfont icon-fullScreen"></i>全屏
      </li>
      <li class="m_r_10">
        <!--    title="标题" -->
        <el-popover placement="bottom" trigger="click">
          <div id="quit" @click="quit">退出</div>

          <img
            slot="reference"
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            alt="头像"
          />
        </el-popover>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mixin } from "../mixin/fullscreen";
// import { removeToken } from "@/utils/auth";
export default {
  mixins: [mixin],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  mounted() {},
  methods: {
    quit() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: $blue;
  border-bottom: 1px solid #ccc;
  position: fixed;
  left: 0;
  top: 0;
  //   padding: 0 10px;
  box-sizing: border-box;
  .title {
    @include left(10px);
    font-size: 18px;
    i {
      width: 50px;
      height: 50px;
      color: rgb(37, 136, 196);
      margin-right: 10px;
    }
  }
  ul {
    @include right(10px);
    font-size: 14px;
    li {
      @include left(20px);
      img {
        width: 30px;
        margin-top: 5px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
    i {
      margin-right: 3px;
      cursor: pointer;
    }
  }
}
</style>
