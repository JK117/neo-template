<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MainSidebar from './components/MainSidebar.vue'
import MainContentFrame from './components/MainContentFrame.vue'
import TestMainFrame from './components/test/MainFrame.vue'
import TestFlexFrame from './components/test/FlexFrame.vue'
</script>

<template>
  <!-- <el-container class="root-container">
    <MainSidebar />
    <MainContentFrame />
  </el-container> -->
  <!-- <TestMainFrame /> -->
  <TestFlexFrame />
</template>

<style scoped>
.root-container {
  height: 100vh;
}
</style>
