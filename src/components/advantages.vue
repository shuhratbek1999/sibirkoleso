<template>
    <v-container>
         <slot name="advans_top">
            <div class="advans_top xx:flex-col flex justify-center">
            <div class="content w-8/12 xl:my-20 md:my-20 xx:my-0">
                 <h1 class="xl:text-3xl md:text-3xl xx:text-xs font-bold xx:py-2 xl:py-5 md:py-4">
                    {{props.AdvantagesProp.title}}
                 </h1>
                <p class="text-sm xx:text-xs w-11/12">{{props.AdvantagesProp.text}}</p>
            </div>
         </div>
         </slot>
         <slot name="advans_list">
            <div class="advans_list xx:flex-col xx:w-full xl:w-full xl:flex-row md:w-full md:flex-row flex justify-center flex-wrap  box-border">
             <div 
              class="lists border-0.1 xl:p-10 md:p-10 xx:p-5 rounded xl:mx-3 md:mx-2 md:my-0 xx:my-2 xl:my-0"
              :class="[item.icon ? 'xl:w-103 md:w-103 my-3 xx:w-full' : 'xl:w-104 md:w-104 xx:w-full']"
              v-for="(item,index) in props.AdvantagesProp.disks"
              :key="index">
              <img :class="[props.AdvantagesProp.disks.length > 3 ? 'w-6' : 'w-20']" :src="item.icon" alt="">
              <h1 class="xx:text-xs xx:py-2 xl:py-8 md:py-6 xl:text-xl md:text-xl font-bold">{{item.title}}</h1>
              <p class="xx:text-xs py-5 xl:text-sm md:text-sm">{{item.text}}</p>
             </div>
         </div>
         </slot>
    </v-container>
</template>

<script setup>
import {ref} from "vue"
const props = defineProps({
    AdvantagesProp:{
        type: Object
    }
})

</script>

<style scoped>

</style>