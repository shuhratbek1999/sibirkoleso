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
               <div class="contacts xl:-mt-10 md:-mt-10 xl:ml-52 md:ml-52">
                   <div class="contact_list py-5"
                   v-for="(item,index) in aboutInfo.footers"
                   :key="index">
                      <h1 
                      :class="[item.title == 'Реквизиты' ? 'text-gray-500 font-light text-sm' : 'text-black text-xl font-bold']">{{item.title}}</h1>
                      <p 
                      v-for="(x,index) in item.text"
                      :key="index"
                      :class="[item.title == 'Единая справочная' ? 'text-4xl font-bold' : 'text-sm']"
                      >
                         {{x}}
                      </p>
                   </div>
               </div>
             </template>
          </About>
       </div>
       <div class="footer bg-zinc-900 h-89 flex flex-col justify-center">
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
   title: "Контакты",
   footers: [
      {
        title: "Единая справочная",
        text: ['8 800 775 1050']
      },
       {
        title: "+7 (383) 388-55-32",
        text: []
      },
      {
        title: "info@sibirkoleso.ru",
        text: []
      },
      {
        title: "",
        text: [
            'Сибирь-Колесо, головной офис',
            '630088, Россия, г. Новосибирск, ул. Петухова, 35, корпус 8'
        ]
      },
      {
        title: "Реквизиты",
        text: [
            'Индивидуальный предприниматель Панфилов Сергей Александрович',
            'Почтовый адрес: 630057, г. Новосибирск, ул. Печатников 9, кв. 256.',
            'Фактический адрес: 630057, г. Новосибирск, ул. Печатников 9, кв. 256.',
            'ИНН 540861752310',
            'ОГРНИП 309547331600022 (от 12 ноября 2009 г.)',
            'Расчетный счет №40802810944050053101',
            'в Сибирский банк ПАО «Сбербанк»',
            'БИК 045004641',
            'Кор. счет №30101810500000000641'
        ]
      },
       {
        title: "Реквизиты",
        text: [
            'Индивидуальный предприниматель Панфилов Александр Александрович',
            'Почтовый адрес: 630098, г. Новосибирск, ул. Приморская, д. 26, кв. 62.',
            'Фактический адрес: 630098, г. Новосибирск, ул. Приморская, д. 26, кв. 62.',
            'ИНН 540809560848',
            'ОГРНИП 305547305300045 (от 22 Февраля 2005 г.)',
            'Расчетный счет №40802810532020000230',
            'в филиал ПАО «БАНК УРАЛСИБ» в г. Новосибирске.',
            'БИК 045004725',
            'Кор. счет №30101810400000000725'
        ]
      }
   ]
})
</script>

<style scoped>

</style>