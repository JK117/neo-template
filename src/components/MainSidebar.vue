<script setup lang="ts">
import SidebarHeader from './sidebar/SidebarHeader.vue'
import SidebarFooter from './sidebar/SidebarFooter.vue'
import SidebarIndex from './sidebar/SidebarIndex.vue'
</script>

<template>
    <el-aside class="sidebar-container">
        <!-- <el-container>
            <el-header class="sidebar-banner">
                Sidebar Header
            </el-header>
            <el-main>
                Index List
            </el-main>
            <el-footer class="sidebar-banner">
                Sidebar Footer
            </el-footer>
        </el-container> -->
        <SidebarHeader />
        <SidebarIndex />
        <SidebarFooter />
    </el-aside>
</template>

<style scoped>
.sidebar-container {
    border-right: 1px solid aqua;
    padding-bottom: 60px;
}
.sidebar-banner {
    display: flex;
    align-items: center;
}
</style>