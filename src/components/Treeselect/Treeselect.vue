<template>
  <div class="tree_select">
    <treeselect :options="options" placeholder='请选择' :value="value" :searchable="false" @input="updateValue" />
    <treeselect-value :value="value" />
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
        return [
          {
            id: "1",
            label: "测试1",
            children: [
              {
                id: "1-1",
                label: "测试1-1"
              },
              {
                id: "1-2",
                label: "测试1-3"
              }
            ]
          },
          {
            id: "2",
            label: "测试2"
          },
          {
            id: "2-1",
            label: "测试2-1"
          }
        ];
      }
    }
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    updateValue() {}
  }
};
</script>

<style scoped lang="scss">
</style>
