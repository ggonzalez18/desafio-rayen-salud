<template>
  <div class="tutorial">
    <nav-agregar></nav-agregar>
    <v-container>
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

            <v-btn color="error" class="mr-4" @click="reset">Limpiar campos</v-btn>
            <v-btn color="purple darken-4" dark @click="agregar">AGREGAR</v-btn>
          </v-form>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="300">
      <v-card color="black" dark class="pt-4">
        <v-card-text>
          Tutorial guardado con éxito
          <v-btn color="purple darken-4" dark class="ml-2" @click="dialog = false">ok</v-btn>    
        </v-card-text>
      </v-card>
    </v-dialog>

    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavAgregar from '@/components/NavAgregar.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Agregar',
  components: {
    NavAgregar,
  },
  data: () => ({
      valid: true,
      titulo: '',
      tituloRules: [
        v => !!v || 'titulo',
        v => (v && v.length <= 50) || 'titulo no puede exceder los 50 caracteres',
      ],
      profesor: '',
      profesorRules: [
        v => !!v || 'Profesor',
        v => (v && v.length <= 20) || 'Nombre del profesor no puede exceder los 20 caracteres',
      ],
      materia: '',
      materiaRules: [
        v => !!v || 'Materia',
        v => (v && v.length <= 15) || 'Materia no puede exceder los 15 caracteres',
      ],
      picker: '',
      menu: false,
      modal: false,
      dialog: false
  }),

    methods: {
      ...mapActions(['AddTutorial']),
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      agregar() {
        this.validate()
        let newTutorial = {
          nombre: this.titulo,
          profesor: this.profesor,
          materia: this.materia,
          fecha: this.picker
        }
        this.AddTutorial(newTutorial)
        this.dialog = true
        this.reset()
      },
    },
    computed: {
    }
}
</script>

