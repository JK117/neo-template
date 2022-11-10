<script setup lang="ts">
import SidebarHeader from './sidebar/SidebarHeader.vue'
</script>

<template>
    <el-aside class="sidebar-container" >
        <SidebarHeader />
        <el-container>
            Index List
        </el-container>
        <el-footer>
            Footer
        </el-footer>
    </el-aside>
</template>

<style scoped>
.sidebar-container {
    border-right: 1px solid aqua;
}
</style>