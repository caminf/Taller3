<template>
    <v-card class="mx-auto mb-4 mt-4 " width="400" style="height: fit-content;">

        <v-img :src="props.imgUrl" cover height="200px">
        </v-img>

        <v-card-text>
            <h4>
                {{ props.title }}
            </h4>
        </v-card-text>

        <v-card-actions>

            <router-link :to="{ name: 'newsDetails', params: { newsId: props.id } }">
                <v-btn color="#FFC436" variant="elevated">
                    Ver Noticia
                </v-btn>
            </router-link>

        </v-card-actions>

    </v-card>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    id: String,
    title: String,
    imgUrl: String,
    source: String,
    resume: String
});

</script>