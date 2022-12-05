<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Sidebar from '@/components/navigation/Sidebar.vue'
import TestFlexFrame from '@/components/test/FlexFrame.vue'
</script>

<template>
  <!-- <TestFlexFrame /> -->
  <el-container>
    <el-header class="border-marker">
      <div class="bg-marker">
        <h1>Neo Template</h1>
      </div>
    </el-header>

    <el-container>
      <el-asider class="border-marker">
        <Sidebar />
      </el-asider>
      <el-main class="border-marker">
        <!-- <div class="bg-marker">Main</div> -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
// .container-box {
//   border: 0.5px dashed rgba(200, 194, 112, 0.5);
// }
</style>
