<template>
    <v-container :class="[props.Obj.num == 1 ? 'flex-col-reverse flex my-10' : '']">
          <div class="marka_top xx:flex-col xl:flex-row md:flex-row flex items-center"
          :class="[props.Obj.num !== 1 ? 'justify-between' : 'justify-center']">
              <div v-if="props.Obj.num !== 1" class="circle xx:hidden md:flex xl:flex w-20 h-0.2 bg-gray-200"></div>
              <div class="circle_next xx:border-b-0 flex xx:py-5 xl:border-b-0 xl:py-0 md:border-b-0 md:py-0">
                 <div 
                    class="prev xx:ml-4 xl:ml-0 md:ml-0 border-0.1 border-r-0.2 hover:text-orange-600 hover:border-orange-600 rounded-l-md p-2 
                    cursor-pointer transition-all"
                    @click="Prev()"
                        >
                     <span class="mdi mdi-chevron-left text-xl"></span>
                 </div>
                 <div 
                      class="next border-0.1 border-l-0.2 rounded-r-md p-2 cursor-pointer
                    hover:text-orange-600 hover:border-orange-600 transition-all"
                      @click="Next()"
                 >
                    <span class="mdi mdi-chevron-right text-xl"></span>
                 </div>
                 <slot name="aboutTitle"></slot>
              </div>
              <div v-if="props.Obj.num !== 1" class="circles xx:ml-10 xl:ml-0 md:ml-0 w-10/12 h-0.2 bg-gray-300"></div>
              <slot name="about"></slot>
        </div>
          <div class="marka_list flex w-full overflow-hidden xl:my-10 md:my-6 xx:my-2">
             <swiper
                ref="mySwiper"
                :slidesPerView="props.Obj.num"
                :spaceBetween="30" 
                @swiper="onSwiper"
                :loop="true"
                :modules="modules"
                class="mySwiper"
             >
                <swiper-slide v-for="(item,index) in props.homeProp" :key="index">
                    <img :src="item" alt="" :class="props.Obj.style">
                </swiper-slide>
            </swiper>
        </div>

    </v-container>
</template>

<script setup>
// import Imagess from "@/assets/images"
import {onMounted, ref} from "vue"
 import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  const props = defineProps({
     homeProp:{
      type: Array
     },
     Obj: Object
  })
const modules = ref([Pagination])
const mySwiper = ref(null)
const onSwiper = (swiper) => {
  mySwiper.value = swiper
}
const Next = () => {
    if (mySwiper.value) {
     mySwiper.value.slideNext()
  }
}
const Prev = () => {
   if (mySwiper.value) {
     mySwiper.value.slidePrev()
  }
}
</script>

<style scoped>
.marka_list > div{
    flex: 0 0 auto;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>