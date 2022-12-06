<script setup lang="ts">
import FlexMenu1 from '@/components/flexible-menu/FlexMenu1.vue'
</script>


<template>
    <div class="flex-menu-box border-marker">
        <FlexMenu1 />
    </div>
</template>

<style lang="scss" scoped>
.flex-menu-box {
    display: flex;
    // height: calc(100% - 1px);
    height: 1600px;
}
</style>