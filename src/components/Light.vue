<template>
  <div class="light" :style="{'background-color': lightColor}" :class="[{active : isActive}, {blinking: timeLeft < 3000}]">
    <span class="timer" v-if="isActive">{{timerValue}}</span>
  </div>
</template>

<script>
export default {
  name: 'Light',
  props: {
    lightColor: String,
    isActive: Boolean,
    timeLeft: Number
  },
  computed:  {
    timerValue: function() {
      return this.timeLeft/1000
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @keyframes blink {
    from {
      opacity: 1; 
    }

    to {
      opacity: 0.2;
    }
  }

  .light {
    width: 27vh;
    height: 27vh;
    border-radius: 50%;
    margin: 0 auto;
    opacity: .2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;
  }

  .active {
    opacity: 1;
  }

  .timer{
    font-size: 180px;
    color: black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

  .active.blinking {
    animation: blink 0.3s infinite;
  }
</style>
