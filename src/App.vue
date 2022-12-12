<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Headbar from '@/components/navigation/Headbar.vue'
import Sidebar from '@/components/navigation/Sidebar.vue'
</script>

<template>
  <el-container>
    <el-header class="headbar-box border-marker">
      <Headbar />
    </el-header>

    <el-container class="container-box">
      <el-asider class="border-marker">
        <Sidebar />
      </el-asider>

      <el-main class="border-marker">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
.headbar-box {
  position: sticky;
  top: 0px;
  z-index: 1;
}
.container-box {
  z-index: 0;
}
</style>
