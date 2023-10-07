<template>
  <main class="detailview-page">
    <div class="pa-5 title">
      <h1>Listado de noticias</h1>
    </div>
    <div>
      <v-sheet class="d-flex flex-wrap">

        <New v-for="new_ in news" :id="new_.newsId" :title="new_.title" :source="new_.source" 
        :resume="new_.resume"
        :img-url="new_.imageUrl">
        </New>


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

    

  } catch (err) {
    console.log(err)
    console.log('ERROR')
  }
});



</script>

<style> 
</style>
