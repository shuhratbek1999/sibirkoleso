<template>
    <v-container class="min-h-98">
        <div class="about_top xx:min-h-102 xl:h-100 xx:items-start xx:ml-3 xl:ml-0 md:ml-0 border-b-0.1 flex xx:flex-col md:flex-row xl:flex-row xl:items-center justify-center" id="about">
            <div class="img xx:w-full xl:w-1/2 md:w-1/2 flex justify-center xx:mt-28 xl:-mt-5 md:mt-0">
                 <img :src="ListsAbout.img" alt="" class="xx:w-6/12 xl:w-7/12">
            </div>
            <div class="about_content xl:w-1/2 md:w-1/2">
                <h1 class="text-2xl font-bold">{{ListsAbout.name}}</h1>
                <p class="my-10">
                    <span>
                        {{ListsAbout.shirina}}
                    </span>
                    /
                    <span>
                        {{ListsAbout.visota}}
                    </span>
                    /
                    <span>
                        {{ListsAbout.diametr}}
                    </span>
                </p>
                <div class="price">
                    <p class="text-sm">Под заказ:</p>
                    <span class="font-bold text-3xl pr-1">{{ListsAbout.price}} </span>
                    <span>₽</span>
                </div>
                <button 
                class="bg-orange-600 text-sm my-4 text-white py-3 px-4 
                rounded hover:bg-orange-300 transition-all"
                @click="Basket(ListsAbout)"
                >
                    Добавить в корзину
                </button>
                <div class="srok flex items-center mb-6">
                    <span class="mdi mdi-clock-time-five-outline text-xl mr-2"></span>
                    <span class="text-sm">
                        Срок поставки: 5 - 7 дней
                    </span>
                </div>
                <div class="credit bg-slate-100 rounded w-60 p-5 cursor-pointer">
                    <h2 class="text-gray-500 text-sm">Товары в кредит</h2>
                    <p class="text-sm my-3">
                        Появилась возможность приобрести любые наши товары в кредит.
                    </p>
                    <span class="text-xs border-0.1 border-gray-400 py-1 px-2 cursor-pointer">
                        Подробнее
                    </span>
                </div>
            </div>
        </div>
        <div class="Description flex justify-center flex-col items-center">
            <div class="content xl:w-2/3 md:w-2/3">
                <h1 class="font-bold text-3xl py-10">Описание</h1>
                <div class="text text-sm w-full">
                    {{newtext}} <br>
                    {{secondtext}}
                </div>
            </div>
        </div>
        <div class="shina_list my-5">
            <ShinaContentList
            :filterShina="disk.shinaLists">
             <template #list_item>
                <span></span>
             </template>
            </ShinaContentList>
        </div>
        <span class="mdi mdi-close text-3xl fixed top-5 right-5 cursor-pointer" @click="linkBack()"></span>
        <!-- {{updateQuery}} -->
        <Sidebar :basket="basket_data" ref="drawerRef" class="absolute" />
    </v-container>
</template>

<script setup>
import {Disks} from "../../stores/index"
import {computed, onMounted, ref, watchEffect} from "vue"
import {useRoute,useRouter} from "vue-router"
import ShinaContentList from "@/components/shinaFilterList.vue"
import Sidebar from "@/components/sidebar.vue"
const route = useRoute()
const router = useRouter()
const disk = Disks()
const drawerRef = ref(null)
let ListsAbout = ref({}),
newtext = ref(),
secondtext = ref(),
basket_data = ref([])
const splitText = () => {
    const splitTexts = ListsAbout.value.shina_text.split('?')
    newtext.value = splitTexts[0]
    secondtext.value = splitTexts[1]
}
const Basket = (data) => {
   disk.oneAboutDisk(data)
   drawerRef.value.toggleDrawer()
}
const oneShinaAbout = () => {
   if(route.query){
    let diskOne = disk.getOneDisk(route.query.id)
      ListsAbout.value = {...diskOne[0]}
    }
    splitText()
}
const linkBack = () => {
    router.push('/home')
    window.scrollTo({top: 0, behavior: 'smooth'})
}
onMounted(() => {
   oneShinaAbout()
})
watchEffect(() => {
    if(route.query.id){
      oneShinaAbout()  
    }
})
</script>

<style scoped>
* {
    box-sizing: border-box;
}
</style>