<template>
    <main class="detailview-page">
        <div class="container" v-if="isLoading">
            Is loading ...
        </div>
        <div v-else>
            <div class="pa-5 title">
                <h1>Listado</h1>
            </div>

            <v-sheet border="md" class="pa-6 text-white mx-auto" color="#0060DF" max-width="700" max-height="fit-content">


                <h4 class="text-h5 font-weight-bold mb-4">{{ news.title }}</h4>



                <v-carousel show-arrows="hover" color="#FFC436" theme="dark">

                    <v-carousel-item v-for="image in news.details.images" cover>
                        <v-img :src="image"></v-img>
                    </v-carousel-item>

                </v-carousel>


                <v-card-text>
                    <p class="mb-8">

                    <p>{{ news.details.resume }}</p>

                    </p>

                </v-card-text>


                <v-card-actions>

                    <v-btn class="text-none text-black mb-4 inline" color="#FFC436" variant="flat" :href="news.source">
                        Ver Fuente de la Noticia
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show" ></v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                            <p class="mb-8">

                            <p> <span v-html="news.details.body"></span></p>

                            <br>
                            <br>

                                {{ news.createdAt }}

                            </p>

                        </v-card-text>
                    </div>
                </v-expand-transition>


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
const show = ref(false);


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
        console.log(news.value.createdAt);
    } catch (err) {
        console.log(err)
        console.log('ERROR')
    }
});






</script>

<style>
.title {
    display: flex;
    justify-content: center;
}
</style>