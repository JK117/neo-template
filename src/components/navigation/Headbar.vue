<script setup lang="ts">
import ThemeSwitch from '@/components/navigation/ThemeSwitch.vue'
</script>


<template>
    <div class="headbar-inner-box">
        <!-- Trade Mark -->

        <!-- Title -->
        <h1>Neo Template</h1>

        <!-- Spacer -->
        
        <!-- i18n Switch -->

        <!-- Theme switch -->
        <ThemeSwitch />
    </div>
</template>


<style lang="scss" scoped>
.headbar-inner-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
</style>