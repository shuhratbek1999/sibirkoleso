<template>
    <v-progress-circular
        v-if="isLoading"
        indeterminate
        color="primary"
        class="mt-3 absolute left-1/2 right-1/2"
    ></v-progress-circular>
</template>

<script setup>
import {ref} from "vue"
let isLoading = ref(false)
const isActive = (boolen) => {
    isLoading.value = boolen
}
defineExpose({isActive})
</script>

<style lang="scss" scoped>

</style>