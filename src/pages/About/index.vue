<template>
    <div class="About">
       <div class="menu">
        <Menu/>
       </div> 
       <div class="content py-5">
          <About :aboutInfo="aboutInfo" />
       </div> 
       <div class="carousel">
          <Marka :homeProp="images" :Obj="number">
             <template v-slot:about>
                 <div class="info h-40 xx:w-11/12 bg-white xx:my-2 xl:my-0 md:my-0 xl:w-64 md:w-64 xl:-mt-44 md:-mt-44 xl:ml-32 md:ml-32 xl:p-10 md:p-10 z-50 ">
                    <span class="text-sm inline-block w-80">
                        Мы всегда готовы выслушать ваши пожелания и замечания по работе нашего магазина, 
                        для этого вам нужно позвонить по телефону:
                    </span>
                    <p class="w-64">
                        <span class="ph pt-10 inline-block text-2xl font-bold">+998 99 3941226</span>
                        <span class="text-xs block">(звонок бесплатный)</span>
                    </p>
                 </div>
             </template>
             <template v-slot:aboutTitle>
                <div class="text text-xs ml-10 text-gray-500 flex items-center">
                  Магазин «Сибирь-Колесо» на ул. Петухова 35, корпус 8
               </div>
             </template>
          </Marka>
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
import Marka from "@/components/marka.vue"
import {ref} from "vue"
const images = ref([
    'https://sibirkoleso.ru/upload/iblock/ec8/batch_3.jpg',
    'https://sibirkoleso.ru/upload/iblock/f81/batch_2.jpg',
    'https://sibirkoleso.ru/upload/iblock/451/batch_1.jpg'
])
const aboutInfo = ref({
   title: "О компании",
   text: "Склад-магазин: «Сибирь Колесо» Мы представляем вашему вниманию широкий выбор зимних и летних шин. Наш ассортимент постоянно обновляется и пополняется. Обращайтесь в нашу компанию и вы убедитесь, что сотрудничать с нами не только выгодно и удобно, но и очень приятно. Не случайно наш магазин имеет  много постоянных клиентов с которыми мы благотворно работаем вот уже много лет.",
   disks:[
    {title: "Широкий ассортимент", text: "Наша компания предлагает все виды моделей шин, как для спокойной езды в населенном пункте, так и для комфортной и надежной езды при высокой скорости за городом. Являясь официальным дилером многих всемирно известных производителей шин и дисков, мы предлагаем качественную продукцию по низким ценам."},
    {title: "Профессионализм", text: "Теперь нет нужды «носиться» по всему городу в поисках подходящих шин, достаточно позвонить по нашему номеру телефона. Наш сайт функционирует круглосуточно, мы принимаем заказы по всей России, даем подробную, детальную консультацию по всем интересующим вопросам."}
   ],
   footer_text: "Наши специалисты без труда подберут для вас нужные шины и диски, учитывая все индивидуальные особенности вашего автомобиля. Если вы затрудняетесь самостоятельно сделать выбор, наши консультанты с радостью и абсолютно бесплатно помогут вам. Подберут подходящий размер, производителя, цену и. т. д. Если в нашем ассортименте не оказалось каких-то конкретных шин, которые вы ищете, мы пойдем вам навстречу, выполнив ваш индивидуальный заказ по доставке эксклюзивного товара."
})
const number = ref({
    num: 1,
    style: "xl:w-1/2 xl:h-1/2 md:w-1/2 md:h-1/2 xx:w-11/12 xx:h-11/12 block object-cover"
})
</script>

<style scoped>

</style>