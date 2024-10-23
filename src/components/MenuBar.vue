<template>
    <div class="menu font-sans text-sm relative xx:border-b-0 xl:border-b-0.1 md:border-b-2 text-gray-700">
        <v-container class="header xx:flex-col md:flex-row xl:flex-row flex justify-between xl:h-24 md:h-24">
            <div class="header_logo xl:w-4/12 md:w-5/12 xx:w-full xx:py-5 flex xl:justify-around items-center">
                 <div class="header_left xx:w-1/2 xl:w-3/5 md:w-3/5 md:justify-start flex xl:justify-center items-center xl:border-r-0.1 h-10"
                  @click="Home()">
                     <img 
                       src="https://sibirkoleso.ru/local/templates/sk/dist/images/logo.svg?id=0b29b7b1edfbdf44dadd0fb3651222cd" alt="" 
                       class="header_img cursor-pointer">
                       <span class="img_text cursor-pointer font-bold xl:text-xl pl-3"> Сибирь Колесо </span>
                 </div>
                  <div class="left_center xx:w-1/2 xx:justify-end xl:w-2/5 md:w-2/5 xl:pl-10 flex xl:justify-center md:justify-center">
                    <span class="cursor-pointer flex items-center" @click="showBox = !showBox">
                        <div v-if="showBox == false" class="menu mr-2">
                            <div class="bit_1 w-6 h-0.3 bg-black my-1"></div>
                            <div class="bit_1 w-6 h-0.3 bg-black my-1"></div>
                            <div class="bit_1 w-6 h-0.3 bg-black my-1"></div>
                        </div>
                        <!-- <span  class="mdi mdi-menu mr-2"></span> -->
                        <span v-else class="mdi mdi-close mr-2 text-red-700 text-xl font-bold"></span>
                        <span>Menu</span>
                    </span>
                </div>
                <Sidebar class="xx:h-0" ref="sidebarRef" />
            </div>
            <div class="header_center xl:w-8/12 md:w-8/12 xx:w-full xx:border-y xx:py-5 xl:border-y-0 md:border-y-0 flex items-center justify-between">
                <div class="right_center xl:w-3/5 md:w-3/5">
                    <span class="icon mdi mdi-cellphone mr-2 cursor-pointer"></span>
                    <span class="phone_title cursor-pointer">Магазины</span>
                 </div>
                <div class="xl:w-3/5 md:w-3/5 xx:w-3/5 xx:justify-end flex">
                    <div class="xl:w-2/3 md:w-2/3 xx:w-1/3 xx:justify-end flex xl:justify-center md:justify-center items-center xl:border-r-0.1">
                        <span class="text-xl mdi mdi-map-marker mr-4"></span>
                        <span class="city_title xx:hidden xl:inline-block md:inline-block cursor-pointer">Москва</span>
                    </div>
                    <div class="xl:w-1/3 md:w-1/3 xx:w-1/3 flex">
                        <div class="pay w-1/2 flex justify-center">
                            <span class="icon_person relative">
                                 <img class="cursor-pointer w-5 relative top-1" @click="Korzinka()" src="https://sibirkoleso.ru/local/templates/sk/dist/images/header-cart.svg" alt="">
                                <span v-if="korzinkaNumber != 0" class="absolute left-0 top-5 bg-orange-500 text-white text-center w-5 h-5 rounded-full inline-block text-xs">
                                    {{korzinkaNumber}}
                                </span>
                            </span>
                        </div>
                        <div class="account xx:justify-end w-1/2 flex xl:justify-center md:justify-center">
                            <!-- <span class="text-xl inline-block icon_bag mdi mdi-account cursor-pointer"></span> -->
                            <img class="cursor-pointer w-5" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIGZpbGw9IiMxYTFhMWEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuMiA3LjciIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0zLjYgNC4zYy0xLjIgMC0yLjItMS0yLjItMi4yQzEuNCAxIDIuNCAwIDMuNiAwczIuMiAxIDIuMiAyLjJjMCAxLjItMSAyLjEtMi4yIDIuMXptMC0uNWMuOSAwIDEuNy0uOCAxLjctMS43UzQuNS41IDMuNi41cy0xLjcuNy0xLjcgMS43LjggMS42IDEuNyAxLjYiLz48cGF0aCBkPSJNLjUgNy40SDBjMC0yIDEuNi0zLjYgMy42LTMuNnMzLjYgMS42IDMuNiAzLjZoLS41YzAtMS43LTEuNC0zLjEtMy4xLTMuMVMuNSA1LjcuNSA3LjQiLz48L3N2Zz4=" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
        <Transition name="fade">
            <div class="boxes xx:flex-col xx:top-80 xx:h-max xx:w-full xl:top-52 md:top-48 xl:flex-row md:flex-row absolute flex items-center border-b-0.1 xl:border-t-0.1 xl:w-full xl:h-56 md:h-52 bg-white"  v-if="showBox">
              <div class="product_count xx:w-full xx:justify-start xx:border-b-0.1 xl:border-b-0 md:border-b-0 xx:py-5 xl:py-0 md:py-0 xl:w-2/5 xl:h-4/5 md:w-2/5 md:h-4/5 flex items-center xl:justify-center xl:border-r-0.1 md:border-r-0.1">
                 <div class="counts xx:w-1/2 xx:pl-5 xl:pl-6 xl:w-1/3 xl:flex xl:justify-center xl:flex-col xl:items-start cursor-pointer" v-for="item in items" :key="item">
                      <span :class="item.icon" class="mdi text-5xl icon"></span>
                      <h2 class="pt-6 h2 text-xl font-bold">{{item.name}}</h2>
                      <p>{{item.count}} модель</p>
                 </div>
              </div>
              <div class="menu_list xx:w-11/12 flex items-center  xl:h-4/5 xl:w-3/5 md:h-4/5 md:w-7/12">
                <ul class="menus border-red-500 xx:w-full xx:flex-wrap md:w-full xl:pl-0 md:pl-0 xl:flex-nowrap md:flex-nowrap flex xl:justify-center md:justify-center xl:w-full">
                <li 
                     class="xl:px-8 xx:w-1/2 xl:w-1/4 md:w-1/4" 
                     v-for="(item,index) in menus" 
                     :key="index">
                    <ul v-for="x in item.lists" :key="x">
                        <li 
                        class="py-2 list_title cursor-pointer hover:text-red-500"
                        @click="Menus(x)">
                            {{x}}
                        </li>
                    </ul>
                </li>
            </ul>
              </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import {ref, watchEffect} from "vue"
import Sidebar from './sidebar.vue'
import {Disks} from "../stores/index"
import {useRouter} from "vue-router"
import MenuImg from "@/assets/images/menu2.jpg"
const router = useRouter()
const disk = Disks()
const sidebarRef = ref(null)
const korzinkaNumber = ref(0)
let showBox = ref(false)
let items = ref([
    {
        name: 'Шины',
        count: 36674,
        icon: "mdi-home-circle"
    },
    {
        name: 'Диски',
        count: 11157,
        icon: "mdi-disc"
    }
]),
menus = ref([
    {
        category: "cat_1",
        lists: ['О компании','Франшиза','Контакты','Блог']
    },
    {
        category: "cat_2",
        lists: ['Кредит','Оплата','Доставка','Сервис']
    },
    {
        category: "cat_3",
        lists: ['Единая справочная','+998 99 394 12 26','+7 (383) 388-55-32']
    }
])
const Korzinka = () => {
   sidebarRef.value.toggleDrawer()
}
const Menus = (name) => {
    router.options.routes.forEach(item => {
        if(item.name == name){
            router.push(`${item.path}`)
        }
    })
} 
const Home = () => {
    router.push('/home')
}
watchEffect(() => {
    korzinkaNumber.value = disk.diskNumberComputed
})
</script>

<style scoped>
.counts .h2,.counts .icon{
    transition: color 0.5s ease-in-out;
}
.counts:hover .h2,.counts:hover .icon{
    color: red;
}
.list_title{
    transition: all 0.5s ease-in-out;
}
.boxes{
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 200;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* .v-overlay__content{
    top: 65px !important;
} */
.v-row{
    align-items: center;
}
</style>