import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 컴포넌트의 data
    // 원하는 자료형들 사용 가능
    count: 0,
    list: [
      { id: 0, memo: "첫 번째 내용입니다" },
      { id: 1, memo: "두 번째 내용입니다" },
    ],
  },
  getters: {
    // 컴포넌트의 computed
    // 인수값으로 항상 state를 들고옴 : state 값 수정(계산)
    listReverse(state) {
      // 값을 내보내주기 위해 return 사용
      return state.list.reverse();
    },
  },
  mutations: {
    // 컴포넌트의 methods
    // 인수값으로 항상 state를 들고옴 : state 값 변형
    addcount(state) {
      // 실행 혹은 변경될 state 코드 작성
      state.count++;
    },
  },
  actions: {
    // mutations의 내용을 비동기적으로 사용
    // store의 내용을 들고 옴 (mutations사용을 위해) : context
    timecount(context, time) {
      setTimeout(function () {
        context.commit("addcount");
      }, time);
    },
  },
  modules: {},
});
