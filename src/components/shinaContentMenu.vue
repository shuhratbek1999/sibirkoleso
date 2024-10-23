<template>
    <v-container>
        <div class="shina_top_top xx:flex-col xx:items-start xl:flex-row md:flex-row flex xl:justify-between md:justify-between xl:items-center md:items-center">
        <div class="shina_top_left xx:flex-col xl:flex-row md:flex-row flex font-mono">
            <div class="left_item p-2 flex items-center cursor-pointer"
            :class="[filter_category ? 'text-white' : 'text-gray-400']"
            @click="Parametr()"
            >
                <span class="mdi mdi-filter-variant px-2 text-xl"></span>
                <span>По параметрам</span>
            </div>
            <div class="left_item p-2 flex items-center cursor-pointer"
            :class="[!filter_category ? 'text-white' : 'text-gray-400']"
            @click="Automobil()"
            >
                <span class="mdi mdi-car-back px-2 text-xl"></span>
                <span>По автомобилям</span>
            </div>
        </div>
        <div class="shina_top_right xx:ml-5 xl:ml-0 flex items-center">
            <div class="select xx:w-11/12">
                <v-select
                    v-model="selected"
                    :items="items"
                    item-title="text"
                    item-value="value"
                    variant="underlined"
                    class="select-container xx:w-full xl:w-80 p-0"
                    ></v-select>
            </div>
        </div>
    </div>
    </v-container>
</template>

<script setup>
import {ref} from "vue"
const emits = defineEmits(['category'])
let selected = ref("Легковые авто"),
filter_category = ref(true)
const items = ref([
    {
        value: 1, text: "Легковые авто", icon: "mdi mdi-home"
    },
    {
        value: 2, text: "Грузовые авто", icon: "mdi mdi-home"
    },
    {
        value: 3, text: "Мото-квадро", icon: "mdi mdi-home"
    }
])
const Parametr = () => {
    filter_category.value = true
    filterEmits(filter_category.value)
}
const Automobil = () => {
    filter_category.value = false
     filterEmits(filter_category.value)
}
const filterEmits = (data) => {
    emits('category', data)
}
</script>

<style scoped>
.select-container {
    max-width: 300px; /* Sizga kerakli kenglikni o'rnating */
}
</style>