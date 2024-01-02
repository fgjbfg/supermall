import { createStore } from 'vuex'
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export default createStore({
  state: {
    cartList: []
  },
  getters,
  mutations,
  actions,
  modules: {
  }
})
