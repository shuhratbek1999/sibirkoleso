<template>
    <div class="Credit">
       <div class="menu">
        <Menu/>
       </div>
       <div class="content xl:py-5">
          <About :aboutInfo="aboutInfo">
             <template v-slot:contact>
               <span></span>
             </template>
             <template v-slot:text>
               <span></span>
             </template>
             <template v-slot:infoText>
                 <div class="credit_text xx:w-11/12 xx:mt-4 xl:w-7/12 md:w-7/12 font-inter xl:mt-20 md:mt-16 text-sm">
                     {{aboutInfo.credit}}
                 </div>
             </template>
          </About>
       </div>
       <div class="credit_change">
            <Credit :CreditList="CreditList" />
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
import {ref,onMounted} from "vue"
const number = ref({
    num: 1,
    style: "w-1/2 h-1/2 block object-cover"
})
const aboutInfo = ref({
   footer_text: "",
   title: "Кредит",
   footers: [],
   credit: "Мы рады предложить нашим покупателям возможность приобрести понравившийся вам товар в кредит, более подробную информацию о банках-партнерах и условиях кредитования — читайте ниже. По всем вопросам обращайтесь по телефонам: 8 800 775-1050 (звонок бесплатный)."
})
const CreditList = ref([
    {
        icon: "https://sibirkoleso.ru/upload/logos/rs-logo.png",
        title: "Русский Стандарт",
        info:[
            {
            petition:[
            'Срок кредита: от 3 до 36 месяцев',
            'Годовая ставка: 17%',
            'Сумма кредита: от 3 000 до 300 000 руб',
            'Первоначальный взнос: от 0%'
            ]
            },
            {
                terms:{
                     title: 'Для оформления кредита вам необходимо:',
                     list:[
                        'Возраст от 20 лет',
                        'Паспорт гражданина РФ',
                        'Постоянная прописка на территории РФ'
                     ]
                  }
            }
        
        ]
    },
    {
        icon: "https://sibirkoleso.ru/upload/logos/otp-logo.png",
        title: "ОТП Банк",
        info:[
            {
                petition:[
            'Срок кредита: от 4 до 36 месяцев',
            'Годовая ставка: от 14%',
            'Сумма кредита: от 2 000 до 300 000 руб',
            'Первоначальный взнос: от 0%'
        ],
            },
            {
            terms:{
            title: 'Для оформления кредита вам необходимо:',
            list:[
                'Возраст от 21 до 69 лет (включительно)',
                'Паспорт гражданина РФ',
                'Официальное трудоустройство.'
              ]
             }
            }
        ]
    },
    {
        icon: "https://sibirkoleso.ru/upload/logos/tinkoff-logo.png",
        title: "Тинькофф Банк",
        info:[
            {
                petition:[
            'Срок кредита: от 3 до 24 месяцев',
            'Годовая ставка: от 16%',
            'Сумма кредита: от 3 000 до 200 000 руб',
            'Первоначальный взнос: от 0%'
        ]
            },
            {
              terms:{
            title: 'Для оформления кредита вам необходимо:',
            list:[
                'Возраст от 21 до 69 лет (включительно)',
                'Паспорт гражданина РФ',
                'Официальное трудоустройство.'
            ]
        }
            }
        ]
    }
])
onMounted(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
})
</script>

<style scoped>

</style>