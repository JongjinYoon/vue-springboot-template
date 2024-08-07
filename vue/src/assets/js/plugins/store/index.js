import { createStore, useStore as baseUseStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';


export default createStore({
  state() {
    return {
      sample: ""
    };
  },
  mutations: {
    setSample(state, sample) {
      state.sample = sample;
    }
  },
  getters: {
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, // session storage에 저장
      paths: ['sample']
    })
  ]
});

export const key = Symbol();
// vue 컴포넌트에서 store 내부의 state에 대한 타입을 추론하게 해준다.

export const useStore = () => {
  return baseUseStore(key);
};



 

  