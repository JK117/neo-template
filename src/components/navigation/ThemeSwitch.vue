<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'
const is_dark = ref(false)
const use_dark = useDark()
const toggleDark = useToggle(use_dark)
</script>


<template>
    <el-switch
        v-model="is_dark"
        size="large"
        inline-prompt
        active-icon="Sunny"
        inactive-icon="Moon"
        @change="toggleDark()"
        style="--el-switch-on-color: #409EFF; --el-switch-off-color: #303133"
        ></el-switch>
        <!-- width="60" -->
        <!-- active-text="Light"
        inactive-text="Dark" -->
</template>
