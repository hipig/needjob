import MainLayout from '@/layout/MainLayout'
import BlankLayout from '@/layout/BlankLayout'

export default [
  {
    path: '',
    name: 'Main',
    component: MainLayout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'home',
        component: ()=>import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: BlankLayout,
    children: [
      {
        path: 'login',
        name: 'authLogin',
        component: ()=>import('@/views/auth/Login.vue')
      }
    ]
  }
]
