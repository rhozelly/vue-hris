
import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '@/components/Dashboard.vue'

const routes = [
    { path: '/', redirect: { name: 'Dashboard' } },
    { path: '/dashboard', component: Dashboard, children: [
        { path: '/', redirect: { name: 'Dashboard' } },
        { path: 'home', name: 'Dashboard', component: Dashboard }
      ]
    },
//  { path: '/:catchAll(.*)', component: NotFound }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;