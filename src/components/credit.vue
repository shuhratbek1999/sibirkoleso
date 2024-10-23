<template>
    <v-container class="flex min-h-101 py-10 flex-col xl:items-center md:items-center">
       <div class="credit_lists z-60 xx:pb-5 xx:border-b-0.1 xl:border-b-0 md:border-b-0 last:border-b-0 xl:pb-0 md:pb-0 xl:w-10/12 xl:ml-28 xx:my-4 xl:my-0 md:my-0"
       v-for="(item,index) in props.CreditList"
       :key="index"
       >
         <div class="img_title flex items-center">
            <img :src="item.icon" alt="icon" class="mr-10">
            <h1 class="font-bold font-inter">{{item.title}}</h1>
         </div>
         <slot name="delivery">
             <div class="terms xx:mt-4 xl:mt-0 md:mt-0 xl:ml-20 xl:my-10">
                <div class="term text-sm font-sans text-gray-700" v-for="(tem,index) in item.term" :key="index">
                   {{tem}}
               </div>
             </div>
        </slot>
         <div class="credit_info xx:flex-col md:flex-row xl:flex-row flex justify-start xl:my-10 xl:ml-20 md:my-10 md:ml-20">
             <div class="line xx:hidden md:block xl:block w-20 h-0.2 bg-gray-300"></div>
             <div class="info_list -mt-2 xl:mx-8"
             :class="[item.term ? 'xl:w-10/12' : '']"
             v-for="(pet,index) in item.info"
             :key="index"
             >
               <div v-for="(x,index) in pet.petition" 
               :key="index"
               class="text-sm text-gray-600"
               >
                  {{x}}
               </div>
               <div class="terms text-sm text-gray-600" v-if="pet.terms">
                   <h4>{{pet.terms.title}}</h4>
                   <ol 
                   class="terms_list list-disc list-inside" 
                   v-for="(term,index) in pet.terms.list" 
                   :key="index"
                   >
                    <li>
                        {{term}}
                    </li>
                   </ol>
               </div>
             </div>
         </div>
       </div>
    </v-container>
</template>

<script setup>
import {ref} from "vue"
const props = defineProps({
    CreditList:{
        type: Array
    }
})
</script>

<style lang="scss" scoped>

</style>