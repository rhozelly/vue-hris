
import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '@/views/Dashboard.vue'
import Accounts from '@/views/Accounts.vue'
import NotFound from '@/views/NotFound.vue'


const routes = [
    { path: '/', component: Dashboard },
    { path: '/accounts', component: Accounts },
    { path: '/:catchAll(.*)', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;