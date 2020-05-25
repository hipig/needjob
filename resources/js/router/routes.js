import Welcome from '@/views/Welcome'

export default [

    {
        path: '',
        redirect: '/welcome',
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
    }

]