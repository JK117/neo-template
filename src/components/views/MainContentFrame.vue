<script setup lang="ts"></script>


<template>
    <div class="main-inner-box border-marker">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
.main-inner-box {
    display: flex;
    min-height: calc(100% - 1px);
}
</style>
