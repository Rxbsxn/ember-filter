import Ember from 'ember';
import layout from './template';

const { Component } = Ember;

export default Component.extend({
  layout,

  actions: {
    addStatus () {
      this.toggleProperty('isAdding');
    },

    addFilter () {},

    add (filter) {
      this.addFilter(filter);
      this.set('isAdding', false);
    }
  }
});
