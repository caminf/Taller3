<template>
  <main class="detailview-page">
    <div class="pa-5">
      <h1>Listado de noticias</h1>
    </div>
    <div>
      <v-sheet class="d-flex flex-wrap" style="border: 1px solid red;">

        <New v-for="new_ in news" :id="new_.newsId" :title="new_.title" :source="new_.source" :img-url="new_.imageUrl"></New>


      </v-sheet>
    </div>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import New from '../components/New.vue'


import axios from 'axios';
const news = ref([]);

const BASE_URL = "http://3.138.52.135:3000";

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}/news`)
    news.value = response.data.news;
    console.log(response.data);
  } catch (err) {
    console.log(err)
    console.log('ERROR')
  }
});




async function getNewsByid(newsId) {
  try {
    const response = await axios.get(`${BASE_URL}/news/${newsId}`)
    news.value = response.data.news;
    console.log(news);
  } catch (err) {
    console.log(err)
    console.log('ERROR')
  }

}
</script>

<style> .red-border {
   border: 1px solid red;
 }
</style>
