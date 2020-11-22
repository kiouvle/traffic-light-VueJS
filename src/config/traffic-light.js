module.exports = {
  TRAFFIC_CONFIG: {
    red: {
      nextColor: "yellow",
      timeOut: 10000,
    },
    yellow: {
      nextColor: "green",
      timeOut: 3000,
    },
    green: {
      nextColor: "red",
      timeOut: 15000,
    },
  },
  TIMER_INTERVAL: 1000,
  LS_KEY: "trafficLightState"
}