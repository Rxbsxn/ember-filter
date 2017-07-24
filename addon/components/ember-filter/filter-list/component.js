import Ember from 'ember';
import layout from './template';

const { Component } = Ember;

export default Component.extend({
  layout,

  removeFilter() {},

  actions: {
    removeFilter(filter) {
      this.removeFilter(filter);
    }
  }
});
