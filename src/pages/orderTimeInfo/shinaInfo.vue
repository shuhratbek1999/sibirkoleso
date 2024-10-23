<template>
    <div class="shinaInfoPadarik">
       <div class="menu">
        <Menu/>
       </div>
       <div class="content py-5"> 
          <About :aboutInfo="aboutInfo">
             <template v-slot:text>
               <span></span>
             </template>
             <template v-slot:infoText>
             </template>
             <template v-slot:footers>
                 <div class="w-full xx:flex-col xl:flex-row md:flex-row flex">
                     <div class="text-sm menus xl:w-1/2 h-10 cursor-pointer">
                        <span class="mr-2 mdi mdi-menu"></span>
                        <span class="transition-all font-sans">Акции и события</span>
                     </div>
                     <div class="xl:w-1/2">
                         <div class="text font-sans text-gray-700 text-sm">
                            {{info.text}}
                         </div>
                         <div class="text mt-4 font-sans text-gray-700 text-sm">
                            {{info.info_text}}
                         </div>
                         <div class="list" v-if="info.list">
                            <h4 class="text-gray-600">{{info.list.name}}</h4>
                            <div class="item text-sm text-gray-700" v-for="(item,index) in info.list.items" :key="index">
                                {{item}}
                            </div>
                         </div>
                         <div class="share mt-4">
                            <span class="mr-2 mdi mdi-share-variant-outline"></span>
                            <span>{{info.share}}</span>
                         </div>
                     </div>
                 </div>
             </template>
          </About>
       </div>
       <div class="footer bg-zinc-900 xl:h-89 md:h-89 flex flex-col justify-center">
           <Footer />
       </div>
    </div>
</template>

<script setup>
import Menu from "@/components/MenuBar.vue"
import Footer from "@/components/footer.vue"
import About from "@/components/about.vue"
import {ref} from "vue"
const number = ref({
    num: 1,
    style: "w-1/2 h-1/2 block object-cover"
})
const aboutInfo = ref({
   footer_text: "",
   title: "Шиномонтаж в подарок"
})
const info = ref({
    text: "При единовременной покупке 4 авто шин с пометкой акция на сайте — вы получаете купон на бесплатные услуги по монтажу и балансировке. Купоном можно воспользоваться в удобное вам время и в любом пункте выдачи нашей компании.(Наличие купона не дает право на обслуживание вне очереди).",
    info_text: "Купон дает право на проведение работ по балансировке и монтажу купленных в нашей компании шин. Услуги снятие, установка с вашего автомобиля, а также демонтаж оплачиваются отдельно. Купон действителен при предъявлении документа подтверждающего покупку.Акция действует при наличии заказа на сайте.",
    share: "Поделиться",
    list:{
        name: "Акция не распространяется на следующие филиалы:",
        items:[
            'г. Барабинск, ул. Ермака, 20, «Автолэнд».',
            'г. Абакан, ул. Итыгина, 28',
            'г. Омск, ул. 5-я Северная, 201'
        ]
    }
})
</script>

<style scoped>
.menus span{
    transition: all 0.8s ease-in-out;
}
.menus:hover span {
    color: red;
}
</style>