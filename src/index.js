import './lit-elements/first-element.js';
import './lit-elements/block-wrapper.js';
import {LoopedData} from './vue-elements/looped-data.js';
const testData = [
  {
    message: 'I am groot'
  },
  {
    message: 'hello'
  }
];
Vue.config.ignoredElements = [
  'first-element',
  'block-wrapper'
];
const app = new Vue({
  el: '#app',
  data: function() {
    return {
      message: 'Vue and litElement',
      listTest: testData
    };
  },
  components: {
    'looped-data': LoopedData
  }
});