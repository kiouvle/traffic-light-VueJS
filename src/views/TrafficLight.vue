<template>
  <div class="home">
    <Light :isActive="currentLightColor == 'red'" lightColor = 'red' />
    <Light :isActive="currentLightColor == 'yellow'" lightColor = 'yellow'/>
    <Light :isActive="currentLightColor == 'green'" lightColor = 'green'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Light from '@/components/Light.vue'


export default {
  name: 'TrafficLight',
  components: {
    Light,
  },
    props: {
    currentLightColor: String
  }
}
</script>

<style scoped>
.home {
  padding: 50px;
  background-color: black;
  height: 100vh;
  margin: 0;
}
</style>