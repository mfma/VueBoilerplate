import Vue from 'vue';

export function getNewsData (type, successCallback, errorCallback) {
  let url = 'http://toutiao-ali.juheapi.com/toutiao/index';
  let options = {
    params: {
      type: type
    },
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'APPCODE 73da6ecaeeaa41819c8926172edbab4a'
    }
  };
  Vue.http.get(url, options).then(response => {
    // noinspection JSUnresolvedVariable
    console.log('response=====', response.body.result.data);
    // noinspection JSUnresolvedVariable
    successCallback(response.body.result.data);
  }, response => {
    errorCallback(response);
  });
}
