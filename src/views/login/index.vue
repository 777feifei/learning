<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item>
        <i class="iconfont icon-xingmingyonghumingnicheng"></i>
        <el-input v-model="loginForm.account" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <i class="iconfont icon-mima"></i>
        <i class="iconfont" id="yanjin" @click="show_Password" :class="font_type"></i>
        <el-input v-model="loginForm.password" autocomplete="off" :type="input_type"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="submitForm()">登录</el-button>
      </el-form-item>
    </el-form>
    <Vcode
      :show="isShowVcode"
      @success="onSuccess"
      @close="onClose"
      :imgs="[VcodeURL]"
      successText="恭喜您，验证通过了哟！"
      failText="很遗憾，没跟上您的手速-_- !"
      :sliderSize="30"
    />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import Vcode from "vue-puzzle-vcode"; //页面内引用插件
let VcodeURL = require("@/assets/img/img.jpg");
export default {
  components: { Vcode },
  data() {
    return {
      loginForm: {
        account: "learnAdmin@163.com",
        password: "admin888"
      },
      rules: {},
      // 显示隐藏 password
      type: true,
      // 图片验证
      isShowVcode: false,
      VcodeURL,
      verify: false
    };
  },
  computed: {
    // 显示隐藏 password
    input_type() {
      if (this.type) {
        return "password";
      } else {
        return "";
      }
    },
    // 显示隐藏 password眼睛图标
    font_type() {
      if (this.type) {
        return "icon-yanjing_kai";
      } else {
        return "icon-biyan";
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_TOKEN: ""
    }), 

   async submitForm() {  
      await this.$store.dispatch("user/login", this.loginForm)
       this.$router.push(this.$route.query.redirect || '/');
      
    },
    // 验证码 方法
    onSuccess(e) {
      this.isShowVcode = false;
      this.verify = true;
    },
    onClose() {
      this.isShowVcode = false;
    },
    // 显示隐藏密码
    show_Password() {
      this.type = !this.type;
    }
  },
  mounted() {
    // console.log('debounce', this.debounce());
    
  }
};
// this.$options.filters['过滤名']  获取全局的过滤方法
// 模拟假token
/*
Message.success('登录成功！')
  关于setTimeout第二个参数不写 或为0 的解释
  不写：浏览器默认加上4毫秒，有的老版本浏览器是10毫秒，
  0：其实和不写没区别，因为不能低于4毫秒，你低于了还是按4毫秒来算；
  不写& 0 都是为了让这个异步能更早的执行
*/

</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: $blue;
}
.el-form {
  width: 500px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 40px 20px;
  border-radius: 10px;
  ::v-deep .el-input {
    width: 100% !important;
  }
  ::v-deep .el-input__inner {
    color: #fff !important;
    background-color: $blue;
    padding-left: 40px;
  }

  .el-form-item__content {
    position: relative;
    .iconfont {
      position: absolute;
      left: 10px;
      top: 0;
      z-index: 99;
    }
  }
  #yanjin {
    left: 93%;
    width: 16px;
    cursor: pointer;
  }
}
</style>
