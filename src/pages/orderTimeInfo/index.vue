<template>
    <div class="Contact">
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
                     <div class="text-sm xl:w-1/2 h-10 cursor-pointer hover:first-line:text-red-700">
                        <span class="mdi mdi-menu"></span>
                        <span class="transition-all">Акции и события</span>
                     </div>
                     <div class="xl:w-1/2">
                         <div class="text font-sans text-gray-700 text-sm">
                            {{info.text}}
                         </div>
                         <div class="video my-4">
                             <video width="640" height="360" controls>
                                <source :src="info.url" type="video/mp4">
                            </video>
                         </div>
                         <div class="share">
                            <span class="mdi mdi-share-variant-outline"></span>
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
   title: "Ваш заказ в удобном месте и любое время"
})
const info = ref({
    text: "Знакомьтесь с новой системой доставки заказов от TyreBox! Наша уникальная сеть постаматов предлагает удобство получения товаров в удобном для вас месте. Просто сделайте заказ на нашем сайте, выберите ближайший постамат и заберите покупку в любое время, которое вам удобно. TyreBox делает вашу жизнь проще и комфортнее!",
    url: "https://www.youtube.com/watch?v=fqrNmQmcjd0",
    share: "Поделиться"
})
</script>

<style scoped>

</style>