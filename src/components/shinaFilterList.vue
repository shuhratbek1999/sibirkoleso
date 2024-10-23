<template>
    <v-container>
        <!-- {{props.filterShina}} -->
        <slot name="list_item">
        <div class="list_top xx:flex-col xx:items-start flex xl:flex-row xl:justify-between md:flex-row md:justify-between xx:py-5 xl:py-8 md:py-8">
            <div class="list_left xx:flex-col xl:flex-row md:flex-row flex xl:justify-between items-center xl:w-1/4">
                <p class="title xx:text-sm xx:-ml-3 xl:-ml-0 xl:text-base font-sans">Сортировать по: </p>
                <p class="filter xx:my-2 xl:my-0">
                    <span class="px-4 cursor-pointer"
                    @click="filterExtant('extant')">
                        <span :class="[filter == 'extant' ? 'mdi mdi-filter-variant mr-2' : '']"></span>
                        <span class="xx:text-sm xl:text-base font-sans">Наличию</span>
                    </span>
                    <span class="cursor-pointer"
                    @click="filterExtant('price')">
                        <span :class="[filter !== 'extant' ? 'mdi mdi-filter-variant mr-2' : '']"></span>
                        <span class="xx:text-sm xl:text-base font-sans">Цене</span>
                    </span>
                </p>
            </div>
            <div class="list_right xx:ml-4 xl:flex xl:w-3/4 flex justify-end">
                <span class="xx:text-sm xl:text-base font-sans">
                    Наличие в магазинах
                </span>
            </div>
        </div>
        </slot>
        <div class="list_foter xx:flex-col xx:items-center xl:flex-row md:flex-row flex flex-wrap">
            <div 
            class="list_item xx:w-11/12 xl:w-1/4 md:w-1/3 p-8 relative border-0.2 cursor-pointer" 
            v-for="(item,index) in filterShinaList()"
            :key="index"
            @click="ShinaAbout(item)"
            >
              <div class="images flex justify-center cursor-pointer">
                 <img :src="item.img" alt="images" class="images h-auto w-1/2">
              </div>
              <span class="mt-10 inline-block">
                    <span class="absolute top-10">
                    <v-badge :content="item.extant"></v-badge>
                </span>
                <h4 class="cursor-pointer font-medium producer">{{item.producer}}</h4>
                <p></p>
                <p class="parametr text-gray-400">
                    {{item.shirina}}/{{item.visota}}/{{item.diametr}}
                </p>
              </span>
              <div class="price my-4">
                <span class="prices font-medium pr-1 text-lg">{{item.price}}</span>₽
                <span class="prices"></span>
              </div>
            </div>
        </div>
    </v-container>
</template>       

<script setup>
import {computed, ref} from "vue"
import {Disks} from "../stores/index"
import {useRouter} from "vue-router"
const router = useRouter()
let filter = ref("extant"),
diskShina = Disks()
const props = defineProps({
    filterShina:{
        type: Array,
        required: true
    }
})
const filterExtant = (data) => {
    filter.value = data
}
const filterShinaList = () => {
    if(filter.value == "extant"){
       return props.filterShina.sort((a, b) => a.extant - b.extant) 
    }
    return props.filterShina.sort((a, b) => a.price - b.price)
}
const ShinaAbout = (data) => {
    diskShina.diskOne.push(data)
    router.push({path: '/about_product', query: {id: data.id}})
    window.scrollTo({top: 0, behavior: 'smooth'})
}
</script>

<style scoped>
.list_item:hover{
    border-color: red;
}
.list_item:hover .producer{
    color: orangered;
}
.images,.producer,.list_item{
    transition: all 0.5s ease-in;
}
.list_item:hover .images{
    transform: scale(1.1);
}
</style>