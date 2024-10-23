<template>
   <div  class="home">
        <menuBar />
        <ul class="dwider flex justify-center items-center bg-slate-100 h-22">
            <li 
            class="mr-10 cursor-pointer"
            @click="show = !show"
            >
                  <span class="font-semibold text-gray-400" :class="{'active': show !== true}">Шины</span>
            </li>
            <li 
            class="cursor-pointer"
            @click="show = !show"
            >
                  <span class="font-semibold text-gray-400" :class="{'active': show === true}">Диски</span>
            </li>
        </ul>
        <div class="dwider_content">
            <ShinaItem v-if="!show"/>
            <DiskItem v-else/>
        </div>
        <div class="aksiya">
             <aksiyaVue />
        </div>
        <div class="contact bg-slate-100 h-60">
            <contactVue/>
        </div>
        <div class="advantages py-5">
            <AdvantagesVue :AdvantagesProp="AdvantagesProp" />
        </div>
        <div class="advertising flex justify-center">
           <advertisingVue/>
        </div>
        <div class="marka">
            <markaVue :homeProp="images" :Obj="{...number,numberCom}" />
        </div>
        <div class="footer bg-zinc-900 xl:h-89 flex flex-col justify-center">
            <Footer/>
        </div>
   </div>
</template>

<script setup>
import menuBar from "@/components/MenuBar.vue"
import ShinaItem from "@/components/shinaContent.vue"
import DiskItem from "@/components/diskItem.vue"
import AdvantagesVue from "@/components/advantages.vue"
import markaVue from "@/components/marka.vue"
import Footer from "../../components/footer.vue"
import aksiyaVue from "../../components/aksiya.vue"
import contactVue from "../../components/contact.vue"
import advertisingVue from "../../components/advertising.vue"
import Price from "@/assets/images/price.png"
import tires from "@/assets/images/tires.jpg"
import flag from "@/assets/images/flag.jpg"
import {computed, ref, watchEffect} from "vue" 
let show = ref(false)
const images = ref([
    'https://sibirkoleso.ru/upload/iblock/033/s19n.gif',
    'https://sibirkoleso.ru/upload/iblock/911/s18n.gif',
    'https://sibirkoleso.ru/upload/iblock/599/s17n.gif',
    'https://sibirkoleso.ru/upload/iblock/8f8/s16n.gif',
    'https://sibirkoleso.ru/upload/iblock/cdb/s15n.gif',
    'https://sibirkoleso.ru/upload/iblock/59e/s14n.gif',
    'https://sibirkoleso.ru/upload/iblock/34e/s13n.gif',
    'https://sibirkoleso.ru/upload/iblock/637/s10n.gif',
    'https://sibirkoleso.ru/upload/iblock/329/s11n.gif',
    'https://sibirkoleso.ru/upload/iblock/cbe/s9n.gif',
    'https://sibirkoleso.ru/upload/iblock/33c/s12n.gif',
    'https://sibirkoleso.ru/upload/iblock/80d/s7n.gif',
    'https://sibirkoleso.ru/upload/iblock/454/s6n.gif'
])
const AdvantagesProp = ref({
    title: "Наши преимущества",
    text: "Покупая шины и диски в Сибирь Колесо, Вы убедитесь, что сотрудничать с нами не только выгодно, но и чрезвычайно удобно. Не случайно наш интернет-магазин имеет большое количество постоянных клиентов, с которыми мы благотворно работаем вот уже много лет.",
    disks: [
        {
            icon: Price,
            title: "Низкие цены",
            text: "Мы несомненно можем похвастаться низкими ценами на нашу продукцию. Ведь мы являемся официальными диллерами производителей."
        },
        {
            icon: tires,
            title: "Широкий ассортимент",
            text: "Мы представляем продукцию более 30 фирм-поставщиков товаров и их производителей. Оперативно подберем шины и диски, идеально подходящие именно Вам."
        },
        {
            icon: flag,
            title: "Профессионализм",
            text: "Наши продавцы-консультанты с удовольствием ответят на все интересующие Вас вопросы, окажут помощь в правильном подборе товара."
        }
    ]
})
let number = ref({
    num: 6,
    style: "w-40 h-full block object-cover"
})
const numberCom = computed(() => {
    if(window.innerWidth < 768){
        return number.value.num = 1
    }
})
watchEffect(() => {
    if(window.innerWidth){
        console.log("windoww");
    }
})
</script>

<style scoped>
.active{
   color: black;
}
</style>