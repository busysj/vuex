<template>
  <div id="app">
    <h1>{{ $store.state.count }}</h1>
    <h3>{{ listReverse }}</h3>
    <button @click="addcount">+1</button>
    <button @click="timecount(5000)">잠시 후 +1</button>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  computed: {
    listReverse() {
      return this.$store.getters.listReverse;
    },
  },
  methods: {
    addcount() {
      this.$store.commit("addcount");
    },
    timecount(time) {
      // dispatch나 commit을 이용해서 값을 전달할 때 하나만 전달가능
      // 여러개의 값을 전달하고 싶을 때 객체로 만들어서 전달
      this.$store.dispatch("timecount", time);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
