<template>
    <main class="detailview-page">
        <div class="container" v-if="isLoading">
            Is loading ...
        </div>
        <div v-else>
            <h1>Listado</h1>

            <v-sheet border="md" class="pa-6 text-white mx-auto" color="#141518" max-width="700">

                <h4 class="text-h5 font-weight-bold mb-4">{{ news.title }}</h4>


                <p class="mb-8">

                <p> <span v-html="news.details.body"></span></p>



                <br>
                <br>



                </p>

                <v-btn block class="text-none text-black mb-4" color="red-accent-2" size="x-large" variant="flat"
                    :href="news.source">
                    Ver Fuente de la Noticia
                </v-btn>


            </v-sheet>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const BASE_URL = "http://3.138.52.135:3000";

const news = ref({});
const isLoading = ref(true);


const props = defineProps({
    newsId: {
        type: String,
    }
});


onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}/news/${props.newsId}`)
        news.value = response.data.news;
        isLoading.value = false

        var str = news.value.details.body
        console.log(str);


    } catch (err) {
        console.log(err)
        console.log('ERROR')
    }
});






</script>

<style></style>