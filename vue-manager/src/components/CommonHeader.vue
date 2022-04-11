<template>
  <header>
    <div class="l-header">
      <el-button icon="el-icon-menu" size="mini" @click="btnClick"></el-button>
      <h4 style="color: #fff">首页</h4>
    </div>
    <div class="r-header">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../assets/logo.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "",
  methods: {
    btnClick() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script> 

<style>
header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* 设置此属性时，需将宽度设置100%，否则不生效*/
  align-items: center;
}
.l-header {
  display: flex;
  align-items: center;
}
.el-button {
  margin-right: 20px;
}
.el-dropdown-link img {
  width: 40px;
  height: 40px;
}
</style>