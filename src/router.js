import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import TestUchun from "./pages/test/testVue.vue"
import HomeVue from "./pages/home/index.vue"
import AboutVue from "./pages/aboutProduct/index.vue"
import About from "./pages/About/index.vue"
import Franchise from "./pages/franshiza/index.vue"
import Contact from "./pages/contact/index.vue"
import Credit from "./pages/credit/index.vue"
import Uplata from "./pages/uplata/index.vue"
import Delivery from "./pages/Dostavka/index.vue"
import Services from "./pages/services/index.vue"
import OrderTime from "./pages/orderTimeInfo/index.vue"
import TovarInfo from "./pages/orderTimeInfo/tovarInfo.vue"
import shinaInfo from "./pages/orderTimeInfo/shinaInfo.vue"
import TovarCredit from "./pages/orderTimeInfo/tovarCredit.vue"

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: '/',
      name: 'Home',
      component: HomeVue
    },
    {
      path: '/about_product',
      name: 'AboutProduct',
      component: AboutVue
    },
    {
      path: '/about',
      name: 'О компании',
      component: About
    },
    {
      path: '/franchise',
      name: 'Франшиза',
      component: Franchise
    },
    {
      path: '/contact',
      name: 'Контакты',
      component: Contact
    },
    {
      path: '/credit',
      name: 'Кредит',
      component: Credit
    },
    {
      path: '/payment',
      name: 'Оплата',
      component: Uplata
    },
    {
      path: '/delivery',
      name: 'Доставка',
      component: Delivery
    },
    {
      path: '/service',
      name: 'Сервис',
      component: Services
    },
    {
      path: '/stocks',
      children:[
        {
          path: 'vash-zakaz-v-udobnom-meste-i-lyuboe-vremya',
          name: "ZakasTime",
          component: OrderTime
        },
        {
          path: 'tovary-dlya-avto',
          name: "TovarAvto",
          component: TovarInfo
        },
        {
          path: 'shinomontazh-v-podarok',
          name: "shinaMontaj",
          component: shinaInfo
        },
        {
          path: 'tovary-v-kredit',
          name: "TovarCredit",
          component: TovarCredit
        }
      ]
    }
  ]
})
let previousRoute = null;

router.beforeEach((to, from, next) => {
  previousRoute = from; // Oldingi manzilni saqlash
  next();
});

// Oldingi manzilni olish uchun funktsiya
export function getPreviousRoute() {
  return previousRoute;
}
export default router
