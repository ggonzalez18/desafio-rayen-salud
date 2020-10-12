<template>
  <div>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="button_add  mx-2" fab dark large color="cyan" v-bind="attrs" v-on="on" to="/agregar">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Agregar nuevo tutorial</span>
    </v-tooltip> 
  </div>
</template>

<script>
export default {
}
</script>

<style>
.button_add { 
    display:scroll;
    position:fixed;
    bottom:20px;
    right:20px;
}
</style>