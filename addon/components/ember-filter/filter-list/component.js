import Ember from 'ember';
import layout from './template';

const { Component, computed } = Ember;

export default Component.extend({
  layout,

  currentFilters: computed('filters.@each.value', function() {
    return this.get('filters').filter((filter) => {
      return filter.value !== null;
    });
  }),

  removeFilter() {},

  actions: {
    removeFilter(filter) {
      this.removeFilter(filter);
    }
  }
});
