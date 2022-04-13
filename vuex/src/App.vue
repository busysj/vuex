<template>
  <div id="app">
    <!-- 모듈의 state값을 꺼내 올 때 : $store.state.모듈이름.값 -->
    <h3>{{ $store.state.a.modulename }}</h3>

    <!-- $store.state.count를 통해서 바로 값을 들고 올 수 있다 -->
    <h1>카운터에서 가져온 값 {{ count }}</h1>
    <button @click="$store.commit('addcount')">추가</button>
    <button @click="addcount">추가</button>
    <button @click="addcountaction">추가(Action)</button>
    <button @click="timer">1초 뒤 추가(Action)</button>
    <button @click="ntimer({ count: 50, time: 10000 })">
      10초 뒤 추가(Action)
    </button>
    <button @click="timersecond">1초마다 1증가</button>

    <button @click="$store.commit('dimcount')">감소</button>

    <ul>
      <li v-for="list in $store.state.list" :key="list.id">
        {{ list.memo }}
      </li>
    </ul>

    <!-- index.js name: ['홍길동', '성춘향','그린']을 추가하고 -->
    <!-- 아래에 computed를 이용하여 간략하게 만들어 출력 -->
    <ul>
      <li v-for="(name, i) in names" :key="i">
        {{ name }}
      </li>
    </ul>

    <p>{{ doneTodosCount }}</p>
    <p>{{ doneTodoCountGetter }}</p>

    <hello-world></hello-world>
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
    // 머스테치 안의 내용이 길어지면 computed를 통해서 출력해줄 수 있다
    count() {
      return this.$store.state.count;
    },
    names() {
      return this.$store.state.name;
    },
    doneTodosCount() {
      return this.$store.state.todos.filter((todo) => todo.done).length;
    },
    doneTodoCountGetter() {
      // store getters를 통해 계산된 내용을 컴포넌트마다 가져와서 사용
      return this.$store.getters.doneTodosCountGetter;
    },
  },
  methods: {
    // Mutation의 메소드는 commit을 통해 들고 온다
    addcount() {
      this.$store.commit("addcount");
    },
    // Action의 메소드는 dispatch를 통해 들고 온다
    addcountaction() {
      this.$store.dispatch("addcount");
    },
    timer() {
      this.$store.dispatch("timer");
    },
    ntimer(time) {
      this.$store.dispatch("ntimer", time);
    },
    timersecond() {
      this.$store.dispatch("timersecond");
    },
  },
  created() {
    console.log("app-created");
  },
  mounted() {
    // 이벤트나 타이머 등의 비동기 함수를 사용할 때 사용
    console.log("app-mounted");
    this.timersecond();

    window.alert("app-mounted");
  },
  updated() {
    console.log("app-updated");
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
