import Ember from 'ember';
import layout from './template';

const { Component } = Ember;

export default Component.extend({
  layout,

  addFilter () {},

  actions: {
    addStatus () {
      this.toggleProperty('isAdding');
    },

    add (filter) {
      this.addFilter(filter);
      this.set('isAdding', false);
    }
  }
});
