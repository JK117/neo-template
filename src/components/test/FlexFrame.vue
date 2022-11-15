<template>
    <el-row class="row-container">
        <el-col class="nav-col" :span="nav_bar_expanded?4:1">
            <el-header class="nav-header">
                Neo Template
                <el-button plain circle dark @click="nav_bar_expanded = !nav_bar_expanded">

                    <el-icon>
                        <ArrowLeftBold v-if="nav_bar_expanded" />
                        <ArrowRightBold v-else />
                    </el-icon>
                </el-button>
            </el-header>
            <el-main>
                Main
            </el-main>
        </el-col>
        <el-col class="content-col" :span="nav_bar_expanded?20:23"></el-col>
    </el-row>
</template>

<script setup lang="ts">
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
.content-col {
    border-left: 0.5px solid aqua;
}
</style>