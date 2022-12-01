<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const menu_options = ref([
    {name: 'Flex Menu', route: 'menu', color: '#f44336'},
    {name: 'Image Flow', route: 'flow', color: '#ffa117'},
    // {name: '3D Demo', color: '#0fc70f'},
    // {name: '', route: '', color: '#'},
])
const handleRouterClick = (route: string) => {
    const router = useRouter()
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