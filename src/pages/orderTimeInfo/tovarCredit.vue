<template>
    <div class="tovarCredit">
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
                            {{info.title}}
                         </div>
                         <div class="text mt-3 font-sans text-gray-700 text-sm">
                            {{info.text}}
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
   title: "Товары в кредит"
})
const info = ref({
    title: "Уважаемые клиенты, появилась возможность приобрести любые наши товары в кредит",
    text: "Кредит оформляется онлайн. После оформления заказа, наш менеджер подтвердит наличие товара и вам будет отправлена ссылка для заполнения анкеты на кредит в выбранном банке. Условия кредитования вы можете узнать в разделе «Кредит»",
    url: "https://www.youtube.com/watch?v=fqrNmQmcjd0",
    share: "Поделиться"
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