<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const menu_options = ref([
    {name: 'Flex Menu', route: 'menu', color: '#f44336'},
    {name: 'Image Flow', route: 'flow', color: '#ffa117'},
    // {name: '3D Demo', route: '3d', color: '#0fc70f'},
    // {name: 'AntV G6', route: '', color: '#2196f3'},
    // {name: '', route: '', color: '#b145e9'},
    // {name: '', route: '', color: '#'},
])
const handleRouterClick = (route: string) => {
    router.push(`/${route}`)
}
</script>


<template>
    <el-menu>
        <el-menu-item
            v-for="(option, key) in menu_options"
            :key="key"
            :index="key"
            @click="handleRouterClick(option.route)"
        >
            {{ option.name }}
        </el-menu-item>
    </el-menu>
</template>


<style scoped lang="scss">
</style>