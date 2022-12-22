import {createRouter, createWebHistory} from 'vue-router'
import {$autologin} from '../utils/login'
const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/components/LoginView.vue')
    },
    {
        path: '/base',
        name: 'base',
        component: () => import('@/components/BaseView.vue'),
        children: [
            {
                path: 'weather',
                name: 'weather',
                component: () => import('@/components/Weather.vue')
            },
            {
                path: 'train',
                name: 'train',
                component: () => import('@/components/TrainView.vue')
            },

        ]
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/components/RegisterView.vue')
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach(async (to, from, next) => {
        //如果session中没有账号，则不能进入到base页面
        if (to.path === '/base') {
            let user = sessionStorage.getItem("username")
            if (!user) {
                router.push("/")
            }
        }
        // 页面跳转至登录页面
        else if (to.path === '/') {
            // 如果session中有账号（账号已登录状态），则不能在跳转至登录页面
            let user = sessionStorage.getItem("username")
            if (user) {
                router.push('/base')
            }
            // 勾选“记住登录”后再次进入，自动登录
            else if (localStorage.getItem('remember')){
                let ret=await $autologin()
                console.log(ret)
                if (ret){
                    router.push('/base')
                }
            }
        }
        next()
    }
)

router.afterEach((to, from) => {
})
export default router
