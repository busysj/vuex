import Vue from "vue";
import Vuex from "vuex";

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
  actions: {},
  modules: {},
});
