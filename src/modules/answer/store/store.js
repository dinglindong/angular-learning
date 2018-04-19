/**
 * Create By DingLindong on 2018/4/19
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import state from "./state.js";
import mutation from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default new Vuex.Store ({
    state,
    mutation,
    actions,
    getters,
})

