<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue';
import MainContentFrame from '@/components/views/MainContentFrame.vue'
import ImageCard from '@/components/card-flow/ImageCard.vue';

type ImageRef = {
    breeds: [],
    height: number,
    id: string,
    url: string,
    width: number,
}
const image_list = ref<ImageRef[] | null>(null)
// const image_list = ref([])
onMounted (async ()=> {
    const res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=12&breed_ids=beng&api_key=live_Cu1sAjc6qtAlsnl2tYyvStA1KuMrUWu19WTNTF8LzGWKui8OcMAEsaEjIuejQpst")
    image_list.value = res.data
})
</script>


<template>
    <MainContentFrame>
        <el-row>
            <el-col
                v-for="(item, key) in image_list"
                :key="key"
                :lg="6"
                :md="8"
                :sm="12"
                :xs="24"
            >
                <ImageCard :img_src="item.url" />
            </el-col>
        </el-row>
    </MainContentFrame>
</template>


<style scoped lang="scss">
.el-row {
    margin: 0;
    width: 100%;
}
.el-col {
    padding: 15px;
}
</style>