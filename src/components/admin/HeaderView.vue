<template>
  <!-- {{ username }}
    <button @click="delName">退出登录</button> -->
  <div class="head_box">
    <div class="head_left">
      <ic class="el-icon-s-fold" style="color: #8d9ea9; font-size: 35px"></ic>
    </div>
    <div class="mycaozuo">
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <span style="color: black; font-weight: bold; margin: 0 10px">admin</span>
      <el-dropdown class="rightTop" trigger="click">
        <span style="color: black" class="el-icon-caret-bottom"></span>

        <el-dropdown-menu class="dayy" slot="dropdown">
          <el-dropdown-item class="yy">切换账号</el-dropdown-item>
          <el-dropdown-item class="yy">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    delName() {
      console.log(111);
      this.$confirm("确定要退出登录吗?", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "已退出登录",
          });
          setTimeout(() => {
            this.$router.push({
              path: "/login",
            });
          }, 1000);
          this.username = "未登录";
        })
        .catch((err) => {
          err;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.head_box {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  // align-items: center;
  .head_left {
    height: 59px;
    width: 59px;
    display: flex;
    align-items: center;
    border-right: 1px solid rgb(183, 185, 189);
  }

  text-decoration: double;
  .mycaozuo {
    height: 100%;
    position: absolute;
    right: 50px;
    display: flex;
    align-items: center;
    span {
      margin-right: 5px;
      color: rgb(182, 180, 180);
    }
    img {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
