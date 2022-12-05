import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/menu'
        },
        {
            path: '/menu',
            component: () => import('@/components/views/FlexMenu.vue'),
        },
        {
            path: '/flow',
            component: () => import('@/components/views/CardFlow.vue'),
        },
    ],
})

export default router