import Ember from 'ember';
import layout from './template';

const { Component, computed } = Ember;

export default Component.extend({
  layout,

  currentFilters: computed('filters.@each.value', function() {
    if (this.get('filters') == undefined) {
      return 'Filters not found';
    } else {
      return this.get('filters').filter((filter) => {
        return filter.value !== null;
      });
    }
  }),

  actions: {
    removeFilter(filter) {
      this.removeFilter(filter);
    }
  },

  removeFilter() {}
});
