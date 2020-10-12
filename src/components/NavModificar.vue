<template>
  <v-container>
    <v-app-bar app color="purple darken-4" dark>
        <v-spacer></v-spacer>
        <!-- <v-btn class="mr-4 red darken-4" dark>{{tutorial.id ? 'Detalle Tutorial' : 'Modificar Tutorial' }}</v-btn> -->
        <v-spacer></v-spacer>
        <v-icon dark>mdi-pencil</v-icon>
        <v-btn to="/" text>detalle Tutorial</v-btn>
        <v-spacer></v-spacer>
      </v-app-bar>
  </v-container>
</template>

<script>
// import { mapState } from 'vuex'

  export default {
    name: 'NavModificar',

    data: () => ({
    }),
    // computed: {
    //     ...mapState(['tutorial']),
  }
</script>
