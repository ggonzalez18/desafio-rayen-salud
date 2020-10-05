<template>
  <div class="tutorial">
    <nav-tutoriales></nav-tutoriales>
    <v-container>
      <p>{{tutorials}}</p>
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
  created() {
    this.getTutorials()
  },
  methods: {
    ...mapActions(['getTutorials'])
  },
  computed: {
    ...mapState(['tutorials'])
  },
}
</script>
