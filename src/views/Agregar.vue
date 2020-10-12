<template>
  <div class="tutorial">
    <nav-agregar></nav-agregar>
    <v-container>
      <v-row>
        <v-col>
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="titulo"
      :counter="10"
      :rules="tituloRules"
      label="Título"
      required
      outlined
    ></v-text-field>

        <v-text-field
      v-model="profesor"
      :counter="15"
      label="Profesor"
      required
      outlined
    ></v-text-field>

        <v-text-field
      v-model="materia"
      :rules="materiaRules"
      :counter="10"
      label="Materia"
      required
      outlined
    ></v-text-field>

      <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field v-model="picker" label="Fecha del curso" readonly v-bind="attrs" v-on="on" outlined>
          </v-text-field>
        </template>
        <v-date-picker v-model="picker" scrollable color="purple darken-4">
          <v-spacer></v-spacer>
          <v-btn text color="purple darken-4" @click="modal = false">Cancel</v-btn>
          <v-btn text color="purple darken-4" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>

    <v-btn color="error" class="mr-4" @click="reset">Limpiar campos</v-btn>
    <v-btn color="purple darken-4" dark @click="agregar">AGREGAR</v-btn>
     </v-form>
        </v-col>
      </v-row>
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
        v => (v && v.length <= 10) || 'titulo no puede exceder los 10 caracteres',
      ],
      profesor: '',
      profesorRules: [
        v => !!v || 'Profesor',
        v => (v && v.length <= 15) || 'Nombre del profesor no puede exceder los 10 caracteres',
      ],
      materia: '',
      materiaRules: [
        v => !!v || 'Materia',
        v => (v && v.length <= 10) || 'Materia no puede exceder los 10 caracteres',
      ],
      picker: '',
      menu: false,
      modal: false,
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
        this.reset()
      },
    },
    computed: {
    }
}
</script>
