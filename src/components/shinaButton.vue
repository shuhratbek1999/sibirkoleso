<template>
    <v-container class="xx:flex-col xl:flex-row md:flex-row md:items-center flex justify-center xl:items-center h-full relative"
     :class="[loadings ? 'opacity-30' : '']"
    >
        <button 
            class="rounded xx:mt-4 xl:mt-0 md:mt-0 h-10 px-5 bg-orange-400 text-white"
            v-if="(props.filterShinaList.objFilter.shirina || props.filterShinaList.objFilter.visota || 
            props.filterShinaList.objFilter.diametr || props.filterShinaList.objFilter.marka) && props.filterShinaList.filterShina.length > 0"
            @click="viewShina()"
        >
            <span>
            показать {{props.filterShinaList.filterShina.length}} моделей
            </span>
        </button>
        <button class="rounded xx:mt-4 xl:mt-0 md:mt-0 py-2 h-10 px-5 bg-gray-600 text-white"
        v-else
        >
            Поиск 
        </button>
        <span class="cursor-pointer xx:my-2 xl:ml-4 md:ml-4 text-gray-400 hover:text-white">
            <span class="mdi mdi-close"></span>
            <span class="title font-AtypBold">Очистить</span>
        </span>
        <Loading ref="loading" />
    </v-container>
</template>

<script setup>
import {ref} from "vue"
import Loading from "./loading.vue"
let views = ref(),
loading = ref(null),
loadings = ref(false)
const props = defineProps({
    filterShinaList:{
        type: Object,
        required: true
    }
})
const emits = defineEmits(['view'])
const viewShina = () => {
    loading.value.isActive(true)
    loadings.value = !loading.value
    setTimeout(() => {
       views.value = true
        emits('view', views.value) 
        let shina_footer_content = document.querySelector('#shina_footer_content')
        if(shina_footer_content){
            shina_footer_content.scrollIntoView({behavior: 'smooth'})
        } 
        loading.value.isActive(false)
    }, 1000);
}
</script>

<style lang="scss" scoped>

</style>