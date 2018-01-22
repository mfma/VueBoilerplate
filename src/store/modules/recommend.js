import * as HttpUtils from 'utils/http-utils';
import { GET_NEWS_TYPE } from 'constant/constant';

// noinspection JSUnusedGlobalSymbols
const recommend = {
  state: {
    data: null
  },
  getters: {
    getRecommend: state => state.data
  },
  mutations: {
    setData (state, data) {
      state.data = data;
    }
  },
  actions: {
    getData ({ commit }) {
      HttpUtils.getNewsData(GET_NEWS_TYPE.GET_RECOMMEND, function (data) {
        commit('setData', data);
      }, function () {

      });
    }
  }
};

export default recommend;
