import MainLayout from '@/layout/MainLayout'
import BlankLayout from '@/layout/BlankLayout'

import Home from '@/views/Home'
import JobsIndex from '@/views/jobs/Index'
import JobsShow from '@/views/jobs/Show'

import AuthLogin from '@/views/auth/Login'
import AuthRegister from '@/views/auth/Register'

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
        component: Home
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: JobsIndex
      },
      {
        path: '/jobs/:id',
        name: 'jobsShow',
        component: JobsShow
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
        component: AuthLogin
      },
      {
        path: 'register',
        name: 'authRegister',
        component: AuthRegister
      }
    ]
  }
]
