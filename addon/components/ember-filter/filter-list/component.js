import Ember from 'ember';
import layout from './template';

const { Component } = Ember;

export default Component.extend({
  layout,
  filters: null,

  actions: {
    removeFilter(filter) {
      this.get('filters').removeObject(filter);
    }
  }
});
