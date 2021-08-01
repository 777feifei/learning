<template>
  <div class="menu">
    <el-button type="primary" plain >创建菜单</el-button>
    <el-table :data="nav_list" style="width: 100%" border class="m_t_10" :tree-props="{children: 'children'}">
      <el-table-column type="expand"></el-table-column>
      <el-table-column label="菜单名称" prop="id" align="center">
        <template v-slot="{ row }">
          {{ row.meta.title }}
        </template>
      </el-table-column>
      <el-table-column label="菜单地址" prop="path" align="center"> </el-table-column>
      <el-table-column label="权限标识" prop="name" align="center"> </el-table-column>
      <el-table-column label="图标" prop="name" align="center"> </el-table-column>
      <el-table-column label="组件路径" prop="component" align="center"> </el-table-column>
      <el-table-column label="是否显示" prop="hidden" align="center"> </el-table-column>
      <el-table-column label="创建时间" prop="created_at" align="center"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template>
          <el-button type="primary" icon="el-icon-edit" circle size="small"></el-button>
          <el-button type="warning" icon="el-icon-plus" circle size="small"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template> 

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["nav_list"]),
  },
  mounted() {
    console.log("nav_list", this.nav_list);
  },
  methods: {},
};
</script>

<style scoped lang="less">
</style>
