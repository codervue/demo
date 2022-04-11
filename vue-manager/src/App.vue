<template>
  <div id="app">
    <!-- <el-button type="danger">危险按钮</el-button> -->
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
