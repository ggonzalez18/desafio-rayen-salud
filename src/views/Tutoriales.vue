<template>
  <div class="tutorial">
    <nav-tutoriales></nav-tutoriales>
  </div>
</template>

<script>
// @ is an alias to /src
import NavTutoriales from '@/components/NavTutoriales.vue'

export default {
  name: 'tutoriales',
  components: {
    NavTutoriales,
  }
}
</script>
