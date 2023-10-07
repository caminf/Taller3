<template>
    <v-sheet class="d-flex ma-1">
        <v-list lines="one" style="color:#ffff; background-color: #003EAA;">
            <v-list-item height="20px" width="1500px" style="justify-content: space-between;">
                <v-row>
                    <v-col cols="1">
                        <h5>{{ props.day }} - {{ props.month }}</h5>
                        <h5>{{ props.year }}</h5>
                    </v-col>
                    <v-col cols="10">
                        <h4>{{ props.title }}</h4>
                    </v-col>
                    <v-col cols="1">
                        <v-btn :href=props.source variant="text" density="comfortable" color="#ACD0FF">
                            <h4>Ver evento</h4>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>
<script setup>
const props = defineProps({
    title: String,
    id: String,
    source: String,
    day: String,
    month: String,
    year: String,
})
</script>