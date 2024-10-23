<template>
    <v-app>
     <v-navigation-drawer
      v-model="drawer"
      location="right"
      app
      width="500"
    >
      <div class="drawer relative xx:h-20 xl:h-100">
          <div class="drawer_top flex justify-between items-center h-20 border-b-0.1">
             <h1 class="text-xl font-bold">Корзина</h1>
             <span class="mdi text-2xl mdi-close cursor-pointer"
             @click="drawer = false"
             >
             </span>
          </div>
          <div class="drawer_content">
              <!-- {{props.basket}} -->
              <div class="korzina_list h-36 my-2 flex flex-col justify-between" v-for="(item,index) in diskArray" :key="index">
                <div class="list_item flex justify-evenly items-center">
                    <img :src="item.img" alt="" class="w-10 h-20">
                    <ul class="text">
                        <li>{{item.name}}</li>
                        <li>{{item.model}}</li>
                        <li>
                            {{item.shirina}}/{{item.visota}} / {{item.diametr}}
                        </li>
                    </ul>
                    <div class="price">
                        <div class="alert text-xx bg-yellow-600 p-0.5 rounded text-white">Возможна рассрочка</div>
                        <span class="font-medium">{{item.quantity}}</span> ₽
                    </div>
                </div>
                <div class="add_number flex justify-center">
                    <div class="add flex w-2/3 justify-end">
                        <div 
                        class="minus border-0.1 px-2 cursor-pointer text-xl flex justify-center items-center"
                        @click="Minus(index)"
                        >
                            -
                        </div>
                        <div 
                        class="plus border-0.1 px-2 cursor-pointer flex text-xl justify-center items-center"
                        @click="Plus(index)"
                        >
                            +
                        </div>
                        <div class="number ml-10">
                            {{item.number}}
                            <span class="text-sm">шт</span>
                        </div>
                    </div>
                    <div class="delete w-1/3 flex justify-end mr-11">
                        <span class="text-xl mdi mdi-delete-outline cursor-pointer delete"
                        @click="Delete(index)">
                        </span>
                    </div>
                </div>
              </div>
          </div>
          <div class="drawer_footer flex justify-evenly items-center w-full h-24">
             <button 
             class="btn bg-orange-600 text-white py-3 rounded px-6 text-sm"
             @click="Order(diskArray)"
             >
             Оформление заказа
             </button>
             <div class="all_price">
                Итог: {{AllPrices}} ₽
             </div>
          </div>
      </div>
      <Modal ref="modal" :modalData="[...modalData,{AllPrices:AllPrices}]" />
    </v-navigation-drawer>
  </v-app>
</template>

<script setup>
import {computed, onMounted, ref, watch, watchEffect} from "vue"
import {Disks} from "../stores/index"
import Modal from "./modal.vue"
const disk = Disks()
let drawer = ref(false),
allPrice = ref(0),
diskArray = ref(disk.newArray),
warning = ref(disk.warningComputed),
modal = ref(null),
modalData = ref([])
const toggleDrawer = (value) => {
  drawer.value = !drawer.value; // Drawer ni ochish/yopish
}
const Order = (data) => {
    modalData.value = [...data]
    modal.value.activeModal()
}
const Delete = (index) => {
    disk.deleteDisk(index)
}
const Minus = (index) => {
    if(diskArray.value[index].number > 1){
       diskArray.value[index].number-- 
       diskArray.value[index].quantity = diskArray.value[index].price * diskArray.value[index].number
    }
}
const Plus = (index) => {
    diskArray.value[index].number++
    diskArray.value[index].quantity = diskArray.value[index].price * diskArray.value[index].number
}
const AllPrices = computed(() => {
    allPrice.value = 0
    diskArray.value.forEach(item => {
        return allPrice.value += item.quantity
    })
    return allPrice.value
})
defineExpose({toggleDrawer})
</script>

<style scoped>
.drawer {
  padding: 16px; /* Drawer ichidagi kontentga joy berish */
}
.minus,.plus{
    transition: all 0.5s ease-in-out;
}
.minus:hover,.plus:hover{
    border-color: red;
    color: red;
}
.delete{
    transition: all 0.3s ease-in-out;
}
.delete:hover{
    color: red;
}
</style>