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

            <router-link :to="{ name: 'newsDetails', params: { newsId: props.id} }">
                <v-btn color="orange-lighten-2" variant="elevated">
                    Ver Noticia
                </v-btn>
            </router-link>


            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    {{ props.id }}

                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const show = ref(false)

const props = defineProps({
    id: String,
    title: String,
    imgUrl: String,
    source: String,
});

</script>