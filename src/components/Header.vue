<template>
  <v-sheet class="d-flex" color="#003EAA">
    <v-row style="justify-content: space-between;">
      <v-col cols="2">
        <v-img src="https://www.ufro.cl/index.php/normas-corporativas/32-logo-ufro-blanco-horizontal/file" class="ma-2"
          height="40px"></v-img>
      </v-col>
      <v-col cols="3" style="align-self: center;">
        <router-link class="button" to="/">
          <v-btn class="" color="#ACD0FF" density="comfortable" variant="text">
            <h5>Noticias</h5>
          </v-btn>
        </router-link>
        <router-link class="button" to="/events">
          <v-btn color="#ACD0FF" density="comfortable" variant="text">
            <h5>Eventos</h5>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-sheet>
</template>
