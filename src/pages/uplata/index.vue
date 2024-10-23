<template>
    <div class="Contact">
       <div class="menu">
        <Menu/>
       </div>
       <div class="content py-5">
          <About :aboutInfo="aboutInfo">
          </About>
       </div>
       <div class="payment_information">
          <Payment />
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
import Payment from "@/components/paymentInfo.vue"
import {ref} from "vue"
const number = ref({
    num: 1,
    style: "w-1/2 h-1/2 block object-cover"
})
const aboutInfo = ref({
   footer_text: "",
   title: "Оплата",
   disks: [
      {
         title: "Рассрочка",
         icon: "https://sibirkoleso.ru/upload/logos/payment6.svg",
         text: "Предлагаем оформить покупку товара в рассрочку от ведущих банков: без переплаты, без первоначального взноса."
      },
      {
         title: "При получении заказа",
         icon: "https://sibirkoleso.ru/upload/logos/payment1.svg",
         text: "Вы всегда можете оплатить заказ при получении: наличными или с помощью банковской карты."
      },
      {
         title: "Банковская карта",
         icon: "https://sibirkoleso.ru/upload/logos/payment2.svg",
         text: "Онлайн оплатить заказ с помощью: Visa, MasterCard, American Express, JSB, Diners Club, Мир и др."
      },
      {
         title: "Безналичный расчет",
         icon: "https://sibirkoleso.ru/upload/logos/payment3.svg",
         text: "Оплатить с помощью банковского перевода (по счету), для юридических лиц, так и для физических лиц."
      },
      {
         title: "Кредит",
         icon: "https://sibirkoleso.ru/upload/logos/payment4.svg",
         text: "Возможность приобрести товар в кредит. Подробнее об условиях и банках партнерах читайте в разделе «Кредит»."
      },
      {
         title: "QR-Код (СБП)",
         icon: "https://sibirkoleso.ru/upload/logos/payment5.svg",
         text: "Система быстрых платежей. Вы можете оплатить заказ, отсканировав QR-код в мобильном приложении вашего банка."
      }
   ]
})
</script>

<style scoped>

</style>