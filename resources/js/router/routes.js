import MainLayout from '@/layout/MainLayout'

export default [
    {
      path: '',
      component: MainLayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: ()=>import('@/views/Home.vue')
        }
      ]
    }

]
