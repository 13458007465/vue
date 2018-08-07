import Vue from 'vue'
import Router from 'vue-router'
import RoleList from '@/page/role-list/RoleList'
import Detail from '@/page/detail/Detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'rolelist'
        },
        {
            path: '/rolelist',
            name: 'RoleList',
            component: RoleList
        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        }
    ],
    linkActiveClass: 'active'
})
