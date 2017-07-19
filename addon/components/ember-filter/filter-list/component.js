import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  filters: null,
  sortField: null,

  sortSettings: computed('sortField', function() {
    return [ `${this.get('sortField')}:asc` ];
  }),
  sortedFilters: computed.sort('filters', 'sortSettings'),

  actions: {
    removeFilter(filter) {
      this.get('sortedFilters').removeObject(filter);
    }
  }
});
