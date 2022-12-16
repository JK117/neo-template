<script setup lang="ts">
const props = defineProps({
    img_src: { type: String },
})
</script>


<template>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <el-image
            :src="img_src"
            fit="contain"
        >
            <template #placeholder>
                <div class="image-slot">Loading<span class="dot">...</span></div>
            </template>
        </el-image>
    </el-card>
</template>


<style scoped lang="scss">
.el-card {
    height: 340px;
    width: 100%;
    border: none;
    background-color: var(--el-fill-color);
}
.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 14px;
}
.dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
}
</style>