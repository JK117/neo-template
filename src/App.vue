<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MainFrame from './components/MainFrame.vue'
import MainSidebar from './components/MainSidebar.vue'
import MainContentFrame from './components/MainContentFrame.vue'
import TestFlexFrame from './components/test/FlexFrame.vue'
</script>

<template>
  <!-- <el-container class="root-container">
    <MainSidebar />
    <MainContentFrame />
  </el-container> -->
  <TestFlexFrame />
  <!-- <MainFrame /> -->
</template>

<style scoped>
.root-container {
  height: 100vh;
}
</style>
