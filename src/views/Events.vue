<template>
    <main class="events-page">
        <h1 style="margin-left: 12px;">Eventos</h1>
        <v-sheet class="d-flex flex-wrap ma-2">
            <Event v-for="event_ in events" :id="event_.eventId" :title="event_.title" :source="event_.source"
                :day="event_.day" :month="event_.month" :year="event_.year"></Event>
        </v-sheet>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Event from '@/components/Event.vue';

import axios from 'axios';
const events = ref([]);

const BASE_URL = "http://3.138.52.135:3000";
async function getEvents() {
    try {
        const response = await axios.get(`${BASE_URL}/events`)
        events.value = response.data.events;
        console.log(response.data);
    } catch (e) {
        console.log(e);
        console.log('Error get');
    }
}
getEvents()
</script>