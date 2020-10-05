<template>
  <v-container>
    <v-app-bar app color="purple darken-4" dark>
        <v-btn to="/" text><v-icon>mdi-keyboard-return</v-icon> Volver</v-btn>
        <v-spacer></v-spacer>
        <v-btn text>AGREGAR TUTORIAL</v-btn>
        <v-spacer></v-spacer>
      </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'NavTutoriales',

    data: () => ({
    }),
  }
</script>
