import Vuex from 'vuex';
import Vue from 'vue';
import recommend from 'store/modules/recommend';
import society from 'store/modules/society';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    recommend,
    society
  }
});
