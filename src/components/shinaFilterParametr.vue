<template>
    <v-container>
    <div class="filter xx:flex-col xl:flex-row md:flex-row md:justify-between flex xl:justify-between relative"
    :class="[loading ? 'opacity-30' : '']"
    >
         <div class="parametr_item xx:my-2 xl:my-0 md:my-0 xl:w-1/4 md:w-1/4 mx-3 rounded bg-white">
            <div class="title xx:relative p-3 text-sm font-sans text-gray-600"
             @click="CategoryName(prop[0].category_name)">
                <span>{{prop[0].category_name}}</span>
                <span class="xx:absolute xx:right-2 text-xl md:hidden xl:hidden mdi mdi-chevron-down"></span>
            </div>
            <div class="item border-t-2 xl:h-36 md:h-36 overflow-y-auto"
                 :class="[showMobile == prop[0].category_name ? 'xx:h-36' : 'xx:h-0']">
                <div 
                    class="item_list p-3 text-xs cursor-pointer relative" 
                    v-for="(item,index) in prop[0].shirina"
                    :class="[shirina === item ? 'bg-orange-500 text-white hover:bg-orange-400' : ' hover:bg-gray-200']"
                    :key="index"
                    @click="ShirinaClick(item)"
                    @mouseover="hoveredItem = item"
                    @mouseleave="hoveredItem = null"
                    >
                   {{item}}
                   <span class="absolute right-2" v-if="hoveredItem === item && shirina === item">
                    <i class="mdi mdi-close"></i>
                   </span>
                   <span class="absolute right-2" v-else-if="hoveredItem !== item && shirina == item">
                    <i class="mdi mdi-check"></i>
                   </span>
                </div>
            </div>
        </div>
        <div class="parametr_item xx:my-2 xl:my-0 md:my-0 xl:w-1/4 md:w-1/4 mx-3 rounded bg-white">
            <div class="title xx:relative p-3 text-sm font-sans text-gray-600"
            @click="CategoryName(prop[1].category_name)">
                <span>{{prop[1].category_name}}</span>
                <span class="xx:absolute xx:right-2 text-xl md:hidden xl:hidden mdi mdi-chevron-down"></span>
            </div>
            <div class="item xx:h-0 border-t-2 xl:h-36 md:h-36 overflow-y-auto relative"
             :class="[showMobile == prop[1].category_name ? 'xx:h-36' : 'xx:h-0']">
                <div 
                    class="item_list text-xs p-3 hover:bg-gray-200 cursor-pointer" 
                    :class="[visota === item.number ? 'bg-orange-500 text-white hover:bg-orange-400' : ' hover:bg-gray-200']"
                    v-for="(item,index) in filterVisota" 
                    :key="index"
                    @click="VisotaClick(item)"
                    @mouseover="hoveredItem = item.number"
                    @mouseleave="hoveredItem = null"
                    >
                   {{item.number}}
                   <span class="absolute right-2" v-if="hoveredItem === item.number && visota === item.number">
                    <i class="mdi mdi-close"></i>
                   </span>
                   <span class="absolute right-2" v-else-if="hoveredItem !== item.number && visota == item.number">
                    <i class="mdi mdi-check"></i>
                   </span>
            </div>
            </div>
        </div>
        <div class="parametr_item xx:my-2 xl:my-0 md:my-0 xl:w-1/4 md:w-1/4 mx-3 rounded bg-white">
            <div class="title xx:relative p-3 text-sm font-sans text-gray-600"
            @click="CategoryName(prop[2].category_name)">
                <span>{{prop[2].category_name}}</span>
                <span class="xx:absolute xx:right-2 text-xl md:hidden xl:hidden mdi mdi-chevron-down"></span>
            </div>
            <div class="item xx:h-0 border-t-2 xl:h-36 md:h-36 overflow-y-auto relative"
            :class="[showMobile == prop[2].category_name ? 'xx:h-36' : 'xx:h-0']">
                <div 
                    class="item_list text-xs p-3 hover:bg-gray-200 cursor-pointer" 
                    :class="[diametr === item.diametr ? 'bg-orange-500 text-white hover:bg-orange-400' : ' hover:bg-gray-200']"
                    v-for="(item,index) in filterDiametr" 
                    :key="index"
                    @click="DiametrClick(item)"
                    @mouseover="hoveredItem = item.diametr"
                    @mouseleave="hoveredItem = null"
                    >
                   {{item.diametr}}
                   <span class="absolute right-2" v-if="hoveredItem === item.diametr && diametr === item.diametr">
                    <i class="mdi mdi-close"></i>
                   </span>
                   <span class="absolute right-2" v-else-if="hoveredItem !== item.diametr && diametr == item.diametr">
                    <i class="mdi mdi-check"></i>
                   </span>
                </div>
            </div>
        </div>
        <div class="parametr_item xx:my-2 xl:my-0 md:my-0 xl:w-1/4 md:w-1/4 mx-3 rounded bg-white">
            <div class="title xx:relative p-3 text-sm font-sans text-gray-600"
            @click="CategoryName(prop[3].category_name)">
                <span>{{prop[3].category_name}}</span>
                <span class="xx:absolute xx:right-2 text-xl md:hidden xl:hidden mdi mdi-chevron-down"></span>
            </div>
            <div class="item xx:h-0 border-t-2 xl:h-36 md:h-36 overflow-y-auto relative"
            :class="[showMobile == prop[3].category_name ? 'xx:h-36' : 'xx:h-0']">
                <div 
                    class="item_list text-xs p-3 hover:bg-gray-200 cursor-pointer"  
                    :class="[marka === item.marka ? 'bg-orange-500 text-white hover:bg-orange-400' : ' hover:bg-gray-200']"
                    v-for="(item,index) in filterMarka" 
                    :key="index"
                    @click="MarkaClick(item)"
                    @mouseover="hoveredItem = item.marka"
                    @mouseleave="hoveredItem = null"
                    >
                   {{item.marka}}
                   <span class="absolute right-2" v-if="hoveredItem === item.marka && marka === item.marka">
                     <i class="mdi mdi-close"></i>
                   </span>
                   <span class="absolute right-2" v-else-if="hoveredItem !== item.marka && marka === item.marka">
                    <i class="mdi mdi-check"></i>
                   </span>
                </div>
            </div>
        </div>
    </div>
    <div class="mobile">
          
    </div>
    <Loading ref="loadingRef" />
    </v-container>
</template>

<script setup>
import {computed, ref} from "vue"
import Loading from "./loading.vue"
const props = defineProps({
    shinaParametres:{
        type: Array,
        required: true
    }
})
const prop = ref(props.shinaParametres)
let showMobile = ref(null)
const emits = defineEmits(['shirina'])
const hoveredItem = ref(null)
let shirina = ref(null),
visota = ref(null),
diametr = ref(null),
marka = ref(null),
emitObj = ref({}),
loadingRef = ref(null),
loading = ref(false)
const CategoryName = (name) => {
    if(showMobile.value == name){
        showMobile.value = null
    }
    else{
        showMobile.value = name
    }
}
const ShirinaClick = (data) => {
    loading.value = true
     setTimeout(() => {
        shirina.value !== data ? shirina.value = data : shirina.value = null
        emitObj.value.shirina = shirina.value
        emits('shirina',emitObj.value)
        loadingRef.value.isActive(false)
        loading.value = false
     }, 1000);
     loadingRef.value.isActive(true)
}
const VisotaClick = (data) => {
    loading.value = true
     setTimeout(() => {
        visota.value !== data.number ? visota.value = data.number : visota.value = null
        emitObj.value.visota = visota.value
        emits('shirina', emitObj.value)
        loadingRef.value.isActive(false)
        loading.value = false
     }, 1000);
     loadingRef.value.isActive(true)
}
const DiametrClick = (data) => {
    loading.value = true
    setTimeout(() => {
        diametr.value !== data.diametr ? diametr.value = data.diametr : diametr.value = null
        emitObj.value.diametr = diametr.value
        emits('shirina', emitObj.value)
        loadingRef.value.isActive(false)
        loading.value = false
    }, 1000);
    loadingRef.value.isActive(true)
}
const MarkaClick = (data) => {
    loading.value = true
     setTimeout(() => {
       marka.value !== data.marka ? marka.value = data.marka : marka.value = null
        emitObj.value.marka = marka.value
        emits('shirina', emitObj.value) 
        loadingRef.value.isActive(false)
        loading.value = false
     }, 1000);
     loadingRef.value.isActive(true)
}
const filterVisota = computed(() => {
    if(shirina.value == null){
        return props.shinaParametres[1].visota
    }
    return props.shinaParametres[1].visota.filter(item => {
       return item.shirina === shirina.value
    })
})
const filterDiametr = computed(() => {
    if(visota.value === null){
        return props.shinaParametres[2].diametr
    }
    return props.shinaParametres[2].diametr.filter(item => item.visota == visota.value)
})
const filterMarka = computed(() => {
    if(diametr.value === null){
        return props.shinaParametres[3].marka
    }
    return props.shinaParametres[3].marka.filter(item => item.diametr === diametr.value)
})
</script>

<style scoped>
</style>