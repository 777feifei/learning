<template>
  <div class="tree_select_Check">
    <!-- 
    multiple             多选Tree
    open-on-click        点击展开option
    show-count           下来选项显示子元素数量
    disableFuzzyMatching  模糊查询
    clear-on-select       选择选项后是否清除搜索输入
    close-on-select       选择选项后是否关闭菜单
    noChildrenText
    noResultsTex          过滤时没有数据显示文本
    always-open
    limit                 显示选项数量
    limitText             剩余选项显示文本(...)
     -->
    <treeselect
      name="demo"
      multiple
      open-on-click
      show-count
      clear-on-select
      close-on-select
      :options="options"
      placeholder='请选择'
      noChildrenText= "没有数据"
      noOptionsText="暂无数据"
      noResultsText="没有数据"
      :limit="2"
      :limitText="limitText"
      v-model="value"
    />
  </div>
</template>
<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  components: {
    Treeselect
  },
  props: {
    options: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {

      value: [],
      limitText:() =>{
        return '...'
      }
    };
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
</style>
