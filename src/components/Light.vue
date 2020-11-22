<template>
  <div class="light" :style="{'background-color': lightColor}" :class="[{active : isActive}]">
    
  </div>
</template>

<script>
export default {
  name: 'Light',
  props: {
    lightColor: String,
    isActive: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .light {
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    margin: 0 auto;
    opacity: .3;

  }

  .active {
    opacity: 1;
  }
</style>
