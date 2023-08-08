
import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '@/components/Dashboard.vue'
import Home from '@/pages/Home.vue'
import EmployeeList from '@/pages/Employee/EmployeeList/EmployeeList.vue'
import EmployeeAdd from '@/pages/Employee/EmployeeAdd/EmployeeAdd.vue'

const routes = [
    { path: '/', redirect: { name: 'Dashboard' } },
    { path: '/dashboard', component: Dashboard, children: [
        { path: '/', redirect: { name: 'Dashboard' } },
        { path: 'home', name: 'Dashboard', component: Dashboard },
      ]
    },
    { path: '/employee', name: 'Employee List', component: EmployeeList, children: [
        { path: '/', redirect: { name: 'Employee List' } },
        { path: '/employee/list', name: 'Employee List', component: EmployeeList },
      ]
    },
    { path: '/employee/add', name: 'Add Employee', component: EmployeeAdd },
    
//  { path: '/:catchAll(.*)', component: NotFound }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;