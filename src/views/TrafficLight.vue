<template>
  <div class="home">
    <Light :timeLeft="this.timeLeft" :isActive="currentLightColor == 'red'" lightColor = 'red' />
    <Light :timeLeft="this.timeLeft" :isActive="currentLightColor == 'yellow'" lightColor = 'yellow'/>
    <Light :timeLeft="this.timeLeft" :isActive="currentLightColor == 'green'" lightColor = 'green'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Light from '@/components/Light.vue'
import router from '@/router'

const TRAFFIC_CONFIG = {
  red: {
    nextColor: 'yellow',
    timeOut: 10000
  },
  yellow: {
    nextColor: 'green',
    timeOut: 3000
  },
  green: {
    nextColor: 'red',
    timeOut: 15000
  }
}

const TIMER_INTERVAL = 1000;

export default {
  name: 'TrafficLight',
  components: {
    Light,
  },
    props: {
    currentLightColor: String
  },
    data: function() {
    return {
      timeLeft: 0,
      currentConfig: null, 
      trafficTimer: null
    }
  },
  mounted() {
    this.setCurrentConfig()
    this.startTrafficking()
  },
  unmounted() {
    clearInterval(this.trafficTimer)
  },
  watch: {
    currentLightColor() {
      this.setCurrentConfig()
    }
  },
  methods: {
    startTrafficking() {
      this.trafficTimer = setInterval(() => {this.handleTimerTick()}, TIMER_INTERVAL)
    },
    setCurrentConfig() {
      this.currentConfig = TRAFFIC_CONFIG[this.currentLightColor]
      this.timeLeft = this.currentConfig.timeOut
    }, 
    handleTimerTick() {
      this.timeLeft = this.timeLeft - TIMER_INTERVAL
      if (this.timeLeft <= 0) {
        router.push(this.currentConfig.nextColor)
      }
    }
  }
}
</script>

<style scoped>
.home {
  padding: 7vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: max-content;
  border-radius: 10%;
}

</style>