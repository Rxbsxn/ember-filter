import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  filters: null,
  sortField: null,
  sortBy: ['sortField:asc'],

  sortedFilters: computed.sort('filters', 'sortBy'),

  actions: {
    removeFilter(filter) {
      let filters = this.get('filters')
    }
  }
});
