<template>
    <v-container class="h-full flex flex-col justify-center">
       <div class="footer_top xx:flex-col xx:h-full xl:h-3/5 xl:flex-row md:flex-row md:h-3/5 flex items-center text-gray-400">
            <div class="footer_left xx:flex-col xx:w-11/12 xl:flex-row xl:w-3/5 md:w-3/5 md:flex-row flex w-3/5 justify-between">
                <ul class="footer_left_item xx:text-white xl:text-gray-400 md:text-gray-400">
                    <li class="py-2 hover:text-orange-600 transition-all cursor-pointer">Шины</li>
                    <li class="py-2 hover:text-orange-600 transition-all cursor-pointer">Диски</li>
                 </ul>
                 <ul class="footer_menu_list xx:border-y-0.1 xx:border-gray-700 xx:py-5 xl:py-0 md:py-0 xl:border-y-0 md:border-y-0">
                    <li v-for="item in menuList" :key="item" class="py-2 xx:text-white xl:text-gray-400 md:text-gray-400 text-sm hover:text-orange-600 transition-all cursor-pointer">
                        {{item}}
                    </li>
                 </ul>
                 <ul class="footer_menu_list xx:border-y-0.1 xx:border-gray-700 xx:py-5 xl:py-0 md:py-0 xl:border-y-0 md:border-y-0">
                    <li v-for="item in menuLists" :key="item" class="py-2 xx:text-white xl:text-gray-400 md:text-gray-400 text-sm hover:text-orange-600 transition-all cursor-pointer">
                        {{item}}
                    </li>
                 </ul>
            </div>
            <div class="footer_right xx:text-white xx:py-5 xl:py-0 md:py-0 xl:text-gray-400 md:text-gray-400 xx:w-11/12 xx:items-start xl:w-4/5 xl:items-end md:items-end md:w-4/5 flex flex-col">
                <p class="item hover:text-orange-600 transition-all cursor-pointer text-white font-medium">+99899 394 12 26</p>
                <p class="item hover:text-orange-600 transition-all cursor-pointer py-4">shuxratbekzokirjonov1119@gmail.com</p>
                <p class="mdi mdi-facebook-messenger"></p>
            </div>
       </div>
       <div class="footer_bottom xx:h-full xx:my-5 xx:flex-col xl:flex-row xl:my-0 xl:h-1/5 md:my-0 md:flex-row md:h-1/5 flex border-t-0.1 border-gray-400">
            <div class="bottom_left xx:w-10/12 xl:w-4/5 md:w-4/5 w-4/5 pt-5">
                <p class="text-xs text-gray-500">© 2024 Сибирь-Колесо, все права защищены. <br/>
Информация на сайте — не является публичной офертой, согласно ст. №437 Гражданского кодекса РФ. Цены действительны при заказе с сайта. Товар <br/> резервируется на сутки после поступления на склад. Цена актуальна в течении суток.</p>
                <ul class="icons flex">
                    <li><span class="mdi mdi-credit-card-outline text-xl mr-2"></span></li>
                    <li><span class="mdi mdi-card-account-mail px-2 text-xl mx-2"></span></li>
                    <li><span class="mdi mdi-card-account-mail px-2 text-xl mx-2"></span></li>
                    <li><span class="mdi mdi-card-account-mail px-2 text-xl mx-2"></span></li>
                </ul>
            </div>
            <div class="bottom_right xx:w-10/12 xx:justify-start xl:w-1/5 xl:justify-end md:justify-end md:w-1/5 flex text-gray-500 pt-5">
                <h4 class="hover:text-orange-700 cursor-pointer transition-all">Сделано в <br> Uzbekistan</h4>
            </div>
       </div>
    </v-container>
</template>

<script setup>
import {ref} from "vue"
const menuList = ref(['О компании','Франшиза','Контакты','Блог'])
const menuLists = ref(['Кредит','Оплата','Доставка','Сервис'])
</script>

<style lang="scss" scoped>

</style>