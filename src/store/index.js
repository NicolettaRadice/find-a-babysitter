import { createStore } from "vuex";
import Module from "./modules/babysitters/index.js"
import ModuleRequest from "./modules/requests/index.js"

export default createStore({
  modules: {
    sitters: Module,
    requests: ModuleRequest
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});
