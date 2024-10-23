<template>
    <v-container>
       <div class="circle">
          <div class="circles h-0.5 bg-black w-16 my-10">
          </div>
          <h1 class="text-4xl w-96 font-sans font-medium">
            {{props.aboutInfo.title}}
          </h1>
       </div>
       <div class="text flex flex-col xl:justify-center xl:items-center md:justify-center md:items-center">
         <slot name="serviceTitle"></slot>
        <slot name="text">
           <div class="about_text xx:my-4 md:my-8 xl:my-10 xx:w-11/12 xl:w-7/12 md:w-7/12 text-sm">
            {{props.aboutInfo.text}}
         </div>
        </slot>
       <slot name="infoText"></slot>
       </div>
       <div class="boxes my-4">
          <Advantages :AdvantagesProp="props.aboutInfo">
             <template v-slot:advans_top>
               <span></span>
             </template>
          </Advantages>
       </div>
       <div class="texts flex justify-center xx:my-2 xl:my-10 md:my-8">
         <slot name="footers"></slot>
        <div class="about_text2 xx:text-xs xx:w-11/12 xl:text-sm xl:w-6/12"
        :class="[props.aboutInfo.footer_text.length > 0 ? 'w-6/12':'hidden']">
            {{props.aboutInfo.footer_text}}
       </div>
       </div>
    </v-container>
</template>

<script setup>
import Advantages from "./advantages.vue"
import {ref} from "vue"
const props = defineProps({
   aboutInfo:{
      type: Object,
      required: true
   }
})
</script>

<style lang="scss" scoped>

</style>