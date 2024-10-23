<template>
    <v-container class="my-5 flex flex-col">
    <div class="aksiya_top flex justify-between py-5">
        <span class="text-2xl font-bold cursor-pointer hover:text-orange-500 transition-all">Акции и события</span>
        <h4 class="text-sm xx:hidden xl:flex">
                <span class="text mr-5">
                Присоединяйтесь к нашим сообществам в социальных сетях:
            </span> 
            <span class="icon w-7 h-7 bg-gray-300 rounded inline-block text-center cursor-pointer transition-all hover:bg-slate-800">
                <span class="mdi mdi-alpha-w-box text-xl"></span>
            </span>
        </h4>
    </div>
     <div class="aksiya xx:flex-col md:flex-col xl:flex-row flex xl:justify-between">
        <div class="aksiya_center xl:h-26 xl:flex xl:flex-col xl:justify-between xl:w-4/5 xl:mr-8">
            <div class="text-white xx:p-5 xl:p-8 font-sans xx:h-96 rounded xl:h-48 md:h-48 bg-red-500
            bg-[url('https://sibirkoleso.ru/upload/iblock/2db/8ke3rticgx2x9y4o1x37alzdxn4nr2mf/tyrebox_banner.png')]
            xl:bg-right xx:bg-bottom md:bg-right bg-no-repeat cursor-pointer"
            @click="Aksiya()"
            >
                <h2 class="xl:text-xl xl:w-1/3 xl:pb-5 md:text-md md:w-1/3 md:pb-5 font-medium">Ваш заказ в удобном месте и любое время</h2>
                <p class="text-sm xl:w-1/2 md:w-1/3">Мы рады представить новую услугу – пункты выдачи заказов TyreBox. Получите ваш заказ в удобном для вас месте, и в любое время суток.</p>
            </div>
            <div class="shino xx:flex-col xl:flex-row flex xl:justify-between xl:h-48">
                <div class="item xx:my-5 xx:h-40 xl:my-0 xl:w-7/12 xl:mr-4 xl:h-48 rounded bg-slate-100 cursor-pointer
                    bg-[url('https://sibirkoleso.ru/upload/iblock/7d1/gawfl96ef4djvdt9404vn10sgqk11c8m/banner_3.png')]
                    bg-right bg-no-repeat bg-origin-content bg-contain"
                    @click="Shina()"
                    >
                    <div class="text xl:p-10 xx:p-5">
                        <h1 class="xl:text-xl">Шиномонтаж в подарок</h1>
                        <span class="xx:text-xs xx:w-48 xl:text-sm font-sans text-gray-600 inline-block xl:w-60 pt-5">Бесплатный шиномонтаж и балансировка при покупке 4 шин с пометкой «Акция».</span>
                    </div>
                </div>
                <div class="item xx:h-40 xl:w-5/12 xl:ml-4 xl:h-48 rounded bg-slate-100 cursor-pointer
                    bg-[url('https://sibirkoleso.ru/upload/iblock/f60/u2ma7btbg1p28bk4a7mhmo36qv5umjl8/export-img.jpg')]
                    bg-right bg-no-repeat"
                    @click="Service()">
                    <div class="text xx:p-5 xl:p-10">
                        <h1 class="text-xl">Ремонт шин и дисков</h1>
                        <span class="xx:text-xs xl:text-sm font-sans text-gray-600 w-56 inline-block pt-5">Профессиональный ремонт дисков и шин любой сложности.</span>
                     </div>
                </div>
            </div>
         </div>
        <div class="aksiya_footer xx:w-full md:w-full xx:my-5 xx:flex-row xl:my-0 xl:h-26 xl:w-3/12 flex xl:flex-col justify-between">
            <div class="center_right xx:w-105 xx:h-36 xl:h-48 xl:w-full md:w-105 relative rounded
                bg-[url('https://sibirkoleso.ru/upload/iblock/e02/zr59lpga0yx262ulee9fq6oet0ob5du3/banner_2.jpeg')]
                bg-no-repeat bg-left bg-cover"
                @click="Tovar()"
                >
                <span class="absolute text-xl font-sans xx:top-5 font-medium xl:top-10 left-6 text-white">Товары <br> для авто</span>
                <span class="absolute arrow xl:top-24 md:top-20 xx:top-20 transition duration-1000 left-6 mdi mdi-arrow-right-thin text-4xl text-white"></span>
            </div>
            <div class="item credit xx:w-105 md:w-105 xx:h-36 xl:w-full relative xl:h-48 rounded bg-slate-100 cursor-pointer
                bg-[url('https://sibirkoleso.ru/upload/iblock/721/p4wxaoh2x0wwsn3g1rot6x0te7q8hcno/credit_card.png')]
                bg-bottom bg-no-repeat"
                @click="TovarCredit()">
                <div class="content text-xl font-sans absolute xx:top-6 xl:top-8 left-8 text-black">
                    <span>Товары <br> в кредит</span>
                    <p><span class="text-green-600 arrows text-xl duration-1000 inline-block transition mdi mdi-arrow-right"></span></p>
                </div>
            </div>
        </div>
     </div>
    </v-container>
</template>

<script setup>
import image from "../assets/images/bank_95412.jpg"
import diskaImg from "../assets/images/diska.jpg"
import shinaImg from "../assets/images/montaj.jpg"
import {ref} from "vue"
import {useRouter} from "vue-router"
const router = useRouter()
const images = ref("https://sibirkoleso.ru/upload/iblock/2db/8ke3rticgx2x9y4o1x37alzdxn4nr2mf/tyrebox_banner.png"),
 autoZapchast = ref(image),
 shina = ref(shinaImg),
 diska = ref(diskaImg)
 const Aksiya = () => {
    router.push({path: '/stocks/vash-zakaz-v-udobnom-meste-i-lyuboe-vremya'})
 }
 const Tovar = () => {
    router.push({path: '/stocks/tovary-dlya-avto'})
 }
 const Shina = () => {
    router.push({path: '/stocks/shinomontazh-v-podarok'})
 }
 const Service = () => {
    router.push({path: '/service'})
 }
 const TovarCredit = () => {
    router.push({path: '/stocks/tovary-v-kredit'})
 }
</script>

<style scoped>
.center_right:hover .arrow{
    color: green !important;
    transform: translateX(10px);
    display: inline-block;

}
.credit:hover .content .arrows{
    transform: translateX(10px);
}
.credit .content .arrows{
    transition: all 0.5s ease-in-out;
}
</style>