import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import Weather from "@/components/Weather";
import BaseView from "@/components/BaseView";
import RegisterView from "@/components/RegisterView.vue"
import TrainView from "@/components/TrainView";
const routes = [
  {
    path: '/base',
    name: 'base',
    component: BaseView,
    children:[
      {
    path: 'weather',
    name: 'weather',
    component: Weather
      },
         {
    path: 'train',
    name: 'train',
    component: TrainView
      },

 ]

  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
    path: '/login',
    name: 'login',
    component:()=>import('@/components/LoginView.vue')
    },
     {
    path: '/register',
    name: 'register',
    component: RegisterView
    }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
