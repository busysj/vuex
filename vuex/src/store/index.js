import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./module/moduleA.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10,
    list: [
      { id: 1, memo: "a" },
      { id: 2, memo: "b" },
    ],
    name: ["홍길동", "성춘향", "그린"],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    doneTodosCountGetter(state) {
      // 동일한 형식으로 사용할 수 있다
      // filter( function(배열의 요소를 담는 변수) { return 참일 때 요소값을 배열에 추가 })
      return state.todos.filter((todo) => todo.done).length;
    },
    todosReverse(state) {
      return state.todos.reverse();
    },
    // todos의 id값을 통해 todo 객체 반환
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {
    // data의 methods와 비슷한 역할
    // 동기적으로 실행 : 반드시 앞의 명령어가 수행된 뒤에 실행 (순차적)
    addcount(state) {
      state.count++;
    },
    dimcount(state) {
      state.count--;
    },
    ncount(state, n) {
      state.count += n;
    },
  },
  actions: {
    // 비동기적으로 실행 : 동시에 실행 (따로 빠져나와서 실행)
    // 요청한 결과가 그 자리에서 주어지지 않음
    // : 동시에 실행되기 때문에 다른 작업이 실행되고 나중에 결과가 나올 수 있음
    addcount(context) {
      // mutations의 메소드를 들고와 상태변화(state)를 추적할 수 있다
      context.commit("addcount");
    },
    // 비동기로 실행
    timer(context) {
      setTimeout(function () {
        context.commit("addcount");
      }, 1000);
    },
    // 비동기로 실행 + 인자값 받아오기
    ntimer(context, time) {
      setTimeout(function () {
        // Mutations의 메소드를 commit할 때 인자값을 전달하고 싶다면
        // ,를 통해 값을 같이 보내준다
        context.commit("ncount", time.count);
      }, time.time);
    },
    timersecond(context) {
      setInterval(function () {
        context.commit("addcount");
      }, 1000);
    },
  },
  modules: {
    a: moduleA,
  },
});
