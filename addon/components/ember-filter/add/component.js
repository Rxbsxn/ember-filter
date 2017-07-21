import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  addFilter() {},
  deleteFilter() {},

  actions: {
    addInfo() {
      this.toggleProperty('isAdding')
    },

    add(filter) {
      this.addFilter(filter);
    },

    filterDelete(filter) {
      this.deleteFilter(filter);
    },
  },
});
