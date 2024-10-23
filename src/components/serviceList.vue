<template>
    <v-container class="max-h-max my-10">
       <div class="service_category xx:flex-col md:flex-row xl:flex-row flex justify-start xl:ml-32 md:ml-0">
          <span class="text-sm text-gray-700">
            Показать:
          </span>
          <div class="flex xx:ml-3 xx:w-full xx:flex-wrap xl:flex-nowrap xl:w-7/12 md:w-7/12 md:flex-nowrap">
            <div class="category_list xx:w-1/2 xx:text-xs xl:w-1/3 md:w-1/3 flex items-center cursor-pointer xl:mx-2 md:mx-0 xl:text-sm text-gray-600"
                v-for="(item,index) in categorys"
                :key="index"
                @click="Category(item)">
                {{item.name}} <span v-if="item.cat == category" class="ml-2 mdi mdi-check-circle-outline"></span>
            </div>
          </div>
       </div>
       <div class="filter_list flex flex-wrap my-5">
          <div class="items xx:w-full transition-all border-0.1 xl:w-3/12 md:w-4/12 p-8 hover:border-red-700"
          v-for="(item,index) in filterServiceCategory"
          :key="index">
              <h2 class="font-bold">{{item.name}}</h2>
               <div class="info my-5 text-xs text-gray-600">
                  <p v-if="item.montaj">
                       Монтаж / демонтаж: {{item.montaj}}
                  </p>
                  <p v-if="item.balansirovka">
                       Балансировка: {{item.balansirovka}}
                  </p>
                   <p v-if="item.ustanovka">
                       Снятие-установка: {{item.ustanovka}}
                   </p>
               </div>
              <p class="price font-bold">
                {{item.price}} <span class="text-gray-600 text-xs font-normal">руб.</span>
              </p>
              <p class="text-xs text-gray-700">
                (комплекс – 4 шт.)
              </p>
          </div>
       </div>
       <div class="text xx:w-10/12 xl:w-3/12 md:w-3/12 text-xs xl:ml-56 md:ml-56 text-gray-400">
          Автошины Ranflat: +125 руб к стоимости монтажа.
          Утилизация шины (R12 – R16) 1 шт. 50 руб.
          Утилизация шины (R15 – R16, джип) 1 шт. 100 руб.
          Утилизация шины (R17 – R21) 1 шт. 100 руб.
       </div>
    </v-container>
</template>

<script setup>
import {computed,ref} from "vue"
const props = defineProps({
    ServicesList:{
        type: Array,
        required: true
    }
})
let category = ref("passenger")
const Category = (data) => {
    category.value = data.cat
}
const filterServiceCategory = computed(() => {
    return props.ServicesList.filter(item => {
        const filterCat = category.value ? item.cat == category.value : true
        return filterCat
    })
})
const categorys = ref([
    {
        name: "Легковые авто",
        cat: "passenger"
    },
    {
        name: "Джипы / Кроссоверы",
        cat: "jeeps"
    },
    {
        name: "Грузовые и Газели",
        cat: "truck"
    }
])

</script>

<style lang="scss" scoped>

</style>