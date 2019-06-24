import '/src/lit-elements/first-element.js';

export const LoopedData = {
  props: ['list'],
  template: '<ul>' +
    '<li v-for="item in list">\n' +
    '<first-element>{{ item.message }}</first-element>\n' +
    '  </li>' +
    '</ul>'
};
