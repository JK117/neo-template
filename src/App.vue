<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MainFrame from './components/MainFrame.vue'
import MainSidebar from './components/MainSidebar.vue'
import MainContentFrame from './components/MainContentFrame.vue'
import TestFlexFrame from './components/test/FlexFrame.vue'
</script>

<template>
  <el-container class="root-container">
    <MainSidebar />
    <MainContentFrame />
  </el-container>

  <!-- <TestFlexFrame /> -->

  <!-- <div class="main-frame-box">
    <el-page-header></el-page-header>
  </div> -->

  <!-- <MainFrame /> -->
</template>

<style scoped>
.root-container {
  height: 100vh;
}
.main-frame-box {
  display: flex;
  min-height: 100vh;
  width: 100vw;
}
</style>
