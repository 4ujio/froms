<template>
  <div class="navigation" ref="navigation">
    <div class="navigationTitle">
      <span>
        <img
          src="https://img.zcool.cn/community/019dc059fa75a5a801202b0ca53594.jpg@1280w_1l_2o_100sh.jpg"
        />
      </span>
      <p v-show="!isCollapse">米话呼叫中心</p>
    </div>
    <el-menu
      :default-active="selectRouter"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <router-link
        to="/homePage"
        class="selectStyle"
        @click.native="getSelect('1')"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <router-link
        to="/qygl"
        class="selectStyle"
        @click.native="getSelect('2')"
      >
        <el-menu-item index="2">
          <i class="el-icon-office-building"></i>
          <span slot="title">企业管理</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-news"></i>
          <span slot="title">通话统计</span>
        </template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-files"></i>
          <span slot="title">权限管理</span>
        </template>
        <el-menu-item-group>
          <router-link
            class="selectStyle"
            to="xtjlgl"
            @click.native="getSelect('4-1')"
          >
            <el-menu-item index="4-1">系统角色管理</el-menu-item>
          </router-link>
          <router-link
            class="selectStyle"
            to=""
            @click.native="getSelect('4-2')"
          >
            <el-menu-item index="4-2">系统用户管理</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-c-scale-to-original"></i>
          <span slot="title">系统配置</span>
        </template>
        <el-menu-item-group>
          <router-link
            to=""
            class="selectStyle"
            @click.native="getSelect('5-1')"
          >
            <el-menu-item index="5-1">呼转计费配置</el-menu-item>
          </router-link>
          <router-link
            to=""
            class="selectStyle"
            @click.native="getSelect('5-2')"
          >
            <el-menu-item index="5-2">客户端版本维护</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-files"></i>
          <span slot="title">权限配置</span>
        </template>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">总机号码管理</span>
        </template>
        <el-menu-item-group>
          <router-link
            to="/zjhmgl"
            class="selectStyle"
            @click.native="getSelect('7-1')"
          >
            <el-menu-item index="7-1">总机号码管理</el-menu-item>
          </router-link>
          <router-link
            to=""
            class="selectStyle"
            @click.native="getSelect('7-2')"
          >
            <el-menu-item index="7-2">直线号码管理</el-menu-item>
          </router-link>
          <router-link
            to=""
            class="selectStyle"
            @click.native="getSelect('7-3')"
          >
            <el-menu-item index="7-3">外呼模式配置</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-phone-outline"></i>
          <span slot="title">话机管理</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigationTitle {
  width: 100%;
  height: 65px;
  display: flex;

  span {
    width: 50px;
    height: 50px;
    clip-path: ellipse(32% 39% at 54% 54%);
    position: relative;
    top: 8px;
    left: 7px;
    right: 5px;

    img {
      position: absolute;
      left: -48%;
      top: -17%;
      vertical-align: middle;
      width: 100px;
    }
  }

  p {
    font-size: 20px;
    color: #fff;
    margin-left: 5px;
    line-height: 65px;
  }
}
::v-deep .el-menu-item-group__title {
  padding: 0px 0 7px 20px;
}

::v-deep .el-menu-item-group > ul {
  background: #040c31 !important;
}

::v-deep .el-menu {
  background: rgba(7, 18, 74, 0) !important;
  border-right: none;
}

.el-menu-item.is-active {
  color: #409eff;
  border-left: 3px solid #409eff;
}

.is-active {
  background: rgb(29, 40, 95) !important;
}

.el-submenu .el-menu-item {
  padding: 0px 45px 0px 60px !important;
}

.el-menu-item {
  color: #fff;
}

::v-deep .el-menu-item.is-active i {
  color: #409eff;
}

::v-deep .el-menu-item i {
  color: #fff;
}

::v-deep .el-menu-item:hover {
  background: #1a233c !important;
  color: #409eff;
}

::v-deep .el-menu-item:hover i {
  color: #409eff;
}

::v-deep .el-submenu__title:hover i {
  color: #409eff;
}

::v-deep .el-submenu__icon-arrow {
  font-size: 18px;
}

::v-deep .el-submenu__title i {
  color: #fff;
}

::v-deep .el-submenu__title:hover {
  background: #1a233c !important;
  color: #409eff;
}

::v-deep .el-submenu__title {
  color: #fff;
  font-size: 15px;

  span {
    margin-left: 0px;
  }
}
a {
  text-decoration: none;
}
</style>
