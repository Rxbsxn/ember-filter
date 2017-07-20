import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  filters: null,

  addFilter() {},

  actions: {
    a() {
      this.toggleProperty('isAdding')
    },

    add(filter) {
      this.addFilter(filter);
    },

    selectValue(value) {
     alert(`Selected value is ${value}`)
    },
  },
});
