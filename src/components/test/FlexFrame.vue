<template>
    <el-row class="row-container">
        <el-col class="nav-col" :span="nav_bar_expanded?4:1">
            <el-header class="nav-header">
                <!-- <el-button class="menu-expand-btn" @click="nav_bar_expanded = !nav_bar_expanded">
                    <el-icon>
                        <CloseBold v-if="nav_bar_expanded" />
                        <Menu v-else />
                    </el-icon>
                </el-button>
                <span v-if="nav_bar_expanded">
                    Neo Template
                </span> -->
                Neo Template
            </el-header>
            <el-main class="nav-main">
                <span>Toggle Flex Menu</span>
                <span>Test</span>
            </el-main>
        </el-col>
        <el-col class="content-col" :span="nav_bar_expanded?20:23">
            <ToggleMenu />
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import ToggleMenu from './ToggleMenu.vue'
import { ref } from 'vue'
let nav_bar_expanded = ref(true)
// const handleExpand = () => {
//     nav_bar_expanded = !nav_bar_expanded
// }
</script>

<style scoped>
.row-container {
  height: 100vh;
  width: 100%;
  background-color: #142d4b;
}
.nav-col {
    border-right: 0.5px solid aqua;
}
.nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.menu-expand-btn {
    background: none;
    /* padding: 0; */
    border: none;
}
.nav-main {
    display: flex;
    flex-direction: column;
}
.content-col {
    border-left: 0.5px solid aqua;
}
</style>