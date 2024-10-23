<template>
    <div class="Credit">
       <div class="menu">
        <Menu/>
       </div>
       <div class="content py-5 border-b-0.1">
          <About :aboutInfo="aboutInfo">
             <template v-slot:contact>
               <span></span>
             </template>
             <template v-slot:infoText>
               <span></span>
             </template>
             <template v-slot:text>
                 <div class="credit_text xx:mt-5 xl:w-7/12 md:w-7/12 font-inter xl:mt-20 md:mt-10 text-sm">
                     {{aboutInfo.credit}}
                 </div>
             </template>
             <template v-slot:serviceTitle>
                  <h1 class="text-xl font-bold xl:w-7/12 md:w-7/12 xl:-mb-10 mt-10">
                    {{titles}}
                  </h1>
             </template>
          </About>
       </div>
       <div class="serviceList">
           <ServicesListVue :ServicesList="ServicesList" />
       </div>
       <div class="servicesInfo">
            <ServicesInfo />
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
import Credit from "@/components/credit.vue"
import ServicesListVue from "@/components/serviceList.vue"
import ServicesInfo from "@/components/serviceInfo.vue"
import {ref} from "vue"
const number = ref({
    num: 1,
    style: "w-1/2 h-1/2 block object-cover"
})
const titles = ref("Шиномонтаж")
const aboutInfo = ref({
   footer_text: "",
   title: "Сервис",
   footers: [],
   credit: "Совершив у нас покупку автошин, мы предлагаем сделать шиномонтаж, по самым привлекательным ценам. У нас фиксированные цены, и мы не завышаем стоимость работ в сезон! Цены указанные ниже, действуют круглый год. По любым вопросам — обращайтесь к нашим менеджерам, по телефону: 8 800 775-1050"
})
const ServicesList = ref([
    {
        name: "R12-13",
        montaj: "80 / 80",
        balansirovka: 130,
        ustanovka: 100,
        price: 1400,
        cat: "passenger"
    },
    {
        name: "R14",
        montaj: "110 / 110",
        balansirovka: 150,
        ustanovka: 150,
        price: 1500,
        cat: "passenger"
    },
    {
        name: "R15",
        montaj: "130 / 130",
        balansirovka: 150,
        ustanovka: 150,
        price: 1800,
        cat: "passenger"
    },
    {
        name: "R16",
        montaj: "175 / 175",
        balansirovka: 175,
        ustanovka: 150,
        price: 2000,
        cat: "passenger"
    },
    {
        name: "R12-13",
        montaj: "80 / 80",
        balansirovka: 130,
        ustanovka: 100,
        price: 1400,
        cat: "passenger"
    },
    {
        name: "R17",
        montaj: "200 / 200",
        balansirovka: 225,
        ustanovka: 200,
        price: 2600,
        cat: "passenger"
    },
    {
        name: "R18",
        montaj: "225 / 225",
        balansirovka: 250,
        ustanovka: 250,
        price: 2900,
        cat: "passenger"
    },
    {
        name: "R19-21",
        montaj: "300 / 300",
        balansirovka: 325,
        ustanovka: 325,
        price: 4500,
        cat: "passenger"
    },
    {
        name: "R12-13",
        montaj: "80 / 80",
        balansirovka: 130,
        ustanovka: 100,
        price: 1400,
        cat: "passenger"
    },
    {
        name: "R15-16 (джип)",
        montaj: "225 / 225",
        balansirovka: 250,
        ustanovka: 250,
        price: 2900,
        cat: "jeeps"
    },
     {
        name: "R17 (джип)",
        montaj: "250 / 250",
        balansirovka: 250,
        ustanovka: 250,
        price: 3300,
        cat: "jeeps"
    },
     {
        name: "R18 (джип)",
        montaj: "275 / 275",
        balansirovka: 300,
        ustanovka: 300,
        price: 3500,
        cat: "jeeps"
    },
     {
        name: "R19-21 (джип)",
        montaj: "300 / 300",
        balansirovka: 325,
        ustanovka: 325,
        price: 4500,
        cat: "jeeps"
    },
    {
        name: "R15.5 – R16",
        balansirovka: 350,
        price: 450,
        cat: "truck"
    },
    {
        name: "R16",
        balansirovka: 150,
        price: 450,
        cat: "truck"
    },
    {
        name: "R17.5 – R19.5",
        balansirovka: 500,
        price: 800,
        cat: "truck"
    },
    {
        name: "R20",
        balansirovka: 700,
        price: 1000,
        cat: "truck"
    },
    {
        name: "R22.5",
        balansirovka: 700,
        price: 1000,
        cat: "truck"
    }
])

</script>

<style scoped>

</style>