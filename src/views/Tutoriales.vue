<template>
  <div class="tutorial">
    <nav-tutoriales></nav-tutoriales>
    <v-container>
      <v-row>
        <v-row>
          <v-col cols="10">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Busca un tutorial" single-line hide-details></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn>Buscar</v-btn>
          </v-col>
          </v-row>

        <v-col cols="12">
          <v-card class="mx-auto" max-width="800">
            <v-list>
              <v-list-item-group>
                <v-list-item v-for="tutorial in tutorials" :key="tutorial.id">
                  <v-row>
                    <v-col cols="9">
                      <v-list-item-content>
                        <v-list-item-title v-text="tutorial.nombre"></v-list-item-title>
                        <v-list-item-subtitle v-text="tutorial.profesor"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-col>
                    <v-col cols="3">
                      <v-list-item-content>
                        <v-list-item-subtitle v-text="tutorial.fecha"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-col>
                  </v-row>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <div class="text-center">
        <v-btn class="ma-2" outlined color="indigo" @click="deleteAll">ELIMINAR TODOS</v-btn>
      </div>

  </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import NavTutoriales from '@/components/NavTutoriales.vue'


export default {
  name: 'tutoriales',
  components: {
    NavTutoriales,
  },
  data() {
    return {
      search: '',
    }
  },
  created() {
    this.getTutorials()
  },
  methods: {
    ...mapActions(['getTutorials', 'deleteTutorials']),
    deleteAll() {
      let confirmation = confirm("¿Quieres eliminar todos los tutoriales definitivamente?")
      if (confirmation) {
        this.deleteTutorials()
      }
    }
  },
  computed: {
    ...mapState(['tutorials'])
  },
}
</script>
