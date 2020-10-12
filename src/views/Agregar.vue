<template>
  <div class="tutorial">
    <nav-agregar></nav-agregar>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="titulo"
      :counter="10"
      :rules="tituloRules"
      label="Titulo"
      required
    ></v-text-field>
        <v-text-field
      v-model="profesor"
      :counter="10"
      label="Profesor"
      required
    ></v-text-field>
        <v-text-field
      v-model="materia"
      :counter="10"
      label="Materia"
      required
    ></v-text-field>
       <v-text-field
      v-model="fecha"
      label="Fecha"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
     </v-form>
     </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavAgregar from '@/components/NavAgregar.vue'

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
      Profesor: '',
      profesorRules: [
        v => !!v || 'titulo',
        v => (v && v.length <= 10) || 'titulo no puede exceder los 10 caracteres',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>
