import MainLayout from '@/layout/MainLayout'
import BlankLayout from '@/layout/BlankLayout'

export default [
  {
    path: '',
    name: 'main',
    component: MainLayout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'home',
        component: ()=>import('@/views/Home.vue')
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: ()=>import('@/views/jobs/Index.vue')
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: BlankLayout,
    children: [
      {
        path: 'login',
        name: 'authLogin',
        component: ()=>import('@/views/auth/Login.vue')
      },
      {
        path: 'register',
        name: 'authRegister',
        component: ()=>import('@/views/auth/Register.vue')
      }
    ]
  }
]
