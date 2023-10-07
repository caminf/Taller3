<template>
    <v-sheet class="d-flex ma-1">
        <v-list lines="one" style="color:#ffff; background-color: #003EAA;">
            <v-list-item height="20px" width="1050px" style="justify-content: space-between;">
                <v-row>
                    <v-col cols="1">
                        <h6>{{ props.day }} - {{ props.month }}</h6>
                        <h6>{{ props.year }}</h6>
                    </v-col>
                    <v-col cols="9">
                        <h5>{{ props.title }}</h5>
                    </v-col>
                    <v-col cols="2">
                        <v-btn :href=props.source variant="text" density="comfortable" color="#ACD0FF">
                            <h5>Ver evento</h5>
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