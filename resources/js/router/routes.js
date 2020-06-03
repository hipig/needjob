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
        name: 'AuthLogin',
        component: ()=>import('@/views/auth/Login.vue')
      },
      {
        path: 'register',
        name: 'AuthRegister',
        component: ()=>import('@/views/auth/Register.vue')
      }
    ]
  }
]
