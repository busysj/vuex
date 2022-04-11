<template>
  <div id="app">
    <!-- $store.state.count를 통해서 바로 값을 들고 올 수 있다 -->
    <h1>카운터에서 가져온 값 {{ count }}</h1>
    <button @click="$store.commit('addcount')">추가</button>
    <button @click="$store.commit('dimcount')">감소</button>

    <ul>
      <li v-for="list in $store.state.list" :key="list.id">
        {{ list.memo }}
      </li>
    </ul>

    <!-- index.js name: ['홍길동', '성춘향','그린']을 추가하고 -->
    <!-- 아래에 computed를 이용하여 간략하게 만들어 출력 -->
    <ul>
      <li v-for="(name, i) in $store.state.name" :key="i">
        {{ name }}
      </li>
    </ul>

    <p>{{ doneTodosCount }}</p>
    <p>{{ doneTodoCountGetter }}</p>

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
    // 머스테치 안의 내용이 길어지면 computed를 통해서 출력해줄 수 있다
    count() {
      return this.$store.state.count;
    },
    output() {
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
