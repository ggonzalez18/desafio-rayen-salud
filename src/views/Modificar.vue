<template>
  <div>
    <nav-modificar></nav-modificar>
    <!-- <v-container>
      <v-row>
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="titulo" :counter="50" :rules="tituloRules" label="Título" required outlined></v-text-field>
            <v-text-field v-model="profesor" :rules="profesorRules" :counter="20" label="Profesor" required outlined></v-text-field>
            <v-text-field v-model="materia" :rules="materiaRules" :counter="15" label="Materia" required outlined></v-text-field>
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="picker" persistent width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="picker" label="Fecha del curso" readonly v-bind="attrs" v-on="on" outlined>
                </v-text-field>
              </template>
              <v-date-picker v-model="picker" scrollable color="purple darken-4">
                <v-spacer></v-spacer>
                <v-btn text color="purple darken-4" @click="modal = false">Cancel</v-btn>
                <v-btn text color="purple darken-4" @click="$refs.dialog.save(picker)">OK</v-btn>
              </v-date-picker>
            </v-dialog>

            <v-btn class="ma-2" outlined color="indigo" @click="deleteOneTutorial">ELIMINAR</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="purple darken-4" dark @click="agregar">AGREGAR</v-btn>
          </v-form>
        </v-col>
      </v-row>
      </v-container> -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import NavModificar from '@/components/NavModificar.vue'

export default {
  components: {
    NavModificar
  },
  data() {
    return {
      tutorials: {
        titulo: this.tutorial.nombre,
        profesor: this.tutorial.profesor,
        materia: this.tutorial.materia,
        fecha: this.tutorial.picker,
      },
      valid: true,
      tituloRules: [
        v => !!v || 'titulo',
        v => (v && v.length <= 50) || 'titulo no puede exceder los 50 caracteres',
      ],
      profesorRules: [
        v => !!v || 'Profesor',
        v => (v && v.length <= 20) || 'Nombre del profesor no puede exceder los 20 caracteres',
      ],
      materiaRules: [
        v => !!v || 'Materia',
        v => (v && v.length <= 15) || 'Materia no puede exceder los 15 caracteres',
      ],
      menu: false,
      modal: false,
      dialog: false
    }
  },
  methods: {
    ...mapActions(['getTutorials', 'deleteTutorial']),
    deleteOneTutorial(id) {
      let confirmation = confirm("¿Seguro que quieres eliminar el tutorial?")
      if (confirmation) {
        this.deleteTutorial(id)
      }
    },
  },
  computed: {
    ...mapState(['tutorials', 'tutorial']),
  }
}
</script>

<style>

</style>