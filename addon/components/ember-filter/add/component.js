import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  addFilter() {},

  actions: {
    addInfo() {
      this.set('isAdding', true);
    },

    add(filter) {
      this.addFilter(filter);
      this.set('isAdding', false);
    },
  },
});
