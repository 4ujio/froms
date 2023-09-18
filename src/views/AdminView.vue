<template>
  <el-container>
    <!-- 左侧导航 -->
    <el-aside width="200px">
      <LeftView></LeftView>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <HeaderView></HeaderView>
      </el-header>
      <!-- 身体 -->
      <el-main>
        <ContentView></ContentView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftView from "@/components/admin/LeftView.vue";
import HeaderView from "@/components/admin/HeaderView.vue";
import ContentView from "@/components/admin/ContentView.vue";
export default {
  components: {
    LeftView,
    HeaderView,
    ContentView,
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #ffffff;
  color: #333;
  //   height: 10vh !important;
  border-bottom: 1px rgb(183, 185, 189) solid;
}

.el-aside {
  background-color: #1a233c;
  color: #333;
  height: 100vh;
}

.el-main {
  background-color: #f7f7f7;
  color: #333;
  height: 90vh;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
