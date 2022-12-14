<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue';
import MainContentFrame from '@/components/views/MainContentFrame.vue'
import ImageCard from '@/components/card-flow/ImageCard.vue';

const image_list = ref([])
onMounted (async ()=> {
    const res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10")
    image_list.value = res.data
})
</script>


<template>
    <MainContentFrame>
        <h1>Card Flow Template</h1>
    </MainContentFrame>
</template>


<style scoped lang="scss"></style>