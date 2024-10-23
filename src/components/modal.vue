<template>
    <v-container>
      <v-dialog v-model="showModal" max-width="700">
        <v-card>
          <v-card-title class="h-20 flex items-center fixed top-0 border-b-0.1 w-full bg-white z-10">
            <span class="headline inline-block w-1/3 pl-2">Оформление заказа</span>
            <v-spacer></v-spacer>
            <span 
            class="mdi mdi-close cursor-pointer inline-block w-1/3 text-end pr-5" 
            @click="showModal = false"></span>
          </v-card-title>
          <v-card-text class="mt-20">
             <div class="dialog_title mb-5">
                  <h2 class="font-bold">Ваши данные:</h2>
             </div>
             <form action="" class="dialog_form">
                <div class="name_family flex w-full justify-between">
                    <v-text-field
                        v-model="data.family"
                        label="фамилия"
                        placeholder="Bu yerga matn kiriting"
                        outlined
                        class="mr-2"
                        ></v-text-field>
                    <v-text-field
                        v-model="data.name"
                        label="имя"
                        placeholder="Bu yerga matn kiriting"
                        outlined
                        class="ml-2"
                        ></v-text-field>
                </div>
                <div class="email">
                    <v-text-field
                        v-model="data.email"
                        label="email"
                        placeholder="Bu yerga matn kiriting"
                        outlined
                        class="mr-2"
                        ></v-text-field>
                </div>
                <div class="phone">
                    <v-text-field
                        v-model="data.phone"
                        label="phone"
                        placeholder="Bu yerga matn kiriting"
                        outlined
                        class="mr-2"
                        ></v-text-field>
                </div>
                <div class="check">
                    <v-checkbox class="text-sm" label="Оформить как юридическое лицо"></v-checkbox>
                </div>
                <div class="dostavka">
                    <h2 class="dostavka_title font-bold">
                         Доставка:
                    </h2>
                    <div class="dostavka_item flex flex-wrap my-4">
                        <div 
                        class="list xx:w-full border-0.1 p-5 rounded m-1 cursor-pointer text-sm xl:w-105 md:w-105" 
                        :class="[dostavka_name == item.name ? 'border-red-600 text-red-600' : 'border-gray-400 text-black']"
                        v-for="(item,index) in dostavkaList" 
                        :key="index"
                        @click="Dostavka(item.name)"
                        >
                           {{item.name}}
                        </div>
                    </div>
                    <v-text-field
                        v-model="data.phone"
                        label="укажите адрес доставки"
                        placeholder="Bu yerga matn kiriting"
                        outlined
                        class="mr-2"
                        ></v-text-field>
                </div>
                <div class="uplata">
                    <h2 class="uplata_title font-bold">
                         Оплата:
                    </h2>
                    <div class="uplata_item flex flex-wrap my-4">
                        <div 
                        class="list xx:w-full border-0.1 py-4 px-5 rounded m-1 cursor-pointer text-sm flex items-center xl:w-105 md:w-105"
                        :class="[uplata_name == item.name ? 'border-red-600 text-red-600' : 'border-gray-400 text-black']"
                        v-for="(item,index) in uplataList" 
                        :key="index"
                        @click="Uplata(item.name)"
                        >
                           <span :class="item.icon" class="mr-4 text-xl"></span>
                           <span>{{item.name}}</span>
                        </div>
                    </div>
                    <div class="warning flex justify-between mb-15">
                        <div class="warning_icon mr-2 h-6 px-1 rounded-full text-center border-0.1 border-black">
                            <span class="mdi mdi-exclamation text-xls"></span>
                        </div>
                        <p class="text-xls ml-2 text-gray-600">
                            После оформления заказа, наш менеджер подтвердит наличие товара и вы сможете перейти 
                            к оплате из вашего списка заказов в личном кабинете. Так же, вам будет направлено 
                            уведомление на E-mail и SMS
                        </p>
                    </div>
                    <v-text-field
                        v-model="data.phone"
                        label="Комментарий к заказу"
                        placeholder="Bu yerga matn kiriting"
                        outlined
                        class="mr-2"
                        ></v-text-field>
                </div>
                <div class="all_price flex justify-between items-center">
                    <button class="bg-orange-600 text-white rounded py-3 px-5 text-sm">
                        Оформление заказа
                    </button>
                    <div class="price">
                        <span>
                            <span class="font-bold mr-2">Итог:</span>
                            <span v-for="(item,index) in props.modalData" :key="index">
                               {{item['AllPrices'] ? item['AllPrices'] : ""}}
                            </span> ₽
                        </span>
                    </div>
                </div>
             </form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
</template>

<script setup>
import {ref} from "vue"
const props = defineProps({
    modalData: {
        type: Array,
        required: true
    }
})
let showModal = ref(false),
data = ref({
    family: "",
    name: "",
    email: "",
    phone: "",
    adress: "",
    pay: ""
}),
dostavkaList = ref([
    {name: "По городу"},
    {name: "Самовывоз"},
    {name: "Транспортной компанией"},
    {name: "Постамат TyreBox"}
]),
uplataList = ref([
     {name: "При получении заказа", icon: "mdi mdi-ticket-percent"},
     {name: "Банковская карта", icon: "mdi mdi-card-bulleted"},
     {name: "QR-код (СБП)", icon: "mdi mdi-qrcode-scan"}
]),
dostavka_name = ref(null),
uplata_name = ref(null)
const Dostavka = (name) => {
     dostavka_name.value = name
}
const Uplata = (name) => {
     uplata_name.value = name
}
const activeModal = () => {
    showModal.value = !showModal.value
}
defineExpose({activeModal})
</script>

<style lang="scss" scoped>

</style>