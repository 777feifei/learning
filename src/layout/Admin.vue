<template>
  <div class="container" :class="{hiddenSidebar:isCollapse}">
    <Header></Header>
    <Aside></Aside>
    <Main></Main>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Aside, Main, Header } from "./components/index";
export default {
  components: {
    Aside,
    Main,
    Header
  },
  data() {
    return {};
  },
   computed: {
    ...mapGetters([ "isCollapse"]),
  },
 mounted(){
  
 },
  methods: {}
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding-top: 40px !important;

  box-sizing: border-box;
}
</style>
