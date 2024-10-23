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
      path: "/",
      name: "testUchun",
      component: TestUchun
    },
    {
      path: '/home',
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
