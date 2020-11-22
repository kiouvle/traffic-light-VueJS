<template>
  <div class="home">
    <Light
      :timeLeft="this.timeLeft"
      :isActive="currentLightColor == 'red'"
      lightColor="red"
    />
    <Light
      :timeLeft="this.timeLeft"
      :isActive="currentLightColor == 'yellow'"
      lightColor="yellow"
    />
    <Light
      :timeLeft="this.timeLeft"
      :isActive="currentLightColor == 'green'"
      lightColor="green"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Light from "@/components/Light.vue";
import router from "@/router";
import { TIMER_INTERVAL, TRAFFIC_CONFIG, LS_KEY } from "@/config/traffic-light";

export default {
  name: "TrafficLight",
  components: {
    Light,
  },
  props: {
    currentLightColor: String,
  },
  data: function () {
    return {
      timeLeft: 0,
      currentConfig: null,
      trafficTimer: null,
    };
  },
  mounted() {
    this.setCurrentConfig(true);
    this.startTrafficking();
  },
  unmounted() {
    clearInterval(this.trafficTimer);
  },
  watch: {
    currentLightColor() {
      this.setCurrentConfig();
    },
  },
  methods: {
    startTrafficking() {
      this.trafficTimer = setInterval(() => {
        this.handleTimerTick();
      }, TIMER_INTERVAL);
    },
    setCurrentConfig(overrideFromLS) {
      this.currentConfig = TRAFFIC_CONFIG[this.currentLightColor];
      if (overrideFromLS) {
        const stateFromLS = JSON.parse(localStorage.getItem(LS_KEY));
        if (
          stateFromLS &&
          stateFromLS.currentLightColor == this.currentLightColor
        ) {
          this.timeLeft = stateFromLS.timeLeft;
        } else {
          this.timeLeft = this.currentConfig.timeOut;
        }
      } else {
        this.timeLeft = this.currentConfig.timeOut;
      }
    },
    handleTimerTick() {
      this.timeLeft = this.timeLeft - TIMER_INTERVAL;
      if (this.timeLeft <= 0) {
        router.push(this.currentConfig.nextColor);
      }
      localStorage.setItem(
        LS_KEY,
        JSON.stringify({
          currentLightColor: this.currentLightColor,
          timeLeft: this.timeLeft,
        })
      );
    },
  },
};
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