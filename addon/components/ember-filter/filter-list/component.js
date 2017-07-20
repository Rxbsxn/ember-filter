import Ember from 'ember';
import layout from './template';

const { computed, Component } = Ember;

export default Component.extend({
  layout,
  filters: null,
  sortField: null,
  isAdding: false,

  sortSettings: computed('sortField', function() {
    return [ `${this.get('sortField')}:asc` ];
  }),
  sortedFilters: computed.sort('filters', 'sortSettings'),

  actions: {
    removeFilter(filter) {
      this.get('sortedFilters').removeObject(filter);
    },
    add() {
      this.set('isAdding', true);
    }
  }
});
