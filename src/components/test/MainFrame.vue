<template>
    <el-row class="row-container">
        <el-col :span="4">
            <div class="sidebar-container">
                <div class="sidebar-header sidebar-box"></div>
                <div class="sidebar-main sidebar-box"></div>
                <div class="sidebar-footer sidebar-box"></div>
            </div>
        </el-col>
        <el-col :span="20">
            <div class="content-container"></div>
        </el-col>
    </el-row>
</template>

<style scoped>
.row-container {
  height: 100vh;
  width: 100%;
}
.sidebar-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid aqua;
}
.sidebar-box {
  border: 0.5px solid aqua;
  width: 100%;
}
.sidebar-header {
  /* background-color: orange; */
  height: 60px;
}
.sidebar-main {
  /* background-color: lightgreen; */
  height: calc(100% - 180px);
}
.sidebar-footer {
  /* background-color: lightpink; */
  height: 60px;
}
.content-container {
  height: 100vh;
  display: flex;
}
</style>